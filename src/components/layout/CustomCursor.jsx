import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailerRef = useRef(null);
    const animationFrameId = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trailer = trailerRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let trailerX = 0;
        let trailerY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Main dot follows instantly
            if (cursor) {
                cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const animateTrailer = () => {
            const distX = mouseX - trailerX;
            const distY = mouseY - trailerY;

            // Smooth lag effect
            trailerX += distX * 0.1;
            trailerY += distY * 0.1;

            if (trailer) {
                trailer.style.transform = `translate3d(${trailerX}px, ${trailerY}px, 0)`;
            }

            animationFrameId.current = requestAnimationFrame(animateTrailer);
        };

        window.addEventListener('mousemove', moveCursor);
        animationFrameId.current = requestAnimationFrame(animateTrailer);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor-dot"></div>
            <div ref={trailerRef} className="custom-cursor-trailer"></div>
        </>
    );
};

export default CustomCursor;
