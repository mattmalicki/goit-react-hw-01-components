import PropTypes from 'prop-types';
import css from '../css/Statistics.module.css';

export default function Statistics({ title, stats }) {
  const listItems = stats.map(stat => (
    <ul className={css.statList}>
      <StatList label={stat.label} percentage={stat.percentage} id={stat.id} />
    </ul>
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>title</h2>}
      {listItems}
    </section>
  );
}

function StatList({ label, percentage, id }) {
  return (
    <li key={id} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}

Statistics.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};

StatList.PropTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
