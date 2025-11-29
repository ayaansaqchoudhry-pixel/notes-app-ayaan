'use client';

import { useState } from 'react';

interface Note {
  name: string;
  file: File;
}

export default function Dashboard() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const addNote = () => {
    if (file) {
      setNotes([...notes, { name: file.name, file }]);
      setFile(null);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>My Notes Dashboard</h1>

      <div style={{ marginBottom: '1rem' }}>
        {/* File input */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={addNote} style={{ padding: '0.5rem' }}>
          Upload File
        </button>
      </div>

      <ul>
        {notes.map((note, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            <a
              href={URL.createObjectURL(note.file)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {note.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}





