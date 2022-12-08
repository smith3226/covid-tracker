import React from 'react'
import { useEffect , useState } from 'react';

const Covid = () => {

    const [data, setData] = useState([]);

    const getData=async()=>{

        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise)
            setData(actualData.statewise)
        } catch (err) {
            console.log(err);
        }
      
    }
    
    useEffect(() => {
        getData();
    }, []);



  return (
    <>
      <a href="/" class="btn btn_live">Live<span class="live-icon"></span></a>

      <div className='main-heading'>
            <h1 className='mb-5 text-center'><span className='orange'>INDIA </span><span className='blue'>COVID-19 </span><span className='green'>DASHBOARD</span></h1>
         </div>

      <div className='container-fluid mt-5'>

         <div className='table-responsive'>
            <table className='table table-hover'>
                <thead className='thead-dark'>
                    <tr className='theading'>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((currEle , indx)=>{
                          return(
                       <tr key={indx}>
                        <th>{currEle.state}</th>
                        <td>{currEle.confirmed}</td>
                        <td>{currEle.recovered}</td>
                        <td>{currEle.deaths}</td>
                        <td>{currEle.active}</td>
                        <td>{currEle.lastupdatedtime}</td> 
                      </tr>
                          ) 
                        })
                    }
               
                </tbody>
            </table>
         </div>
      </div>
    </>
  )
}

export default Covid