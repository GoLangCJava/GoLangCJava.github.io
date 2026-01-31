import './Navbar.css'

interface NavbarProps {
  darkMode: 'light' | 'dark'
  toggleDarkMode: () => void
  toggleSidebar: () => void
}

function Navbar({ darkMode, toggleDarkMode, toggleSidebar }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="navbar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="navbar-brand">
          <span className="navbar-icon">🤖</span>
          <span className="navbar-title">Clawdbot AI</span>
        </div>
        <div className="navbar-actions">
          <button 
            className="navbar-theme-toggle" 
            onClick={toggleDarkMode}
            aria-label="切换主题"
          >
            {darkMode === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
