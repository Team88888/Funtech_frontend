import type { FC, ReactNode } from 'react';

interface TYandexAccount {
  children?: ReactNode;
}

const YandexAccount: FC<TYandexAccount> = () => {
  return (
    <div>
      <div className="plus"></div>
      <div className="account"></div>
    </div>
  );
};

export default YandexAccount;
