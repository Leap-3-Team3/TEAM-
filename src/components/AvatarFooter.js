export const AvatarFooter = ({ src, name, date }) => {
    return (
        <div className="flex flex-row items-center justify-between w-full text-slate-400">
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={src} />
            <div>{name}</div> |
            <div>{date}</div>
        </div>
    )
}