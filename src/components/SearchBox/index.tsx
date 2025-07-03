'use client'
import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('')
  const [showSearchBox, setShowSearchBox] = useState(false)

  const handleSearch = () => {
    console.log('searching ...', searchValue)
  }

  return (
    <div
      className={`rounded-sm flex items-center relative w-full ${showSearchBox && 'md:bg-gray-300 '}md:rounded-tr-sm md:rounded-br-sm border-gray-500`}
    >
      <div className="md:w-8 md:h-8 w-7 h-7">
        <Button
          className={`justify-center items-center rounded-full ${
            showSearchBox
              ? 'hidden md:flex md:rounded-none md:rounded-tl-sm md:rounded-bl-sm'
              : 'flex md:rounded-sm'
          } md:text-base text-sm font-bold`}
          label={<FiSearch />}
          type="button"
          onClick={() => {
            if (showSearchBox) {
              handleSearch()
            } else {
              setShowSearchBox(true)
            }
          }}
        />
      </div>

      <div
        className={`grow fixed px-3 md:px-0 flex rounded-sm left-0 sm:px-3 top-0 mt-18 w-full md:mt-0 md:relative
          transition-all duration-300 ease-in-out
          ${
            showSearchBox
              ? 'opacity-100 translate-x-0 pointer-events-auto'
              : 'opacity-0 -translate-x-10 pointer-events-none'
          }`}
      >
        <div
          onClick={handleSearch}
          className="text-white cursor-pointer hover:bg-gray-600 bg-gray-500 w-2/12 sm:w-1/12 flex rounded-bl-sm rounded-tl-sm justify-center items-center md:hidden"
        >
          <FiSearch />
        </div>
        <Input
          name="search"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e)}
          className="flex rounded-none grow bg-white text-sm h-8 p-0 m-0 focus:ring-transparent md:border-l-0 border-0 md:bg-transparent"
        />
        <div
          onClick={() => {
            setShowSearchBox(false)
          }}
          className="bg-white w-2/12 sm:w-1/12 text-red-500 md:text-gray-500 font-bold cursor-pointer hover:bg-red-600 md:pr-1 md:hover:bg-transparent md:hover:text-red-600 md:bg-transparent hover:text-white flex justify-center rounded-br-sm rounded-tr-sm items-center"
        >
          <IoClose />
        </div>
      </div>
    </div>
  )
}

export default SearchBox
