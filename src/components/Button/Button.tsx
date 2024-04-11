import type { FC, ReactNode, MouseEvent } from 'react';
import cls from './styles.module.scss';

interface CommonButtonProps {
  children: string | ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: object;
  parentClass?: string;
  form?: string;
}

type PrimaryButtonProps = CommonButtonProps & {
  primary: boolean;
  secondary?: never;
};
type SecondaryButtonProps = CommonButtonProps & {
  secondary: boolean;
  primary?: never;
};

type TypeButtonProps = PrimaryButtonProps | SecondaryButtonProps;

const Button: FC<TypeButtonProps> = ({
  disabled = false,
  type = 'button',
  children,
  icon,
  primary = false,
  secondary = false,
  onClick,
  style,
  parentClass,
  form,
}) => {
  return (
    <button
      form={form}
      style={style}
      onClick={onClick}
      className={`${cls.button} ${(primary && cls.primary) || (secondary && cls.secondary)} ${parentClass ? parentClass : ''} `}
      type={type}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
