import black1 from "../assets/black1.jpg"
import blue from "../assets/blue.jpg"


const BlogData = [
    {
        id: 1,
        image: black1,
        title: "Lorem ipsum",
        subtitle: "Loram ipsum"
    },
    {
        id: 2,
        image: black1,
        title: "Lorem ipsum",
        subtitle: "Loram ipsum"
    },
    {
        id: 3,
        image: black1,
        title: "Lorem ipsum",
        subtitle: "Loram ipsum"
    },
    {
        id: 4,
        image: black1,
        title: "Lorem ipsum",
        subtitle: "Loram ipsum"
    },
]


const Blog = () => {
    return (
        <>
        <section className="bg-gray-50">
            <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-4 py-14">
                {
                    BlogData.map((item)=>(
                        <div className="hover:-translate-x-1 duration-300 mx-auto flex flex-col items-center justify-center">
                            <div className="flex flex-col space-y-2 bg-white rounded-md items-center justify-center p-5 max-w-[300px],mx-auto shadow-lg m-3 gap-6">
                                <img src={item.image}></img>
                                <h1 className="line-clamp-2 font-varela font-bold text-left text-xl pb-3">{item.title}</h1>
                                <p className="text-sm">{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                } 
            </div>
        </section>
        </>
    )
}

export default Blog;