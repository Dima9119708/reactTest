import {
    addApplicantData, arrayIndexApplicant,
    client,
    delApplicant,
    getApplicants,
    getClients, jsonDATA
} from "./constants";
import axios from 'axios';
import { debounce } from "debounce";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDc0NjEyMDMsImV4cCI6MTYxMDA1MzIwMywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImJ5Lmhhc2tlbGwifQ.F_0yZmAbIbPuonnXiKdxI9ne77y3CCFmoe-Wygp3wIgXShDoO64cnnTBsVQG6u6VUvZt1LrueXhUnbOmVKnbUTckKKkNcQWl6iHVO-9RgP2133SOzWcSmVDpf0BC_K0lczF0DaAmp1gHii-Ct50nORpSONSbWNnjkfhBIPbyLVDR2sKuGKyMGG-6Qy0JRDTFnt5AVO_z5HEpCYSrQdhwd_wl7gcD9-vH7_aQib9dq6htbDdqdFw1NXk84B_YTfa2szSFyMDuQkaTgXZwoOOouxEHy9JlJgkKgxK5W-f84cNFkFrYxUhxaNROgPFY8Cs9pB54NcVaSceQc2vF2lgtFb3VyC-ra3xTNtrNmzGPpikftkeU8lnojP8ifEsdeYWjgJGUa7HsR-VMq2fN9otGd0PqpXLpXPasBXEvub7tRyqLziGUG_h4SdgIOu0aGe3sItigzF3fnaCc-Vv8B1wM_qt05ahCgdMuMD7X2dW0eAFuO8zKZszz7owiD5S92QiJkI2sGUG5YzPTOPjch-Qoax--aM1QE8XFDvkDYCruARDTBxcqNp6QAdEANr_toscUpcwTM5-hNfSTGaWvF0dkJaek2PCCszOWAyz6TiLy9lGXVkFEGn-qeR9V0ecdHNx9F_6YNqgWAIOlMNCsYiNp77J6ggmLjJZfTYDh6BAwFNI'

export const getСlientAction = (clientObj) => {
    return {
        type : client,
        clientObj
    }
}

const getClientsAction = (clients) => {
    return {
        type: getClients,
        clients
    }
}

export const getClientsAsync = (fnSetFilter) => dispatch => {
    axios
        .get('http://lexberry.com.ua/api/v1/clients', {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        .then(res => {
            dispatch(getClientsAction(res.data.items))
            fnSetFilter(res.data.items)
        })
        .catch(err => console.warn(err))
}


const getApplicantsAction = (applicants) => {
    return {
        type: getApplicants,
        applicants
    }
}

export const getApplicantsAsync = (client) => dispatch => {

    axios
        .get(`http://lexberry.com.ua/api/v1/applicants?filter[${client.id}]=XXX`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            dispatch(getApplicantsAction(res.data.items))
            dispatch(getСlientAction(client))
        })
        .catch(err => console.warn(err))
}


export const getFilterApplicantAsync = (value, fnSetFilter) => _ => {

    debounce(() => {
        axios
            .get(`http://lexberry.com.ua/api/v1/clients?search[name]=${value}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                if (res.data?.error) {
                    fnSetFilter([])
                }
                else {
                    fnSetFilter(res.data.items)
                }
            })
    }, 300)()
}


export const addApplicant = (data) => {
    return {
        type : addApplicantData,
        data
    }
}

export const deleteApplicant = (id) => {
    return {
        type : delApplicant,
        id
    }
}

export const arrayIndexApplicantAction = (data) => {
    return {
        type : arrayIndexApplicant,
        data
    }
}

export const jsonDataAction = (data) => {
    return {
        type : jsonDATA,
        data
    }
}
