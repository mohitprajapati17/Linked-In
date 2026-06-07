
export default function Features({ title, icon, isActive, onClick }: { title: string, icon: any, isActive: boolean, onClick: () => void }) {
    return (

        <div className={`px-4 flex flex-col items-center justify-center hover:cursor-pointer ${isActive ? "border-b-2 border-black" : ""}`} onClick={onClick}>
            {icon}
            <p className="text-xs text-gray-600">{title}</p>
        </div>
    );
}
