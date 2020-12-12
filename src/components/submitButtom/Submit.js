import React from 'react';
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";

const Submit = () => {

    const data = useSelector( ({ data }) => data)
    const [jsonData, setJson] = React.useState('')

    const handleClick = () => {
        setJson( JSON.stringify(data, null, 2) )
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

        <pre>
            {jsonData}
        </pre>
    </>);
};

export default Submit;
