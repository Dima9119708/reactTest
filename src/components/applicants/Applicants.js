import React from 'react';
import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import './applicant.style.css'
import {useDispatch, useSelector} from "react-redux";
import AddApplicant from "./components/AddApplicant";
import {arrayIndexApplicantAction, deleteApplicant} from "../../store/actions";
import Submit from "../submitButtom/Submit";

const checkIndex = []

const Applicants = () => {

    const client = useSelector(({client}) => client)
    const applicants = useSelector(({getApplicants}) => getApplicants || [])
    const dispatch = useDispatch()

    const handleDelete = (id, index) => {
        const elemIndex = checkIndex.indexOf(index)
        checkIndex.splice(elemIndex, 1)

        dispatch(arrayIndexApplicantAction(checkIndex))
        dispatch(deleteApplicant(id))
    }

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
        <div className="wrap applicant">
            <h2 className="title">Заявники</h2>

            <div className="wrap-checkBox">
                { applicants.map( (applicant, index) => {
                    return (
                        <FormControlLabel
                            key={applicant.id}
                            style={{display: 'block'}}
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
                 className="button-wrap"
            >
                <Submit />
            </div>

        </div>
    );
};

export default Applicants;
