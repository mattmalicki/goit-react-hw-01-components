import PropTypes from 'prop-types';
// import css from '../css/TransactionHistory.module.css';

export function TableBody({ transaction }) {
  return (
    <tr>
      <th>{transaction.type}</th>
      <th>{transaction.amount}</th>
      <th>{transaction.currency}</th>
    </tr>
  );
}

TableBody.propTypes = {
  transaction: PropTypes.object,
};
