import axios from 'axios';

export const userService = {
    login,
    logout,
    register
};

function login(username, password) {
    const data = {
        username: username,
        password: password
    }
    //here will come the login AJAX request
    .catch((error) => {
      //logout for 401 unauthenticated
      if (error.response.status === 401) {
        logout();
      }
      return Promise.reject(error);
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

