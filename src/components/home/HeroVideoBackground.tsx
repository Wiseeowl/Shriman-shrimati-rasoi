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
    </div>
  );
}
