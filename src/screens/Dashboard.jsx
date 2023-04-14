import axios from "axios";
import React, { useState, useEffect } from "react";


export default function Dashboard() {

    const [articles, setArticles] = useState([])
    // console.log(item.length)

    const fetchData = async () => {

        await axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-04-13&to=2023-04-13&sortBy=popularity&apiKey=1edcd6fe602748f294df85e406f3d6c1").then((res) => setArticles(res.data.articles)).catch((err) => console.log(err))


    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"} className="d-block w-100" height={350} />
                    </div>
                    <div className="carousel-item">
                        <img src={"https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"} className="d-block w-100" height={350} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" className="d-block w-100" height={350} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div style={{ alignItems: "center", justifyContent: "center", display: "flex", marginTop: "5rem" }}>
                <h2><span style={{ color: "grey" }}>News</span> <span style={{ color: "pink" }}>Updates</span></h2>
            </div>


            <div style={{ display: "flex", width: "90%", margin: "auto", flexWrap: "wrap", marginTop: "1rem", marginBottom: "5rem", justifyContent: "space-between", alignItems: "center" }}>
                {articles.map((item, index) => {
                    return (
                        <div className="card" style={{ width: "18rem", marginTop: "3rem" }}>
                            <img src={item.urlToImage === null ? "https://img.chip.com.tr/rcman/Cw1280h720q95gm/storage/files/images/2023/02/23/mercedes-teknoloji-sirketleri-ile-ortakliklarini-genisletiyor-d8KP.jpg" : item.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title.substring(0, 50)}</h5>
                                <p className="card-text">{item.description.substring(0, 50)}</p>
                                <a href={item.url} target={"_blank"} className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    );




}









