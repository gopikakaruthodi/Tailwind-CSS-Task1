import './App.css'

function App() {

  return (
    <>
    <div className='w-full h-screen bg-slate-950 flex justify-center'>
      <div className='w-96 h-screen bg-white'>
        <div className='w-full flex justify-between mt-4'>
          <img src="./logo.svg" alt="" className='w-14 h-5 ml-4' />
          <img src="./icon-menu.svg" alt="" className='mr-4' />
        </div>
        <div className='w-full mt-10'>
          <img src="./image-hero-mobile.png" alt="" />
        </div>
        <div className='mt-8 text-center'>
          <h1 className="text-4xl font-bold">Make remote work</h1>
          <p className=" text-slate-600 mt-5  text-lg">Get your team in sync, no matter your location.Streamline processes,create team rituas,and watch productivity soar.</p>
          <button className="bg-slate-950 px-6 py-3 rounded-xl font-extrabold text-white mt-6 ">Learn more</button>
        </div>
        <div className="flex mt-10 justify-center">
          <img src="./client-databiz.svg " alt="" className="w-20 h-4 mr-5 ml-1"  />
          <img src="./client-audiophile.svg" alt="" className="w-14 h-6 mr-5" />
          <img src="./client-meet.svg" alt="" className="w-16 h-4 mr-5" />
          <img src="./client-maker.svg" alt="" className="w-20 h-6 mr-2 " />
        </div>

      </div>

    </div>
    </>
  )
}

export default App
