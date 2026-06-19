import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import StatsCard from "../components/StatsCard";

import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../services/noteService";

import "../styles/home.css";
import "../styles/notecard.css";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  // Load Notes
  const loadNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  // Create Note
  const handleCreate = async (
    noteData
  ) => {
    try {
      await createNote(noteData);
      loadNotes();
    } catch (error) {
      console.log(error);
    }
  };
const handleUpdate = async (
  id,
  noteData
) => {
  try {
    await updateNote(
      id,
      noteData
    );

    setEditingNote(null);

    loadNotes();
  } catch (error) {
    console.log(error);
  }
};
const handlePin =
  async (note) => {
    try {
      await updateNote(
        note._id,
        {
          ...note,
          pinned:
            !note.pinned,
        }
      );

      loadNotes();
    } catch (error) {
      console.log(error);
    }
  };
const handleEdit = (note) => {
  console.log("Selected Note:", note);
  setEditingNote(note);
};
  // Delete Note
  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      loadNotes();
    } catch (error) {
      console.log(error);
    }
  };
  const [
  editingNote,
  setEditingNote,
] = useState(null);

console.log("Editing Note:", editingNote);

  // Search Filter
  const filteredNotes =
    notes.filter(
      (note) =>
        note.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        note.description
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <Sidebar />

        <div className="main-content">

          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search Notes..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <br />
          <br />

          <NoteForm
  onCreate={handleCreate}
  onUpdate={handleUpdate}
  editingNote={editingNote}
/>

          <div className="stats-grid">

            <StatsCard
              title="Total Notes"
              count={notes.length}
              icon="📝"
            />

            <StatsCard
  title="Pinned"
  count={
    notes.filter(
      (n) => n.pinned
    ).length
  }
  icon="📌"
/>

<StatsCard
  title="Favorites"
  count={
    notes.filter(
      (n) => n.favorite
    ).length
  }
  icon="⭐"
/>
</div>

          <h2>
            My Notes
          </h2>

          <br />

         <div className="note-grid">
  {filteredNotes.map((note) => (
   <NoteCard
  key={note._id}
  note={note}
  onDelete={handleDelete}
  onEdit={handleEdit}
  onPin={handlePin}
/>
  ))}
</div>

        </div>
      </div>
    </>
  );
};

export default Home;