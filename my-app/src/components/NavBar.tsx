import SearchBar from "./SearchBar"
import { useState } from "react"
import { GlobeLock, MessageCircleMore, HouseHeart, BriefcaseBusiness, Bell } from "lucide-react"
import Features from "./Features"

interface tab {
    name: string,
    icon: any
}
export default function NavBar() {
    const [active, setActive] = useState("Home");
    const tabs: tab[] = [
        { name: "Home", icon: <HouseHeart /> },
        { name: "Network", icon: <GlobeLock /> },
        { name: "Jobs", icon: <BriefcaseBusiness /> },
        { name: "Messaging", icon: <MessageCircleMore /> },
        { name: "Notifications", icon: <Bell /> }
    ];
    return (
        <div className="flex items-center min-w-full justify-center h-16">
            <div className="flex justify-between  w-[60%] ">
                <div className="flex justify-center items-center gap-5   ">
                    <img className="w-11 h-11" src="https://cdn-icons-png.flaticon.com/512/2496/2496097.png" alt="" />
                    <SearchBar />
                </div>

                <div className="flex items-center ">
                    {tabs.map((tab) => {
                        return (
                            <Features
                                key={tab.name}
                                title={tab.name}
                                icon={tab.icon}
                                isActive={active == tab.name}
                                onClick={() => setActive(tab.name)}
                            />
                        )
                    })}


                </div>
            </div>
        </div>
    );
}