import React from 'react';
import type { SVGProps } from 'react';

export interface FamiconsCheckboxOutlineProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export function FamiconsCheckboxOutline({ size, color, ...rest }: FamiconsCheckboxOutlineProps) {
  const iconSize = size ?? 16;
  const iconColor = color ?? "none";

  return (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 512 512" {...rest}><path fill={iconColor} stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M352 176L217.6 336L160 272"></path><rect width={384} height={384} x={64} y={64} fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={32} rx={48} ry={48}></rect></svg>);
}
