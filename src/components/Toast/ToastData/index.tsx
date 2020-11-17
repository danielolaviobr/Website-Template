import React, { useEffect } from "react";
import { useToast } from "../../../hooks/toast";

import { Container } from "./styles";

interface ToastMessage {
  message: string;
  id: string;
  style: object;
}

const ToastData: React.FC<ToastMessage> = ({ message, id, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <Container onClick={() => removeToast(id)} style={style}>
      <span>{message}</span>
    </Container>
  );
};

export default ToastData;
