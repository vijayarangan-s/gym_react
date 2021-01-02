import axios from 'axios'
const API = `http://octangletechnologies.com/gymsoftware`


export const login = async (users) => {

    try {
        const response = await axios.post(`http://octangletechnologies.com/gymsoftware/login.php?action=login`, users)
        const { token } = response.data;
        if (token) {
            localStorage.setItem("token", token)
            return await response.data;
        }
    } catch (err) {
        console.log({err})
    }
}

export const Register = (users) => {
    console.log("user....", users, API)
    return fetch(`${API}/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    })
        .then(response => {
            console.log("respomse...", response)
            return response.json();
        })
        .catch(err => console.log(err))
}

export const enquiry = (data) => {
    return fetch(`${API}/enquiry/save`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log("respomse...", response)
            return response.json();
        })
        .catch(err => console.log(err))
}