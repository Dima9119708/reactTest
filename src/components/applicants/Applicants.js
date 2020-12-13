import React from 'react';
import {Checkbox, FormControlLabel} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import AddApplicant from "./components/AddApplicant";
import {arrayIndexApplicantAction, deleteApplicant} from "../../store/actions";
import Submit from "../submitButtom/Submit";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        display : 'flex',
        marginBottom : '20px',
        ['@media (min-width:768px)']: {
            marginBottom : '0'
        }
    },
    title : {
        marginBottom : '15px'
    },
    wrapCheckBox : {
        marginBottom : '20px'
    },
    buttonWrap : {
        display : 'flex',
        flexDirection: 'column',
        width: '180px',
    },
});

// Массив индексов с заявителями
const checkIndex = []

// Компонент заявителей
const Applicants = () => {

    // Получения обьекта выброного клиента
    const client = useSelector(({client}) => client)
    // Получение массив заявителей
    const applicants = useSelector(({getApplicants}) => getApplicants || [])
    const dispatch = useDispatch()
    const styles = useStyles()

    // Удаление заявителя
    const handleDelete = (id, index) => {
        // Удаление с массива индексов
        const elemIndex = checkIndex.indexOf(index)
        checkIndex.splice(elemIndex, 1)

        dispatch(arrayIndexApplicantAction(checkIndex))
        dispatch(deleteApplicant(id))
    }

    // Выбор заявителя, если есть удаляем, если нет пушим в массив
    const handleCheck = (e, index) => {
        if (!checkIndex.includes(index)) {
            checkIndex.push(index)
        }
        else {
            const elemIndex = checkIndex.indexOf(index)
            checkIndex.splice(elemIndex, 1)
        }
        dispatch(arrayIndexApplicantAction(checkIndex))
    }

    return (
        <div className="wrap">
            <h2 className={styles.title}>Заявники</h2>

            <div className={styles.wrapCheckBox}>
                { applicants.map( (applicant, index) => {
                    return (
                        <FormControlLabel
                            key={applicant.id}
                            className={styles.root}
                            control={
                                <Checkbox
                                    onChange={e => handleCheck(e, index)}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label={
                                <>
                                    <strong>{applicant.name}</strong>,
                                    {applicant.address.address}
                                    <span
                                        onClick={_ => handleDelete(applicant.id, index)}
                                        style={{
                                            display: applicant.delete
                                                ? 'inline-block'
                                                : 'none',
                                            marginLeft: '5px'
                                        }}
                                    >
                                       &#x2716;
                                    </span>
                                </>
                            }
                        />
                    )
                })}
            </div>

            <AddApplicant/>

            <div style={{ display : client ? 'block' : 'none'}}
                 className={styles.buttonWrap}
            >
                <Submit />
            </div>

        </div>
    );
};

export default Applicants;
