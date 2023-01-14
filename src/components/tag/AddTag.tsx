import styles from '../../styles/addTag.module.css';
import TagThemePicker from './TagThemePicker';
import CloseButton from '../uxui/CloseButton';
import useAddTag from '../../hooks/useAddTag';

const AddTag = ({i}:{i:number} ) => {
    const { close, color, backgroundColor, borderColor, background} = useAddTag();
    return (
        <div className={styles.addTagContainer}>
            <div className={styles.addTagBlurContainer} style={{backgroundColor}}></div>
            <CloseButton onClick={close} className={styles.closeButton} disabled={false}/>
            <div className={styles.newTagContainer} style={{borderColor, background}}>
                <label htmlFor="tag">Tag</label>
                <input name='tag' type="text" style={{color}} />
            </div>
            <TagThemePicker />
            <div className={styles.addTagButtonContainer}>
                <button className={styles.addTagButton} onClick={(e)=>{e.preventDefault();}}>Add</button>
            </div>
        </div>
    )
}


export default AddTag;
