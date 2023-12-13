import React,{useEffect, useState} from 'react'
import Cocktailitem from './Cocktailitem';
import InfiniteScroll from "react-infinite-scroll-component";
const Cocktail = (props) => {
    const host = "http://localhost:5000";
    const Initialcoctails = []
    const [coctails, setCoctails] = useState(Initialcoctails);
  
    const fetchallcoctails = async () => {
      const response = await fetch(`${host}/api/cocktail/fetchallcocktails`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCoctails(data);
    };
  
    useEffect(()=>{
      fetchallcoctails();
    }, []);
  
    const fetchmoredata = async()=>{
      const response = await fetch(`${host}/api/cocktail/fetchallcocktails/category/${props.category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCoctails(data);
    }
      return (
        <>
              <h1 className='text-center my-3'>Cocktail Recipe's - {(props.category)}</h1>
              <InfiniteScroll
                dataLength={coctails.length}
                next={fetchmoredata()}
                hasMore={coctails.length}
                loader={<h4>Loading...</h4>} >
                <div className="container">
                  <div className="row">
                    {coctails.map((element)=>{
                      return <div className="col-md-4 my-3" key={element._id}>
                                <Cocktailitem name={element.name} category={element.category?element.category:"All Day Cocktail"} image={element.image} ingredients={element.ingredients}/>
                              </div>
                    })}
                  </div>
                </div>
              </InfiniteScroll>
        </>
      )
    }
  
export default Cocktail
