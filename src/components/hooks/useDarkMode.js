import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
    const[darkMode, setDarkMode] = useLocalStorage('darkMode');

    useEffect(() => {
        const body = document.getElementsByTagName('body');
        if(darkMode){
            body.addClass = 'dark-mode'
        } else {
            body.removeClass = 'dark-mode'
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}