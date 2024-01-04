import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { OutlinedInput } from '@mui/material';
import "./Products.scss"
import { useState } from "react"

const Products = () => {
  const [age, setAge] = useState();

  const handleChange = (e) => {
    setAge(e.target.value)
  }

  return (
    <div className="Products">
      <div className="search">
        <OutlinedInput className="input-field" />
        <div className="select">
          <FormControl className="select">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select className="select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ age }
              label="Age"
              onChange={ handleChange }
            >
              <MenuItem value={ 10 }>Ten</MenuItem>
              <MenuItem value={ 20 }>Twenty</MenuItem>
              <MenuItem value={ 30 }>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default Products