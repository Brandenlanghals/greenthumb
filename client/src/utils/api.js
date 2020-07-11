import Axios from 'axios';

export default{
    logIn: function(logInData) {
        return Axios.post('/api/user/logIn', logInData)

    },

    signUp: function(userData) {
        return Axios.post('/api/user/signUp', userData)
    }
}
