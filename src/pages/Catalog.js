import React from 'react';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import byket1 from '../img/byket1.jpg'
import byket4 from '../img/byket4.jpg'
import byket2 from '../img/byket2.jpg'

import mb1 from '../img/mb1.jpg'
import mb2 from '../img/mb2.jpg'
import mb3 from '../img/mb3.jpg'

import k1 from '../img/k1.jpg'
import k2 from '../img/k2.jpg'
import k3 from '../img/k3.jpg'

export default function Catalog() {
  return (
    <>
    <Header />

    <CardGroup className='group'>
    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={byket4} />
      <Card.Body>
        <Card.Title className='title' >Прекрасное начало</Card.Title>
        <Card.Text className='text'>
        Размер букета указан по упаковке. Без упаковки - высота 50см, ширина 40-45см
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price' >2968₽</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={byket1} />
      <Card.Body>
        <Card.Title className='title'>Кружевные Розы </Card.Title>
        <Card.Text className='text'>
        Размер букета указан по упаковке. Без упаковки - высота 50см, ширина 40-45см
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price'>2900₽</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={byket2} />
      <Card.Body>
        <Card.Title className='title'>Букет с кустовыми розами </Card.Title>
        <Card.Text className='text'>
        Размер букета указан по упаковке. Без упаковки - высота 60см, ширина 50 см
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price'>2900₽</ListGroup.Item>
      </ListGroup>
    </Card>
    </CardGroup>





    <CardGroup className='group'>
    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={mb1} />
      <Card.Body>
        <Card.Title className='title' >Одинокий воин</Card.Title>
        <Card.Text className='text'>
        Раки - 1500 гр. Краб - 1 шт. Укроп - 20 гр. Упаковка - 1 шт  Упаковка - 1 шт. Размер Высота - 30 см Ширина - 30 см. Для ценителей морепродуктов и богатой жизни
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price' >34.110₽</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={mb2} />
      <Card.Body>
        <Card.Title className='title'>Пушка </Card.Title>
        <Card.Text className='text'>
        Колбаски копченые - 300 гр, охотничьи - 300 гр, кнуты - 300 шт. Сыр косичка - 1 шт, чечил - 300 гр, копченый - 300 шт, сливочный - 400 гр. Помидоры черри - 15 шт.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price'>16.500₽</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={mb3} />
      <Card.Body>
        <Card.Title className='title'>Арчи</Card.Title>
        <Card.Text className='text'>
        Кокос - 1 шт. Шишки кедровые - 4 шт. Грецкий орех - 30 шт. Финики - 100 гр. Миндаль - 100 гр. Фундук чищеный - 100 гр. Арахис в скорлупе - 50 гр. макадамия в скорлупе - 30 шт. Колосья - 7 шт.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price'>25.900₽</ListGroup.Item>
      </ListGroup>
    </Card>
    </CardGroup>







    <CardGroup className='group'>
    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={k1} />
      <Card.Body>
        <Card.Title className='title' >Корзина с цветами М</Card.Title>
        <Card.Text className='text'>
        Орхидея Цимбидиум - 15 шт.
Лилия белая - 4 шт.
Роза - 7 шт.
Чертополох - 2 шт.
Лизиантус - 5 шт.
Корзина плетеная - 1 шт.
Пена флористическая - 2 шт.
Писташ - 7 шт.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price' >11.875₽</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={k2} />
      <Card.Body>
        <Card.Title className='title'>Ариадна </Card.Title>
        <Card.Text className='text'>
        Роза пионовидная - 5 шт.
Роза кустовая пионовидная - 4 шт.
Гвоздика сортовая - 5 шт.
Гортензия - 1 шт.
Озотамнус - 1 шт.
Эвкалипт - 1 шт.
Корзина - 1 шт.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price'>9176₽</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card className='bb' style={{ width: '30rem' }}>
      <Card.Img style={{ width: '30rem' }} src={k3} />
      <Card.Body>
        <Card.Title className='title'>Эванна</Card.Title>
        <Card.Text className='text'>
        Гортензия - 1 шт.
Роза - 13 шт.
Роза кустовая - 8 шт.
Эустома - 11 шт.
Зелень - 10 шт.
Корзина - 1 шт.
Озотамнус - 7 шт.
Пион - 7 шт.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='price'>29670₽</ListGroup.Item>
      </ListGroup>
    </Card>
    </CardGroup>
    </>
  )
}
