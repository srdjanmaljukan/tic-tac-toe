import React from "react";

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <p className="copy">&copy; Copyright {year}</p>
            <p className="copy">
                Built by Srđan Maljukan
            </p>
        </div>
    )
}

export default Footer;