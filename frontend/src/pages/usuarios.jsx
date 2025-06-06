import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const API_URL = 'http://localhost:4000';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/usuarios`)
      .then(res => res.json())
      .then(setUsuarios);
  }, []);

  return (
    <List>
      {usuarios.map(user => (
        <ListItem
          key={user.id}
          button
          onClick={() => window.open(`/dados/${user.id}`, '_blank')}
        >
          <ListItemText primary={user.nome} />
        </ListItem>
      ))}
    </List>
  );
}
