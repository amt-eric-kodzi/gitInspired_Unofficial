
import React from 'react';
import ReactDOM from 'react-dom';

type ModalRootProps = {
  children: React.ReactNode;
};

const ModalRoot: React.FC<ModalRootProps> = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(children, modalRoot!);
};

export default ModalRoot;
