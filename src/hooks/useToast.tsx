import React, { useState } from 'react';
export const useToast = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({
      message,
      type
    });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };
  return {
    toast,
    showToast,
    hideToast: () => setToast(null)
  };
};