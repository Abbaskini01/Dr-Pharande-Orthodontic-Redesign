export function HeroBackground() {
  return (
    <>
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />
    </>
  );
}