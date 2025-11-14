import React from 'react';
import type { SVGProps } from 'react';

export interface IconParkOutlineAddProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export default function CarbonCheckbox({ size, color, ...rest }: IconParkOutlineAddProps) {
  const iconSize = size ?? 16;
  const iconColor = color ?? "#fff";



  return (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 32 32" {...rest}><path fill={iconColor} d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z"></path></svg>);
}
