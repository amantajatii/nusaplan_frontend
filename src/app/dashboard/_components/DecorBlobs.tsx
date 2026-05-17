export default function DecorBlobs() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden">
      {/* Teal blob — top right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 460,
          height: 460,
          top: -128,
          right: -80,
          filter: "blur(64px)",
          opacity: 0.4,
          background: "radial-gradient(circle, rgba(27,161,170,0.32) 0%, rgba(14,81,85,0.16) 55%, transparent 100%)",
        }}
      />
      {/* Gold blob — mid left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 380,
          height: 380,
          top: 96,
          left: -96,
          filter: "blur(64px)",
          opacity: 0.3,
          background: "radial-gradient(circle, rgba(253,191,58,0.5) 0%, rgba(253,191,58,0.25) 45%, transparent 100%)",
        }}
      />
    </div>
  );
}
