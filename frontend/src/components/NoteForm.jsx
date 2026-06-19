import { useState, useEffect } from "react";

const NoteForm = ({
  onCreate,
  onUpdate,
  editingNote,
}) => {
  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(
        editingNote.title
      );

      setDescription(
        editingNote.description
      );
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingNote) {
      onUpdate(
        editingNote._id,
        {
          title,
          description,
          category:
            editingNote.category,
        }
      );
    } else {
      onCreate({
        title,
        description,
        category: "General",
      });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form
      className="note-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter Note Title"
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
        required
      />

      <textarea
        placeholder="Enter Note Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        required
      />

      <button type="submit">
        {editingNote
          ? "✏️ Update Note"
          : "➕ Create Note"}
      </button>
    </form>
  );
};

export default NoteForm;