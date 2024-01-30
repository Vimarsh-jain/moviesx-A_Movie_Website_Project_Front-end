import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    console.log(data?.results)
    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;