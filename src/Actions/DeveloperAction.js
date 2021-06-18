import {
  Get_Developer,
  Add_Developer,
  Delete_Developer,
  Developer_Error,
  Set_Loading,
} from '../Actions/types';

export const getDevelopers = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/developer');
    const data = await res.json();
    console.log(data);
    dispatch({
      type: Get_Developer,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Developer_Error,
      payload: err.response.data,
    });
  }
};

export const addDeveloper = (developer) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/developer', {
      method: 'POST',
      body: JSON.stringify(developer),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: Add_Developer,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Developer_Error,
      payload: err.response.data,
    });
  }
};

export const deleteDeveloper = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/developer/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: Delete_Developer,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: Developer_Error,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: Set_Loading,
  };
};
