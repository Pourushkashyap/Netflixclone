import React, { useRef } from 'react'
import openai from '../util/openai';

function Gptsearchbar() {
    const searchtext = useRef(null);


  const handlwGprsearchclick = async () =>{
   console.log(searchtext.current.value);
    
    const gptquery = "Act as a Moive Recomendation sysytem and suggest some moives for the query : " + searchtext.current.value + ". Only give me names of 5 moives, comma seperated like the example result given ahead. Example Rsults: Gadar, Sholay, Don, Golnaal, Koi mil gya "

    console.log(gptquery)

    try {
      const gptresult = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: gptquery }],
      });

      // Access the result from the first choice
      // const recommendations = gptresult.data.choices[0].message.content;
      console.log('Recommended movies:', gptresult);
  } catch (error) {
      console.error('Error fetching GPT results:', error);
  }

  console.log(gptresult.choices);
 

  }




  return (
    <div className='pt-[10%] flex justify-center'>
        <form onSubmit={(e) => e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12'>
            <input
            ref = {searchtext}
             type="text"
              placeholder='What would you like to watch today'
              className='p-4 m-4 col-span-9'
            />
            <button onClick={handlwGprsearchclick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default Gptsearchbar