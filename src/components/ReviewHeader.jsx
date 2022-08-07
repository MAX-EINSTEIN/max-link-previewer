// import './ReviewHeader.scss';
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReviewHeader = (props) => {
    const urlRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        urlRef.current.value = props.url;
    });

    function handleSubmit(event) {
        event.preventDefault();
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        const url = urlRef.current.value;
        if (regex.test(url)) {
            console.log('url: ', url);
            navigate(`/preview/?url=${url}`);
        } else {
            console.log(`Error: ${url} is not a valid url.`);
        }
        urlRef.current.value = "";
    }

    return (
        <form className="d-flex gap-2 my-5 py-2" onSubmit={handleSubmit}>
            <div className="search-bar-header">
                <input name="url-header" className="form-control-header" type="text" placeholder="yourwebsite.com" autoFocus="autofocus" ref={urlRef} />
                <button className="btn btn-gradient btn-submit-header" type="submit"> <i className="fas fa-redo"> </i> </button>
            </div>
        </form>
    );
};

export default ReviewHeader;