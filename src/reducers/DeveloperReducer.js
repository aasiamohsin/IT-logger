import {
  Get_Developer,
  Add_Developer,
  Delete_Developer,
  Developer_Error,
  Set_Loading,
} from '../Actions/types';

const initialSatate = {
  developers: null,
  loading: false,
  error: null,
};

export default (state = initialSatate, action) => {
  switch (action.type) {
    case Get_Developer:
      return {
        ...state,
        developers: action.payload,
        loading: false,
      };
    case Add_Developer:
      return {
        developers: [...state.developers, action.payload],
        loading: false,
      };
    case Delete_Developer:
      return {
        ...state,
        developers: state.developers.filter(
          (developer) => developer.id !== action.payload
        ),
      };
    case Set_Loading:
      return {
        ...state,
        loading: true,
      };
    case Developer_Error:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
