import React from "react";
import { useNavigate } from "react-router-dom";



export default function Header() {

    const navigate = useNavigate()


    return (

        <div style={{ width: "100%", height: 60, backgroundColor: "black" }}>
            <div style={{ width: "98%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                <div style={{ padding: 10 }}>

                    <h2 style={{ margin: 0, color: "white" }}><span style={{ color: "red" }}>T</span>AAZA <span style={{ color: "yellowgreen" }}>K</span>HABAR</h2>
                </div>


            </div>
        </div>
    );
}


