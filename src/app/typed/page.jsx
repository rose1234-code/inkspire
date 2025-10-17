'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
export default function TypedText() {
  const typedRef = useRef(null)
  const typedInstance = useRef(null)

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        'Lorem 👋ipsum dolor sit amet consectetu repudiandae veritatis illo odio animi. Iste dolor ipsum atque fuga.⌨️'
      ],
      typeSpeed: 80,      // vitesse de frappe
      backSpeed: 0,       // pas de suppression
      loop: false,        // ne pas recommencer
      showCursor: false,  // pas de curseur clignotant
      fadeOut: false,     // pas d'effet de fondu
    })

    // nettoyage
    return () => {
      typedInstance.current.destroy()
    }
  }, [])

   return <span ref={typedRef} className="text-white"></span>
}
