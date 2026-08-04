export function HeroBackground() {
  return (
    <>
      {/* Base Gradient */}
      <div
        className="
          absolute
          inset-0
          -z-30
          bg-linear-to-br
          from-slate-50
          via-white
          to-blue-50/60
        "
      />

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-24
          -top-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-32
          top-20
          h-[480px]
          w-[480px]
          rounded-full
          bg-sky-300/10
          blur-[140px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          rounded-full
          bg-slate-300/10
          blur-[120px]
        "
      />

      {/* Decorative Grid */}
      <div
        className="
          absolute
          inset-0
          -z-20
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Soft Radial Highlight */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_70%)]
        "
      />
    </>
  );
}