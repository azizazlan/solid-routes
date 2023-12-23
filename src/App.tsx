import './App.css';

const App = (props) => (
  <>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/users">Users</a>
      <a href="/dunno">Opps!</a>
    </nav>
    {props.children}
  </>
);

export default App;
