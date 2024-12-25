import { HiOutlineSearch } from "react-icons/hi"

const Header = () => {
  return (
    <div className="w-full h-12 bg-secondary-100 flex items-center justify-between px-20 ">
      <h2 className="text-xl font-semibold text-white"> Travel Map App</h2>

      <section className="w-fit h-full flex items-center space-x-4">
        <p className="text-sm text-white">Explore new places</p>

        {/* <Autocomplete> */}
        <div className="flex items-center space-x-2 bg-white rounded-full px-4 h-9 w-72">
          <HiOutlineSearch className="text-secondary-100" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="h-5 text-sm outline-none"
          />
        </div>
        {/* </Autocomplete> */}
      </section>
    </div>
  )
}

export default Header
