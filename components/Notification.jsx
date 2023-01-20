import React from 'react';
import { IconClose } from './icon';

function Notification({ message, icon, classNames, onClose }) {
  return (
    <div className={`notification ${classNames}`}>
      <div className="notification__wrapper">
        <div className="notification__icon">{icon}</div>
        <div className="notification__content">{message}</div>
      </div>
      <button type="button" className="notification__close" onClick={onClose}>
        <IconClose />
      </button>
    </div>
  );
}

export default Notification;
