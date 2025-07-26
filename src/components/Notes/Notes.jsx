import { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import './Notes.css';

function Notes() {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem('notes');
    return stored ? JSON.parse(stored) : [];
  });

  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (!newNote.title.trim() || !newNote.content.trim()) return;

    const updatedNotes = [
      ...notes,
      { id: Date.now(), ...newNote }
    ];
    setNotes(updatedNotes);
    setNewNote({ title: '', content: '' });
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (id, updated) => {
    setNotes(notes.map(note => (note.id === id ? updated : note)));
  };

  return (
    <div className="notes-container">
      <h2>📝 Notes</h2>
      <div className="add-note">
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={e => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Write your note here..."
          value={newNote.content}
          onChange={e => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>

      <div className="note-list">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
