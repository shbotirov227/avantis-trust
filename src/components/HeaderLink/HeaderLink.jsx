import React from 'react';
import { Link } from "react-router-dom";

import "./HeaderLink.scss";

const HeaderLink = () => {
  return (
    <div className="HeaderLink">
        <Link className="Header-link" to="#">О нас</Link>
        <Link className="Header-link" to="#">Преимущества</Link>
        <Link className="Header-link" to="#">Тарифы и калькулятор</Link>
        <Link className="Header-link" to="#">Функционал</Link>
        <Link className="Header-link" to="#">Реферальная программа </Link>
    </div>
  )
}

export default HeaderLink