"use client";

import { useEffect, useState } from "react";

const API_URL =
  "https://6ln2gas68i.execute-api.us-east-1.amazonaws.com/readings";

interface Reading {
  timestamp: string;
  co2_ppm: number;
  temperature_c: number;
  humidity: number;
}

const GAP_MS = 5 * 60 * 1000;
const W = 80;
const H = 16;
const PY = 2;

function useCo2Data(hours = 12) {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}?hours=${hours}`);
        const data = await res.json();
        if (!cancelled) setReadings(data.readings);
      } catch {
        /* silent */
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    const interval = setInterval(fetchData, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [hours]);

  return { readings, loading };
}

function buildPath(
  values: number[],
  times: number[],
  tMin: number,
  tRange: number,
): string {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  let d = "";
  for (let i = 0; i < values.length; i++) {
    const x = ((times[i] - tMin) / tRange) * W;
    const y = PY + (1 - (values[i] - min) / range) * (H - PY * 2);
    if (i === 0 || times[i] - times[i - 1] > GAP_MS) {
      d += `M${x},${y}`;
    } else {
      d += `L${x},${y}`;
    }
  }
  return d;
}

function Spark({ d }: { d: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="inline-block align-middle"
      width={60}
      height={16}
      preserveAspectRatio="none"
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Office() {
  const { readings, loading } = useCo2Data(12);

  if (loading || readings.length < 2) return null;

  const times = readings.map((r) => new Date(r.timestamp).getTime());
  const tMin = times[0];
  const tRange = times[times.length - 1] - tMin || 1;
  const latest = readings[readings.length - 1];
  const tempF = (latest.temperature_c * 9) / 5 + 32;

  const co2Path = buildPath(
    readings.map((r) => r.co2_ppm),
    times,
    tMin,
    tRange,
  );
  const tempPath = buildPath(
    readings.map((r) => (r.temperature_c * 9) / 5 + 32),
    times,
    tMin,
    tRange,
  );
  const humPath = buildPath(
    readings.map((r) => r.humidity),
    times,
    tMin,
    tRange,
  );

  const time = new Date(latest.timestamp).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <>
      <span className="font-mono uppercase tracking-widest text-foreground/50">
        live office air quality · {time}
      </span>
      <span className="inline-flex items-center gap-2 md:gap-4 flex-wrap text-foreground/50">
        <Spark d={co2Path} />
        <span>{latest.co2_ppm.toFixed(0)} ppm co₂</span>
        <Spark d={tempPath} />
        <span>{tempF.toFixed(1)}°f</span>
        <Spark d={humPath} />
        <span>{latest.humidity.toFixed(1)}% humidity</span>
      </span>
    </>
  );
}
