import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

export default function SimpleMenu() {
  const [port, setPort] = React.useState(null);
  const [teor, setTeor] = React.useState(null);
  const [pract, setPract] = React.useState(null);

  const handleClickPort = (event) => {
    setPort(event.currentTarget);
  };

  const handleClickTeor = (event) => {
    setTeor(event.currentTarget);
  };

  const handleClickPract = (event) => {
    setPract(event.currentTarget);
  };

  const handlePort = () => {
    setPort(null);
  };

  const handleTeor = () => {
    setTeor(null);
  };

  const handlePract = () => {
    setPract(null);
  };


  return (
    <div style={{textAlign: 'center', margin: "17px auto", border: "45px",  weight: '110%'}}>
      {/*Кнопка на главную*/}
      <Button aria-controls="simple-menu" aria-haspopup="true">
          <Link to={'/'} >Главная</Link>
      </Button>
      {/* Портфолио */}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickPort}>
          <a>Портфолио</a>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={port}
        keepMounted
        open={Boolean(port)}
        onClose={handlePort}>
        <MenuItem onClick={handlePort}><Link to={"/visit"}>Визитная карточка</Link></MenuItem>
        <MenuItem onClick={handlePort}><Link to={'advTraining'}>Курсы повышения квалификации</Link></MenuItem>
      </Menu>
        {/*  Теория  */}
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickTeor}>
        Теория
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={teor}
        keepMounted
        open={Boolean(teor)}
        onClose={handleTeor}>
        <MenuItem onClick={handleTeor}>Файлы/презентации</MenuItem>
      </Menu>
    {/*  Практические  */}
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickPract}>
        Практические задания
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={pract}
        keepMounted
        open={Boolean(pract)}
        onClose={handlePract}>
        <MenuItem onClick={handlePract}>ППСС3 - техническая профиль</MenuItem>
        <MenuItem onClick={handlePract}>ПССС3 - социальный профиль</MenuItem>
        <MenuItem onClick={handlePract}>ППКРС - техническая профиль</MenuItem>
        <MenuItem onClick={handlePract}>ППКРС - социальный профиль</MenuItem>
      </Menu>
     <Button aria-controls="simple-menu" aria-haspopup="true">
        Самостоятельные работы
      </Button>
     <Button aria-controls="simple-menu" aria-haspopup="true">
        Родителям
     </Button>
     <Button aria-controls="simple-menu" aria-haspopup="true">
        Новости
     </Button>
     <Button aria-controls="simple-menu" aria-haspopup="true">
        Контакты
     </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true">
            <Link to={'/lk'}>Личный кабинет</Link>
        </Button>
    </div>
  );
}

