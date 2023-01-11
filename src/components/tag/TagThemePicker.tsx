import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setNewTagColor, setNewTagLabel } from '../../store/exercise.slice';
import styles from '../../styles/tagThemePicker.module.css';
import { dark, light, fire, water, grass, electric, ice, poison, ground, Theme } from '../settings/themes/index';

const TagThemePicker = () => {

    const dispatch = useAppDispatch();

    const setTagColor = (e: any) => { e.preventDefault(); dispatch( setNewTagColor(e.target.value) ); }

    const tagThemes = [
        dark,
        light,
        fire,
        water,
        grass,
        electric,
        ice,
        poison,
        ground,
    ];

    const k = (i:any, l: string) => ( `${i}-${l}` );

    const Z = {
        className: styles.colorSelector,
        onClick: setTagColor,
    }


    useEffect(() => { dispatch( setNewTagColor( tagThemes[0].c ) ) }, []);

    return (
        <div className={styles.tagThemePickerContainer}>
            {tagThemes.map((theme, i) => (
                <div key={`themePicker${i}`} className={styles.palette}>
                    <button value={theme.c} key={k(i, 'c')} {...Z} style={{backgroundColor: theme.c}} />
                    <button value={theme.d} key={k(i, 'd')} {...Z} style={{backgroundColor: theme.d}} />
                    <button value={theme.e} key={k(i, 'e')} {...Z} style={{backgroundColor: theme.e}} />
                    <h2>{theme.name}</h2>
                </div>
            ))}
        </div>

    )
}

export default TagThemePicker;
