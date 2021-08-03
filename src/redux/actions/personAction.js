export const SET_PERSON = 'SET_PERSON';
export const NOT_SHOWN = 'NOT_SHOWN';


export const setPerson = person => (
    {
        type: SET_PERSON,
        payload: person
    }
);

export const ShownOff = (bool) => (
    {
        type: NOT_SHOWN,
        payload: bool
    }
);
