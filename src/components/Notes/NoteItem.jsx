import { useState } from 'react';

function NoteItem({ note, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [tempNote, setTempNote] = useState(note);

  const saveEdit = () => {
    onEdit(note.id, tempNote);
    setEditing(false);
  };

  return (
    <div className="note-card">
      {editing ? (
        <>
          <input
            value={tempNote.title}
            onChange={e => setTempNote({ ...tempNote, title: e.target.value })}
          />
          <textarea
            value={tempNote.content}
            onChange={e => setTempNote({ ...tempNote, content: e.target.value })}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default NoteItem;
