import { lazy, Suspense, useState, useEffect, useRef } from 'react';
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
  const splineRef = useRef<any>(null);

  useEffect(() => {
    setShouldLoad(canLoadSpline());
  }, []);

  function onSplineLoad(splineApp: any) {
    splineRef.current = splineApp;

    try {
      // 1. Make sphere 20% smaller
      const sphere = splineApp.findObjectByName('Sphere');
      if (sphere) {
        sphere.scale.x *= 0.8;
        sphere.scale.y *= 0.8;
        sphere.scale.z *= 0.8;
      }

      // 2. Swap colors between Sphere and glass tiles
      const glassTiles = splineApp.findObjectByName('glass tiles');
      if (sphere && glassTiles) {
        // Read current colors
        const sphereColor = { r: sphere.color.r, g: sphere.color.g, b: sphere.color.b };
        const glassColor = { r: glassTiles.color.r, g: glassTiles.color.g, b: glassTiles.color.b };

        // Swap: glass color → sphere, sphere color → glass
        sphere.color.r = glassColor.r;
        sphere.color.g = glassColor.g;
        sphere.color.b = glassColor.b;

        glassTiles.color.r = sphereColor.r;
        glassTiles.color.g = sphereColor.g;
        glassTiles.color.b = sphereColor.b;

        console.log('✅ Swapped colors and resized sphere');
      }
    } catch (err) {
      console.warn('Spline object manipulation error:', err);
    }

    setSplineReady(true);
  }

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

      {/* Spline 3D layer */}
      {shouldLoad && (
        <Suspense fallback={null}>
          <Spline
            scene={SPLINE_SCENE_URL}
            onLoad={onSplineLoad}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              opacity: splineReady ? 0.3 : 0,
              transition: 'opacity 0.8s ease',
              pointerEvents: 'all',
            }}
          />
        </Suspense>
      )}
    </div>
  );
}
