'use client'

import React, { useState } from 'react'
import { Home, Code, Wand2, Heart, Download, Menu, Copy, Eye, HelpCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const components = [
  {
    id: 1,
    title: 'Dashboard Analytics',
    description: 'Template moderno de dashboard com gráficos interativos',
    category: 'components',
    preview: '/api/placeholder/800/600',
    bgColor: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
  },
  {
    id: 2,
    title: 'Efeito Glassmorphism',
    description: 'Componente com efeito de vidro fosco moderno',
    category: 'effects',
    preview: '/api/placeholder/800/600',
    bgColor: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 3,
    title: 'Cartões de Produto',
    description: 'Cards de e-commerce com micro-interações',
    category: 'components',
    preview: '/api/placeholder/800/600',
    bgColor: 'bg-gradient-to-br from-orange-500/20 to-red-500/20'
  },
  {
    id: 4,
    title: 'Formulário Multi-step',
    description: 'Form com validação e transições suaves',
    category: 'components',
    preview: '/api/placeholder/800/600',
    bgColor: 'bg-gradient-to-br from-pink-500/20 to-rose-500/20'
  },
  {
    id: 5,
    title: 'Parallax Moderno',
    description: 'Efeito parallax com performance otimizada',
    category: 'effects',
    preview: '/api/placeholder/800/600',
    bgColor: 'bg-gradient-to-br from-violet-500/20 to-indigo-500/20'
  }
]

const Card = ({ title, description, category, preview, bgColor }) => {
  return (
    <div className="h-full group relative bg-gray-800/40 rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:-translate-y-1">
      <div className={`aspect-video relative overflow-hidden ${bgColor}`}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            src={preview}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-white/10"></div>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors">
            <Copy className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors">
            <Eye className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-900/90 text-white hover:bg-gray-800 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-3 py-1 rounded-full ${
            category === 'components' 
              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
              : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
          }`}>
            {category === 'components' ? 'Componentes' : 'Efeitos'}
          </span>
        </div>
      </div>
    </div>
  )
}

const CodeLibrary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  const menuItems = [
    { icon: Home, label: 'Home', value: 'home' },
    { icon: Code, label: 'Componentes', value: 'components' },
    { icon: Wand2, label: 'Efeitos', value: 'effects' },
    { icon: Heart, label: 'Favoritos', value: 'favorites' },
    { icon: Download, label: 'Recursos', value: 'resources' }
  ]

  return (
    <div className="flex h-screen bg-gray-950">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarExpanded ? 'w-64' : 'w-20'
        } flex flex-col h-screen bg-gray-900/50 border-r border-gray-800/50 transition-all duration-300`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className={`flex items-center gap-3 ${!isSidebarExpanded && 'justify-center'}`}>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              {isSidebarExpanded && (
                <div>
                  <h1 className="font-semibold text-white">FastPage</h1>
                  <p className="text-xs text-gray-400">Componentes rápidos</p>
                </div>
              )}
            </div>
            <button 
              onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
              className="p-2 rounded-lg hover:bg-gray-800/50 text-gray-400"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.value}
                  onClick={() => setActiveCategory(item.value)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                    ${activeCategory === item.value 
                      ? 'bg-gray-800/50 text-white' 
                      : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-300'}
                    ${!isSidebarExpanded && 'justify-center'}`}
                >
                  <Icon className="w-5 h-5" />
                  {isSidebarExpanded && item.label}
                </button>
              )
            })}
          </nav>

          {isSidebarExpanded && (
            <>
              <div className="mt-8">
                <h2 className="text-xs font-semibold text-gray-400 px-3 mb-2">MEUS RECURSOS</h2>
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-blue-400 hover:bg-gray-800/30">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    Meus componentes
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-purple-400 hover:bg-gray-800/30">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    Meus efeitos
                  </button>
                </div>
              </div>

              <div className="mt-auto">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:bg-gray-800/30 rounded-lg">
                  <HelpCircle className="w-4 h-4" />
                  Suporte
                </button>
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-[2000px] mx-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white">Biblioteca de componentes</h2>
              <p className="text-gray-400 mt-1">O que você vai criar hoje?</p>
            </div>
            <Button 
  onClick={() => setIsModalOpen(true)}
  className="group relative bg-gray-950 text-white rounded-[12px] px-6 py-2.5 border border-[#2563eb] hover:border-[#2563eb]/30 transition-all duration-300 ease-in-out overflow-hidden"
>
  {/* Background com opacidade maior no estado inicial */}
  <span className="absolute inset-0 bg-[#2563eb]/20 group-hover:bg-[#2563eb]/10 transition-colors duration-300" />
  
  {/* Efeito de linha brilhante */}
  <span className="absolute -left-10 top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-30 group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
  
  {/* Conteúdo */}
  <span className="relative flex items-center gap-2">
    <span className="text-white group-hover:text-[#2563eb] transition-colors duration-300">+</span>
    Adicionar componente
  </span>
</Button>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {components.map((component) => (
              <Card key={component.id} {...component} />
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle>Adicionar componente</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Título identificador</label>
              <Input className="bg-gray-800" placeholder="Título do componente" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Descrição</label>
              <Textarea className="bg-gray-800" placeholder="Descrição do componente" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Categoria do componente</label>
              <Select>
                <SelectTrigger className="bg-gray-800">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="components">Componentes</SelectItem>
                  <SelectItem value="effects">Efeitos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Código JSON</label>
              <Textarea className="bg-gray-800 font-mono text-sm" rows={6} placeholder="Código JSON" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Imagem do componente</label>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <Button variant="outline" size="sm">Escolher arquivo</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CodeLibrary