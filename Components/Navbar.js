import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
  <>
  <div>
  <ul>
      <li><Link href="/"><a>Home </a></Link></li>
      <li><Link href="/about"><a>about </a></Link></li>
      <li><Link href="/contact"><a>contact</a></Link></li>
      <li><Link href="/documents"><a>documents</a></Link></li>
    
  </ul>
  </div>
  </>
    

  )
}
