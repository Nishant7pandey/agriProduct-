import React ,{useState,useEffect}from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Search from './Layout/Search';
import Headercrousal from './Layout/Headercrousal';
import {datas} from "../datas";
import Tabs from './Layout/Tabs/index';


const Home = () => {
    const [search, setSearch] = useState("");
    const[data,setData] = useState([]);

    var filteredCoins = data.filter((item) => {
        if (
          item.catagory.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase())
        ) {
          return item;
        }
      });
    const getData = ()=>{
        const response=  datas;
        if(response){
            setData(response);
        }
    }
    useEffect(()=>{
        getData();
    },[]);

    return (
        <div>
            <Header />
           <>
           <Headercrousal/>
           </> 
           <Search search={search} setSearch={setSearch} />
           <Tabs data={search ? filteredCoins : data} />
            {/* <Catagories/>
            <Bestseller/>
            <Newarrival/> */}
            <Footer/>
        </div>
    );
}

export default Home;
