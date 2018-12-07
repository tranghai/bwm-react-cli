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

export const rentalReducer = (state = rentals, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
