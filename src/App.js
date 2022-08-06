import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <nav className="navbar navbar-shadow navbar-light bg-body">
          <div className="container">
            <div className="brand-name">
              <i className="brand-icon fa-solid fa-share-from-square me-2"></i>
              MAX-PREVIEW
            </div>
            <a className="btn btn-gradient" href="http://github.com/MAX-EINSTEIN/max-link-previewer/" target='blank'>  <i className="fa-brands fa-github"></i>&nbsp; GitHub</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div class="hero px-4 pt-5 my-5 text-center">
              <i class="hero__icon fa-solid fa-share-from-square d-block mx-auto mb-4" width="72" height="57"></i>
              <h1 class="hero__heading display-5">Check social media link <br /> previews for your website.</h1>
              <div class="col-lg-8 mx-auto">
                <p class="lead mb-4 fw-normal fst-italic">Gives you a quick peek at what your site would look like on different social media platforms like Facebook, Instagram, LinkedIn & Twitter.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <SearchBar></SearchBar>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

