import { lazy, Suspense, useState, useEffect } from 'react';
import heroVideo from '../../assets/Man_leads_camels_across_dune.mp4';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SPLINE_SCENE_URL = 'https://prod.spline.design/ZYBXkIkBRqElvU7E/scene.splinecode';

function canLoadSpline(): boolean {
  if (typeof window === 'undefined') return false;
  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency <= 2;
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  return !isMobile && !isLowEnd && !!gl;
}

export default function HeroVideoBackground() {
  const [splineReady, setSplineReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    setShouldLoad(canLoadSpline());
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* Video layer — always visible at original brightness */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Spline 3D layer — 10% opacity so video shows through with cursor effect */}
      {shouldLoad && (
        <Suspense fallback={null}>
          <Spline
            scene={SPLINE_SCENE_URL}
            onLoad={() => setSplineReady(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              opacity: splineReady ? 0.3 : 0,
              transition: 'opacity 0.8s ease',
              pointerEvents: 'all', // Allow cursor interaction with the 3D scene
            }}
          />
        </Suspense>
      )}
    </div>
  );
}
