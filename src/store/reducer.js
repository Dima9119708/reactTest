import {
    addApplicantData, arrayIndexApplicant,
    client,
    delApplicant,
    getApplicants,
    getClients, jsonDATA
} from "./constants";


const initialState = {
    getClients: [],
    getApplicants : [],
    client : null,
    data : {
        id : '',
        applicantsIds : [],
        newApplicants : []
    },
    jsonDATA : ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case getClients :

            return {
                ...state,
                getClients : action.clients
            }

        case client :

            return {
                ...state,
                client : action.clientObj
            }

        case getApplicants :

            return {
                ...state,
                getApplicants : action.applicants
            }

        case addApplicantData :

            return {
                ...state,
                getApplicants : [...state.getApplicants, action.data]
            }

        case delApplicant :

            return {
                ...state,
                getApplicants : state.getApplicants
                                .filter(applicant => applicant.id !== action.id)
            }

        // Формирование обькта Json
        case arrayIndexApplicant :

            // Получаем всех пользователей по индексам
            const applicantsIds = action.data.reduce((acc, itemIndex) => {
                acc.push(state.getApplicants[itemIndex])
                return acc
            }, [])

            // Если у заявителя есть свойство delete то добавлем в новый массив
            const newApplicants = applicantsIds.filter(item => item?.delete)

            return {
                ...state,
                data : {
                    id : state.client?.id,
                    applicantsIds,
                    newApplicants
                }
            }

        case jsonDATA :

            return {
                ...state,
                jsonDATA: action.data
            }

        default :
            return {
                ...state
            }
    }
}
