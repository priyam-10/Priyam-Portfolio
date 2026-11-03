import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // Position coordinates kept in refs to avoid React re-renders on mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isVisible = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    // Disable on small mobile touch screens (phones < 768px)
    const isMobile = window.innerWidth < 768 && ('ontouchstart' in window);
    if (isMobile) {
      return;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = reducedMotionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    reducedMotionQuery.addEventListener('change', handleMotionChange);

    let rafId: number | null = null;

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      // Ignore touch taps (e.g. tapping on a hybrid/touchscreen laptop)
      if ('pointerType' in e && e.pointerType === 'touch') {
        if (containerRef.current) {
          containerRef.current.style.opacity = '0';
        }
        isVisible.current = false;
        return;
      }

      const clientX = e.clientX;
      const clientY = e.clientY;

      mousePos.current.x = clientX;
      mousePos.current.y = clientY;

      // When pointer first moves in window, initialize coordinates immediately and fade in
      if (!isVisible.current) {
        isVisible.current = true;
        ringPos.current.x = clientX;
        ringPos.current.y = clientY;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        }
      }

      if (containerRef.current && !containerRef.current.classList.contains('is-visible')) {
        containerRef.current.classList.add('is-visible');
      }
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], article, .cursor-pointer, [tabindex="0"]')
      );

      if (interactive !== isHovered.current) {
        isHovered.current = interactive;
        if (ringRef.current && dotRef.current) {
          if (interactive) {
            ringRef.current.classList.add('cursor-ring--hovered');
            dotRef.current.classList.add('cursor-dot--hovered');
          } else {
            ringRef.current.classList.remove('cursor-ring--hovered');
            dotRef.current.classList.remove('cursor-dot--hovered');
          }
        }
      }
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.classList.remove('is-visible');
      }
      isVisible.current = false;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      ringPos.current.x = e.clientX;
      ringPos.current.y = e.clientY;
      isVisible.current = true;
      if (containerRef.current) {
        containerRef.current.classList.add('is-visible');
      }
    };

    // Smooth render loop using requestAnimationFrame
    const render = () => {
      if (isVisible.current) {
        if (prefersReducedMotion) {
          ringPos.current.x = mousePos.current.x;
          ringPos.current.y = mousePos.current.y;
        } else {
          // Smooth trailing interpolation: 0.15 gives a pronounced, silky lag
          ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
          ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
        }

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
        }
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mouseover', handlePointerOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      reducedMotionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseover', handlePointerOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mounted]);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  // Render via portal directly onto document.body to ensure it is NEVER clipped by parent containers or overflow
  return createPortal(
    <div
      ref={containerRef}
      id="custom-cursor-root"
      className="custom-cursor-container"
      aria-hidden="true"
    >
      {/* Animated Trailing Ring */}
      <div ref={ringRef} id="custom-cursor-ring" className="cursor-ring" />

      {/* Main Cursor Dot */}
      <div ref={dotRef} id="custom-cursor-dot" className="cursor-dot" />
    </div>,
    document.body
  );
};
