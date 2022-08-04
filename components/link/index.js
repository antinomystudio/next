import NextLink from 'next/link'

export function Link({ href, children, className, ...rest }) {
  if (typeof href === 'string' && href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} scroll={false} {...rest}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}
