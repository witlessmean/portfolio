import React, { useEffect, } from "react";
import storage from "local-storage-fallback";
import { CustomMoonIcon, CustomSunIcon } from '../../../utils/reuseableStyles';
import IconButton from '@material-ui/core/IconButton';

const DarkMode = ({ mode, setMode }) => {
    
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
