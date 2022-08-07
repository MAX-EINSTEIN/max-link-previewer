import ReviewHeader from "../components/ReviewHeader";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const processKey = (key, value) => {
    if (key === 'url') {
        return (<td><a href={value} target="blank">{value}</a></td>)
    } else if (key === 'images' || key === 'favicons' || key === 'videos') {
        return (
            <td>
                {
                    value.map(element => {
                        console.log(element)
                        return (<a className="d-block" href={element} target="blank">{element}</a>)
                    })
                }
            </td>
        )
    }
    return (<td>{value}</td>)
}

const Preview = () => {
    const [params] = useSearchParams();
    const [data, setData] = useState({
        'title': 'default',
        'description': 'default',
        'images': ['#'],
    });

    useEffect(() => {
        const logDetails = (url) => {
            fetch(`https://api-max-preview.herokuapp.com/preview/?url=${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                },
            }).then(response => response.json())
                .then(data => setData(data));
        }

        logDetails(params.get('url'));
    }, [params]);

    return (
        <div className='Preview container'>
            <ReviewHeader url={params.get('url')}></ReviewHeader>

            <div className="cards my-5">
                <div className="row d-flex container justify-content-center">
                    <div className="card col-lg-6 px-0">
                        <img src={data['images'][0]} className="card-img-top" alt="site preview" />
                        <div className="card-body bg-light">
                            <div className="fw-light fs-6">{data['url']}</div>
                            <h5 className="card-title">{data['title']}</h5>
                            <p className="card-text card-description">{data['description']}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-wrapper table-responsive">
                <table className="table table-striped text-start table-bordered my-5">
                    <tbody>
                        <tr>
                            <th scope="col">KEY</th>
                            <th scope="col">VALUE</th>
                        </tr>
                        {
                            Object.entries(data).map(([key, value]) => {
                                console.log(key)
                                console.log(value)
                                return (
                                    <tr key={key}>
                                        <th scope="row">{key}</th>
                                        {processKey(key, value)}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>


        </div >
    );
};

export default Preview;