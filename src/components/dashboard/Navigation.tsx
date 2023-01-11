import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/navigation.module.css";
import Settings from "../settings";
import { RiMenuLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeNav, openNav } from "../../store/app.slice";
import CloseButton from "../uxui/CloseButton";

const useNavigation = () => {
	const { isNavOpen } = useAppSelector((state) => state.app);
    const { theme } = useAppSelector((state) => state.app.settings);
    const { color } = theme;
	const dispatch = useAppDispatch();

    const isBlack = color === 'black';

	const open = (e:any) => { e.preventDefault(); dispatch(openNav()); };
	const close = (e:any) => {e.preventDefault(); dispatch(closeNav());};

    const openClasses = [styles.navOpenButton, isBlack ? styles.blackOpenButton : styles.whiteOpenButton].join(' ');

	const openButton = () => (
		<button onClick={open} className={openClasses}>
			<RiMenuLine strokeWidth={0} size={40} color={color}  />
		</button>
	);

	const closeButton = () => <CloseButton onClick={close} disabled={!isNavOpen} className={styles.closeButton} />

    const handleKeyDown = (e:any) => {
        console.log('keydown')
        if (e.key === 'Escape') {
            close(e);
        }
    }

    useEffect(()=>{
        if (isNavOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

       return () => {
           if (isNavOpen) {
               document.removeEventListener('keydown', handleKeyDown);
           }
       }
    },[isNavOpen])

	return {
		isNavOpen,
		openButton,
		closeButton,
		close,
	};
};

const Navigation = () => {
	const { openButton, closeButton, isNavOpen, close, } = useNavigation();
	return (
		<>
			<div
				onClick={close}
				className={isNavOpen ? styles.blurContainer : ""}
			/>
			<div id="navigation-container" className={styles.navContainer}>
				{!isNavOpen && openButton()}
			</div>

				<nav
					id="navigation-for-dashboard"
					className={`${styles.nav} ${isNavOpen && styles.navOpen}`}
				>
                { isNavOpen && (
						<>
					        {closeButton()}
							{isNavOpen && <Settings />}
							<ul>
								<li>
									<Link to="/stats">profile</Link>
								</li>
								<li>
									<Link to="/settings">statistics</Link>
								</li>
								<li>
									<Link to="/seeya">logout</Link>
								</li>
							</ul>
						</>
                    )}
				</nav>
		</>
	);
};

export default Navigation;
