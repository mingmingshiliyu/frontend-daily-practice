import headpone from "../assets/headphone.jpg"
import {motion} from "framer-motion"
import {fadeUp} from "./Service"


const headphoneInfo={
    title: "The Latest Headphones With The Latest Technology",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
}


const Banner = () => {
    return <>
    <section>
        <div className="container grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 space-y-6 gap-12">
            {/* banner image */}
            <div >
                <motion.img src={headpone}
                // key={activeData.id}
                transition={{
                    duration:0.5,
                    delay: 0.2,
                    ease: "easeInOut"
                  }}
                  variants={{
                    hidden: { opacity: 0, x: -100,y:-100 ,scale:0.9,rotate:-180},
                    show: { opacity: 1,scale:1,x:0,y:0,rotate:0}, 
                  }}
                  
                  initial={'hidden'} //要跟上面variants中定义的一样，可以是其他的，这就是个变量名，里面包含css块
                  animate={'show'} //初始状态是hidden，最后变成show状态
                  exit="exit"
                className="w-[300px] md:w-[400px] xl:w-[500px]"></motion.img>
            </div>
            {/* col方向到中间 */}
            <div className="flex flex-col justify-center ">
                {/* 必须有一层div包裹，不然按钮会特别大 */}
                <div className="text-left md:text-left space-y-4 lg:max-w-[450px]"> 
                    <motion.h1 initial="hidden" animate="show" variants={fadeUp(0.7)}  className="flex flex-col font-semibold text-2xl ">{headphoneInfo.title}</motion.h1>
                    <motion.p initial="hidden" animate="show" variants={fadeUp(0.9)}  className="text-sm text-black/75 ">{headphoneInfo.subtitle}</motion.p>
                    <motion.button initial="hidden" animate="show" variants={fadeUp(1.1)}   className="  inline-block font-normal rounded-md border-2 border-[#b34a4a] text-[#b34a4a] hover:bg-[#594bda] hover:text-white px-6 py-2">Learn More</motion.button>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default Banner;