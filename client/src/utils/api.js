import axios from 'axios';

export default{
    logIn: function(logInData) {
        return axios.post('/api/user/logIn', logInData)

    },

    signUp: function(userData) {
        return axios.post('/api/user/signUp', userData)
    },

    createEvent: function(eventData) {
        return axios.post('/api/event', eventData)
    },

    getUser: function(){
        return axios.get('/api/user')
    }

}

