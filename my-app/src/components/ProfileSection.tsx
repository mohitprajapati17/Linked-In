import ProfileCard from "./ProfileCard"
import { UserRoundPen } from "lucide-react"
export default function ProfileSection() {
    return (
        <div className=" border-1 border-black  rounded-xl">
            <ProfileCard image={<UserRoundPen />} name="mohit" bannerImage={"https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg"} description="Front End Developer" location="Delhi" />
        </div>
    );
}