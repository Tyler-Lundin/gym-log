import { RiCloseFill } from 'react-icons/ri';
import { useAppSelector } from '../../hooks';

type ButtonProps = {
    onClick: (e:any) => void;
    disabled: boolean;
    className?: string;
}


const CloseButton = (props:ButtonProps) => {

    const { theme } = useAppSelector((state) => state.app.settings);

    return (
		<button {...props} className={[`absolute top-2 right-2`, props.className ?? ''].join(' ')}>
			<RiCloseFill size={40} className='fill-inherit'/>
		</button>
	);
}

export default CloseButton;



