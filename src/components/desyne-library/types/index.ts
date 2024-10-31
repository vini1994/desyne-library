import { LucideIcon } from 'lucide-react'

export interface ComponentData {
  id: number
  title: string
  description: string
  category: 'components' | 'effects'
  preview: string
  bgColor: string
}

export interface MenuItem {
  icon: LucideIcon
  label: string
  value: string
}