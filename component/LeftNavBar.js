import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen,faTachometerAlt,faPlus,faHeart,faCog,faSignOut } from "@fortawesome/free-solid-svg-icons";

function LeftNavBar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>StreamLine</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faTachometerAlt}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Dashboard</a>
          </li>
          <li>
          <FontAwesomeIcon
              icon={faPlus}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Add Post</a>
          </li>
          <li>
          <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Library</a>
          </li>
          <li>
          <FontAwesomeIcon
              icon={faHeart}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Favorite</a>
          </li>
          <li>
          <FontAwesomeIcon
              icon={faCog}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Settings</a>
          </li>
          <li>
          <FontAwesomeIcon
              icon={faSignOut}
              style={{ width: "18px", cursor: "pointer" }}
            />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavBar;
