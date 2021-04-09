import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Paper } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
require('dotenv').config();

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const url = process.env.JSON_SERVER_URL;

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const handleDelete = async id => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const newNotes = notes.filter(note => note.id != id);
    setNotes(newNotes);
  };
  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid key={note.id} item xs={12} sm={6} md={3} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
