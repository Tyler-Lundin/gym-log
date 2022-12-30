import { Link } from "react-router-dom";
import styles from "../styles/navigation.module.css";
import Settings from "./settings";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeNav, openNav } from "../store/app.slice";
import { useEffect } from "react";

const useNavigation = () => {
	const { isNavOpen } = useAppSelector((state) => state.app);
    const { theme } = useAppSelector((state) => state.app.settings);
    const { color } = theme;
	const dispatch = useAppDispatch();

	const open = () => dispatch(openNav());
	const close = () => dispatch(closeNav());

	const openButton = () => (
		<button onClick={open} className={styles.navOpenButton}>
			<RiMenuLine strokeWidth={0} size={40} color={color}  />
		</button>
	);

	const closeButton = () => (
		<button
			disabled={!isNavOpen}
			onClick={close}
			className={styles.navClose}
		>
			<RiCloseFill size={40} color={color}/>
		</button>
	);

    const handleKeyDown = (e:any) => {
        console.log('keydown')
        if (e.key === 'Escape') {
            close();
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
			</div>
		</>
	);
};

export default Navigation;
