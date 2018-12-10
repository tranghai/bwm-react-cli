import { FETCH_RENTALS, FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTAL_BY_ID_INIT } from './types';

const rentals = [
  {
    id: "1",
    title: "Central Apartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    guests: 12,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "2",
    title: "Central Apartment 2",
    city: "San Francisco",
    street: "Main Street",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    guests: 12,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "3",
    title: "Central Apartment 3",
    city: "Bratislavea",
    street: "Hlavna",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    guests: 12,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "4",
    title: "Central Apartment 4",
    city: "Berlin",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    guests: 12,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: true,
    createdAt: "24/12/2017"
  }
];

const fetchRentalByIdInit = () =>{
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

export const fetchRentals = () => {
  return {
    type: FETCH_RENTALS,
    rentals
  }
};


export const fetchRentalById = (rentalId) => {
  return function (dispatch) {
    dispatch(fetchRentalByIdInit());
    //Simulate server call
    setTimeout(() => {
      const rental = rentals.find((rental) => rental.id === rentalId);
      dispatch(fetchRentalByIdSuccess(rental));
    }, 1000);
  }
}
