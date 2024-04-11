import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface TNavItem {
  children: string | ReactNode;
  link: string;
  disabled?: boolean;
  icon?: ReactNode;
  style?: object;
  parentClass?: string | CSSModuleClasses;
}

const NavItem: FC<TNavItem> = ({ link, icon, children, style }) => {
  return (
    <NavLink to={link} style={style}>
      {icon} {children}
    </NavLink>
  );
};

export default NavItem;
