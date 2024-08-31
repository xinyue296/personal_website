import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const RollingText = () => {
  const phrases = [
    "an enthusiastic learner 🤔",
    "a software engineer 💻",
    "a curious explorer 🔍",
    "a UX enthusiast 🎨",
    "a problem solver 💡",
    "a team player 🤝",
    "a cat person 🐱",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // 3000: change phrase every 3 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.75 }}
        className="text-amber-600 dark:text-orange-400 font-semibold mt-6"
      >
        {phrases[index]}
      </motion.p>
    </div>
  );
};

export default RollingText;
