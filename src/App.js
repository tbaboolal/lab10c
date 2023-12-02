import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Installation</h2>
      </header>

      <section className="App-section">
        <h2>1. Install Node.js and npm</h2>
        <p>
          React needs Node.js and npm to be installed on my machine. So I visited the{' '}
          <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
            Node.js website
          </a>
        </p>
      </section>

      <section className="App-section">
        <h2>2. Install Create React App</h2>
        <p>
          I opened the terminal and ran the following commands to install create React app:
        </p>
        <pre>
          <code>npx install -g create-react-app</code>
        </pre>
      </section>

      <section className="App-section">
        <h2>3. Create a React app</h2>
        <p>
          After finishing installing React, I ran the following commands in my VSCode terminal after selecting a folder where I wanted the project to be.
        </p>
        <pre>
          <code>npx create-react-app lab10c</code>
        </pre>
      </section>

      <section className="App-section">
        <h2>4. Navigate to project directory</h2>
        <p>In the terminal, I ran the command:</p>
        <pre>
          <code>cd lab10c</code>
        </pre>
      </section>

      <section className="App-section">
        <h2>5. Run the App</h2>
        <p>
          After changing to the project directory, I used the following command to run the app. This opened a local version of the app in my default browser:
        </p>
        <pre>
          <code>npm start</code>
        </pre>
      </section>

      <section className="App-section">
        <h2>6. Edit the App</h2>
        <p>From there, I edited the file `App.js` in the `src` folder to make changes.</p>
      </section>

      <section className="App-section">
        <h2>How I created this webpage</h2>
        <pre>
          <h3>1. Building the webpage:</h3>
          <p>I built the webpage by writing standard HTML code inside the `App.js` file. The code consists of various sections, paragraphs, headers, and code blocks to display the steps.</p>
          <h3>2. Styling:</h3>
          <p>I added my own styling elements to the `index.css` file provided by React by default.</p>
          <h3>3. Hosting:</h3>
          <p>I hosted the webpage on GitHub Pages using a guide found{' '}
            <a href="https://github.com/gitname/react-gh-pages" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </pre>
      </section>

      <section className="App-section">
        <h3>Difficulties encountered:</h3>
        <pre>
          <p>Some challenges I faced were hosting the website mainly. I also faced a little bit of issues trying to set up and get React running properly. Other than that, it was mostly smooth sailing from there.</p>
        </pre>
      </section>
    </div>
  );
}

export default App;
