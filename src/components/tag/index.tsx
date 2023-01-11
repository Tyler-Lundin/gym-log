import styles from '../../styles/tag.module.css';

const Tag = ( { T, i }: {T:any, i: string | number } ) => {

    const onClick = () => {

        window.alert(' open a tag edit modal, change color and name or delete it' );
    }

    return (
        <div className={styles.tag} key={i} onClick={onClick}>
            {T.label}
        </div>
    )
}


export default Tag;
