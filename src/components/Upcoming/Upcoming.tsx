import type { FC } from 'react';
import cls from './Upcoming.module.scss';
import { useNavigate } from 'react-router-dom';

interface TUpcoming {
  event: {
    name_event: string;
    data_event: string;
    event_id: string;
  };
}

const Upcoming: FC<TUpcoming> = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className={cls.upcoming}>
      <div className={cls.upcoming__content}>
        <span className={cls.upcoming__span}>Предстоящее событие</span>
        <h2 className={cls.upcoming__title}>{event.name_event}</h2>
        <time className={cls.upcoming__date}>{event.data_event}</time>
      </div>
      <button
        className={cls.upcoming__button}
        onClick={() => {
          navigate(`${event.event_id}`);
        }}
      >
        Перейти к событию
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66675 9.99996H16.3334M16.3334 9.99996L10.5001 4.16663M16.3334 9.99996L10.5001 15.8333"
            stroke="#9E7E00"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Upcoming;
