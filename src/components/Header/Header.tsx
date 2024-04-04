import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ marginBottom: '20px' }}>
            Шапка
            <Link to="/account">Личный кабинет</Link>
            <Link to="/meetups">Мероприятия</Link>
        </div>
    );
};

export default Header;
