import ProfileCard from "./ProfileCard"
import { UserRoundPen } from "lucide-react"
import { Bookmark } from "lucide-react"
import { Users } from "lucide-react"
import { Newspaper } from "lucide-react"
import { Calendars } from "lucide-react"
export default function ProfileSection() {
    return (
        <div className="h-full rounded-xl ">
            <ProfileCard image={<UserRoundPen />} name="mohit" bannerImage={"https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg"} description="Front End Developer full stack developer " location="Delhi" />
            <div className=" mt-4  border-1 border-black rounded-xl px-2 py-5">
                <h1 className="text-sm">Gain exclusive site and content</h1>
                <h1 className="text-blue-800"> Redeem premium   for free</h1>



            </div>

            <div className="mt-4  border-1 border-black rounded-xl  px-2 py-5">
                <div className="flex justify-between py-2 ">
                    <p>Profile viewers</p>
                    <p>123</p>
                </div>

                <div className="flex justify-between py-2 ">
                    <p>Post impressions</p>
                    <p>123</p>
                </div>
            </div>

            <div className="mt-4  border-1 border-black rounded-xl py-5 ">
                <p className="flex items-center px-2"><span className="mr-2"><Bookmark /></span> Saved Items</p>
                <p className="flex items-center px-2"><span className="mr-2"><Users /></span>  Groups</p>
                <p className="flex items-center px-2"><span className="mr-2"><Newspaper /> </span>  NewsLetters</p>
                <p className="flex items-center px-2"><span className="mr-2"><Calendars /></span> Events</p>

            </div>
        </div>

    );
}