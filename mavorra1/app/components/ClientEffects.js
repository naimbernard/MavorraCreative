'use client';

import { useEffect } from 'react';

export default function ClientEffects() {
  useEffect(() => {
    const glow = document.querySelector('.cursorGlow');

    function handlePointerMove(event) {
      if (!glow) return;
      glow.style.setProperty('--x', `${event.clientX}px`);
      glow.style.setProperty('--y', `${event.clientY}px`);
    }

    window.addEventListener('pointermove', handlePointerMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('isVisible');
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

    const magneticElements = document.querySelectorAll('.magnetic');
    const cleanups = [];

    magneticElements.forEach((element) => {
      const move = (event) => {
        if (window.matchMedia('(max-width: 960px)').matches) return;
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        element.style.transform = `translate(${x * 0.025}px, ${y * 0.025}px)`;
      };

      const leave = () => {
        element.style.transform = '';
      };

      element.addEventListener('pointermove', move);
      element.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        element.removeEventListener('pointermove', move);
        element.removeEventListener('pointerleave', leave);
      });
    });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div className="cursorGlow" aria-hidden="true" />;
}
