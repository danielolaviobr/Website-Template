import React, { createContext, useCallback, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import Toast from "../components/Toast";

interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  message: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ message }: Omit<ToastMessage, "id">) => {
      const id = uuid();

      const toast = { id, message };

      setToastMessages([...toastMessages, toast]);
    },
    [toastMessages]
  );

  const removeToast = useCallback((id: string) => {
    setToastMessages((state) => [...state.filter((toast) => toast.id !== id)]);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast toasts={toastMessages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
