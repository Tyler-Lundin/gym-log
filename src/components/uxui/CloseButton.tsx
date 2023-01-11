import { RiCloseFill } from 'react-icons/ri';
import { useAppSelector } from '../../hooks';
import styles from '../../styles/closeButton.module.css';

type ButtonProps = {
    onClick: (e:any) => void;
    disabled: boolean;
    className: string;
}


const CloseButton = (props:ButtonProps) => {

    const { theme } = useAppSelector((state) => state.app.settings);
    const { color } = theme;

    return (
		<button {...props} className={[styles.closeButton, props.className].join(' ')}>
			<RiCloseFill size={40} color={color}/>
		</button>
	);
}

export default CloseButton;



