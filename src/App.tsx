import { useState, useEffect, useCallback } from 'react'

// 导入各个组件
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

import './styles/index.css'

/**
 * 主应用组件
 * 优化版本：修复 TypeScript 编译错误
 */
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState<'light' | 'dark'>('light')

  // 使用 useCallback 优化回调函数
  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev)
  }, [])

  // 处理深色模式持久化
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setDarkMode(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  // 切换深色模式
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => {
      const newMode = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newMode)
      document.documentElement.classList.toggle('dark', newMode === 'dark')
      return newMode
    })
  }, [])

  return (
    <div className={`app ${darkMode === 'dark' ? 'dark' : ''}`}>
      {/* 顶部导航栏 */}
      <Navbar 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSidebar}
      />

      <div className="main-wrapper">
        {/* 左侧边栏 */}
        <Sidebar isOpen={sidebarOpen} />

        {/* 主内容区域 */}
        <div className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
          <MainContent />
        </div>

        {/* 右侧边栏 - 快速导航 */}
        <aside className="right-sidebar">
          <div className="right-sidebar-content">
            <h3>快速导航</h3>
            <nav>
              <a href="#home">首页</a>
              <a href="#features">特性</a>
              <a href="#docs">文档</a>
            </nav>
          </div>
        </aside>
      </div>

      {/* 页脚 */}
      <Footer />
    </div>
  )
}

export default App
