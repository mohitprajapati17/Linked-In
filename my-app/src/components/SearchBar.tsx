export default function SearchBar() {
    return (
        <div className="relative w-60   ">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <img className="w-5 h-5" src="https://icons.veryicon.com/png/o/miscellaneous/prototyping-tool/search-bar-01.png" alt="" />
            </span>

            <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-xl py-1 pl-12"
            />
        </div>
    );
}
