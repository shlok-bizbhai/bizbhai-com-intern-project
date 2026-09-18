/**
 * BizBhAI wordmark with a small connected-nodes mark that echoes the
 * "website + Google + WhatsApp" ecosystem the product ties together.
 */
function Logo({ tone = 'dark', className = '' }) {
  const textColor = tone === 'dark' ? 'text-navy-950' : 'text-white'

  return (
    <a
      href="#home"
      className={`flex items-center gap-2 text-[19px] font-extrabold tracking-tight ${textColor} ${className}`}
    >
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#0B1B33" />
        <circle cx="10" cy="21" r="2.6" fill="#45CFE6" />
        <circle cx="22" cy="21" r="2.6" fill="#45CFE6" />
        <circle cx="16" cy="10" r="2.6" fill="#2E7DF5" />
        <path
          d="M10 21L16 10M16 10L22 21M10 21H22"
          stroke="#E7F3FC"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      BizBhAI
    </a>
  )
}

export default Logo
