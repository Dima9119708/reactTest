import React from 'react';
import {useSelector} from "react-redux";

const JsonData = () => {

    // Получам Json строку и выводим
    const jsonDATA = useSelector( ({ jsonDATA }) => jsonDATA)

    return (
        <div className="wrap"
             style={{ overflowX : 'auto' }}
        >
            <pre>
                {jsonDATA}
            </pre>
        </div>
    );
};

export default JsonData;
