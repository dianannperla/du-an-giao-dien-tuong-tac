import React from 'react';
import { Button } from './components/Button';

const App = () => {
  return (
    <div>
      <h1>Chào mừng đến với Dự án Giao diện Tương tác</h1>
      <Button label='Click me!' onClick={() => alert('Clicked!')} />
    </div>
  );
};

export default App;