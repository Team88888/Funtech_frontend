import type { FC } from 'react';
import cls from './Chip.module.scss';

interface TChip {
  title: string;
  onClick: (param: string) => void;
}

const Chip: FC<TChip> = ({ title, onClick }) => {
  return (
    <div className={cls.chip} onClick={() => onClick(title)}>
      {title}
    </div>
  );
};

export default Chip;
