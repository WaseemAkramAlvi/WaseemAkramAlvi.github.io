import React, { useEffect, useRef } from 'react';

const QuantumParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const colors = [
            'rgba(6, 182, 212, 0.7)',   // Cyan
            'rgba(139, 92, 246, 0.7)',  // Violet / Purple
            'rgba(56, 189, 248, 0.7)',  // Sky Blue
            'rgba(236, 72, 153, 0.5)'   // Magenta
        ];

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.size = Math.random() * 2.2 + 0.8;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.phase = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.02 + Math.random() * 0.03;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.phase += this.pulseSpeed;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                const currentRadius = this.size + Math.sin(this.phase) * 0.5;
                ctx.beginPath();
                ctx.arc(this.x, this.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const initParticles = () => {
            particles = [];
            const count = Math.min(Math.floor(window.innerWidth / 16), 85);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const connectDistance = 140;

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update();
                p1.draw();

                // Connect particles within entanglement threshold
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectDistance) {
                        const alpha = (1 - dist / connectDistance) * 0.35;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.75
            }}
        />
    );
};

export default QuantumParticles;
