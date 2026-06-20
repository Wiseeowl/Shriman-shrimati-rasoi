import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface Ripple {
  x: number;
  y: number;
  createdAt: number;
}

export function useCursorRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<Point>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const smooth = useRef<Point>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ripples = useRef<Ripple[]>([]);
  const lastSpawn = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const isHovering = useRef<boolean>(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const handleResize = () => {
      // Setup canvas for high DPI
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      if (!rect) return;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => { isHovering.current = true; };
    const handleMouseLeave = () => { isHovering.current = false; };

    window.addEventListener('resize', handleResize);
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseenter', handleMouseEnter);
    parent.addEventListener('mouseleave', handleMouseLeave);
    handleResize();

    const draw = (time: number) => {
      const rect = parent.getBoundingClientRect();
      if (!rect) return;

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Lerp smooth towards mouse
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;

      // Spawn new ripples if moved enough and time elapsed
      const distSq = 
        Math.pow(mouse.current.x - smooth.current.x, 2) + 
        Math.pow(mouse.current.y - smooth.current.y, 2);
      
      if (isHovering.current && distSq > 144 && time - lastSpawn.current > 120) {
        ripples.current.push({
          x: smooth.current.x,
          y: smooth.current.y,
          createdAt: time
        });
        lastSpawn.current = time;
        
        // Cap concurrent ripples
        if (ripples.current.length > 6) {
          ripples.current.shift();
        }
      }

      // Draw ripples
      ripples.current = ripples.current.filter(ripple => {
        const age = time - ripple.createdAt;
        const duration = 1500; // ms
        
        if (age >= duration) return false;

        const progress = age / duration;
        const radius = progress * 100 + 10; // expands from 10px to 110px
        const alpha = 1 - Math.pow(progress, 1.5); // non-linear fade
        
        ctx.beginPath();
        // Brand Gold rgb(251, 185, 49)
        ctx.strokeStyle = `rgba(251, 185, 49, ${alpha * 0.5})`;
        ctx.lineWidth = 2 * (1 - progress);
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = `rgba(251, 185, 49, ${alpha * 0.3})`;
        ctx.lineWidth = 1 * (1 - progress);
        ctx.arc(ripple.x, ripple.y, radius * 0.7, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = `rgba(251, 185, 49, ${alpha * 0.1})`;
        ctx.lineWidth = 0.5;
        ctx.arc(ripple.x, ripple.y, radius * 0.4, 0, Math.PI * 2);
        ctx.stroke();

        return true;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return canvasRef;
}
