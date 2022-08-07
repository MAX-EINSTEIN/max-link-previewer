// import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero px-4 pt-5 my-4 text-center">
            <i className="hero__icon fa-solid fa-share-from-square d-block mx-auto mb-4" width="72" height="57"></i>
            <h1 className="hero__heading display-5">Check social media link <br /> previews for your website.</h1>
            <div className="col-lg-8 mx-auto">
                <p className="lead mb-4 fw-normal fst-italic">Gives you a quick peek at what your site would look like on different social media platforms like Facebook, Instagram, LinkedIn & Twitter.</p>
            </div>
        </div>
    );
};

export default Hero;