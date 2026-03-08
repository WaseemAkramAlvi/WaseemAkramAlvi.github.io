import React from 'react';
import { motion } from 'framer-motion';


const GlassCard = ({ children, className = "", delay = 0, onClick, style }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`premium-glass-card ${className}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
