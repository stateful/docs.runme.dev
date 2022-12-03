import React, { useRef, useEffect } from 'react'
import TypeWriterPlugin from '@site/third_party/Typewriter'

export interface TypeWriterProps {
  // deno-lint-ignore no-explicit-any
  sequence: any[]
}

export default function TypeWriter (props: TypeWriterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!ref.current) {
      return
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
    '-webkit-animation': 'Typewriter-cursor 1s infinite',
    animation: 'Typewriter-cursor 1s infinite',
    'margin-left': '1px'
  }

  return (
    <>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A38CF0] to-[#C83D79]" ref={ref}>
        Readme.md
      </span>
      <span style={cursorStyle}>|</span>
    </>
  )
}
