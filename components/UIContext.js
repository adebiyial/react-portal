import React, { useState } from 'react';

const UIContext = React.createContext(undefined);
const UIDispatchContext = React.createContext(undefined);

function UIProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <UIContext.Provider value={showModal}>
      <UIDispatchContext.Provider value={setShowModal}>{children}</UIDispatchContext.Provider>
    </UIContext.Provider>
  );
}

function useUIState() {
  const context = React.useContext(UIContext);

  if (context === undefined) {
    throw new Error(`useUIState must be used within a UIProvider`);
  }

  return context;
}

function useUIDispatchContext() {
  const context = React.useContext(UIDispatchContext);

  if (context === undefined) {
    throw new Error(`useUIDispatchContext must be used within a UIProvider`);
  }

  return context;
}

export { UIProvider, useUIState, useUIDispatchContext };
