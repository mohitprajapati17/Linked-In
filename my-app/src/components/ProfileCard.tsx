export default function ProfileCard({ image, name, bannerImage, description, location }: { image: any, name: string, bannerImage: string, description: string, location: string }) {
    return (
        <div className="">
            <img src={bannerImage} alt="" className="h-12  w-full rounded-t-2xl" />
            {image}
            <p>{name}</p>
            <p>{description}</p>
            <p>{location}</p>
        </div>
    );
} 