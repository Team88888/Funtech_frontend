import { Link } from 'react-router-dom';
import cls from './Header.module.scss';
import MenuItem from '../MenuItem/MenuItem';
import YandexAccount from '../YandexAccount';
import { LicationIconSVG, TicketsIconSVG } from '../../ui-kit';

const Header = () => {
  return (
    <header className={cls.header}>
      <Link to={'/'} className={cls.header__logo}>
        <span className={cls.header__logo_medium}>FunTech</span>
        <span className={cls.header__logo_light}>Ивенты</span>
      </Link>
      <nav className={cls.header__menu}>
        <ul className={cls.menu__list}>
          <li>
            <MenuItem link="#" icon={<LicationIconSVG />}>
              Москва
            </MenuItem>
          </li>
          <li>
            <MenuItem link="#" icon={<TicketsIconSVG />}>
              Мои билеты
            </MenuItem>
          </li>
          <li>
            <YandexAccount />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
