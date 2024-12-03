import React from 'react';
function reverseString(str) {
    return str.split('').reverse().join('');
}

function getDayInfo() {
    const now = new Date();
    const day = now.getDate();
    const isEven = day % 2 === 0;

    if (isEven) {
        return `${now.toLocaleString('default', { month: 'long' })}, ${now.getFullYear()}`;
    } else {
        return `${now.toLocaleString('default', { weekday: 'long' })}, ${day}`;
    }
}

function App() {
    return (
        <div>
            <h1>react homework #1</h1>
            <h2>reversed String:</h2>
            <p>{reverseString('React.js')}</p>
            <h2>Day Info:</h2>
            <p>{getDayInfo()}</p>
        </div>
    );
}

export default App;
