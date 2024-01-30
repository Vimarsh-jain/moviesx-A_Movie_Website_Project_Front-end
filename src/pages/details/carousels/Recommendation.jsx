import React from "react";


import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);
    // console.log(data?.results)
    // const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        data?.results.length>1 && 
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;