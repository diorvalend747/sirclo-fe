import React from "react";

const Navbar = () => {
    return (
        <nav id="nav" className="font-sans flex flex-col sm:flex-row sm:text-left sm:justify-between py-2 px-5 bg-white shadow w-full">
            <div className="mb-2 sm:mb-0 flex flex-row">
                <div className="text-center">
                    <a href="/" className="text-3xl no-underline text-grey-darkest font-sans font-bold">Top Music Charts</a><br/>
                    <div className="text-center">
                    <p className="text-m text-grey-dark">Get Top Music Charts With Last.FM API</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;