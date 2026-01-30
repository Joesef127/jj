export default function AnimatedBackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, rgb(var(--color-primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>
  );
}
