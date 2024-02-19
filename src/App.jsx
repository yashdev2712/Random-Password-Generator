import { useState,useCallback, useEffect } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [specCharacter,setSpecCharacter] = useState(false)
  const [password,setPassword] = useState("")

  const passGenerator=useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numberAllowed){
      str+="1234567890"
    } 
    if(specCharacter){
      str+="!@#$%^&*()_-+"
    } 

    for(let i=1;i<length;i++){
      const char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setPassword(pass)

  },[length,numberAllowed,specCharacter])

  useEffect(()=>{
  passGenerator()
  },[numberAllowed,length,specCharacter])



  return (
    <div className='w-full max-w-md mx-auto showdow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shodow rounded-lg overflow-hidden mb-4'>
        <input type="text"  value={password} className='outline-none w-full px-3' placeholder='password ' readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" mix={8} max={30} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}
          name='' id='length'/>
          <label htmlFor='length'>Length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label htmlFor='number'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={specCharacter} onChange={()=>{setSpecCharacter((prev)=>!prev)}}/>
          <label htmlFor='specialCharacter'>SpecialCharacter</label>
        </div>
      </div>

    </div>
  )
}

export default App