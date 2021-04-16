import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.headerList}>
          <th className={styles.headerListItem}>Type</th>
          <th className={styles.headerListItem}>Amount</th>
          <th className={styles.headerListItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map(item => (
          <tr className={styles.parametresList} key={item.id}>
            <td className={styles.parametresType}>{item.type}</td>
            <td className={styles.parametresItem}>{item.amount}</td>
            <td className={styles.parametresItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
