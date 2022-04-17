import styles from './index.module.css'

export default function Preloader() {
  return (
    <div className="h-screen w-full z-[10] bg-white/75 fixed top-0 left-0 flex items-center justify-center">
      <div className={styles.skchase}>
        <div className={styles.skchasedot} />
        <div className={styles.skchasedot} />
        <div className={styles.skchasedot} />
        <div className={styles.skchasedot} />
        <div className={styles.skchasedot} />
        <div className={styles.skchasedot} />
      </div>
    </div>
  )
}
