import React from "react";

import { Container } from "./styles";
import ToastData from "./ToastData";
import { useTransition } from "react-spring";

interface ToastProps {
  toasts: ToastMessage[];
}

interface ToastMessage {
  message: string;
  id: string;
}

const Toast: React.FC<ToastProps> = ({ toasts }) => {
  const toastWithTransition = useTransition(toasts, (toast) => toast.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <Container>
      {toastWithTransition.map(({ item, key, props }) => (
        <ToastData
          message={item.message}
          id={item.id}
          key={key}
          style={props}
        />
      ))}
    </Container>
  );
};

export default Toast;
