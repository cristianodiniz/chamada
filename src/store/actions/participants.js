import { getAllParticipants } from "../../services/ChamadaAPI";
import { showLoading, hideLoading } from "react-redux-loading";

import { createErrorMessage } from "./errors";

export const COLLECTION_NAME = "attendances";

// #region reciverParticipants
export const RECIVER_PARTICIPANTS = "RECIVER_PARTICIPANTS";
export function reciverParticipants(data) {
  return {
    type: RECIVER_PARTICIPANTS,
    participants: data
  };
}

export function handleReciverParticipants(scheduleId, callback = null) {
  return dispatch => {
    getAllParticipants(scheduleId)
      .then(data => {
        dispatch(reciverParticipants(data));
        callback(null, data);
      })
      .catch(e => {
        console.warn("Error in handleReciverParticipants: ", e);
        callback(e, null);
      });
  };
}

// #endregion reciverParticipants

// #region updateAtendence
export const UPDATE_ATTENDANCE = "UPDATE_ATTENDANCE";
export const updateAtendence = atendence => {
  return {
    type: RECIVER_PARTICIPANTS,
    atendence
  };
};

export const handleUpdateAtendence = atendence => {
  return (dispatch, _getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    dispatch(showLoading);

    const ref = firestore.collection(COLLECTION_NAME);

    if (!atendence.id) {
      ref
        .add({
          ...atendence
        })
        .then(response => {
          console.log("response", response);
          dispatch(updateAtendence(atendence));
          dispatch(hideLoading);
        })
        .catch(error => {
          dispatch(createErrorMessage(error));
          dispatch(hideLoading);
        });
    } else {
      ref
        .doc(atendence.id)
        .update({
          ...atendence
        })
        .then(response => {
          console.log("response", response);
          dispatch(updateAtendence(atendence));
          dispatch(hideLoading);
        })
        .catch(error => {
          dispatch(createErrorMessage(error));
          dispatch(hideLoading);
        });
    }
  };
};

// #endregion

// #region CREATE_PERSON

const persons = [
  { lastName: "Back", firstName: "Klaus" },
  { lastName: "Back", firstName: "Oliver" },
  { lastName: "Bahlhorn", firstName: "Holger" },
  { lastName: "Blackburn", firstName: "Norman" },
  { lastName: "Bulseco", firstName: "Marco Gaudencio Madrid" },
  { lastName: "Czirniok", firstName: "Danny" },
  { lastName: "Czirniok", firstName: "Ralf" },
  { lastName: "Diener", firstName: "Volker Jürgen" },
  { lastName: "Dietzel", firstName: "Ronald Kurt" },
  { lastName: "Dzierzon", firstName: "Daniel" },
  { lastName: "Hartmann", firstName: "Karl Dietrich" },
  { lastName: "Heuser", firstName: "Heinrich" },
  { lastName: "Hoffmann", firstName: "Tobias Uwe" },
  { lastName: "Kleine", firstName: "Robin" },
  { lastName: "Klier", firstName: "Martin" },
  { lastName: "König", firstName: "Torsten" },
  { lastName: "Kouame", firstName: "Johnson" },
  { lastName: "Krause", firstName: "Oliver Steffen" },
  { lastName: "Kusserow", firstName: "Tino" },
  { lastName: "Kwabena", firstName: "Asamoah" },
  { lastName: "Lakpa", firstName: "Hubert" },
  { lastName: "Leiss", firstName: "Simon" },
  { lastName: "Leiss", firstName: "Thomas" },
  { lastName: "Lesnik", firstName: "Thomas" },
  { lastName: "Longnecker", firstName: "Ronald Keith" },
  { lastName: "Lorenzen", firstName: "Wendall" },
  { lastName: "Lorke", firstName: "Hans-Albert" },
  { lastName: "Lüning", firstName: "Jobst- Dieter" },
  { lastName: "Martins", firstName: "Parley" },
  { lastName: "Masih", firstName: "Joseph" },
  { lastName: "Meisenfelder", firstName: "Gernot" },
  { lastName: "Menssen", firstName: "Dieter Robert Anton" },
  { lastName: "Mucatchua", firstName: "Jose" },
  { lastName: "Nüske", firstName: "Peter" },
  { lastName: "Panitsch", firstName: "Michael" },
  { lastName: "Pinto", firstName: "Cristiano Diniz" },
  { lastName: "Pires", firstName: "Eduardo Henrique" },
  { lastName: "Rodriguez-Klammer", firstName: "Joaquin" },
  { lastName: "Rutz", firstName: "Werner" },
  { lastName: "Saalmann", firstName: "Sebastian" },
  { lastName: "Scherer", firstName: "Roman" },
  { lastName: "Schneider", firstName: "Manuel Ansgar" },
  { lastName: "Schröder", firstName: "Daniel" },
  { lastName: "Skibbe", firstName: "Henning Hartmut" },
  { lastName: "Skrotzki", firstName: "Christopher Frank" },
  { lastName: "Sommer", firstName: "Lukas" },
  { lastName: "Stelter", firstName: "Calvin" },
  { lastName: "Summers", firstName: "Alan James" },
  { lastName: "Sylwester", firstName: "Manfred" },
  { lastName: "Timm", firstName: "Günter Wilhelm Ernst" },
  { lastName: "Vranchev", firstName: "Tsvetan Georgiev" },
  { lastName: "Waterböhr", firstName: "Denny" },
  { lastName: "Waterböhr", firstName: "Micha" },
  { lastName: "Wendt", firstName: "Fernando Daniel" },
  { lastName: "Wenke", firstName: "Sven-Marek" },
  { lastName: "Whipple", firstName: "Dane" },
  { lastName: "Wiborny", firstName: "Thorsten Andreas" },
  { lastName: "Wiehe", firstName: "Oliver Norman" },
  { lastName: "Wittkopp", firstName: "Martin" },
  { lastName: "Wolf", firstName: "Matthias Hermann" },
  { lastName: "Wolf", firstName: "Michael Jakob" },
  { lastName: "Wolff", firstName: "Reinhold Werner" },
  { lastName: "Azumah", firstName: "Nkrumah" },
  { lastName: "Ghadimpur", firstName: "Behrouz" },
  { lastName: "Igbineweka Egbon", firstName: "Richard" },
  { lastName: "Iskandary", firstName: "Sayed Islam" },
  { lastName: "Jotic", firstName: "Nebojsa (Bilal)" },
  { lastName: "Kuttu", firstName: "Vincent" },
  { lastName: "Lehmann", firstName: "Stephan" },
  { lastName: "Muzafari", firstName: "Hamid" },
  { lastName: "Öcel", firstName: "Vedat" },
  { lastName: "Odoom", firstName: "Feni Edward" },
  { lastName: "Pilay Sanchez", firstName: "Victor Rene" },
  { lastName: "Sabbaghian Peiro", firstName: "Arshia" },
  { lastName: "Steckel", firstName: "Marvin" },
  { lastName: "Taheri", firstName: "Ali Akbar" },
  { lastName: "Yeboah", firstName: "Joseph Kwame" },
  { lastName: "Yousefvand", firstName: "Ahmat" },
  { lastName: "Kisters", firstName: "Andre (ist ältester!)" }
];
export const handleCreatePerson = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    for (let idx in persons) {
      const person = persons[idx];
      firestore
        .collection("persons")
        .add({
          ...person,
          fullName: `${person.firstName} ${person.lastName} `,
          office: "Elder",
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/chamda-online.appspot.com/o/avatar.png?alt=media&token=840682a4-9423-4ada-b577-21508151d4ac",
          createBy: authorId,
          createAt: new Date()
        })
        .then(response => {
          console.log("response", response);
        })
        .catch(error => {
          dispatch(createErrorMessage(error));
        });
    }
  };
};

// #endregion

// #region UPDATE PERSON
export const handleUpdatePerson = (personId,person) => {
  return (dispatch, _getState, { getFirestore }) => {
    debugger
    const firestore = getFirestore();
    dispatch(showLoading);
    const ref = firestore.collection("persons");
    ref.doc(personId)
      .update({
        ...person
      })
      .then(response => {
        console.log("response", response);
        // dispatch(updateAtendence(atendence));
        dispatch(hideLoading);
      })
      .catch(error => {
        dispatch(createErrorMessage(error));
        dispatch(hideLoading);
      });
  };
};

// #endregion

// #region SEARCH_PERSON
export const SEARCH_PERSON = "SEARCH_PERSON";
export function searchPerson(searchTerm) {
  return {
    type: SEARCH_PERSON,
    search: searchTerm
  };
}

export function handleOnSearchParticipants(searchTerm) {
  return dispatch => {
    dispatch(showLoading());
    dispatch(searchPerson(searchTerm));
    dispatch(hideLoading());
  };
}

// #endregion
