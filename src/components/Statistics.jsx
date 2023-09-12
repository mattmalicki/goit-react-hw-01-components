import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList';
import css from '../css/Statistics.module.css';

export function Statistics({ title, stats }) {
  const listItems = stats.map(stat => (
    <StatisticsList
      key={stat.id}
      label={stat.label}
      percentage={stat.percentage}
      id={stat.id}
    />
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>{listItems}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
