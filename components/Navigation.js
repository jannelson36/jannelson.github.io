import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import styles from "@/styles/index.module.css";
import Link from "next/link";

function Hamburger() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    if (typeof window !== "undefined") {
        window.onscroll = () => {
            if (scrollY < window.innerHeight) setIsMenuOpen(false);
        };
    }

    const menuVariants = {
        open: {
            height: "100vh",
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
                mass: 0.8,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        closed: {
            height: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 40,
                mass: 0.8,
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    };

    const menuItemVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: -20, opacity: 0 },
    };

    return (
        <>
            <motion.div
                className="flex flex-col justify-start items-start absolute w-full h-[100vh] top-0 left-0 z-50 overflow-hidden bg-[#1c4f4ee0] backdrop-blur-lg"
                variants={menuVariants}
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
            >
                <div>
                    <div className={styles.container}>
                        <div className="text-[#113030] mt-[60px] hover:cursor-pointer w-fit" onClick={toggleMenu}>
                            <CloseIcon className="scale-[150%]" />
                        </div>
                    </div>
                    <div className={styles.container}>
                        <motion.div className="flex flex-col justify-center items-start">
                            <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <a
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%]"
                                    href="#aboutme"
                                >
                                    About me
                                </a>
                            </motion.div>
                            <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <Link
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%]"
                                    href="https://github.com/jannelson36?tab=repositories"
                                >
                                    Projects
                                </Link>
                            </motion.div>
                            <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <a
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%]"
                                    href="#skills"
                                >
                                    Skills
                                </a>
                            </motion.div>
                            {/* <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <a
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%]"
                                    href="#blogs"
                                >
                                    Blogs
                                </a>
                            </motion.div> */}
                            <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <a
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%]"
                                    href="#getintouch"
                                >
                                    Get in Touch
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0.2,
                    y: -40,
                    color: "#174140"
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    color: "#174140"
                }}
                transition={{
                    duration: 2,
                    delay: 0,
                    type: "spring",
                }}
                // className="text-[#350078]"
            >
                <DehazeIcon onClick={toggleMenu} className="mobile:scale-[200%] tablet:scale-[200%] laptop:scale-[150%] desktop:scale-[150%] rotate-90 mobile:absolute tablet:absolute laptop:static desktop:static mt-[60px] mobile:mx-[20px] tablet:mx-[40px] laptop:mx-[50px] desktop:mx-[50px] hover:cursor-pointer" />
            </motion.div>
        </>
    );
}

export default Hamburger;
