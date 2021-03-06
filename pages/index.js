import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea
          deserunt consequatur placeat voluptatibus quisquam nulla, a ipsum quas
          laudantium ex, aspernatur possimus saepe exercitationem quod quam
          eligendi, explicabo mollitia!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea
          deserunt consequatur placeat voluptatibus quisquam nulla, a ipsum quas
          laudantium ex, aspernatur possimus saepe exercitationem quod quam
          eligendi, explicabo mollitia!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listings</a>
        </Link>
      </div>
    </>
  );
}
