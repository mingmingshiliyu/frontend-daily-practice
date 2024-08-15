import { useState } from "react";
import {motion} from "framer-motion"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link  } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!nav)
    }
    
    const closeNav = () => {
        setNav(false)
    }
    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15,
            }
        }

    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
                <div className="max-w-[1300px] mx-auto bg-white flex justify-between text-gray-200 text-xl items-center px-12 h-20">
                    <a href="#">J.Doe</a>
                    {/* md:flex限定了hidden只有在md的时候才生效 */}
                    <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
                        {/* <li><Link to="skills" smooth={true} onClick={closeNav} offset={50} duration={500}>About</Link></li> */}
                        <li><Link to="portfolio" smooth={true} onClick={closeNav} offset={50} duration={500}>Portfolio</Link></li>
                        <li><Link to="contact" smooth={true} onClick={closeNav} offset={50} duration={500}>Customer</Link></li>
                    </ul>
                    {/* md:hidden在浏览器尺寸大于md的时候隐藏，缩小浏览器就能看到了 */}
                    <div onClick={toggleNav} className="md:hidden z-30 text-gray-800 ">
                        {nav ? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
                        </div>

                    <motion.div
                    initial={false}
                    animate={nav?'open':'closed'}
                    variants={menuVariants}
                    className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
                    >
                        <ul className="font-semibold text-4xl space-y-8 mt-24 text-cen">
                        <li><Link to="skills" smooth={true} offset={50} duration={500}>About</Link></li>
                        <li><Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                        <li><Link to="contact" smooth={true} offset={50} duration={500}>Customer</Link></li>
                    </ul>
                    </motion.div>
                </div>
            </div>
        </>
    )
}


export default Navbar;