export default function DecorativeBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[rgb(var(--color-primary-light))]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[rgb(var(--color-primary))]/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-[rgb(var(--color-primary-light))]/20 rounded-full blur-3xl animate-float"></div>
    </div>
  );
}
