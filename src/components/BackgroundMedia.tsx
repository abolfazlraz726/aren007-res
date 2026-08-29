import React, { useEffect, useRef, useState } from 'react';
import { BackgroundMode } from '../types';

interface BackgroundMediaProps {
  mode: BackgroundMode;
  sensitivity?: number;
  onScrubTimeChange?: (currentTime: number, duration: number) => void;
}

export const BackgroundMedia: React.FC<BackgroundMediaProps> = ({
  mode,
  sensitivity = 0.8,
  onScrubTimeChange,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Scrubbing state
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  // Video scrub setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoLoaded(true);
      targetTimeRef.current = video.currentTime;
      if (onScrubTimeChange) {
        onScrubTimeChange(video.currentTime, video.duration || 1);
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const handleSeeked = () => {
      isSeekingRef.current = false;
      if (!video) return;

      // If targetTime has drifted while seeking, trigger next seek
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.05) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }

      if (onScrubTimeChange && video.duration) {
        onScrubTimeChange(video.currentTime, video.duration);
      }
    };

    video.addEventListener('seeked', handleSeeked);

    const updateScrub = (currentX: number) => {
      if (!video || !video.duration) return;

      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const duration = video.duration;
      const timeOffset = (delta / window.innerWidth) * sensitivity * duration;
      const nextTarget = Math.max(0, Math.min(duration, targetTimeRef.current + timeOffset));
      targetTimeRef.current = nextTarget;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = nextTarget;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateScrub(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateScrub(e.touches[0].clientX);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        prevXRef.current = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [sensitivity, onScrubTimeChange]);

  // Dynamic Canvas animation for alternative cyber 3D/Matrix modes
  useEffect(() => {
    if (mode === 'video-scrub') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Matrix columns setup
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*+=-/\\<>~アアイウエオカキクケコサシスセソタチツテト';

    // 3D Grid points setup
    let angle = 0;

    const render = () => {
      if (mode === 'dark-matrix') {
        ctx.fillStyle = 'rgba(10, 12, 16, 0.12)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#00ff66';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      } else if (mode === 'cyber-grid') {
        ctx.fillStyle = '#0a0d14';
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.lineWidth = 1;

        angle += 0.005;
        const horizon = height * 0.55;
        const spacing = 40;

        // Perspective lines
        ctx.beginPath();
        for (let x = -width; x < width * 2; x += spacing * 2) {
          ctx.moveTo(x + Math.sin(angle) * 30, height);
          ctx.lineTo(width / 2, horizon);
        }
        ctx.stroke();

        // Horizontal grid lines
        for (let y = horizon; y < height; y += (height - y) * 0.12 + 4) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${((y - horizon) / (height - horizon)) * 0.4})`;
          ctx.stroke();
        }
      } else if (mode === 'ambient-studio') {
        const gradient = ctx.createRadialGradient(
          width / 2 + Math.sin(angle) * 100,
          height / 2 + Math.cos(angle) * 80,
          50,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.8
        );
        gradient.addColorStop(0, '#1a1f2c');
        gradient.addColorStop(0.5, '#0d1117');
        gradient.addColorStop(1, '#05070a');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        angle += 0.008;
      } else if (mode === 'neon-hacker') {
        ctx.fillStyle = '#06080d';
        ctx.fillRect(0, 0, width, height);

        // Pulsing cyber grid
        angle += 0.01;
        const pulse = (Math.sin(angle) + 1) / 2;
        ctx.strokeStyle = `rgba(255, 0, 128, ${0.1 + pulse * 0.15})`;
        ctx.lineWidth = 1.5;

        const gridSize = 60;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  return (
    <>
      {/* Required Mouse-Scrub Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4"
        muted
        playsInline
        preload="auto"
        className={`fixed inset-0 z-0 object-cover object-[70%_center] w-full h-full pointer-events-none transition-opacity duration-700 ${
          mode === 'video-scrub' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          objectFit: 'cover',
          objectPosition: '70% center',
        }}
      />

      {/* Alternative Canvas Layer for Custom Themes */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-700 ${
          mode !== 'video-scrub' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle overlay gradient for enhanced text contrast without obstructing video */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20"
        aria-hidden="true"
      />
    </>
  );
};
