export default function ProfileCard({ image, name, bannerImage, description, location }: { image: any, name: string, bannerImage: string, description: string, location: string }) {
    return (
        <div className=" border-1 border-black  rounded-xl overflow-hidden">
            <img src={bannerImage} alt="" className="h-12  w-full  " />
            <div className="px-2">
                {image}
                <p className=" text-2xl font-bold">{name}</p>
                <p className="text-xs text-gray-600">{description}</p>
                <p className="text-xs text-gray-600">{location}</p>
            </div>

        </div>
    );
} 