export default function Features({ title, icon }: { title: string, icon: string }) {
    return (
        <div className="px-4 flex flex-col items-center justify-center">
            <img className="w-5 h-5 mb-1" src={icon} alt="" />
            <p className="text-xs text-gray-700">{title}</p>
        </div>
    );
}
