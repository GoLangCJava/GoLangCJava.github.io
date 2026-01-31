/**
 * 全局类型定义
 */

// 组件 Props 类型
export interface NavbarProps {
  darkMode?: boolean
  toggleDarkMode: () => void
  toggleSidebar: () => void
}

export interface SidebarProps {
  isOpen: boolean
}

export interface MainContentProps {
  darkMode?: boolean
}

// 数据类型
export interface Feature {
  icon: string
  title: string
  description: string
}

export interface QuickLink {
  title: string
  href: string
}

export interface Platform {
  icon: string
  title: string
  description: string
}

export interface Step {
  title: string
  description: string
}

// 导航菜单项类型
export interface MenuItem {
  id: string
  label: string
  icon: string
  href: string
}

// 主题类型
export type Theme = 'light' | 'dark'

// 侧边栏状态
export type SidebarState = 'open' | 'closed'
