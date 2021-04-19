import React, { useEffect, useContext } from "react";
import storage from "local-storage-fallback";
import { CustomMoonIcon, CustomSunIcon } from '../../../utils/reuseableStyles';
import IconButton from '@material-ui/core/IconButton';
import { ModeContext } from "./ModeContext";

export const getInitialMode = () => {
    const savedMode = storage.getItem("mode");
    return savedMode ? JSON.parse(savedMode) : false;
  };

const DarkMode = () => {
    
    const { mode, setMode } = useContext(ModeContext);
    
    useEffect(() => {
        storage.setItem("mode", JSON.stringify(mode));
        console.log(mode)
      }, [mode]);

return (
  <>
   <IconButton style={{ marginLeft: "3vw" }} onClick={() => {
     setMode(!mode)
    }} >
        { mode ? <CustomSunIcon /> : <CustomMoonIcon /> } 
    </IconButton>
 </>
  )
};

export default DarkMode;





