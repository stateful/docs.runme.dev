/**
 * Return a random integer between min/max values
 *
 * @param {Number} min Minimum number to generate
 * @param {Number} max Maximum number to generate
 * @author Tameem Safi <tamem@safi.me.uk>
 */
export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Add styles to document head
 *
 * @param {String} styles CSS styles to add
 * @returns {void}
 */
export const addStyles = (styles: string) => {
  const styleBlock = document.createElement('style')
  styleBlock.appendChild(document.createTextNode(styles))
  document.head.appendChild(styleBlock)
}

/**
 * Get the DOM element from a string
 * - Create temporary div element
 * - Change innerHTML of div element to the string
 * - Return the first child of the temporary div element
 *
 * @param {String} string String to convert into a DOM node
 *
 * @author Tameem Safi <tamem@safi.me.uk>
 */
export const getDOMElementFromString = (string: string) => {
  const div = document.createElement('div')
  div.innerHTML = string
  return div.childNodes
}

/**
 * Check if a string contains a HTML tag or not
 *
 * @param {String} string String to check for HTML tag
 * @return {Boolean} True|False
 *
 */
export const doesStringContainHTMLTag = (string: string) => {
  const regexp = new RegExp(/<[a-z][\s\S]*>/i)
  return regexp.test(string)
}
