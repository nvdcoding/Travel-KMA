import React from "react";
import Footer from "./footer";
import HeaderLayout from "./header";

function Layout({ children }) {
    return (
        <>
            <div className="layout__wrapper">
                <HeaderLayout />
                <main className="">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
export default Layout;