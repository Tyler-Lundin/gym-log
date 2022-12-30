import styles from '../styles/tag.module.css';

const Tag = ( { T, i }: {T:any, i: string | number } ) => {



    return (
        <div key={i} className={styles.tagContainer} style={{backgroundColor: T.color}} >
            {T.label}
        </div>
    )
}


export default Tag;
