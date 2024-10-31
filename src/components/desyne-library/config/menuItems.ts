import { Home, Code, Wand2, Heart, Download } from 'lucide-react'
import { MenuItem } from '../types'

export const menuItems: MenuItem[] = [
  { icon: Home, label: 'Home', value: 'home' },
  { icon: Code, label: 'Componentes', value: 'components' },
  { icon: Wand2, label: 'Efeitos', value: 'effects' },
  { icon: Heart, label: 'Favoritos', value: 'favorites' },
  { icon: Download, label: 'Recursos', value: 'resources' }
]