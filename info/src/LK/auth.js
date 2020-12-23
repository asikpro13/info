import React, {useState} from 'react';
import './lk.css'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import axios from "axios";

export default function SimpleMenu() {
    const [appState, setAppState] = useState();

    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
    axios.get(apiUrl).then((resp) => {
        const allPersons = resp.data;
        console.log(allPersons)
    });

    const handlePort = () => {
    setAppState(null);
  };

    const handleClickPort = (event) => {
    setAppState(event.currentTarget);
    handlePort();
  };

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#7cbdc9'
            }
        },
    });
    return (
        <div>
            <div className='topAuth' style={{textAlign: 'center'}}>Авторизация</div>
            <div style={{textAlign: 'center', margin: "17px auto"}}>
                <form>
                    <ThemeProvider theme={theme}>
                        <TextField label={"Логин"} variant="outlined"/>
                    </ThemeProvider>
                </form>
            </div>
            <div style={{textAlign: 'center'}}>
                <form>
                    <ThemeProvider theme={theme}>
                        <TextField label={"Пароль"} variant='outlined'/>
                    </ThemeProvider>
                </form>
            </div>
            <div className='buttonAuth' style={{textAlign: 'center'}}>
                <Button onClick={handleClickPort} variant="contained">Войти</Button>
            </div>
        </div>
    );
}