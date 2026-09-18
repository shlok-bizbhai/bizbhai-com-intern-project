const VARIANT_STYLES = {
  'primary-light':
    'bg-accent text-white hover:bg-accent-dark shadow-[0_10px_24px_-10px_rgba(46,125,245,0.55)]',
  'secondary-light':
    'border border-line text-ink bg-white hover:border-navy-900 hover:bg-surface',
  'primary-dark': 'bg-white text-navy-950 hover:bg-surface',
  'secondary-dark':
    'border border-white/25 text-white hover:border-white/60 hover:bg-white/5',
}

/**
 * Shared CTA button used across the page.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 *
 * @param {'primary'|'secondary'} variant
 * @param {'light'|'dark'} tone - which background the button sits on
 */
function Button({
  children,
  href,
  variant = 'primary',
  tone = 'light',
  className = '',
  icon: Icon,
  ...props
}) {
  const styles = VARIANT_STYLES[`${variant}-${tone}`] ?? VARIANT_STYLES['primary-light']

  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${styles} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
    </button>
  )
}

export default Button
