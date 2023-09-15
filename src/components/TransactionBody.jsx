import PropTypes from 'prop-types';
import css from '../css/TransactionHistory.module.css';

export function TableBody({ transaction, index }) {
  return (
    <tr
      className={
        index % 2 === 0 ? css['table-body-even'] : css['table-body-odd']
      }
    >
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  );
}

TableBody.propTypes = {
  transaction: PropTypes.object,
};
