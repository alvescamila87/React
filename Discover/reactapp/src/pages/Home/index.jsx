import React, { useState} from 'react';

import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState()
 
  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>

      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={event => setStudentName(event.target.value)}
      />

      <button type="button">Adicionar</button>

      <Card name="Camila" time="10:55:25" />
      <Card name="Isabel" time="11:00:10" />
      <Card name="Karoline" time="11:05:10" />
      <Card name="Paulo" time="12:35:00" />
    </div>
  )
}


