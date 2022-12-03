/**
 * Code and imported local modules were imported from https://github.com/tameemsafi/typewriterjs
 * and rewritten into TypeScript.
 */
import raf, { cancel as cancelRaf } from './raf'
import {
  doesStringContainHTMLTag,
  getDOMElementFromString,
  getRandomInteger,
  addStyles,
} from './Typewriter/utils'
import {
  EVENT_NAMES,
  VISIBLE_NODE_TYPES,
  STYLES,
} from './Typewriter/constants'

declare global {
  interface Window { ___TYPEWRITER_JS_STYLES_ADDED___: boolean; }
}

type Speed = 'natural' | number

interface Options {
  strings: null | string[]
  cursor: string
  delay: Speed
  pauseFor: number
  deleteSpeed: Speed
  loop: boolean
  autoStart: boolean
  devMode: boolean
  skipAddStyles: boolean
  wrapperClassName: string
  cursorClassName: string
  stringSplitter: null | ((param: string) => string[])
  onCreateTextNode: null | ((character: string, textNode: Text) => Text)
  onRemoveNode: null | ((params: Partial<TextNode>) => unknown)
}

interface TextNode {
  type: string
  character?: string
  node: Element
}

interface Elements {
  container?: Element,
  wrapper: Element,
  cursor: Element,
}

interface Event {
  eventName: string,
  eventArgs: EventArgs
}

type EventArgs = Partial<TextNode> & Partial<Options> & {
  removingCharacterNode?: boolean
  ms?: string | number
  speed?: number
  temp?: unknown
  delay?: Speed
  parentNode?: Element
  elements?: Elements
  cb?: (params: { elements: Elements }) => unknown
  thisArg?: Typewriter
}

export default class Typewriter {
  lastFrameTime?: number
  pauseUntil?: number
  eventQueue: Event[] = []
  eventLoop?: number
  eventLoopPaused = false
  reverseCalledEvents: unknown[] = []
  calledEvents: Event[] = []
  visibleNodes: Partial<TextNode>[] = []
  initialOptions: Options
  elements: Elements = {
    wrapper: document.createElement('span'),
    cursor: document.createElement('span'),
  }

  options: Options = {
    strings: null,
    cursor: '|',
    delay: 'natural',
    pauseFor: 1500,
    deleteSpeed: 'natural',
    loop: false,
    autoStart: false,
    devMode: false,
    skipAddStyles: false,
    wrapperClassName: 'Typewriter__wrapper',
    cursorClassName: 'Typewriter__cursor',
    stringSplitter: null,
    onCreateTextNode: null,
    onRemoveNode: null,
  }

  constructor(container: Element, options: Partial<Options>) {
    if (container) {
      if (typeof container === 'string') {
        const containerElement = document.querySelector(container)

        if (!containerElement) {
          throw new Error('Could not find container element')
        }

        this.elements.container = containerElement
      } else {
        this.elements.container = container
      }
    }

    if (options) {
      this.options = {
        ...this.options,
        ...options
      }
    }

    // Make a copy of the options used to reset options when looping
    this.initialOptions = { ...this.options }

    this.init()
  }

  init() {
    this.setupWrapperElement()
    this.addEventToQueue(EVENT_NAMES.CHANGE_CURSOR, { cursor: this.options.cursor }, true)
    this.addEventToQueue(EVENT_NAMES.REMOVE_ALL, {}, true)

    if (window && !window.___TYPEWRITER_JS_STYLES_ADDED___ && !this.options.skipAddStyles) {
      addStyles(STYLES)
      window.___TYPEWRITER_JS_STYLES_ADDED___ = true
    }

    if (this.options.autoStart === true) {
      this.typeOutAllStrings().start()
    }
  }

  /**
   * Replace all child nodes of provided element with
   * state wrapper element used for typewriter effect
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  setupWrapperElement = () => {
    if (!this.elements.container) {
      return
    }

    (this.elements.wrapper as Element).className = this.options.wrapperClassName
    this.elements.cursor.className = this.options.cursorClassName

    this.elements.cursor.innerHTML = this.options.cursor
    this.pauseUntil = Date.now() + 1500
    this.elements.container.innerHTML.split('').forEach((character) => {
      // deno-lint-ignore no-explicit-any
      const node = new Text(character) as any as Element
      this.elements.wrapper.appendChild(node)
      this.eventQueue.push({
        eventName: EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,
        eventArgs: { removingCharacterNode: false },
      })
      this.visibleNodes.push({
        type: VISIBLE_NODE_TYPES.TEXT_NODE,
        node,
        character
      })
    })
    this.elements.container.innerHTML = ''

    this.elements.container.appendChild(this.elements.wrapper)
    this.elements.container.appendChild(this.elements.cursor)
  }

  /**
   * Start typewriter effect
   */
  start = () => {
    this.eventLoopPaused = false
    this.runEventLoop()

    return this
  }

  /**
   * Pause the event loop
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  pause = () => {
    this.eventLoopPaused = true

    return this
  }

  /**
   * Destroy current running instance
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  stop = () => {
    if (this.eventLoop) {
      cancelRaf(this.eventLoop)
      delete this.eventLoop
    }

    return this
  }

  /**
   * Add pause event to queue for ms provided
   *
   * @param {Number} ms Time in ms to pause for
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  pauseFor = (ms: number) => {
    this.addEventToQueue(EVENT_NAMES.PAUSE_FOR, { ms })

    return this
  }

  /**
   * Start typewriter effect by typing
   * out all strings provided
   *
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  typeOutAllStrings = () => {
    if (typeof this.options.strings === 'string') {
      this.typeString(this.options.strings)
        .pauseFor(this.options.pauseFor)
      return this
    }

    this.options.strings?.forEach(string => {
      this.typeString(string)
        .pauseFor(this.options.pauseFor)
        .deleteAll(this.options.deleteSpeed as number)
    })

    return this
  }

  /**
   * Adds string characters to event queue for typing
   *
   * @param {String} string String to type
   * @param {HTMLElement} node Node to add character inside of
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  typeString = (string: string, node?: Element) => {
    if (doesStringContainHTMLTag(string)) {
      return this.typeOutHTMLString(string, node)
    }

    if (string) {
      const { stringSplitter } = this.options || {}
      const characters = typeof stringSplitter === 'function' ? stringSplitter(string) : string.split('')
      this.typeCharacters(characters, node)
    }

    return this
  }

  /**
   * Adds entire strings to event queue for paste effect
   *
   * @param {String} string String to paste
   * @param {HTMLElement} node Node to add string inside of
   * @return {Typewriter}
   *
   * @author Luiz Felicio <unifelicio@gmail.com>
   */
  pasteString = (string: string, node?: Element) => {
    if (doesStringContainHTMLTag(string)) {
      return this.typeOutHTMLString(string, node, true)
    }

    if (string) {
      this.addEventToQueue(EVENT_NAMES.PASTE_STRING, { character: string, node })
    }

    return this
  }

  /**
   * Type out a string which is wrapper around HTML tag
   *
   * @param {String} string String to type
   * @param {HTMLElement} parentNode Node to add inner nodes to
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  typeOutHTMLString = (string: string, parentNode?: Element, pasteEffect?: unknown) => {
    const childNodes = getDOMElementFromString(string)

    if (childNodes.length > 0) {
      for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i] as Element
        const nodeHTML = node.innerHTML

        if (node && node.nodeType !== 3) {
          // Reset innerText of HTML element
          node.innerHTML = ''

          // Add event queue item to insert HTML tag before typing characters
          this.addEventToQueue(EVENT_NAMES.ADD_HTML_TAG_ELEMENT, {
            node,
            parentNode,
          })

          pasteEffect ? this.pasteString(nodeHTML, node) : this.typeString(nodeHTML, node)
        } else {
          if (node.textContent) {
            pasteEffect ? this.pasteString(node.textContent, parentNode) : this.typeString(node.textContent, parentNode)
          }
        }
      }
    }

    return this
  }

  /**
   * Add delete all characters to event queue
   *
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  deleteAll = (speed: number) => {
    this.addEventToQueue(EVENT_NAMES.REMOVE_ALL, { speed })
    return this
  }

  /**
   * Change delete speed
   *
   * @param {Number} speed Speed to use for deleting characters
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  changeDeleteSpeed = (speed: number) => {
    if (!speed) {
      throw new Error('Must provide new delete speed')
    }

    this.addEventToQueue(EVENT_NAMES.CHANGE_DELETE_SPEED, { speed })

    return this
  }

  /**
   * Change delay when typing
   *
   * @param {Number} delay Delay when typing out characters
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  changeDelay = (delay: Speed) => {
    if (!delay) {
      throw new Error('Must provide new delay')
    }

    this.addEventToQueue(EVENT_NAMES.CHANGE_DELAY, { delay })

    return this
  }

  /**
   * Change cursor
   *
   * @param {String} character/string to represent as cursor
   * @return {Typewriter}
   *
   * @author Y.Paing <ye@y3p.io>
   */
  changeCursor = (cursor: string) => {
    if (!cursor) {
      throw new Error('Must provide new cursor')
    }

    this.addEventToQueue(EVENT_NAMES.CHANGE_CURSOR, { cursor })

    return this
  }

  /**
   * Add delete character to event queue for amount of characters provided
   *
   * @param {Number} amount Number of characters to remove
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  deleteChars = (amount: number) => {
    if (!amount) {
      throw new Error('Must provide amount of characters to delete')
    }

    for (let i = 0; i < amount; i++) {
      this.addEventToQueue(EVENT_NAMES.REMOVE_CHARACTER, {})
    }

    return this
  }

  /**
   * Add an event item to call a callback function
   *
   * @param {cb}      cb        Callback function to call
   * @param {Object}  thisArg   thisArg to use when calling function
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  callFunction = (cb: () => unknown, thisArg: this) => {
    if (!cb || typeof cb !== 'function') {
      throw new Error('Callbak must be a function')
    }

    this.addEventToQueue(EVENT_NAMES.CALL_FUNCTION, { cb, thisArg })

    return this
  }

  /**
   * Add type character event for each character
   *
   * @param {Array} characters Array of characters
   * @param {HTMLElement} node Node to add character inside of
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  typeCharacters = (characters: string[], node?: Element) => {
    if (!characters || !Array.isArray(characters)) {
      throw new Error('Characters must be an array')
    }

    characters.forEach(character => {
      this.addEventToQueue(EVENT_NAMES.TYPE_CHARACTER, { character, node })
    })

    return this
  }

  /**
   * Add remove character event for each character
   *
   * @param {Array} characters Array of characters
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  removeCharacters = (characters: string[]) => {
    if (!characters || !Array.isArray(characters)) {
      throw new Error('Characters must be an array')
    }

    characters.forEach(() => {
      this.addEventToQueue(EVENT_NAMES.REMOVE_CHARACTER, {})
    })

    return this
  }

  /**
   * Add an event to the event queue
   *
   * @param {String}  eventName Name of the event
   * @param {Object}  eventArgs Arguments to pass to event callback
   * @param {Boolean} prepend   Prepend to begining of event queue
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  addEventToQueue = (eventName: string, eventArgs: EventArgs, prepend = false) => {
    return this.addEventToStateProperty(
      eventName,
      eventArgs,
      prepend,
      'eventQueue'
    )
  }

  /**
   * Add an event to reverse called events used for looping
   *
   * @param {String}  eventName Name of the event
   * @param {Object}  eventArgs Arguments to pass to event callback
   * @param {Boolean} prepend   Prepend to begining of event queue
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  addReverseCalledEvent = (eventName: string, eventArgs: EventArgs, prepend = false) => {
    const { loop } = this.options

    if (!loop) {
      return this
    }

    return this.addEventToStateProperty(
      eventName,
      eventArgs,
      prepend,
      'reverseCalledEvents'
    )
  }

  /**
   * Add an event to correct state property
   *
   * @param {String}  eventName Name of the event
   * @param {Object}  eventArgs Arguments to pass to event callback
   * @param {Boolean} prepend   Prepend to begining of event queue
   * @param {String}  property  Property name of state object
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  addEventToStateProperty = (eventName: string, eventArgs: EventArgs, prepend = false, property: keyof this) => {
    const eventItem = {
      eventName,
      eventArgs: eventArgs || {},
    }

    if (prepend) {
      this[property] = [
        eventItem,
        ...(this[property] as Array<unknown>),
      // deno-lint-ignore no-explicit-any
      ] as any
    } else {
      this[property] = [
        ...(this[property] as Array<unknown>),
        eventItem,
      // deno-lint-ignore no-explicit-any
      ] as any
    }

    return this
  }

  /**
   * Run the event loop and do anything inside of the queue
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  runEventLoop = () => {
    if (!this.lastFrameTime) {
      this.lastFrameTime = Date.now()
    }

    // Setup variables to calculate if this frame should run
    const nowTime = Date.now()
    const delta = nowTime - this.lastFrameTime

    if (!this.eventQueue.length) {
      if (!this.options.loop) {
        return
      }

      // Reset event queue if we are looping
      this.eventQueue = [...this.calledEvents]
      this.calledEvents = []
      this.options = { ...this.initialOptions }
    }

    // Request next frame
    this.eventLoop = raf(this.runEventLoop)

    // Check if event loop is paused
    if (this.eventLoopPaused) {
      return
    }

    // Check if state has pause until time
    if (this.pauseUntil) {
      // Check if event loop should be paused
      if (nowTime < this.pauseUntil) {
        return
      }

      // Reset pause time
      delete this.pauseUntil
    }

    // Make a clone of event queue
    const eventQueue = [...this.eventQueue]

    // Get first event from queue
    const currentEvent = eventQueue.shift()

    // Setup delay variable
    let delay = 0

    // Check if frame should run or be
    // skipped based on fps interval
    if (
      currentEvent &&
      (
        currentEvent.eventName === EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE ||
        currentEvent.eventName === EVENT_NAMES.REMOVE_CHARACTER
      )
    ) {
      delay = this.options.deleteSpeed === 'natural' ? getRandomInteger(40, 80) : this.options.deleteSpeed
    } else {
      delay = this.options.delay === 'natural' ? getRandomInteger(120, 160) : this.options.delay
    }

    if (!currentEvent || delta <= delay) {
      return
    }

    // Get current event args
    const { eventName, eventArgs } = currentEvent || {}

    this.logInDevMode({ currentEvent, delay })

    // Run item from event loop
    switch (eventName) {
      case EVENT_NAMES.PASTE_STRING:
      case EVENT_NAMES.TYPE_CHARACTER: {
        const { character, node } = eventArgs
        const textNode = document.createTextNode(character || '')

        let textNodeToUse = textNode

        if (character && textNode && this.options.onCreateTextNode && typeof this.options.onCreateTextNode === 'function') {
          textNodeToUse = this.options.onCreateTextNode(character, textNode)
        }

        if (textNodeToUse) {
          if (node) {
            node.appendChild(textNodeToUse)
          } else {
            this.elements.wrapper.appendChild(textNodeToUse)
          }
        }

        this.visibleNodes = [
          // deno-lint-ignore no-explicit-any
          ...(this.visibleNodes as any[]),
          {
            type: VISIBLE_NODE_TYPES.TEXT_NODE,
            character,
            node: textNodeToUse,
          },
        ]

        break
      }

      case EVENT_NAMES.REMOVE_CHARACTER: {
        eventQueue.unshift({
          eventName: EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,
          eventArgs: { removingCharacterNode: true },
        })
        break
      }

      case EVENT_NAMES.PAUSE_FOR: {
        const { ms } = currentEvent.eventArgs
        this.pauseUntil = Date.now() + (ms ? parseInt(ms as string) : 0)
        break
      }

      case EVENT_NAMES.CALL_FUNCTION: {
        const { cb, thisArg } = currentEvent.eventArgs

        cb?.call(thisArg, {
          elements: this.elements,
        })

        break
      }

      case EVENT_NAMES.ADD_HTML_TAG_ELEMENT: {
        const { node, parentNode } = currentEvent.eventArgs

        if (!parentNode) {
          this.elements.wrapper.appendChild(node as Element)
        } else {
          parentNode.appendChild(node as Element)
        }

        this.visibleNodes = [
          ...this.visibleNodes,
          {
            type: VISIBLE_NODE_TYPES.HTML_TAG,
            node,
            // @ts-expect-error type pronlem
            parentNode: parentNode || this.elements.wrapper,
          },
        ]
        break
      }

      case EVENT_NAMES.REMOVE_ALL: {
        const { visibleNodes } = this
        //console.log(222, visibleNodes)

        const { speed } = eventArgs
        const removeAllEventItems = []

        // Change speed before deleteing
        if (speed) {
          removeAllEventItems.push({
            eventName: EVENT_NAMES.CHANGE_DELETE_SPEED,
            eventArgs: { speed, temp: true },
          })
        }

        for (let i = 0, length = visibleNodes.length; i < length; i++) {
          removeAllEventItems.push({
            eventName: EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,
            eventArgs: { removingCharacterNode: false },
          })
        }

        // Change speed back to normal after deleteing
        if (speed) {
          removeAllEventItems.push({
            eventName: EVENT_NAMES.CHANGE_DELETE_SPEED,
            eventArgs: { speed: this.options.deleteSpeed, temp: true },
          })
        }

        // deno-lint-ignore no-explicit-any
        eventQueue.unshift(...(removeAllEventItems as any))

        break
      }

      case EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE: {
        const { removingCharacterNode } = currentEvent.eventArgs

        if (this.visibleNodes.length) {
          const { type, node, character } = this.visibleNodes.pop() || {}

          if (this.options.onRemoveNode && typeof this.options.onRemoveNode === 'function') {
            this.options.onRemoveNode({
              node,
              character,
            })
          }

          if (node) {
            node.parentNode?.removeChild(node)
          }

          // Remove extra node as current deleted one is just an empty wrapper node
          if (type === VISIBLE_NODE_TYPES.HTML_TAG && removingCharacterNode) {
            eventQueue.unshift({
              eventName: EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,
              eventArgs: {},
            })
          }
        }
        break
      }

      case EVENT_NAMES.CHANGE_DELETE_SPEED: {
        this.options.deleteSpeed = currentEvent.eventArgs.speed as number
        break
      }

      case EVENT_NAMES.CHANGE_DELAY: {
        this.options.delay = currentEvent.eventArgs.delay as Speed
        break
      }

      case EVENT_NAMES.CHANGE_CURSOR: {
        this.options.cursor = currentEvent.eventArgs.cursor as string
        this.elements.cursor.innerHTML = currentEvent.eventArgs.cursor as string
        break
      }

      default: {
        break
      }
    }

    // Add que item to called queue if we are looping
    if (this.options.loop) {
      if (
        currentEvent.eventName !== EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE &&
        !(currentEvent.eventArgs && currentEvent.eventArgs.temp)
      ) {
        this.calledEvents = [
          ...this.calledEvents,
          currentEvent
        ]
      }
    }

    // Replace state event queue with cloned queue
    this.eventQueue = eventQueue

    // Set last frame time so it can be used to calculate next frame
    this.lastFrameTime = nowTime
  }

  /**
   * Log a message in development mode
   *
   * @param {Mixed} message Message or item to console.log
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  logInDevMode(message: unknown) {
    if (this.options.devMode) {
      console.log(message)
    }
  }
}
