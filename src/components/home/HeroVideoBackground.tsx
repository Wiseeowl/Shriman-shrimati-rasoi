import heroVideo from '../../assets/Man_leads_camels_across_dune.mp4';

export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />
    </div>
  );
}
