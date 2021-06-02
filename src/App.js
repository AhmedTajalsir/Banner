import './App.css';
import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'
function App() {
  return (
    <div className="app">
      <div className="top">
          <Nav />
          <Banner />
     

      </div>

        <Footer />
    </div>
  );
}

export default App;
