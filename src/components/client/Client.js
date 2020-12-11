import React from 'react';
import {Button, TextField} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import {useDispatch, useSelector} from "react-redux";
import {getApplicants, getApplicantsAsync, getClientsAsync} from "../../store/actions";
import './client.style.css'

const Client = () => {

    const [filter, setFilter] = React.useState([])
    const [client, setClient] = React.useState(null)
    const clients = useSelector( ({ getClients }) => getClients || [])
    const dispatch = useDispatch()

    React.useEffect( () => {
        dispatch(getClientsAsync())
    }, [])


    const handleInputChange = ( _, value) => {
        if (value && value.length > 3) {
            setFilter(clients)
        }
        else {
            setFilter([])
            dispatch(getApplicants([]))
        }
    }

    const handleChange = (event, client) => {
        setClient(client)
        if (client) dispatch(getApplicantsAsync(client.id))
    }

    return (
        <div className="wrap client">
            <h2>Клiєнт</h2>

            <div className="select">

                <Autocomplete
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
                          <Button
                              style={{fontSize : '15px'}}
                              variant="contained"
                              color="primary"
                          >
                              ЗБЕРЕГТИ ЗАЯВКУ
                          </Button>
                        </>
            }

        </div>
    );
}

export default Client;
