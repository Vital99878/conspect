import { LinkProps } from 'react-router-dom';
import { Variant } from './Variant';

/**
 * @description Выглядит как кнопка.
 */

export type LinkAsButtonProps = LinkProps & { disabled?: boolean; hasPlus?: boolean } & Variant;
