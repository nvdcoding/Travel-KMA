/* eslint-disable */
import React, { useEffect } from "react";
import HeaderLayout from "../components/layout/header";
export default function Tours() {
    useEffect(() => {
    }, []);
    return (
        <>
            <div className="tours__wrapper">
                <HeaderLayout />
                <main id="main" class="">
                    <div id="content" role="main" class="content-area">
                        <h1>Day la tour du lich</h1>
                    </div>
                </main>
            </div>
        </>
    );
}