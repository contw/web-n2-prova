import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const API_URL = 'http://localhost:4000';

export default function Dados() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/dados/${id}`)
      .then(res => res.json())
      .then(setUser);
  }, [id]);

  if (!user) return <Typography>Carregando...</Typography>;

  return (
    <div>
      <Typography variant="h4">{user.nome}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography>Idade: {user.idade}</Typography>
    </div>
  );
}
