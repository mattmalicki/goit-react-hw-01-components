import PropTypes from 'prop-types';
import { TableHead } from './TransactionHead';
import { TableBody } from './TransactionBody';
import css from '../css/TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  const transactions = items.map((item, index) => (
    <TableBody key={item.id} transaction={item} index={index} />
  ));
  return (
    <table className={css['transaction-history']}>
      <TableHead />
      <tbody className={css['table-body']}>{transactions}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
