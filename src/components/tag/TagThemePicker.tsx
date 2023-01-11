import useTagThemePicker from '../../hooks/useTagThemePicker';

const TagThemePicker = () => {

    const { buttonProps, key, styles, tagThemes } = useTagThemePicker();

    return (
        <div className={styles.tagThemePickerContainer}>
            {tagThemes.map((theme, i) => (
                <div key={`themePicker${i}`} className={styles.palette}>
                    <button value={theme.name} key={key(i, 'a')} {...buttonProps} style={{backgroundColor: theme.a}}>
                        <h2 style={{color:theme.color}}>{theme.name}</h2>
                    </button>
                </div>
            ))}
        </div>

    )
}

export default TagThemePicker;
