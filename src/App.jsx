function App() {

  return (
    <>
     <div className="w-full h-14  flex items-center text-slate-600">
      <div className="w-3/4 flex ml-2 ">
          <img src="./logo.svg" alt="" className="ml-4" />
          <p className="ml-6" >Features </p> <span className="mt-2.5 ml-1"><img src="./icon-arrow-down.svg" alt="" /></span>
          <p className="ml-6" >Company</p><span className="mt-2.5 ml-1"><img src="./icon-arrow-down.svg" alt="" /></span>
          <p className="ml-6" >Careers</p>
          <p className="ml-6" >About</p>


      </div>
      <div className="w-1/4 flex items-center justify-end">
        <p className="mr-12" >Login</p>
        <button className="mr-8  border-slate-600 p-2 rounded-2xl border-2" >Register</button>
      </div>
     </div>

     <div className="w-full h-screen flex ">
      <div className="w-1/2 m-20 grid items-center content-center pl-48 ">
        <div>
        <h1 className="text-7xl font-extrabold">Make</h1>
        <h1 className="text-7xl font-extrabold">remote work</h1>
        <p className="w-3/4 text-slate-600 mt-10  text-lg">Get your team in sync, no matter your location.Streamline processes,create team rituas,and watch productivity soar.lorem and  the wind soar by them.</p>
        <button className="bg-slate-950 px-9 py-4 rounded-xl font-extrabold text-white mt-10 mb-16">Learn more</button>
        <div className="flex mt-16">
          <img src="./client-databiz.svg " alt="" className="w-24 h-4 mr-5"  />
          <img src="./client-audiophile.svg" alt="" className="w-18 h-8 mr-5" />
          <img src="./client-meet.svg" alt="" className="w-18 h-5 mr-5" />
          <img src="./client-maker.svg" alt="" className="w-24 h-6 " />
        </div>
        </div>
      </div>
      <div className="w-1/2 mb-12  flex items-center">
        <img src="./image-hero-desktop.png" alt="" className="h-3/5 m-16"  />
      </div>
     </div>
    </>
  )
}

export default App
