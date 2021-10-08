import React, { useContext} from "react";
import PropTypes from "prop-types";

import ThemeContext from "../Context/Themecontext"
import "../toggle.css";



const Toggle=(props)=>{

    const { selected, toggleSelected } = props;
    const [themeMode,setThemeMode] = useContext(ThemeContext)

    return(
        <div className="toggle-container" onClick={()=>{
                setThemeMode(themeMode==="light" ? "dark":"light")
                toggleSelected()
            }}>
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          {selected ? "DARK" : "LIGHT"}
        </div>
      </div>
    );
}


Toggle.propTypes = {
    selected: PropTypes.bool.isRequired,
    toggleSelected: PropTypes.func.isRequired
  };
  
export default Toggle;



