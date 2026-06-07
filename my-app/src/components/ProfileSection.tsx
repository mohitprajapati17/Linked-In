import ProfileCard from "./ProfileCard"
import { UserRoundPen } from "lucide-react"
export default function ProfileSection() {
    return (
        <div className="h-full border-1 border-black rounded-xl ">
            <ProfileCard image={<UserRoundPen />} name="mohit" bannerImage={"https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg"} description="Front End Developer" location="Delhi" />
            <div className=" mt-2  border-1 border-black rounded-xl">
                <h1 className="text-sm">Gain exclusive site and content</h1>
                <h1 className="text-blue-800"> Redeem premium   for free</h1>



            </div>

            <div className="mt-2  border-1 border-black rounded-xl ">
                <div className="flex justify-between ">
                    <p>Profile viewers</p>
                    <p>123</p>


                </div>

                <div className="flex justify-between ">
                    <p>Post impressions</p>
                    <p>123</p>


                </div>


            </div>
        </div>

    );
}