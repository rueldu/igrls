import { NextPage } from "next";
import Head from "next/head";
import { AnimatePresence, useCycle } from "framer-motion";

// styles
import styles from "../../styles/pages/preview.module.css";

// components
import Navbar from "../../components/navbar";
import UsernameInput from "../../components/modal/usernameInput";
import Image from "../../components/image";

interface Props {}

const Preview: NextPage<Props> = () => {
  const [isModelOpen, toggleOpen] = useCycle(false, true);

  const toggleModel = () => toggleOpen();

  return (
    <>
      <Head>
        <title>isave - plan your instagram feed</title>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.image_container}>
          <Image src="images/logo.svg" alt="logo" />
        </div>
        <h1 className={styles.tagline}>Introducing Preview (beta).</h1>
        <p className={styles.tagline_description}>
          Plan your instagram feed before posting them.
        </p>
        <button className={styles.action_btn} onClick={toggleModel}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Get Started.
        </button>

        <AnimatePresence>
          {isModelOpen && <UsernameInput handleClose={toggleModel} />}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Preview;
