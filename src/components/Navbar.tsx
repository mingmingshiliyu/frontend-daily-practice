import { FaHeadphones } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { UpdateFollower } from "react-mouse-follower";
import {motion} from 'framer-motion'


const navBar = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "Categories",
      link: "#",
    },
    {
      id: 3,
      title: "Blog",
      link: "#",
    },
    {
      id: 4,
      title: "About",
      link: "#",
    },
    {
      id: 5,
      title: "ContactUs",
      link: "#",
    },
  ]

  const Nav =()=>{
    return (
        <>
        <div className="bg-brandDark text-white py-4 font-varela">
          <motion.nav initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1, delay:0.5}}  className="flex justify-between items-center">
        {/* logo */}
        <div className="justify-start">
          <a href='#' className="text-xl font-bold uppercase">Playing / <span className="font-extralight text-whilte-70">Market</span></a>
        </div>
        {/* menu */}
        <div className="hidden md:block">
        <ul className="flex items-center gap-4">
          {
            
            navBar.map((item)=> (
               <li key={item.id}>
                <UpdateFollower
                  mouseOptions={
                    {
                      backgroundColor: 'white',
                    zIndex: 2,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                    }
                  }
                >
              <a href={item.link} className="inline-block text-sm py-2 px-3 uppercase">{item.title}</a>
              </UpdateFollower>
            </li>
            ))
          }

<UpdateFollower
                  mouseOptions={
                    {
                      backgroundColor: 'white',
                    zIndex: 2,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                    }
                  }
                >
          <button className="text-xl ps-14">
            <FaHeadphones />
          </button>
          </UpdateFollower>
        </ul>
        </div>
        {/* mobile hamburger */}
        <UpdateFollower
                  mouseOptions={
                    {
                      backgroundColor: 'white',
                    zIndex: 2,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                    }
                  }
                >
          <MdMenu className="text-4xl"/>
          </UpdateFollower>
      </motion.nav>
        </div>
  
        </>
    )
}

function Navbar (){
    return <Nav/>
}

export default Navbar