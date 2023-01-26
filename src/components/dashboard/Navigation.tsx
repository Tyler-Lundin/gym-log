import { Link } from "react-router-dom";
import Settings from "../settings";
import useTheme from "../../hooks/useTheme";
import useNavigation from "../../hooks/useNavigation";
import { RiMenuLine } from "react-icons/ri";
import CloseButton from "../uxui/CloseButton";

const NavMenu = () => {
    const {
        isNavOpen,
        handleClose,
        theme,
    } = useNavigation();

    const c = theme.color;
    const n = c === 'black' ? 'white' : 'black';

    return (
      <nav
        id="navigation-for-dashboard"
        style={{background: theme.d}}
        className={`
            absolute right-0 -top-20 h-screen w-screen z-50
            translate-x-full
            transition-all duration-300 ease-in-out
            ${ isNavOpen ? '-translate-x-0' : '' }
        `}
      >
        {isNavOpen && (
          <>
            <CloseButton onClick={handleClose} disabled={!isNavOpen} className={`bg-transparent fill-${c} focus:bg-${c} focus:fill-${n} focus:outline-none`}/>

            <ul className='gap-12'>
              <li>
                <Link className={`text-5xl text-${c}`} to="/profile">profile</Link>
              </li>
              <li>
                <Link className={`text-5xl text-${c}`} to="/logout">logout</Link>
              </li>
            </ul>

            <Settings />
          </>
        )}
      </nav>
    );
};


const NavigationContainer = () => {
    const { isNavOpen, handleClose, handleOpen } = useNavigation();
    const { theme } = useTheme();

    const c = theme.color;
    const n = c === "black" ? "white" : "black";

  return (
    <div className='relative top-0 right-0'>
        <div id='navigation-backdrop-blur' onClick={handleClose} className={isNavOpen ? '' : ''} />

        <div id="navigation-open-button-container"
            className={`
                fixed top-2 right-2 h-16 z-50
            `}
        >
            {!isNavOpen && (
                <button onClick={handleOpen} className={`bg-transparent h-full
                    hover:opacity-80 focus:opacity-80
                    focus:scale-125 transition-all duration-300 ease-in-out
                `}>
                    <RiMenuLine strokeWidth={0} size={40} className='fill-inherit' />
                </button>
            )}
        </div>

        <NavMenu />
    </div>
  );
};

export default NavigationContainer;

