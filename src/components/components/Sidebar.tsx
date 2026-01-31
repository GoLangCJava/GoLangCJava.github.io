import './Sidebar.css'

interface SidebarProps {
  isOpen: boolean
}

function Sidebar({ isOpen }: SidebarProps) {
  const menuItems = [
    { icon: '🏠', label: '首页', href: '#home' },
    { icon: '✨', label: '特性', href: '#features' },
    { icon: '🚀', label: '平台', href: '#platforms' },
    { icon: '📚', label: '文档', href: '#docs' },
    { icon: '⚙️', label: '设置', href: '#settings' },
  ]

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="sidebar-menu-item">
                <a href={item.href} className="sidebar-menu-link">
                  <span className="sidebar-menu-icon">{item.icon}</span>
                  <span className="sidebar-menu-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
