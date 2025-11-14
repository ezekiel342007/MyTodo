import React from 'react';
import type { SVGProps } from 'react';

export interface IconParkOutlineAddProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export default function IconParkOutlineAdd({ size, color, ...rest }: IconParkOutlineAddProps) {
  const iconSize = size ?? 16;
  const iconColor = color ?? "none";

  return (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 48 48" {...rest}><g fill={iconColor} stroke="#fff" strokeLinejoin="round" strokeWidth={4}><rect width={36} height={36} x={6} y={6} rx={3}></rect><path strokeLinecap="round" d="M24 16v16m-8-8h16"></path></g></svg>);
}
