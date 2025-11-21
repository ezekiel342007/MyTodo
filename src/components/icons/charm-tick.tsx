import React from 'react';
import type { SVGProps } from 'react';

export interface CharmTickProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export function CharmTick({ size, color, ...rest }: CharmTickProps) {
  const iconSize = size ?? 16;
  const iconColor = color ?? "none";

  return (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 16 16" {...rest}><polyline fill={iconColor} stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="2.75 8.75 6.25 12.25 13.25 4.75"></polyline></svg>);
}
