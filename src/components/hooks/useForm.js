import {useState} from 'react';

export const useForm = (initialValue) => {
    const[value, setValue] = useState(initialValue);

    const handleChanges = event => {
        setValue(event.target.value);
    }

    return[value, handleChanges];
}