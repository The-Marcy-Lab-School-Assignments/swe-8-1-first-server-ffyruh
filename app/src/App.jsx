import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <main>
        <h1>My First API</h1>
        <p>Welcome to my first API! This is a simple API that returns a random joke, can roll dice for you, and can provide you with a nice picture. Enjoy!</p>
        <ul>
          <li>Visit <a href="/api/joke">/api/joke</a> for a funny joke</li>
          <li>Visit <a href="/api/picture">/api/picture</a> to see a nice picture</li>
          <li>Visit <a href="/api/rollDie">/api/rollDie</a> to roll a die. (Try <a href="/api/rollDie?quantity=3">/api/rollDie?quantity=3</a> to roll multiple dice!)</li>
          
        </ul>
      </main>
    </>
  )
}

export default App
