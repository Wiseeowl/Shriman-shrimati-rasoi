import { useRef, useEffect } from 'react';
import heroVideo from '../../assets/Man_leads_camels_across_dune.mp4';

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Frosted glass overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'rgba(255, 255, 255, 0.017)',
          backdropFilter: 'blur(2.75px)',
          WebkitBackdropFilter: 'blur(2.75px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.035)',
        }}
      />
    </div>
  );
}
