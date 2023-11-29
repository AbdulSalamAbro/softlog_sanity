function Accordion() {
  return (
    <div className="bg-white border border-gray-300">
        <div className="border-gray-300  hover:bg-gray-100/40 ease-out duration-300 py-4 px-6 cursor-pointer">
            <span className="text-lg font-semibold">Table of contents</span>
        </div>

        <div>
            <div className="py-6 border-t px-6 space-y-6 bg-gray-50">
                <p>This is a link</p>
                <p>This is a link</p>
            </div>
        </div>
    </div>
  )
}

export default Accordion