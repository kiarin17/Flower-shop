import React from 'react'
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';



import kryg from '../img/Ellipse.png'
import korzina from '../img/Фото.png'




export default function Main() {
  return (
    <>
    <Header />

    <h1>ROMANTIC CLUB</h1>
    <h2>Мелочи не важны, они решают все!</h2>
    <img className='koz' src={korzina} />

  
  
    </>
  )
}
