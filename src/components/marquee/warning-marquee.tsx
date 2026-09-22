type WarningMarqueeProps = {
  text?: string;
};

function TapeItem({ text }: { text: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-6 py-2.5">
      <span className="font-display text-sm tracking-wide text-mr-black md:text-base">
        {text}
      </span>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0 md:size-5" fill="none">
        <path d="M12 2 1 21h22L12 2Z" fill="var(--mr-black)" />
        <rect x="11" y="9" width="2" height="6" fill="var(--mr-yellow)" />
        <rect x="11" y="16.5" width="2" height="2" fill="var(--mr-yellow)" />
      </svg>
    </div>
  );
}

export function WarningMarquee({ text = "MUCHO CHORREEEEO" }: WarningMarqueeProps) {
  const items = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="relative z-30 overflow-hidden bg-mr-black py-5 md:py-7">
      <div
        role="presentation"
        className="w-[110%] -translate-x-[5%] -rotate-2 border-y-2 border-mr-black bg-mr-yellow shadow-[0_0_0_2px_rgba(0,0,0,1)]"
      >
        <div className="animate-marquee flex w-max">
          <div className="flex shrink-0">
            {items.map((i) => (
              <TapeItem key={`a-${i}`} text={text} />
            ))}
          </div>
          <div className="flex shrink-0" aria-hidden="true">
            {items.map((i) => (
              <TapeItem key={`b-${i}`} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
