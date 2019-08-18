const api = "http://localhost:3001";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};


// export const getAllParticipants = () =>
//   fetch(`${api}/participants`, { headers })
//     .then(res => res.json())
//     .then(data => data.categories);

participants = [
    {
      image: {
        url: "http://lorempixel.com/250/250/people?1=csd",
        title: "Remy Sharp"
      },
      name: "Nina Ramos",
      attended: {
        sacramental: true,
        sundaySchool: true
      },
      date: "2019-07-21"
    },
    {
      image: {
        url: "http://lorempixel.com/250/250/people?1=98989",
        title: "Remy Sharp"
      },
      name: "Avery Vasquez",
      attended: {
        sacramental: true,
        sundaySchool: true
      },
      date: "2019-07-21"
    },
    {
      image: {
        url: "http://lorempixel.com/250/250/people?1=120900y",
        title: "Remy Sharp"
      },
      name: "Sergio Fernandez",
      attended: {
        sacramental: true,
        sundaySchool: true
      },
      date: "2019-07-21"
    },
    {
      image: {
        url: "http://lorempixel.com/250/250/people?1=120909",
        title: "Remy Sharp"
      },
      name: "Maya Reynolds",
      attended: {
        sacramental: true,
        sundaySchool: true
      },
      date: "2019-07-21"
    },
    {
      image: {
        url: "http://lorempixel.com/250/250/people?1=120909hjhkk",
        title: "Remy Sharp"
      },
      name: "Imani Juarez",
      attended: {
        sacramental: true,
        sundaySchool: true
      },
      date: "2019-07-21"
    }
  ]

export const getAllParticipants = () =>
  new Promise((resolve, reject)=>{
    resolve(participants)
  })