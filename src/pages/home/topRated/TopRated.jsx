import React,{useState} from 'react'
import useFetch from '../../../hooks/useFetch'
import ContentWrapper from '../../../contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel'
const TopRated = () => {

  const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };


  return (
    <div className="trendingSec">
      <ContentWrapper>
        <span className='trendingTitle'>Top Rated</span>
        <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>

      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated;