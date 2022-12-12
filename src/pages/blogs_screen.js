import { BlogCard } from "../components/BlogCard"
import { sendRequest } from '../api/api'
import { useEffect, useState } from "react"
const BlogsScreen = () => {

    const [data, setData] = useState()
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        const getData = async () => {
            let res = await sendRequest({
                url: `post?limit=9&page=${pageNumber}`,
                method: 'GET'
            })

            setData([...res.data.data]);

        }
        getData()
    }, [pageNumber]);


    return (
        <div className="py-24 px-56" style={{ backgroundColor: '#F5F5F5' }}>
            <div className="flex  flex-col items-start">
                <h1 className="text-5xl my-2.5">Blogs</h1>
                <p className="mb-9 mt-3">Our latest updates and blogs about managing your team</p>
                <div className="flex flex-row flex-wrap justify-between gap-10">
                    {
                        data?.map((singleData, index) => {
                            return <BlogCard key={index} data={singleData} />
                        })
                    }
                </div>
            </div>

            <button onClick={() => { setPageNumber( pageNumber + 1) }} className="px-6 py-2 mt-16 rounded-sm" style={{ backgroundColor: "#808080" }}>Next &gt; </button>
        </div>
    )
}
export default BlogsScreen;