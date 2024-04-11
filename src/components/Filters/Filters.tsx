import type { FC } from 'react';
import cls from './Filters.module.scss';
import Chip from '../Chip';

interface TFilters {
  props?: object;
}

const CHIPS_ARR = ['Дизайн', 'Бизнес', 'Разработка', 'Маркетинг'];

const Filters: FC<TFilters> = () => {
  const handleChipClick = (param: string): void => {
    console.log(param);
  };

  return (
    <div className={cls.filters}>
      <div className={cls.filters__wrapper}>
        <ul className={cls.filters__list}>
          {CHIPS_ARR.map((item) => {
            return (
              <li key={item}>
                <Chip title={item} onClick={() => handleChipClick} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className={cls.filters__wrapper}>
        <ul className={cls.filters__list}>
          {CHIPS_ARR.map((item) => {
            return (
              <li key={item}>
                <Chip title={item} onClick={() => handleChipClick} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
