import { useEffect } from 'react';
import { useAppDispatch } from '.';
import { tagThemes } from '../components/settings/themes';
import { setNewTagColor } from '../store/exercise.slice';
import styles from '../styles/tagThemePicker.module.css';

const useTagThemePicker = () => {
    const dispatch = useAppDispatch();
    const setTagColor = (e: any) => { e.preventDefault(); dispatch( setNewTagColor(e.target.value) ); }
    const key = (i:any, l: string) => ( `${i}-${l}` );
    const buttonProps = {
        className: styles.colorSelector,
        onClick: setTagColor,
    }

    useEffect(() => { dispatch( setNewTagColor( tagThemes[0].c ) ) }, []);

    return {
        buttonProps,
        key,
        styles,
        tagThemes,
    }
}

export default useTagThemePicker;
