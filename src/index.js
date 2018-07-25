import React from 'react';

import 'cryptocoins-icons/webfont/cryptocoins.css'
import 'cryptocoins-icons/webfont/cryptocoins-colors.css'

export default ({ coin, ...props }) => {
  let className = `cc ${coin}`;
  if (props.className) {
    className += " " + props.className
  }
  return (
    <i {...props} className={className} title={coin}></i>
  )
}
