import axios from "axios";

export default {
  logIn: function (logInData) {
    return axios.post("/api/user/logIn", logInData);
  },

  signUp: function (userData) {
    return axios.post("/api/user/signUp", userData);
  },

  createEvent: function (eventData) {
    return axios.post("/api/event", eventData);
  },

  getUser: function () {
    return axios.get("/api/user/profile");
  },

  editUser: function (editUser) {
    return axios.put("/api/user/profile/edit", editUser);
  },
  getEvent: function () {
    return axios.get("/api/getEvent");
  },
};
