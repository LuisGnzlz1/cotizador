import axios from 'axios';

export const getDatosAsegurado = () => {

    return axios.get("https://randomuser.me/api/?results=1")
        .then(response => {
            return response.data.results;
        })
        .catch(error => {
            console.log(error);
        });

}