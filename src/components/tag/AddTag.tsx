import styles from '../../styles/addTag.module.css';
import TagThemePicker from './TagThemePicker';
import CloseButton from '../uxui/CloseButton';
import useAddTag from '../../hooks/useAddTag';

const AddTag = ({i}:{i:number} ) => {
    const { close, color, backgroundColor, borderColor, background, tagProps, } = useAddTag(i);
    return (
        <div className={``}>
            <div className={styles.addTagBlurContainer} style={{backgroundColor}}></div>
            <CloseButton onClick={close} className={``} disabled={false}/>
            <div className={``} style={{borderColor, background}}>
                <label htmlFor="tag">Tag</label>
                <input name='tag' type="text" style={{color}} {...tagProps}
                    className={`w-full h-10 p-2 border-b border-solid border-black`}
                />
            </div>
            <TagThemePicker />
        </div>
    )
}


export default AddTag;
