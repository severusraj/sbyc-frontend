import React from 'react';
import { X } from 'lucide-react';
interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}
export const Toast = ({
  message,
  type,
  onClose
}: ToastProps) => {
  return <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={`rounded-lg shadow-lg p-4 flex items-center space-x-4 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white min-w-[300px]`}>
        <p className="flex-1">{message}</p>
        <button onClick={onClose} className="text-white hover:text-white/80">
          <X size={18} />
        </button>
      </div>
    </div>;
};