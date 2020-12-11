import React from 'react';
import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import './applicant.style.css'
import {useSelector} from "react-redux";

const Applicants = () => {

    const applicants = useSelector(({getApplicants}) => getApplicants || [])

    return (
        <div className="wrap applicant">
            <h2 className="title">Заявники</h2>

            <div className="wrap-checkBox">
                { applicants.map(applicant => {
                    return (
                        <FormControlLabel
                            key={applicant.id}
                            style={{display: 'block'}}
                            control={
                                <Checkbox name="checkedB" color="primary"/>
                            }
                            label={
                                <>
                                    <strong>{applicant.name}</strong>,
                                    {applicant.address.address}
                                </>
                            }
                        />
                    )
                })
                }
            </div>

            <div className="button-wrap">

                <Button
                    className="button-add"
                    variant="outlined"
                    color="primary"
                >
                    Додати <span>+</span>
                </Button>

                <Button
                    style={{
                        fontSize: '15px',
                        display: applicants.length ? 'inline-block' : 'none'
                    }}
                    variant="contained"
                    color="primary"
                >
                    ЗБЕРЕГТИ ЗАЯВКУ
                </Button>

            </div>

        </div>
    );
};

export default Applicants;
