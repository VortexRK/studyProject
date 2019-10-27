const initialState = [
  {
    id: 1,
    name: "Ford",
    maxSpeed: 200,
    img: "https://cdn.images.express.co.uk/img/dynamic/24/590x/ford-1025049.jpg?r=1538355514903",
    text:
      " Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, ",
  },
  {
    id: 2,
    name: "BMW",
    maxSpeed: 240,
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bmw-8-series-gran-coupe-101-1560875701.jpg?crop=0.889xw:1.00xh;0.0561xw,0&resize=640:*",
    text:
      " Somethin about a car2, Somethin about a car2, Somethin about a car2, Somethin about a car2, Somethin about a car2, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, ",
  },
  {
    id: 3,
    name: "Honda",
    maxSpeed: 250,
    img: "https://www.honda.co.uk/content/dam/central/portal/nav1-16x9.jpg/jcr:content/renditions/m_r.jpg",
    text:
      " Somethin about a car3, Somethin about a car3, Somethin about a car3, Somethin about a car3, Somethin about a car3, Somethin about a car3, Somethin about a car3, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, Somethin about a car, ",
  },
];

function cars(state = initialState, action) {
  switch (action.type) {
    case "PRINTCAR": {
      window.alert(action.car.name);
      return state;
    }
    default:
      return state;
  }
}

export default cars;
