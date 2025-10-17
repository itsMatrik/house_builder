import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [blocks, setBlocks] = useState([{
    value: 1,
    color: 'red',
    id: Math.random()
  }]);

  function deleteBlock(id) {
    setBlocks(blocks.filter(item => item.id !== id));
  }

  function setColor(id, color) {
    setBlocks(blocks.map(block => {
      if (block.id === id) {
        return { ...block, color: color };
      }
      return block;
    }));
  }

  function newBlock() {
    setBlocks([...blocks, {value: 1, color: 'red', id: Math.random()}]);
  }

  function handleChange(event, id) {
    setBlocks(blocks.map(block => {
      if (block.id === id) {
        return { ...block, value: event.target.value };
      }
      return block;
    }));
  }

  function Block({value, color, id}) {
    return (
        <div className="block-container">
          <div className="controls">
            <input
                type='range'
                value={value}
                min='1'
                max='10'
                onChange={(e) => handleChange(e, id)}
                className="slider"
            />
            <span className="value-display">{value}</span>
            <span className="color-display" style={{color: color}}>{color}</span>
            <div className="color-buttons">
              <button
                  className="color-btn red"
                  onClick={() => setColor(id, 'red')}
              >
                Red
              </button>
              <button
                  className="color-btn green"
                  onClick={() => setColor(id, 'green')}
              >
                Green
              </button>
              <button
                  className="color-btn blue"
                  onClick={() => setColor(id, 'blue')}
              >
                Blue
              </button>
            </div>
            <button
                className="delete-btn"
                onClick={() => deleteBlock(id)}
            >
              Delete
            </button>
          </div>
          <House value={value} color={color} />
        </div>
    );
  }

  function House({value, color}) {
    const levels = Array.from({ length: value }, (_, index) => index );

    return (
        <div className="house-container">
          <div className="house">
            {levels.map(level => (
                <div
                    key={level}
                    className="house-level"
                    style={{
                      backgroundColor: color,
                      height: `${20 + level * 2}px`,
                      width: `${40 + level * 10}px`
                    }}
                >
                </div>
            ))}
          </div>
        </div>
    );
  }

  return (
      <div className="app">
        <header className="app-header">
          <h1>Block Builder</h1>
          <button className="new-block-btn" onClick={newBlock}>
            + Add New Block
          </button>
        </header>

        <div className="blocks-list">
          {blocks.map((block) => (
              <Block
                  value={block.value}
                  key={block.id}
                  color={block.color}
                  id={block.id}
              />
          ))}
        </div>
      </div>
  );
};

export default App;