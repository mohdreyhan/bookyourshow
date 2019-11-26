import { SIGNIN_INPUTS, ADD_USER, ADD_MOVIES } from "./types";

import { LOGIN_INPUTS, LOGIN_SUCCESS } from "./types";

import { LOGOUT_SUCCESS } from "./types";

import { FETCH_THEATRES } from "./types";

import { SELECT_SEATS, RESERVED_SEATS } from "./types";

import { ADDMOVIES_INPUTS } from "./types";

import { FETCH_MOVIES } from "./types";

/*----------------------- ACTIONS ---------------------------*/
export const SIGNININPUTS = (name, value) => {
  return {
    type: SIGNIN_INPUTS,
    payload: { name, value }
  };
};

export const ADDUSER = message => {
  return {
    type: ADD_USER,
    payload: { message }
  };
};

export const LOGININPUTS = (name, value) => {
  return {
    type: LOGIN_INPUTS,
    payload: { name, value }
  };
};

export const LOGINSUCCESS = message => {
  return {
    type: LOGIN_SUCCESS,
    payload: { message }
  };
};

export const LOGOUTSUCCESS = message => {
  return {
    type: LOGOUT_SUCCESS,
    payload: message
  };
};

export const FETCHTHEATRES = response => {
  return {
    type: FETCH_THEATRES,
    payload: response
  };
};

export const SELECTSEATS = value => {
  return {
    type: SELECT_SEATS,
    payload: { value }
  };
};

export const RESERVEDSEATS = (message, results) => {
  return {
    type: RESERVED_SEATS,
    payload: { message, results }
  };
};
/*------------------------------NEW ACTION -------------------------------*/

export const ADDMOVIESINPUTS = (name, value) => {
  return {
    type: ADDMOVIES_INPUTS,
    payload: { name, value }
  };
};

export const ADDMOVIES = message => {
  return {
    type: ADD_MOVIES,
    payload: { message }
  };
};

export const FETCHMOVIES = res => {
  return {
    type: FETCH_MOVIES,
    payload: res
  };
};

/* ------------------------------ ACTION CREATORS --------------------- */

export const USERSIGNUP = (event, form, signinInputs) => dispatch => {
  event.preventDefault();
  return fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(signinInputs)
  })
    .then(response => response.json())
    .then(response => {
      if (response.status === 200) {
        dispatch(ADDUSER(response.message));
        form.reset();
      } else if (response.status === 400) {
        dispatch(ADDUSER(response.message));
      }
    });
};

export const USERLOGIN = (event, loginInputs, history) => dispatch => {
  event.preventDefault();
  var role;
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginInputs)
  })
    .then(response => response.json())
    .then(response => {
      if (response.status === 200) {
        if (response.role === "admin") {
          localStorage.setItem("role", response.role);
          role = localStorage.getItem("role");
        } else if (response.role === "user") {
          localStorage.setItem("role", response.role);
          role = localStorage.getItem("role");
        } else if (response.role === "vendor") {
          localStorage.setItem("role", response.role);
          role = localStorage.getItem("role");
        }
        localStorage.setItem("email", response.email);
        localStorage.setItem("token", response.token);
        var token = localStorage.getItem("token");
        if (token === "") {
          return history.replace({
            pathname: "/"
          });
        } else if (role === "admin") {
          return history.replace({ pathname: "/dashboard" });
        } else if (role === "user") {
          return history.replace({
            pathname: "/mainpage"
          });
        } else if (role === "vendor") {
          return history.replace({
            pathname: "/vendorpage"
          });
        }
      } else if (response.status === 401) {
        dispatch(LOGINSUCCESS(response.message));
      } else if (response.status === 400) {
        dispatch(LOGINSUCCESS(response.message));
      } else {
        const message =
          response.message !== undefined
            ? response.message
            : "Unknown error recevied";
        dispatch(LOGINSUCCESS(message));
      }
    });
};

export const USERLOGOUT = (email, history) => dispatch => {
  return fetch("http://localhost:3000/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email
    })
  })
    .then(response => response.json())
    .then(response => {
      if (response.status === 200) {
        localStorage.clear();
        if (localStorage.length === 0) {
          history.replace("/");
        }
        dispatch(LOGOUTSUCCESS(response.message));
      }
    });
};

export const THEATREFETCHING = () => dispatch => {
  return fetch("http://localhost:3000/theatres", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(res => {
      dispatch(FETCHTHEATRES(res));
    });
};

// export const USERRESERVEDSEATS = (reservedSeats,theatreId) => dispatch => {
//   console.log(reservedSeats);
//   const jsonObj = JSON.stringify({
//     "theater_id" :theatreId,
//     "reservedSeats" : reservedSeats
//   })
//   console.log("jsonObj ::", jsonObj);
//   return fetch("http://localhost:3000/reservedseats", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body:jsonObj
//   })
//     .then(response => response.json())
//     .then(response => {
//       if (response.status === 200) {
//         dispatch(LOGOUTSUCCESS(response.message));
//       }
//     });
// };

export const USERRESERVEDSEATS = (reservedSeats, theatreId) => dispatch => {
  return fetch("http://localhost:3000/reservedseats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      reservedSeats: reservedSeats,
      theatreId: theatreId
    })
  })
    .then(response => response.json())
    .then(response => {
      if (response.status === 200) {
        dispatch(RESERVEDSEATS(response.message, response.reservedSeats));
      }
    });
};

/*--------------------------------NEW ACTION CREATORS--------------------*/

export const MOVIESCREATOR = (event, form, addmovieInputs) => dispatch => {
  event.preventDefault();
  return fetch("http://localhost:3000/addmovies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(addmovieInputs)
  })
    .then(response => response.json())
    .then(response => {
      if (response.status === 200) {
        dispatch(ADDMOVIES(response.message));
        form.reset();
      } else if (response.status === 400) {
        dispatch(ADDMOVIES(response.message));
      }
    });
};

export const FETCHMOVIESCREATOR = () => dispatch => {
  return fetch("http://localhost:3000/fetchmovies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(res => {
      dispatch(FETCHMOVIES(res));
    });
};
