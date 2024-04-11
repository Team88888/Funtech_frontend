import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cls from './MenuItem.module.scss';

interface TMenuItem {
  link: string;
  children: string;
  icon?: ReactNode;
}

const MenuItem: FC<TMenuItem> = ({ link = '#', children, icon }) => {
  return (
    <Link to={link} className={cls.MenuItem}>
      {icon}
      {children}
    </Link>
  );
};

export default MenuItem;
