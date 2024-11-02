// src/components/desyne-library/config/menuItems.ts
import { Home, Code, Wand2, Heart } from 'lucide-react'
import { MenuItem } from '../types'

export const menuItems: MenuItem[] = [
  { icon: Home, label: 'Home', value: 'home' },
  { icon: Code, label: 'Componentes', value: 'components' },
  { icon: Wand2, label: 'Efeitos', value: 'effects' },
  { icon: Heart, label: 'Favoritos', value: 'favorites' }
]