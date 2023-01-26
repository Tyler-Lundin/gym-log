import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/navigation.module.css";
import Settings from "../settings";
import { RiMenuLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeNav, openNav } from "../../store/app.slice";
import CloseButton from "../uxui/CloseButton"; import useTheme from "../../hooks/useTheme";

const useNavigation = () => {
  const { isNavOpen } = useAppSelector((state) => state.app);
  const { theme } = useAppSelector((state) => state.app.settings);
  const { color } = theme;
  const dispatch = useAppDispatch();

  const isBlack = color === "black";

  const open = (e: any) => {
    e.preventDefault();
    dispatch(openNav());
  };
  const close = (e: any) => {
    e.preventDefault();
    dispatch(closeNav());
  };

  const openClasses = [
    styles.navOpenButton,
    isBlack ? styles.blackOpenButton : styles.whiteOpenButton,
  ].join(" ");

  const openButton = () => (
    <button onClick={open} className={openClasses}>
      <RiMenuLine strokeWidth={0} size={40} color={color} />
      <div className={styles.slidingBox} />
    </button>
  );

  const closeButton = () => (
    <CloseButton
      onClick={close}
      disabled={!isNavOpen}
      className={styles.closeButton}
    />
  );

  const handleKeyDown = (e: any) => {
    console.log("keydown");
    if (e.key === "Escape") {
      close(e);
    }
  };

  useEffect(() => {
    if (isNavOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (isNavOpen) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [isNavOpen]);

  return {
    isNavOpen,
    openButton,
    closeButton,
    close,
  };
};

const Navigation = () => {
    const { isNavOpen, closeButton } = useNavigation();

    return (
      <nav
        id="navigation-for-dashboard"
        className={`${styles.nav} ${isNavOpen && styles.navOpen}`}
      >
        {isNavOpen && (
          <>{/* unrender for animation for performance */}
            {closeButton()}
            {isNavOpen && <Settings />}
            <ul className='gap-12'>
              <li>
                <Link className='text-5xl' to="/profile">profile</Link>
              </li>
              <li>
                <Link className='text-5xl' to="/seeya">logout</Link>
              </li>
            </ul>
          </>
        )}
      </nav>
    );
};


const NavigationContainer = () => {
    const { openButton, isNavOpen, close } = useNavigation();
    const { theme } = useTheme();

    const c = theme.color;
    const n = c === "black" ? "white" : "black";

  return (
    <>
        <div id='navigation-backdrop-blur' onClick={close} className={isNavOpen ? styles.blurContainer : ""} />

        <div id="navigation-open-button-container"
            className={`fixed bottom-0 left-0
                w-screen backdrop-blur-md border-${c}
                border-solid border-t
                flex justify-center items-center
            `}
            style={{background: theme.b}}
        >
            {!isNavOpen && openButton()}
        </div>

        <Navigation />
    </>
  );
};

export default NavigationContainer;

