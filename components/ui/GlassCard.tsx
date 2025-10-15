export default function GlassCard({ 
  children 
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <div className="relative group">
      <div className="absolute -inset-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl opacity-75 group-hover:opacity-100 blur-sm animate-spin-slow" />
      <div className="relative backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-2xl p-6 border border-white/20">
        {children}
      </div>
    </div>
  );
}
