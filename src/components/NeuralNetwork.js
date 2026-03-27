import React, { useEffect, useRef } from 'react';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const NODE_COUNT = 75;
    const CONN_DIST = 160;
    const PULSE_SPEED = 0.007;

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.7,
      glowPhase: Math.random() * Math.PI * 2,
    }));

    const pulses = [];

    const spawnPulse = () => {
      const a = Math.floor(Math.random() * nodes.length);
      let b = Math.floor(Math.random() * nodes.length);
      while (b === a) b = Math.floor(Math.random() * nodes.length);
      pulses.push({ from: a, to: b, t: 0 });
    };

    for (let i = 0; i < 10; i++) spawnPulse();

    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 55 === 0 && pulses.length < 22) spawnPulse();

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.glowPhase += 0.012;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN_DIST) {
            const alpha = (1 - dist / CONN_DIST) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 160, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += PULSE_SPEED;
        if (p.t >= 1) { pulses.splice(k, 1); continue; }
        const fn = nodes[p.from];
        const tn = nodes[p.to];
        const dx = tn.x - fn.x;
        const dy = tn.y - fn.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > CONN_DIST * 2.2) { pulses.splice(k, 1); continue; }
        const px = fn.x + dx * p.t;
        const py = fn.y + dy * p.t;
        const alpha = 0.9 * (1 - Math.abs(p.t - 0.5) * 1.8);
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${Math.max(0, alpha)})`;
        ctx.fill();
      }

      nodes.forEach(node => {
        const glow = (Math.sin(node.glowPhase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + glow * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 160, ${0.28 + glow * 0.38})`;
        ctx.fill();
        if (node.r > 1.8) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r + glow * 0.7 + 3.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 229, 160, ${0.08 * glow})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
};

export default NeuralNetwork;
