// Import React's Components
import React from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// Import Axios
import axios, { AxiosError, AxiosResponse } from "axios";
import { history } from "../..";

// Delay Function
const sleep = () => new Promise<void>((resolve, reject) => {
    setTimeout(resolve, 500)
})

// Axios Base URL
axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

// Axios Intercet
axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError) => {
    const { data, status }: any = error.response!;
    // let navigate = useNavigate();

    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key]);
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            // navigate("/server-error", {state: data});
            history.push('/server-error',
                {
                    state: { error: data },
                }
            );
            // toast.error(data.title);
            break;

        default:
            break;
    }
    return Promise.reject(error.response);
})

// Requests Function
const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

// Catalog Function
const Catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
}

// Test Errors Function
const TestErrors = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorised'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error'),
}

const Agent = {
    Catalog,
    TestErrors,
}

export default Agent;