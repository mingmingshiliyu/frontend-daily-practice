import { FaPhone  } from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6";

const Footer = () => {
    return <>
        <footer className="bg-primary pt-12 pb-8 text-white">
            <div className="container ">
                <div className="grid grid-cols-1 space-y-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h1 className="text-2xl font-bold uppercase">Playing</h1>
                        <p className="text-sm max-w-[300px]">Lorem ipsum dolor sit</p>
                    </div>
                    <p className="flex items-center gap-2"><FaPhone/>+1 (123) 456-7890</p>
                    <p className="flex items-center gap-2"><FaMapLocation/>Noida,Uttar</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Quick Links</h1>
                    <div>
                        <div>
                        <ul className="space-y-1">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <ul className="space-y-1">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;