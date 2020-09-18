import React from "react";
import NavbarComponent from "../components/Navbar";
import HeaderComponent from "../components/header";
import DetailComponent from "../components/detail";
import IconComponent from "../components/icon";
import AboutComponent from "../components/about";
import FooterComponent from "../components/footer";
import MenuItems from "../components/MenuItems";

const Menu = () => {

return(
    <div>
        <NavbarComponent/>
        <HeaderComponent/>
        <DetailComponent/>
        <IconComponent/>  
        <AboutComponent/>
        <MenuItems/>
        <FooterComponent/>
    </div>
    );
    
}

export default Menu;