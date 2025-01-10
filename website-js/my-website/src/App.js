// import meImage from './images/IMG_8576.jpeg';
import './App.css';
import Header from './Header';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
        {/* <img src={/images/IMG_8576.jpeg} className="me-img" alt="logo" /> */}
        <p>
          Hello, World!
        </p>
        <MyButton />
        <a
          className="Linkedin-link"
          href="https://www.linkedin.com/in/jasmin-salgado"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn!
        </a>
      {/* </header> */}
    </div>
  );
}
export default App;
