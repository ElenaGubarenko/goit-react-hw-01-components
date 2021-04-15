import PropTypes from "prop-types"
import noImage from "../NoImage/noImage.jpg"
import styles from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.status : styles.offline}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

console.log(noImage)
FriendListItem.defaultProps = {
  avatar: noImage,
  isOnline: "true",
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  // isOnline: PropTypes.oneOf(["false", "true"]),
}

export default FriendListItem
