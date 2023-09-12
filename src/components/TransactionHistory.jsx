import PropTypes from 'prop-types';
import { TableHead } from './TransactionHead';
import { TableBody } from './TransactionBody';
import css from '../css/TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  const transactions = items.map(item => (
    <TableBody key={item.id} transaction={item} />
  ));
  return (
    <table className={css.transactionHistory}>
      <TableHead />
      <tbody>{transactions}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
