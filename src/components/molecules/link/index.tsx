import NextLink from 'next/link'
import type { ReactNode } from 'react'
import React from 'react'

export interface LinkProperties {
  children: ReactNode
  href?: string
  id?: string
}

const Link: React.FC<LinkProperties> = properties => {
  const { children, href, id } = properties
  if (!href) {
    return <a>{children}</a>
  }
  return href.startsWith('/') || href === '' ? (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  ) : href.startsWith('#user-content') ? (
    <a href={href} id={id} data-footnote-ref aria-describedby="footnote-label">
      {children}
    </a>
  ) : href.startsWith('#') ? (
    <a href={href} id={id}>
      {children}
    </a>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export { Link }
