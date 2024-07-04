import logo from './logo.svg';
import './App.css';
import './CSS/design-system.css';
import './CSS/appearance.css';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <header>
      <a className="HomeLink col-9 margin-big" href="#">
        <h1 className="a--no-margin a--text-highlight">Camille Tindogan</h1>
        <h2 className="a--no-margin">UI Designer</h2>
      </a>
      <Menu
      link1 = '#'
      link2 = '#'
      link3 = '#'
      name1 = 'Resume'
      name2 = 'Contact'
      name3 = 'LinkedIn'
      />
      </header>
      <main>
        <div className='col-1 flex-wrapper'>
         <p className="a--rotate-left a--no-margin">Featured Works</p>
        </div>
      </main>
    </div>
  );
}

export default App;
