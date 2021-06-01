import React from 'react';
import { useRecord } from '../../hooks/useRecord';

function App() {
  const { current, undo, redo, record } = useRecord('#FF0000');

  return (
    <>
      <button aria-label="undo-button" onClick={undo}>undo</button>
      <button aria-label="redo-button" onClick={redo}>redo</button>
      <input aria-label="color-input" type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div aria-label="color-div" style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
