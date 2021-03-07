import React from 'react';
import './KitchenButton.css';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function KitchenButton(props) {
  return (
    <button
      className="kitchen-button"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Kitchen
    </button>
  );
}
