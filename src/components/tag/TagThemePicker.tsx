import useTagThemePicker from '../../hooks/useTagThemePicker';
import styles from '../../styles/tagThemePicker.module.css';

const TagThemePicker = () => {

    const { buttonProps, key, tagThemes } = useTagThemePicker();

    return (
        <div className={styles.tagThemePickerContainer}>
            {tagThemes.map((theme, i) => (
                <div key={`themePicker${i}`} className={styles.buttonContainer}>
                    <button value={theme.name} key={key(i, 'a')} {...buttonProps} style={{backgroundColor: theme.a, borderColor: theme.color}}>
                        <h2 style={{color:theme.color}}>{theme.name}</h2>
                    </button>
                </div>
            ))}
        </div>

    )
}

export default TagThemePicker;
