import classes from "./Header.module.css";
import Image from "next/image";
import profilePic from "../public/profile.jpg";
function Header() {
  return (
    <div className={classes.headcontainer}>
      <div className={classes.headwrapper}>
        <div className={classes.title}>
          <h2>
            Hello, <span>Abda torey</span>
          </h2>
          <p>welcome to your Dashboard</p>
        </div>
      </div>
      <div className={classes.profile}>
        <Image src={profilePic} width={40} height={45} alt="profile photo" className={classes.image} />
      </div>
    </div>
  );
}

export default Header;
