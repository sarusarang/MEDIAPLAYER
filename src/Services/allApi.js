import CommonApi from "./CommonApi";
import { BASE_URL } from "./Base_url";


export const Uploadvideo = async (data) => {

    return await CommonApi("POST", `${BASE_URL}/allvideos`, data)

}

export const getvideos = async () => {

    return await CommonApi("GET", `${BASE_URL}/allvideos`, "")

}

export const deletevideo = async (id) => {

    return await CommonApi("DELETE", `${BASE_URL}/allvideos/${id}`, {})

}

export const addcategories = async (data) => {

    return await CommonApi("POST", `${BASE_URL}/categories`, data)

}


export const getcategories = async () => {

    return await CommonApi("GET", `${BASE_URL}/categories`, "")

}

export const delecatg = async (id) => {

    return await CommonApi("DELETE", `${BASE_URL}/categories/${id}`, {})

}

export const showhis = async (data) => {

    return await CommonApi("POST", `${BASE_URL}/history`, data)
}

export const historyshow = async () => {

    return await CommonApi("GET", `${BASE_URL}/history`, "")
}

export const delehistory = async (id) => {

    return await CommonApi("DELETE", `${BASE_URL}/history/${id}`, {})
}

export const getspecificvideos = async (id) => {

    return await CommonApi("GET", `${BASE_URL}/allvideos/${id}`, "")
}

export const updatecategory = async (id, data) => {

    return await CommonApi("PUT", `${BASE_URL}/categories/${id}`, data)

}