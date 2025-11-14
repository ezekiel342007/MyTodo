import React from 'react';
import type { SVGProps } from 'react';

export interface PajamasHamburgerProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export default function PajamasHamburger({ size, color, ...rest }: PajamasHamburgerProps) {
  const iconSize = size ?? 16;
  const iconColor = color ?? "#000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 16 16"
      {...rest}>
      <path
        fill={iconColor}
        fillRule="evenodd"
        d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75M0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8m.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd"></path></svg>);
}
