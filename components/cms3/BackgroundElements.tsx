export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[rgb(var(--color-primary-light))]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-[rgb(var(--color-primary))]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(var(--color-primary-light))]/5 rounded-full blur-3xl"></div>
    </div>
  );
}
