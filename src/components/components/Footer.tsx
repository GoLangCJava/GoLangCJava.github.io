import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2026 Clawdbot AI. Built with ❤️ using Vite + React.
        </p>
        <div className="footer-links">
          <a href="https://github.com" className="footer-link">
            <svg className="footer-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 0c-6.626 0-12 5.373-12 12 12h424c6.627 0 12-5.373 12-12v32c0 6.627-5.373 12-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12 12z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
          <a href="https://docs.clawdbot.com" className="footer-link">
            📚 文档
          </a>
          <a href="https://feishu.im" className="footer-link">
            💬 飞书
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
