import { FETCH_RENTALS_SUCCESS, FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTAL_BY_ID_INIT } from './types';
import axios from 'axios';

// RENTAL ACTIONS -----------------------------------------------------------------
const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT,
  }
}

const fetchRentalByIdSuccess = (rental) => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  }
}

const fetchRentalsSuccess = (rentals) => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    rentals
  }
}

export const fetchRentals = () => {
  return (dispatch) => {
    axios.get('/api/v1/rentals').then(res => res.data).then((rentals) => {
      dispatch(fetchRentalsSuccess(rentals));
    });
  }
};


export const fetchRentalById = (rentalId) => {
  return function (dispatch) {
    dispatch(fetchRentalByIdInit());
    axios.get(`/api/v1/rentals/${rentalId}`).then(res => res.data).then((rental) => {
      dispatch(fetchRentalByIdSuccess(rental));
    });
  }
}


// AUTH ACTIONS -----------------------------------------------------------------
export const register = (userData) => {
  return axios.post('/api/v1/users/register', { ...userData }).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors))
}

export const login = (userData) =>{
  return axios.post('/api/v1/users/auth', {...userData}).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors))
}