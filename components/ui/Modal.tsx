import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div className="bg-neutral-950 rounded-xl p-6 w-full max-w-5xl mx-4 min-h-[20rem] relative" onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 text-neutral-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}



