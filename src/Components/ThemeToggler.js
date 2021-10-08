import React,{useContext} from "react";
import ThemeContext from "../Context/Themecontext"


const ThemeToggler =()=>{

    const [themeMode,setThemeMode] = useContext(ThemeContext)
    return(
        <div>
            <button onClick={()=>{
                setThemeMode(themeMode==="light" ? "dark":"light")
            }}>{themeMode==="light"? "Light":"Dark"}
            </button>

        </div>
    )

}


export default ThemeToggler;