import React, { useRef, useEffect } from 'react'
import TypeWriterPlugin from '@site/third_party/Typewriter'

export interface TypeWriterProps {
  // deno-lint-ignore no-explicit-any
  sequence: any[]
}

const DEFAULT_TEXT = 'Readme.md'

export default function TypeWriter (props: TypeWriterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!ref.current) {
      return
    }

    if (ref.current.childElementCount) {
      ref.current.innerHTML = DEFAULT_TEXT
    }

    const typewriter = new TypeWriterPlugin(ref.current, {
      loop: true,
      delay: 75,
      autoStart: true,
    })

    for (const [method, args] of props.sequence) {
      typewriter[method](args)
    }

    ref.current?.querySelector('.Typewriter__cursor')?.remove()
  })
  const cursorStyle = {
    'WebkitAnimation': 'Typewriter-cursor 1s infinite',
    animation: 'Typewriter-cursor 1s infinite',
    'marginLeft': '1px'
  }

  return (
    <>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A38CF0] to-[#C83D79]" ref={ref}>
        {DEFAULT_TEXT}
      </span>
      <span style={cursorStyle}>|</span>
    </>
  )
}
