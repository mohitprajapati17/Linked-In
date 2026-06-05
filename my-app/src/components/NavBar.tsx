import SearchBar from "./SearchBar"

import Features from "./Features"
export default function NavBar() {
    return (
        <div className="flex items-center min-w-full justify-center h-16">
            <div className="flex justify-between  w-[60%] ">
                <div className="flex justify-center items-center  ">
                    <SearchBar />
                </div>

                <div className="flex items-center ">
                    <Features title={"Home"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />
                    <Features title={"Network"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />
                    <Features title={"Jobs"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />
                    <Features title={"Messaging"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />
                    <Features title={"Notifications"} icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"} />

                </div>
            </div>
        </div>
    );
}