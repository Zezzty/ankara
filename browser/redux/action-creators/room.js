/********* CONSTANTS ********/
export const SET_JOINED_TRUE = 'SET_JOINED_TRUE';
export const SET_JOINED_FALSE = 'SET_JOINED_FALSE';

/******* ACTION CREATORS ********/
export const joinRoom = (id) => ({
    type: SET_JOINED_TRUE,
    id
});

export const leaveRoom = () => ({
    type: SET_JOINED_FALSE
});

/** -------- THUNK-DISPATCHERS --------- */
