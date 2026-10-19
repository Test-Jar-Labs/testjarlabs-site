// Test Jar Labs flask mark, redrawn as SVG from the branding guide.
export default function Logo({ className, animated = false }) {
  return (
    <svg className={className} viewBox="160 20 380 530" role="img" aria-label="Test Jar Labs logo">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M280 46h134" strokeWidth="40" />
        <path d="M350 60v345" strokeWidth="46" />
        <path d="M282 292v58l-84 128q-14 34 24 34h256q38 0 24-34l-84-128V115" strokeWidth="38" />
      </g>
      <path
        className={animated ? 'liquid' : undefined}
        fill="currentColor"
        d="M206 474c44-26 98-20 138-12 40 9 70 12 98-24l70 74H188z"
      />
    </svg>
  )
}
