import { useEffect, useRef } from 'react'

interface SnowfallProps {
  theme: string;
};

const Snowfall = ({theme}: SnowfallProps) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)  return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const snowflakes: {
            x: number; 
            y: number; 
            radius: number; 
            speedX: number; 
            speedY: number;
        } [] = [];

        for (let i = 0; i < 100; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 3 + 1,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = theme === "dark" ? "white" : "yellow";
            ctx.beginPath();
            snowflakes.forEach(flake => {
              ctx.moveTo(flake.x, flake.y);
              ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            });
            ctx.fill();
      
            snowflakes.forEach(flake => {
              flake.x += flake.speedX;
              flake.y += flake.speedY;
              if (flake.y > canvas.height) {
                flake.y = 0;
                flake.x = Math.random() * canvas.width;
              }
            });
      
            requestAnimationFrame(animate);
          };
        
        animate();

        return () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

    }, [theme]);

    return <canvas ref={canvasRef} className='fixed inset-0 pointer-events-none'/>
}

export default Snowfall
