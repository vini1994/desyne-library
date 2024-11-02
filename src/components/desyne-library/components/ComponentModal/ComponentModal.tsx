// src/components/desyne-library/components/ComponentModal/ComponentModal.tsx
'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface ComponentModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ComponentModal: React.FC<ComponentModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle>Adicionar componente</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">
              Título identificador
            </label>
            <Input 
              className="bg-gray-800" 
              placeholder="Título do componente"
              required 
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1 block">
              Descrição
            </label>
            <Textarea 
              className="bg-gray-800" 
              placeholder="Descrição do componente"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1 block">
              Categoria do componente
            </label>
            <Select required>
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
            <label className="text-sm font-medium mb-1 block">
              Código JSON
            </label>
            <Textarea 
              className="bg-gray-800 font-mono text-sm" 
              rows={6} 
              placeholder="Código JSON"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1 block">
              Imagem do componente
            </label>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <Button variant="outline" size="sm" type="button">
                Escolher arquivo
              </Button>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit">
              Salvar componente
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ComponentModal;