import React, { ComponentProps } from 'react';

type Props = ComponentProps<'svg'> & { id: string };

export default function SvgIcon(props: Props): JSX.Element {
  const { id, ...svgProps } = props;

  switch (props.id) {
    case 'arrow':
      return (
        <svg
          {...svgProps}
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          id="_24x24_On_Light_Arrow-Right"
          data-name="24x24/On Light/Arrow-Right"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect id="view-box" width="24" height="24" fill="none" />
          <path
            id="Shape"
            d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z"
            transform="translate(9.25 6.25)"
            fill="#141124"
          />
        </svg>
      );

    default:
      return <svg {...props}>fdas</svg>;
  }
}
