// controls/ProgressBarField/ProgressBar.tsx
import * as React from 'react';

export interface IProgressBarProps {
  value: number;
  minValue: number;
  maxValue: number;
  showLabel: boolean;
  colorMode: string;
}

const getColor = (pct: number, colorMode: string): string => {
  if (colorMode === 'fixed' || colorMode === '1') return '#0078d4';
  if (pct >= 0.8) return '#d13438';
  if (pct >= 0.5) return '#f7630c';
  return '#107c10';
};

export const ProgressBarControl: React.FC<IProgressBarProps> = ({
  value,
  minValue,
  maxValue,
  showLabel,
  colorMode,
}) => {
  const safeMin = minValue ?? 0;
  const safeMax = maxValue ?? 100;
  const safeValue = Math.min(Math.max(value ?? 0, safeMin), safeMax);
  const pct = safeMax === safeMin ? 0 : (safeValue - safeMin) / (safeMax - safeMin);
  const color = getColor(pct, colorMode ?? 'auto');

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '4px 0' }}>
      <div style={{
        flex: 1,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#e0e0e0',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${Math.round(pct * 100)}%`,
          backgroundColor: color,
          borderRadius: 4,
          transition: 'width 0.3s ease, background-color 0.3s ease'
        }} />
      </div>
      {showLabel && (
        <span style={{
          fontSize: 12,
          fontFamily: "'Segoe UI', sans-serif",
          minWidth: 36,
          textAlign: 'right',
          color: 'inherit'
        }}>
          {Math.round(pct * 100)}%
        </span>
      )}
    </div>
  );
};