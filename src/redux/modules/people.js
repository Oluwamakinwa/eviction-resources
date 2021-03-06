import { omit } from 'lodash';


const CREATE = 'people/CREATE';
const DELETE = 'people/DELETE';
const CHANGE_ATTRIBUTE = 'people/CHANGE_ATTRIBUTE';


export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CREATE: return {
      ...state,
      [action.payload]: {},
    };

    case DELETE: return {
      ...omit(state, action.payload),
    };

    case CHANGE_ATTRIBUTE: return {
      ...state,
      [action.payload.id]: {
        ...state[action.payload.id],
        [action.payload.attribute]: action.payload.value,
      }
    }
    
    default: return state;
  }
}


export function createPerson(id) {
  return {
    type: CREATE,
    payload: id,
  };
}


export function deletePerson(id) {
  return {
    type: DELETE,
    payload: id,
  };
}

export function changePersonAttribute(id, attribute, value) {
  return {
    type: CHANGE_ATTRIBUTE,
    payload: {
      id,
      attribute,
      value,
    },
  };
}
