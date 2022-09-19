import { AvatarFooter } from './AvatarFooter'
export const BlogCard = ({ data }) => {
    const { id, image, owner, publishdate, text } = data

    console.log(data);
    return (
        <div style={{ height: "400px" }} className="w-72 rounded-2xl overflow-hidden bg-white">
            <img width={"370px"} height={"147px"} style={{height: "147px"}} src={image} />

            <div className="flex flex-col justify-between items-start p-2.5 h-72">
                <p className="text-2xl">{text}</p>
                <p className="text-xs">There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand</p>
                <AvatarFooter
                    src={owner.picture}
                    name={`${owner.firstName, owner.lastName}`}
                    date={publishdate}
                />
            </div>
        </div>
    )
}