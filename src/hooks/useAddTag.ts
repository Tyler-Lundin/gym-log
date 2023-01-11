import { useAppDispatch, useAppSelector } from '.';
import { setAddExerciseTagOpen } from '../store/app.slice';
import { tagThemes } from '../components/settings/themes';

const useAddTag = () => {
    const dispatch = useAppDispatch();
    const { newTag } = useAppSelector(state=>state.exercise);
    const { theme } = useAppSelector(state=>state.app.settings);
    const close = (e:any) => { e.preventDefault(); dispatch( setAddExerciseTagOpen(false) ); }
    const color = tagThemes.find( t => t.name === newTag.color )?.color;
    const backgroundColor = theme.a;
    const borderColor = color === 'black' ? 'black' : 'white';
    const background = tagThemes.find( t => t.name === newTag.color )?.a;

    return {
        close,
        color,
        backgroundColor,
        borderColor,
        background,
    }
}

export default useAddTag;
