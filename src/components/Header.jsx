import logoIcon from '../assets/logo-icon.png'

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <img src={logoIcon} alt="SpendSense logo" className="brand-icon" />
        <div className="brand-text">
          <h1 className="brand-name">
            <span className="brand-name-spend">Spend</span>
            <span className="brand-name-sense">Sense</span>
          </h1>
          <p className="brand-tagline">Financial intelligence. Smart spending.</p>
        </div>
      </div>
    </header>
  )
}
