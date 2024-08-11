import { useState } from "react";
import gree from "../assets/blackugly.jpg"
import blue from "../assets/black1.jpg"
import headphone from "../assets/white.jpg"
import OIP from "../assets/OIP.jpg"
import { FaWhatsapp } from "react-icons/fa";
import {AnimatePresence, easeInOut, motion} from 'framer-motion'

 

 const headphoneData = [
    {
        id: 1,
        image: gree,
        title: "Headphones Wireless",
        subtitle: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
        price: "$100",
        modal: "Modal Brown",
        bgColor: "#8b5958",
    },
    {
        id: 2,
        image: blue,
        title: "Headphones Wireless",
        subtitle: 
        " iusto minima ad ut id eos ad ut id eos",
        price: "$100",
        modal: "Modal Brown",
        bgColor: "#8b5958",
    },
    {
        id: 3,
        image: headphone,
        title: "Headphones Wireless",
        subtitle: 
        "Lorem ipsum minima ad ut id eos ad ut id eos",
        price: "$100",
        modal: "Modal Brown",
        bgColor: "#8b5958",
    },
    
 ]

const Hero = () => {
    const [activeData,setActiveData] = useState(headphoneData[0])
    const headphoneChange =(index)=>{
        setActiveData(headphoneData[index])
    }

    return <>
    <section className="bg-brandDark text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
            {/* headphone info */}
            <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
                <div className="space-y-5 text-center md:text-left">
                    <AnimatePresence mode="wait">
                <motion.h1 className="text-3xl lg:text-4xl font-bold font-varela"
                key={activeData.id}
                transition={{
                    duration:0.5
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 100 ,scale:0.1},
                    show: { opacity: 1, y:  20,scale:1}, 
                  }}
                  initial={'hidden'}
                  animate={'show'}
                  exit="exit"
                  >{activeData.title}</motion.h1>
                  </AnimatePresence>
                <AnimatePresence mode="wait">
                <motion.p
                key={activeData.id}
                transition={{
                    duration:0.5
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 100 ,scale:0.1},
                    show: { opacity: 1, y:  20,scale:1}, 
                  }}
                  initial={'hidden'}
                  animate={'show'}
                  exit="exit"
                className="text-sm leading-loose text-white/80">{activeData.subtitle}</motion.p>
                </AnimatePresence>
                
                <AnimatePresence mode="wait">
                <motion.button
                key={activeData.id}
                transition={{
                    duration:0.5
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 100 ,scale:0.1},
                    show: { opacity: 1, y:  20,scale:1}, 
                  }}
                  
                  initial={'hidden'} //要跟上面variants中定义的一样，可以是其他的，这就是个变量名，里面包含css块
                  animate={'show'} //初始状态是hidden，最后变成show状态
                  exit="exit"
                style={{backgroundColor: activeData.bgColor}} className="px-4 py-2 inline-block font-normal rounded-sm">Buy and Listen</motion.button>
                
                </AnimatePresence>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">======== TOP HEADPHONES FOR YOU=======</div>
                <div className="grid grid-cols-3 gap-10">
                    {
                        headphoneData.map((item)=>{
                            return (
                                <div className="grid grid-cols-2 place-items-center cursor-pointer" onClick={()=>headphoneChange(item.id-1)}>
                                <div>
                                    <img src={item.image} className="w-[200px] h-[60px]"></img>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-base font-bold">
                                        {item.price}
                                    </p>
                                    <div>
                                        <p className="text-xs font-normal text-nowrap">{item.modal}</p>
                                    </div>
                                </div> 
                                </div>
                            )
                        })
                    }
                    
                </div>
                    
            </div>
            {/* hero image */}
            <div className="flex flex-col justify-end items-center">
                <motion.img src={activeData.image}
                key={activeData.id}
                transition={{
                    duration:0.5,
                    delay: 0.2,
                    ease: easeInOut
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 100 ,scale:0.9},
                    show: { opacity: 1, y:  0,scale:1}, 
                  }}
                  
                  initial={'hidden'} //要跟上面variants中定义的一样，可以是其他的，这就是个变量名，里面包含css块
                  animate={'show'} //初始状态是hidden，最后变成show状态
                  exit="exit"
                className="w-[300px] md:w-[400px] xl:w-[500px]"></motion.img>
            </div>
            {/* whatsapp icon */}
            <div>
                <a href="">
                    <FaWhatsapp/>
                </a>
            </div>
        </div>
    </section>
    </>
}
export default Hero;