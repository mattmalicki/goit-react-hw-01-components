import css from '../css/TransactionHistory.module.css';

export function TableHead() {
  return (
    <thead className={css['table-head']}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
}
