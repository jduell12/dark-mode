import {useState} from 'react';

export const useForm = (initialValues) => {
    const[values, setValues] = useState(initialValues);

    const handleChanges = event => {
        setValues(
            {
                value: event.target.value,
                path: `/${event.target.value}`
            }
        );
    }

    return[values, handleChanges];
}