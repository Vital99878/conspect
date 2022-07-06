import React from 'react';
import './RequiredMessage.scss';

type Props = {
  props?: {
    isRequired: boolean;
    textContent: string;
  };
} & React.HTMLProps<HTMLSpanElement>;
/**
 * @description добавляет span сообщение если, введенные данные в инпуте не валидны или не заполнены.
 * если props undefined, то компонент не отображается
 */

const RequiredMessage: React.FC<Props> = ({ props = { isRequired: false }, className }) => {
  const { isRequired, textContent } = props;
  return isRequired ? <span className={className}>{textContent}</span> : null;
};

export default RequiredMessage;
