import React, { SVGProps } from 'react';

export const Person = (props: SVGProps<SVGSVGElement>): React.ReactElement => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.94431 16.5C1.94431 13.6875 4.86076 13.6875 6.31899 11.8125C7.0481 10.875 4.86076 10.875 4.86076 6.1875C4.86076 3.06281 5.83267 1.5 7.77722 1.5C9.72177 1.5 10.6937 3.06281 10.6937 6.1875C10.6937 10.875 8.50633 10.875 9.23545 11.8125C10.6937 13.6875 13.6101 13.6875 13.6101 16.5"
        stroke="#6F52ED"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};
