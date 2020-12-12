import React from 'react';
import {Button, TextField} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import {useDispatch, useSelector} from "react-redux";
import {getApplicantsAsync, getClientsAsync, getСlientAction} from "../../store/actions";
import './client.style.css'
import Submit from "../submitButtom/Submit";

const Client = () => {

    const [filter, setFilter] = React.useState([])
    const client = useSelector( ({ client }) => client)
    const clients = useSelector( ({ getClients }) => getClients || [])
    const dispatch = useDispatch()

    React.useEffect( () => {
        dispatch(getClientsAsync())
    }, [])


    const handleInputChange = ( _, value) => {
        if (value && value.length > 3) setFilter(clients)
        else setFilter([])
    }

    const handleChange = (event, client) => {
        dispatch(getСlientAction(null))
        if (client) dispatch(getApplicantsAsync(client))
    }

    return (
        <div className="wrap client">
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
