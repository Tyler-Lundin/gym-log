import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '.';
import { closeNav, openNav } from "../store/app.slice";

const useNavigation = () => {
  const { isNavOpen } = useAppSelector((state) => state.app);
  const { theme } = useAppSelector((state) => state.app.settings);
  const dispatch = useAppDispatch();

  const handleOpen = (e: any) => {
    e.preventDefault();
    dispatch(openNav());
  };
  const handleClose = (e: any) => {
    e.preventDefault();
    dispatch(closeNav());
  };

  const handleKeyDown = (e: any) => {
    console.log("keydown");
    if (e.key === "Escape") {
      handleClose(e);
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
    theme,
    handleOpen,
    handleClose,
  };
};

export default useNavigation;
