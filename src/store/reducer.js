import {getApplicant, getClient} from "./constants";

const initialState = {
    getClients: [],
    getApplicants : []
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case getClient :

            return {
                ...state,
                getClients : action.clients
            }

        case getApplicant :

            return {
                ...state,
                getApplicants : action.applicants
            }

        default :
            return { ...state }
    }
}
