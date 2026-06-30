import heroVideo from '../../assets/Man_leads_camels_across_dune.mp4';

export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <video
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
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      />
    </div>
  );
}
