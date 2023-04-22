import styles from "./Photo.module.css";

export const photo = (
  <img
    src={`${process.env.PUBLIC_URL}/img/photo.jpg`}
    alt='my portrait'
    width='200px'
    height='200px'
    className={styles.Photo}
  />
);
