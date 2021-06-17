import React, { SVGProps } from 'react';

export const RateDown = (
  props: SVGProps<SVGSVGElement>,
): React.ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 7L9 13L13 9L20.405 16.405"
        stroke="#FF4C61"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M20.405 16.405L21 17"
        stroke="#FF4C61"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 14V17H18"
        stroke="#FF4C61"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};
