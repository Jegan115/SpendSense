// A quiet echo of the logo's orbiting swoosh, used once, behind the
// balance figure. This is the one place the design spends its boldness.
export default function OrbitArc() {
  return (
    <svg
      className="orbit-arc"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#11ADA0" />
          <stop offset="100%" stopColor="#DC1D86" />
        </linearGradient>
      </defs>
      <path
        d="M 170 100 A 70 70 0 1 1 130 38"
        stroke="url(#orbitGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 118 30 L 130 38 L 138 26"
        stroke="url(#orbitGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
