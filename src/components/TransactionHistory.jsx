import PropTypes from 'prop-types';
import css from '../css/TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  const transactions = items.map(item => <TableBody transaction={item} />);
  return (
    <table className={css.transactionHistory}>
      <TableHead />
      <tbody>{transactions}</tbody>
    </table>
  );
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
}

function TableBody({ transaction }) {
  return (
    <tr key={transaction.id}>
      <th>{transaction.type}</th>
      <th>{transaction.amount}</th>
      <th>{transaction.currency}</th>
    </tr>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

TableBody.propTypes = {
  transaction: PropTypes.object,
};
