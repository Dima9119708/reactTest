import React from 'react';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {jsonDataAction} from "../../store/actions";

const Submit = () => {

    // Получаем обьект с выбраными данными пользователя
    const data = useSelector( ({ data }) => data)
    const dispatch = useDispatch()

    // При клике на ЗБЕРЕГТИ ЗАЯВКУ выводим Json строку.
    const handleClick = () => {
        dispatch(jsonDataAction(JSON.stringify(data, null, 2)))
    }

    return (<>
        <Button
            onClick={handleClick}
            style={{fontSize : '15px'}}
            variant="contained"
            color="primary"
        >
            ЗБЕРЕГТИ ЗАЯВКУ
        </Button>
    </>);
};

export default Submit;
