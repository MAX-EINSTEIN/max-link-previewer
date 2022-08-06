function SearchBar() {
    return (
        <form className="d-flex gap-2">
            <div className="search-bar">
                <input className="form-control" type="text" placeholder="yourwebsite.com" autofocus="autofocus" />
                <button className="btn btn-gradient btn-submit" type="submit"> <i className="fa fa-arrow-right"> </i> </button>
            </div>
        </form>
    );
}

export default SearchBar;
