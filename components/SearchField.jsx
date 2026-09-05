import React from 'react'
import { Button } from './ui/button'

const SearchField = () => {
  return (
    <div>
        <div>
            <Button>Car</Button>
            <Button>House</Button>
        </div>
        <input type="text" placeholder='search' />
    </div>
  )
}

export default SearchField