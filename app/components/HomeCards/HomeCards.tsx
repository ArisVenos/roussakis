"use client";

import { Card } from "./Card";
import { motion } from "framer-motion";
import { cardData, container, item } from "./CardData";

export function HomeCards() {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {cardData.map((itemData, index) => (
        <motion.div key={index} variants={item}>
          <Card key={index} {...itemData} />
        </motion.div>
      ))}
    </motion.div>
  );
}
