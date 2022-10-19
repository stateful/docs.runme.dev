import { useRef, useEffect } from 'preact/hooks'
import * as TypewriterPlugin from 'https://unpkg.com/typewriter-effect@latest/dist/core.js'

export interface TypeWriterProps {
  // deno-lint-ignore no-explicit-any
  sequence: any[]
}

export default function TypeWriter (props: TypeWriterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const typewriter = new TypewriterPlugin.default(ref.current, {
      loop: true,
      delay: 75,
      autoStart: true,
      strings: ['Readme.md']
    });

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
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A38CF0] to-[#C83D79]" ref={ref} />
      <span style={cursorStyle}>|</span>
    </>
  )
}
