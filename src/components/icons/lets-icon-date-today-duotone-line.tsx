import React from 'react';
import type { SVGProps } from 'react';

export interface LetsIconsDateTodayDuotoneLineProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

export default function LetsIconsDateTodayDuotoneLine({ size, color, ...rest }: LetsIconsDateTodayDuotoneLineProps) {
  const iconSize = size ?? 16;
  const iconColor = color ?? "none";

  return (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" {...rest}><defs><mask id="SVGIwD8Vc3U"><g fill={iconColor} strokeWidth={1.2}><path stroke="#c0c0c0" strokeOpacity={0.25} d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10v1H3z"></path><rect width={18} height={15} x={3} y={6} stroke="#fff" rx={2}></rect><path stroke="#fff" strokeLinecap="round" d="M7 3v5m10-5v5"></path></g></mask></defs><path fill="#000" d="M0 0h24v24H0z" mask="url(#SVGIwD8Vc3U)"></path></svg>);
}
