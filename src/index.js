import React from 'react';

import 'cryptocoins-icons/webfont/cryptocoins.css'
import 'cryptocoins-icons/webfont/cryptocoins-colors.css'

export default ({ coin }) => (
  <i className={`cc ${coin}`} title={coin}></i>
)
