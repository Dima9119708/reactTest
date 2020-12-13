import React from 'react';
import {TextField} from "@material-ui/core";
import {Autocomplete } from '@material-ui/lab';
import {useDispatch, useSelector} from "react-redux";
import {
    getApplicantsAsync,
    getClientsAsync,
    getСlientAction
} from "../../store/actions";
import Submit from "../submitButtom/Submit";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    client : {
        '& .name' : {
            margin: 0,
            marginBottom: '5px',
            fontSize: '17px',
        },

        '& .phone' : {
            marginBottom: '15px',
        }
    }
});

const Client = () => {

    // Фильтрация массива после 3 символа
    const [filter, setFilter] = React.useState([])
    // Получаем обьект выбраного клиента
    const client = useSelector( ({ client }) => client)
    // Получаем клиента
    const clients = useSelector( ({ getClients }) => getClients || [])
    const dispatch = useDispatch()
    const styles = useStyles()

    // Получаем асинхронно клиента
    React.useEffect( () => {
        dispatch(getClientsAsync())
    }, [])

    // Если символов в инпуте больше 3, берем клиентов которых получили с сервера
    const handleInputChange = ( _, value) => {
        if (value && value.length > 3) setFilter(clients)
        else setFilter([])
    }

    // Если в инпуте корректный пользователь, получаем его асинхронно
    // иначе null
    const handleChange = (event, client) => {
        dispatch(getСlientAction(null))
        if (client) dispatch(getApplicantsAsync(client))
    }

    return (
        <div className={`wrap ${styles.client}`}>
            <h2>Клiєнт</h2>

            <div className="select">

                <Autocomplete
                   className="select"
                   options={filter}
                   getOptionLabel={(option) => option.name}
                   onInputChange={handleInputChange}
                   onChange={handleChange}
                   loading={ clients.length ? false : true }
                   renderInput={
                       (params) =>
                       <TextField
                           {...params}
                           label="Поиск / Выбор клиента"
                           margin="normal"
                       />
                   }
                />

            </div>

            { client && <>
                          <h3 className="name">{ client.name }</h3>
                          <p className="phone">Телефон. { client.phone }</p>
                          <Submit />
                        </>
            }

        </div>
    );
}

export default Client;