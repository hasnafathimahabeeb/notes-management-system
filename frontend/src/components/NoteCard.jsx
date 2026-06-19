import "../styles/notecard.css";

const NoteCard = ({
  note,
  onDelete,
  onEdit,
  onPin,
}) => {
  return (
    <div className="note-card">
      <span
        className={`badge badge-${note.category?.toLowerCase()}`}
      >
        {note.category}
      </span>

      <h3>{note.title}</h3>

      <p>{note.description}</p>

      <div className="card-actions">
      <button
  className="edit-btn"
  onClick={() => {
    alert("Edit button clicked");
    onEdit(note);
  }}
>
  ✏️ Edit
</button>
<button
  className="pin-btn"
  onClick={() =>
    onPin(note)
  }
>
  {note.pinned
    ? "📌 Unpin"
    : "📌 Pin"}
</button>
        <button
          className="delete-btn"
          onClick={() =>
            onDelete(note._id)
          }
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;