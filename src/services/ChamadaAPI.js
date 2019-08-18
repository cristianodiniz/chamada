
const participants = [
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
];

export const getAllParticipants = () =>
  new Promise((resolve, reject) => {
    resolve(participants);
  });
