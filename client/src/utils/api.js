import axios from 'axios';

export default{
    logIn: function(logInData) {
        return axios.post('/api/user/logIn', logInData)

    },

    signUp: function(userData) {
        return axios.post('/api/user/signUp', userData)
    }
}
