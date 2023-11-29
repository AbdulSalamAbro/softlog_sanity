function Banner() {
  return (
    <div className="
        lg:grid grid-cols-12 gap-8
        2xl:max-w-[1440px]
        m-auto
        bg-orange-50
        text-gray-900
        py-10
        lg:py-20
        px-6
        lg:px-0
        ">
          <div className="lg:grid lg:col-start-2 lg:col-end-9 space-y-3 lg:space-y-4 mx-12">
          <h2 className="text-2xl lg:text-4xl font-bold">Find the best software on the market</h2>
          <h3 className="text-gray-900/80 lg:text-lg line-clamp-3">You will be overwhelmed by the choices of software available on the market these days. One helpful resource is a software review blog, which provides detailed reviews and recommendations to make it easier for you to find the right software for your need.</h3>
         
         
         <a href="#" className="group lg:text-lg transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
              Read more
            </span>
         </a>
         
         
         </div>          
    </div>
  )
}

export default Banner
