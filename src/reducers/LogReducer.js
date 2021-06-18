import {
  Get_Logs,
  Add_Logs,
  Delete_Log,
  Set_Current,
  Clear_Current,
  Update_Log,
  Set_Loading,
  Logs_Error,
  Search_Logs,
} from '../Actions/types';

const initialState = {
  logs: null,
  currentLog: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Get_Logs:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case Add_Logs:
      return {
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case Update_Log:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false,
      };
    case Set_Current:
      return {
        ...state,
        currentLog: action.payload,
      };
    case Clear_Current:
      return {
        ...state,
        currentLog: null,
      };
    case Delete_Log:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case Search_Logs:
      return {
        ...state,
        logs: action.payload,
      };
    case Set_Loading:
      return {
        ...state,
        loading: true,
      };
    case Logs_Error:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
