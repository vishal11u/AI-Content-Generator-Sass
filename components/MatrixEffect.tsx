import { useEffect, useRef } from "react";

const MatrixEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;  

    const ctx = canvas.getContext("2d");
    if (!ctx) return;  

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "AI 011010 101101 CODE GPT DATA 3211651561651561851561";
    const letters = matrix.split("");
    const fontSize = 28;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";  
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(drawMatrix, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
    />
  );
};

export default MatrixEffect;
