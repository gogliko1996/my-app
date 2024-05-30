import React from 'react';
import './App.css';
import { AppRouter } from './routes/app';

const  App:React.FC = () => {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
