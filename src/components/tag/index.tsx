import styles from '../../styles/tag.module.css';
import useTheme from '../../hooks/useTheme';



const useTag = (color: string) => {
    const { useThemeByName } = useTheme();
    const { a, color: themeColor, borderColor } = useThemeByName(color);
    const tagStyle = {
        backgroundColor: a,
        color: themeColor,
        borderColor: borderColor,
    }

    return { tagStyle }
}




const Tag = ( { T, i }: {T:any, i: string | number } ) => {
    const onClick = () => {
        window.alert(' open a tag edit modal, change color and name or delete it' );
    }
    const { tagStyle } = useTag(T.color);

    return (
        <div className={styles.tagContainer} key={i} onClick={onClick} style={tagStyle}>
            {T.label}
        </div>
    )
}


export default Tag;
