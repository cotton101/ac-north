/**
 * A line drawing of a Google results page, with the top three organic
 * positions marked. Explanatory, not decorative: it shows where the work lands.
 */
export default function ResultsDiagram({ className = "" }: { className?: string }) {
  const results = [0, 1, 2, 3, 4];
  const top = 150;
  const gap = 58;

  return (
    <figure className={className}>
      <svg
        viewBox="0 0 400 470"
        role="img"
        aria-labelledby="results-diagram-title"
        className="h-auto w-full"
      >
        <title id="results-diagram-title">
          A Google results page with the top three positions highlighted
        </title>

        {/* Page frame */}
        <rect x="0.5" y="0.5" width="399" height="469" rx="3" className="fill-paper stroke-rule" />

        {/* Search bar */}
        <rect x="24" y="24" width="352" height="34" rx="17" className="fill-none stroke-ink" strokeWidth="1" />
        <circle cx="46" cy="41" r="6" className="fill-none stroke-muted" strokeWidth="1.2" />
        <line x1="50.5" y1="45.5" x2="54" y2="49" className="stroke-muted" strokeWidth="1.2" />
        <rect x="66" y="38" width="120" height="6" rx="3" className="fill-rule" />

        {/* Ads block */}
        <text x="24" y="86" className="fill-muted text-[10px]" style={{ fontSize: 10 }}>
          Sponsored
        </text>
        <rect x="24" y="94" width="210" height="6" rx="3" className="fill-rule" />
        <rect x="24" y="108" width="300" height="5" rx="2.5" className="fill-rule/70" />
        <line x1="24" y1="130" x2="376" y2="130" className="stroke-rule" />

        {/* Organic results */}
        {results.map((i) => {
          const y = top + i * gap;
          const highlighted = i < 3;
          return (
            <g key={i}>
              {highlighted && (
                <rect x="14" y={y - 10} width="372" height={gap - 8} rx="2" className="fill-stone" />
              )}
              <text
                x="24"
                y={y + 8}
                style={{ fontSize: 11, fontVariantNumeric: "tabular-nums" }}
                className={highlighted ? "fill-accent font-semibold" : "fill-rule"}
              >
                {i + 1}
              </text>
              <rect
                x="46"
                y={y}
                width={highlighted ? 190 - i * 14 : 170}
                height="7"
                rx="3.5"
                className={highlighted ? "fill-accent" : "fill-rule"}
              />
              <rect x="46" y={y + 15} width="300" height="5" rx="2.5" className={highlighted ? "fill-muted/40" : "fill-rule/70"} />
              <rect x="46" y={y + 26} width="240" height="5" rx="2.5" className={highlighted ? "fill-muted/40" : "fill-rule/70"} />
            </g>
          );
        })}

        {/* Bracket marking the top three */}
        <path
          d={`M392 ${top - 10} H396 V${top + 2 * gap + gap - 18} H392`}
          className="fill-none stroke-accent"
          strokeWidth="1.2"
        />
      </svg>
      <figcaption className="mt-3 text-[0.8125rem] text-muted">
        Positions 1–3 in the normal results, below any paid ads.
      </figcaption>
    </figure>
  );
}
