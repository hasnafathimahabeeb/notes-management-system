import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        loading,
        setLoading,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;