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
    const response = await axios.get(`https://localhost:3000/${params.id}`);
    setUser(response.data)
  }

  return (
    <h1>Olá {user?.name}</h1>
  );
}