import React from 'react'
import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <div>
      <AnimatedCursor
      innerSize={16}
      outerSize={16}
      color='255, 0, 0'
      outerAlpha={0.2}
      innerScale={1}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  )
}
