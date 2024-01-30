import React,{useState} from 'react'
import useFetch from '../../../hooks/useFetch'
import ContentWrapper from '../../../contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel'
const Trending = () => {

  const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Days" ? "day" : "week");
    };


  return (
    <div className="trendingSec">
      <ContentWrapper>
        <span className='trendingTitle'> Trending </span>
        <SwitchTabs data={["Days","Weeks"]} onTabChange={onTabChange}/>

      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending