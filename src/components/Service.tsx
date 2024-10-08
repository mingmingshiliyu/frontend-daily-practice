import { FcSafe } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import {motion} from "framer-motion"

export const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            }
        }
    }
}

const ServiceData = [
    {
        id: 1,
        title: "Security",
        subtitle: "Loeam ipsim doler sit  ",
        icon: <FcSafe/>,
        delay: 1
    },
    {
        id: 2,
        title: "Gurantee",
        subtitle: "Loeam ipsim doler sit  ",
        icon: <FcSupport />,
        delay: 2
    },
    {
        id: 3,
        title: "Affordability",
        subtitle: "Loeam ipsim doler sit  ",
        icon: <FcSettings/>,
        delay: 3
    },
]

const Service = ()=>{
    return <section className="bg-gray-100 py-8">
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {
                ServiceData.map((item)=>(
                    <motion.div
                    initial="hidden" whileInView="show" variants={fadeUp(item.delay)} className="flex flex-col items-center justify-center p-5 max-w-[300px],mx-auto shadow-lg">
                    <div>
                        {item.icon}
                    </div>
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p className="text-center text-sm text-black/75">{item.subtitle}</p>
                    </motion.div>
                ))
            }
            </div>

    </section>
}

export default Service;