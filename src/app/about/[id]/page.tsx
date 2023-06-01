'use client';

import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function About() {
  const params = useParams();

  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    findUser()
  });

  async function findUser() {
    const response = await axios.get(`http://localhost:3000/api/users${params.id}`);
    setUser(response.data)
  }

  return (
    <h1>Olá {user?.name}</h1>
  );
}