import React from "react";
import NavbarComponent from "../components/Navbar";


function Error() {

    return (
        <div className="error">
            <NavbarComponent />
            
            <div>
                <form>
                    <h5>404 PAGE NOT FOUND</h5>
                    
                </form>
            </div>
        </div>
    )
}

export default Error