import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import instance from './instance';

export default function App() {
  const [count, setCount] = useState(0);

  instance.get(`https://jsonplaceholder.typicode.com/users`).then((res) => console.log(res));

  return (
    <>
      <div>
        <Button variant="contained">Hello World</Button>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((int) => int + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
