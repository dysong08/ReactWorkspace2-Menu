import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import GetMenu from './components/GetMenu';
import PostMenu from './components/PostMenu';

function App() {
  return (
    <div id='container'>

      <Header />

      <section id="content">
        <div id="menu-container" className="text-center" >
          <GetMenu />
          <hr />
          <PostMenu />
        </div>
      </section >




    </div>
  );
}

export default App;
