import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class Modal extends Component {

  render() {
    const {
      isOpen, onClose, children,
    } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        isClose={onClose}
        onRequestClose={onClose}
        className="modal"
        closeTimeoutMS={150}
      >
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          tabIndex="-1"
        >
          ×
        </button>
        <div className="modal__content">
          {children}
        </div>
      </ReactModal>
    );
  }
}
