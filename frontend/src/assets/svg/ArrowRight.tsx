import { SVGProps } from 'react';
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" {...props}>
    <mask
      id="a"
      width={25}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha'
      }}
    >
      <path fill="#D9D9D9" d="M.5 0h24v24H.5z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#008B90"
        d="M9.2 17.3a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l3.9-3.9-3.9-3.9a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l4.6 4.6c.1.1.17.208.213.325.041.117.062.242.062.375s-.02.258-.063.375a.876.876 0 0 1-.212.325l-4.6 4.6a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z"
      />
    </g>
  </svg>
);
export default ArrowRight;
