import EventCard from '../../components/EventCard';
import Filters from '../../components/Filters';
import Upcoming from '../../components/Upcoming';
import cls from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main className={cls.homePage}>
      <Upcoming
        event={{
          name_event: 'Яндекс Go Dev Day&Night',
          data_event: '20 Апр 2024',
          event_id: '235fsdf32sf',
        }}
      />
      <Filters />
      <section
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h2>Может быть интересно</h2>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr  1fr 1fr',
            gap: '30px',
          }}
        >
          {Array.from({ length: 6 }, (_v, i) => {
            return <EventCard key={i} />;
          }).map((item) => item)}
        </ul>
      </section>
      <section
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h2>Может быть интересно</h2>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr  1fr 1fr',
            gap: '30px',
          }}
        >
          {Array.from({ length: 6 }, (_v, i) => {
            return <EventCard key={i} />;
          }).map((item) => item)}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
