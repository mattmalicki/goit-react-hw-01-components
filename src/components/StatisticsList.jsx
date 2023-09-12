import PropTypes from 'prop-types';
import randomColor from '../js/randomColor';
import css from '../css/Statistics.module.css';

export function StatisticsList({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: randomColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
