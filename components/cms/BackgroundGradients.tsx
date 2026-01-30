export default function BackgroundGradients() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[rgb(var(--color-primary-light))]/30 to-[rgb(var(--color-primary))]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-1/2 -left-1/4 w-[900px] h-[900px] bg-gradient-to-tr from-[rgb(var(--color-primary))]/25 to-[rgb(var(--color-primary-light))]/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[rgb(var(--color-primary-light))]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
  );
}
