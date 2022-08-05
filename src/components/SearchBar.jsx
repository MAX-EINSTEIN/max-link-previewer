function SearchBar() {
    return (
        <div className="search-bar">
            <form action=".">
                <div className="input-group">
                    <input className="link-input" type="text" />
                    <input className="preview-btn" type="button" value="Preview" />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
