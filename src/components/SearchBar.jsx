import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const urlRef = useRef();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        const url = urlRef.current.value;
        if (regex.test(url)) {
            console.log('url: ', url);
            navigate(`/preview/?url=${url}`);
        } else {
            urlRef.current.placeholder = "Please enter a valid url";
            console.log(`Error: ${url} is not a valid url.`);
        }
        urlRef.current.value = "";
    }

    return (
        <form className="d-flex gap-2" onSubmit={handleSubmit}>
            <div className="search-bar">
                <input name="url" className="form-control" type="text" placeholder="yourwebsite.com" autoFocus="autofocus" ref={urlRef} />
                <button className="btn btn-gradient btn-submit" type="submit"> <i className="fa fa-arrow-right"> </i> </button>
            </div>
        </form>
    );
}

export default SearchBar;
