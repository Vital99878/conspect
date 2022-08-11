import React, { ComponentProps } from 'react'

type IconButtonProps = {
  /**
   * @description path to the svg file
   */
  iconSrc: string;
  children?: never
};

type Props = IconButtonProps & Omit<ComponentProps<'button'>, keyof IconButtonProps>;

export default function IconButton(props: Props): JSX.Element {
  const { iconSrc, ...btnProps } = props;
  return (
    <button className={'empty'} {...btnProps} >
      <img src={iconSrc} alt={'icon'} />
      {props.children}
    </button>
  );
}
