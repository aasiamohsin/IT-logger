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
} from './types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: Get_Logs,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Logs_Error,
      payload: err.response.data,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: Add_Logs,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Logs_Error,
      payload: err.response.data,
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: Update_Log,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Logs_Error,
      payload: err.response.data,
    });
  }
};

export const setCurrent = (log) => {
  return {
    type: Set_Current,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: Clear_Current,
  };
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: Delete_Log,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: Logs_Error,
      payload: err.response.data,
    });
  }
};

export const searchLog = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: Search_Logs,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Logs_Error,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: Set_Loading,
  };
};
