import React from 'react';
import type { SVGProps } from 'react';

export interface IconamoonArrowDown2Props extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export default function IconamoonArrowDown2({ size, color, ...rest }: IconamoonArrowDown2Props) {
  const iconSize = size ?? 16;
  const iconColor = color ?? "none";

  return (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" {...rest}><path fill={iconColor} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 10l5 5m0 0l5-5"></path></svg>);
}
