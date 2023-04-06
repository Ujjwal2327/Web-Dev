import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Template = ({type}) => {

  const [title, setTitle] = useState('cute cats');
  const [loading, setLoading] = useState(false);

  const titleHandler= (event)=>{
    setTitle(event.target.value);
  }

  const [image, setImage] = useState('');
  const [cnt, setCnt] = useState(0);

  async function fetchData(event){
    if(type=='random'){
      setLoading(true);
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=CCEo2PCCHONTV6iGdDkCgPq9bLvZ6veL&tag=&rating=g')
      const data = await response.json();
      setImage(`${data.data.images.downsized_large.url}`);
      setLoading(false);
    }
    else{
      setLoading(true);
      const {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=CCEo2PCCHONTV6iGdDkCgPq9bLvZ6veL&tag=${title}`)
      setImage(`${data.data.images.downsized_large.url}`);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
    setCnt(cnt+1);
    console.log(cnt);
  }, []);

  function submitHandler(event){
    event.preventDefault();
    fetchData();
  }


  return (
    <div className='w-full max-w-[450px] mx-auto text-center flex flex-col gap-y-5 px-7 bg-green-400 rounded-lg py-7'>
        <h2 className='text-2xl underline uppercase font-bold'>
            {
                type==='random' ? 'a random gif' : `random ${title} gifs`
            }
        </h2>
        
        <div className='flex flex-col gap-y-5 items-center'>
          {
            loading == true ?
            (<div className='spinner '></div>)
            :
            (
                <img src={image} />
            )
          }

          <form onSubmit={submitHandler} className='flex flex-col items-center gap-y-5 w-full'>
              {
                  type=='tag' ? 
                  <input type='text' value={title} onChange={titleHandler} className='w-full py-3 rounded-md text-center'/>
                  :
                  <></>
              }
              <button className=' bg-yellow-100 py-2 w-full rounded-md'>
                generate
              </button>
          </form>

        </div>

    </div>
  )
}

export default Template
