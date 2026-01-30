interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-[rgb(var(--color-light))] border-2 border-[rgb(var(--color-primary-light))]/30 rounded-2xl p-2 sm:p-4 text-center shadow-md hover:shadow-xl transition-shadow">
      <p className="text-xl sm:text-3xl font-bold text-[rgb(var(--color-primary))]">
        {value}
      </p>
      <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1">
        {label}
      </p>
    </div>
  );
}
