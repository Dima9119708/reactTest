import React from 'react';
import {Button, FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {useDispatch} from "react-redux";
import {addApplicant} from "../../../store/actions";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    title : {
        marginBottom : '15px'
    },
    formAddApplicant : {
        width: '100%',
        marginBottom: '25px',
        '& .title' : {
            marginBottom : '15px',
            color: '#858585',
            fontSize: '18px'
        }
    },
    buttonAdd : {
        '& span' : {
            display : 'inline-block',
        }
    },
    buttonWrap : {
        display : 'flex',
        flexDirection: 'column',
        width: '180px',
        marginBottom : '15px',
    },
    formInner : {
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width : 768px)' : {
            flexDirection: 'row',
            alignItems: 'flex-end'
        },

        '& .form-inputs-group' : {
            display: 'flex',
            flexDirection: 'column',
            '&:last-child' : {
                marginRight: '0',
            },
            '@media (min-width : 768px)': {
                marginRight: '20px',
                width: '50%',
            }
        },

        '& .label' : {
            marginBottom : '20px'
        }
    }
});

const countries = ['Украина', 'Грузия', 'Италия']

const AddApplicant = () => {

    const [country, setCountry] = React.useState(countries[0])
    const [innCode, setInnCode] = React.useState('')
    const [name, setName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [city, setCity] = React.useState('')
    const [postCode, setPostCode] = React.useState('')
    const [originalName, setOriginalName] = React.useState('')
    const [originalAddress, setOriginalAddress] = React.useState('')
    const [openForm, setOpenForm] = React.useState(false)
    const dispatch = useDispatch()
    const styles = useStyles()

    // Смена страны
    const handleChangeCountries = (_, value) => setCountry(value)

    // Открытие формы добавление заявителя
    const handleClickOpenForm = () => setOpenForm(!openForm)

    // Добавление заявителя
    const handleAddApplicant = () => {

        if (name.length && address.length) {

            // Формирование обьекта
            const data = {
                address: {address, city, country, postCode},
                id: Date.now(),
                innCode,
                name,
                originalAddress,
                originalName,
                delete: true
            }

            // Добавление и очистка инпутов, закрытие формы
            dispatch(addApplicant(data))
            setName('')
            setInnCode('')
            setAddress('')
            setCity('')
            setPostCode('')
            setOriginalName('')
            setOriginalAddress('')
            setOpenForm(false)
        }
    }

    return (<>
            <div className={styles.buttonWrap}>
                <Button
                    onClick={handleClickOpenForm}
                    className={styles.buttonAdd}
                    variant="outlined"
                    color="primary"
                >
                    Додати <span>+</span>
                </Button>
            </div>

            <form style={{ display: openForm ? 'block' : 'none'}}
                  className={styles.formAddApplicant}
            >
                <h4 className='title'>Додати заявника</h4>

                <RadioGroup
                    aria-label="gender"
                    defaultValue="Фiзична особа"
                    name="gender1"
                    style={{marginBottom: '20px'}}
                >
                    <FormControlLabel value="Фiзична особа" control={<Radio color="primary"/>} label="Фiзична особа"/>
                    <FormControlLabel value="Юридична особа" control={<Radio color="primary"/>} label="Юридична особа"/>
                </RadioGroup>

                <div className={styles.formInner}>
                    <div className="form-inputs-group">
                        <div className="select">
                            <Autocomplete
                                className="select"
                                options={countries}
                                getOptionLabel={(option) => option}
                                onChange={handleChangeCountries}
                                defaultValue={countries[0]}
                                renderInput={
                                    (params) =>
                                        <TextField
                                            {...params}
                                            label="Країна"
                                            margin="normal"
                                        />
                                }
                            />
                        </div>

                        <TextField value={innCode} onChange={e => setInnCode(e.target.value)}
                                   style={{marginBottom: '20px'}} label="USREOU"/>
                        <TextField value={name} onChange={e => setName(e.target.value)} style={{marginBottom: '20px'}}
                                   label="Iм'я"/>
                        <TextField value={address} onChange={e => setAddress(e.target.value)}
                                   style={{marginBottom: '20px'}} label="Адреса"/>
                        <TextField value={city} onChange={e => setCity(e.target.value)} style={{marginBottom: '20px'}}
                                   label="Мiсто"/>
                        <TextField value={postCode} onChange={e => setPostCode(e.target.value)}
                                   style={{marginBottom: '20px'}} label="Iндекс"/>
                    </div>

                    <div className="form-inputs-group"
                        style={{
                            display: country === 'Украина'
                                     ? 'none'
                                     : 'inline-flex'
                        }}
                    >

                        <TextField value={originalName} onChange={e => setOriginalName(e.target.value)}
                                   style={{marginBottom: '20px'}} label="Назва мовою походження"/>
                        <TextField value={originalAddress} onChange={e => setOriginalAddress(e.target.value)}
                                   style={{marginBottom: '20px'}} label="Адреса мовою походження"/>
                    </div>
                </div>

                <div className={styles.buttonWrap}>
                    <Button
                        onClick={handleAddApplicant}
                        className={styles.buttonAdd}
                        variant="outlined"
                        color="primary"
                    >
                        Додати
                    </Button>
                </div>

            </form>
        </>
    );
};

export default AddApplicant;
