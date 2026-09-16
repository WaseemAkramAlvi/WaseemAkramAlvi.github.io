import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        let mouseX = -100;
        let mouseY = -100;
        let currentX = -100;
        let currentY = -100;
        let animationFrameId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        const onMouseLeave = () => {
            setIsVisible(false);
        };

        const onMouseEnter = () => {
            setIsVisible(true);
        };

        // Track hovering over clickable elements
        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.project-card') ||
                target.closest('.skill-item-card') ||
                target.closest('.pipeline-step-node') ||
                target.closest('.cert-card') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const render = () => {
            // Smooth interpolated position
            const ease = 0.22;
            currentX += (mouseX - currentX) * ease;
            currentY += (mouseY - currentY) * ease;

            if (cursor) {
                cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);
        window.addEventListener('mouseover', handleMouseOver);
        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            window.removeEventListener('mouseover', handleMouseOver);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    return (
        <div 
            ref={cursorRef} 
            className={`atom-cursor-container ${isVisible ? 'visible' : ''} ${isHovering ? 'excited' : ''}`}
            aria-hidden="true"
        >
            {/* Center Nucleus */}
            <div className="atom-nucleus">
                <div className="nucleus-core"></div>
                <div className="nucleus-glow"></div>
            </div>

            {/* Electron Orbital 1 */}
            <div className="atom-orbit orbit-1">
                <div className="electron electron-1"></div>
            </div>

            {/* Electron Orbital 2 */}
            <div className="atom-orbit orbit-2">
                <div className="electron electron-2"></div>
            </div>

            {/* Electron Orbital 3 */}
            <div className="atom-orbit orbit-3">
                <div className="electron electron-3"></div>
            </div>
        </div>
    );
};

export default CustomCursor;
