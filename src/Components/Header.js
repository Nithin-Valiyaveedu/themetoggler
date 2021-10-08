import React,{ useState } from "react";
import "../App.css"

//import ThemeToggler from "./ThemeToggler";
import Toggle from "./Toggle";
const Header = ()=>{
    const [selected, setSelected] = useState(false);
    return(
        <header>
            <h1>Theme toggler</h1>
            <Toggle selected={selected}
            toggleSelected={() => {
              setSelected(!selected);
            }}/>
        </header>
    )

}


export default Header;