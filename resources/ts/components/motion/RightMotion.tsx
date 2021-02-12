import React from "react";
import { motion } from "framer-motion";

const RightMotion: React.FC<{
    children: JSX.Element;
}> = ({ children }) => {
    return (
        <motion.div
            animate={{
                x: 0,
                opacity: 1
            }}
            initial={{
                x: 100,
                opacity: 0
            }}
            exit={{
                x: -100,
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}
        >
            {children}
        </motion.div>
    );
};

export default RightMotion;
