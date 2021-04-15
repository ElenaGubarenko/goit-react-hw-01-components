import PropTypes from "prop-types"
import styles from "./Statistics.module.css"

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.StatList}>
      {stats.map((stat) => (
        <li key={stat.id} className={styles.item}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
)

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}

export default Statistics
