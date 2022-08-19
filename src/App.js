import './App.css';
import { useState } from 'react';
import chip from './assets/chip.png'
import visa from './assets/visa.png'
import masterCard from './assets/master-card.png'

function App() {
  const [name, setname] = useState("YOUR NAME")
  const [bin, setbin] = useState("");
  const [secnum,setsecnum] = useState("")
  const [thirdnum,setthirdnum] = useState("")
  const [fourthnum,setfourthnum] = useState("")
  const [month,setMonth] = useState("");
  const [year,setYear] = useState("");

  return (
    <div className="App">
      <div className='w-screen h-full flex flex-col justify-center'>
         <h1>Credit Card Demo</h1>

         <div className='w-[500px] h-[300px] bg-gray-200 ml-[500px] rounded-lg mt-5 px-10 shadow-xl'>

            <div className='flex mt-5 justify-between'>
              <div className='w-[80px]'>
                <img src={chip} alt="" />
              </div>

              <div className='w-[80px] mt-2 '>
                  <img src={bin.startsWith('4',0) ? visa : masterCard} alt="" />
              </div>
            </div>

            <div className='flex mt-10 justify-between'>
                <div className='w-[80px] text-left '>
                  <p className='text-xl'>{bin}</p>
                </div>

                <div className='w-[80px]  text-left'>
                  <p className='text-xl'>{secnum}</p>
                </div>

                <div className='w-[80px]  text-left'>
                  <p className='text-xl'>{thirdnum}</p>
                </div>

                <div className='w-[80px]  text-left'>
                  <p className='text-xl'>{fourthnum}</p>
                </div>
            </div>'



            <div className='flex  mt-10 justify-between'>
                <div className='w-[200px] text-left '>
                  <p className='text-[20px] '>{name}</p>
                </div>


                <div className='w-[80px] '>
                  <p className='text-[20px] '>{month}/{year}</p>
                </div>
            </div>
         </div>

         <div className='mt-5'>
              <form>
                <div>
                    Card Number :
                    <input type="text" className='border-2 border-slate-600 w-[100px] ml-3 ' maxLength={4} onChange={e => setbin(e.target.value)} />
                    <input type="text" className='border-2 border-slate-600 w-[100px] ml-3 ' maxLength={4} onChange={e => setsecnum(e.target.value)} />
                    <input type="text" className='border-2 border-slate-600 w-[100px] ml-3 ' maxLength={4} onChange={e => setthirdnum(e.target.value)} />
                    <input type="text" className='border-2 border-slate-600 w-[100px] ml-3 ' maxLength={4} onChange={e => setfourthnum(e.target.value)} />
                </div>

                <div className='mt-5 text-left ml-[350px] '>
                  CARD OWNER NAME :
                  <input type="text" className='border-2 border-slate-600 ml-3' maxLength={40} onChange={e => setname(e.target.value.toUpperCase())} />
                </div>


                <div className='mt-5 text-left ml-[350px] flex'>
                 EXPIRY DATE:
                  <input type="text" className='border-2 border-slate-600 ml-3 w-[50px] '  maxLength={2} onChange={e => setMonth(e.target.value)} />
                   <p className='ml-2'>/</p>
                  <input type="text" className='border-2 border-slate-600 ml-3 w-[50px] '  maxLength={2} onChange={e => setYear(e.target.value)} />
                </div>

              </form>
         </div>
      </div>
    </div>
  );
}

export default App;
