// import './Home.scss';
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";


const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <Hero></Hero>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <SearchBar></SearchBar>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;