import SearchBar from "./SearchBar"
import { useState } from "react"

import Features from "./Features"
export default function NavBar() {
    const [ active ,setActive]=useState();
    return (
        <div className="flex items-center min-w-full justify-center h-16">
            <div className="flex justify-between  w-[60%] ">
                <div className="flex justify-center items-center gap-5   ">
                    <img className="w-11 h-11" src="https://cdn-icons-png.flaticon.com/512/2496/2496097.png" alt="" />
                    <SearchBar />
                </div>

                <div className="flex items-center ">
                    <Features title={"Home"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"}  />
                    <Features title={"Network"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />
                    <Features title={"Jobs"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />
                    <Features title={"Messaging"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />
                    <Features title={"Notifications"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />

                </div>
            </div>
        </div>
    );
}