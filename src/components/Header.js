import React from 'react'
import {NavLink} from "react-router-dom";
import logo from "../img/logo.png"

export default function Header() {
  return (
    <>
          {/*Шапка сайта */}
          <header className="header">

        
          <img className="logo" src={logo} alt="logo" />
              {/*Панель навигации */}
              <NavLink to="/" className="active">Главная</NavLink>
              <NavLink to="/onas" className="active">О нас</NavLink>
              <NavLink to="/catalog" className="active">Каталог</NavLink>
              <NavLink to="/contact" className="active">Контакты</NavLink>

          </header>
      </>
        
    
  )
}
