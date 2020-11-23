import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './Sidebar';
import { useUIDispatchContext, useUIState } from './UIContext';

export default function Layout({ children }) {
  const showModal = useUIState();
  const setShowModal = useUIDispatchContext();

  const firstvariants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const secondvariants = {
    hidden: { translateX: 400 },
    animate: { translateX: 0 },
    exit: { translateX: 400 },
  };

  return (
    <div className="layout">
      {children}
      <AnimatePresence>
        {showModal && (
          <Sidebar>
            <div className="sidebar-root">
              <motion.div
                key="overlay"
                initial="hidden"
                animate="animate"
                exit="exit"
                variants={firstvariants}
                className="overlay"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setShowModal(false)}
                role="button"
              />
              <motion.section
                key="sidebar"
                initial="hidden"
                animate="animate"
                exit="exit"
                variants={secondvariants}
                className="sidebar"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <button type="button" onClick={() => setShowModal(false)}>
                  Close Me
                </button>

                <h1 className="title">sidebar</h1>
              </motion.section>
            </div>
          </Sidebar>
        )}
      </AnimatePresence>
    </div>
  );
}

// https://github.com/zeit/next.js/tree/canary/examples/with-portals
