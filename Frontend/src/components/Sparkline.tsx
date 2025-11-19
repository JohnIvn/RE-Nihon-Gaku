import React from "react";

function buildPath(data: number[], width = 280, height = 80) {
  if (!data || data.length === 0) return "";
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  return data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((d - min) / range) * height;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export default function Sparkline({
  data = [3, 6, 4, 8, 12, 9, 14],
  width = 280,
  height = 80,
}: {
  data?: number[];
  width?: number;
  height?: number;
}) {
  const d = buildPath(data, width, height);
  const last = data[data.length - 1];
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="rounded-md"
    >
      <defs>
        <linearGradient id="spark" x1="0" x2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="#6366f1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#spark)"
        opacity="0.06"
      />
      <circle
        cx={(((data.length - 1) / (data.length - 1)) * width).toString()}
        cy={(
          height -
          ((last - Math.min(...data)) /
            (Math.max(...data) - Math.min(...data) || 1)) *
            height
        ).toString()}
        r={3}
        fill="#6366f1"
      />
    </svg>
  );
}
