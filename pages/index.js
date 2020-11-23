import { useUIDispatchContext } from '../components/UIContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const setShowModal = useUIDispatchContext();

  return (
    <div className={styles.container}>
      <button type="button" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
    </div>
  );
}
