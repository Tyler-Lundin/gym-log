import { useAppDispatch, useAppSelector } from '.';
import { closeAddTag, } from '../store/app.slice';
import { tagThemes } from '../components/settings/themes';
import { addTagToStagedExercise, setNewTagLabel } from '../store/exercise.slice';

const useAddTag = (stagedIndex: number) => {
    const dispatch = useAppDispatch();
    const { newTag } = useAppSelector(state=>state.exercise);
    const { theme } = useAppSelector(state=>state.app.settings);
    const close = (e:any) => {
        e.preventDefault();
        dispatch( addTagToStagedExercise(stagedIndex) );
        dispatch( closeAddTag() );
    }
    const setTag = (e:any) => {
        e.preventDefault();
        dispatch( setNewTagLabel(e.target.value) );
    }

    const tagProps = {
        value: newTag.label,
        onChange: setTag,
        onKeyDown: (e:any) => {
            if (e.key === 'Enter') close(e);
            if (e.key === 'Escape') close(e);
        },
    }
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
        tagProps,

    }
}

export default useAddTag;
