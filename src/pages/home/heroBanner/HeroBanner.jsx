import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from "../../../lazyLoadImage/Img";
import ContentWrapper from "../../../contentWrapper/ContentWrapper";
import "./style.scss"

const HeroBanner = () => {
    const [backGround, setBackGround] = useState("");
    const [query, setQuery] = useState("");
    const Navigate = useNavigate();
    const { url } = useSelector((state) => state.home);

    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackGround(bg);
    }, [data]);

    function searchQueryHandler(event) {
        if (event.key === "Enter" && query.length > 0) {
            Navigate(`/search/${query}`);
        }
    };
    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={backGround} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>

    )
}

export default HeroBanner