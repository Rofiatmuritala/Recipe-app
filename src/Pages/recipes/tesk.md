import { Autocomplete, Box, Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'

function AddRecipe() {

    const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
        {
          code: 'AE',
          label: 'United Arab Emirates',
          phone: '971',
        },
        { code: 'AF', label: 'Afghanistan', phone: '93' },
        {
          code: 'AG',
          label: 'Antigua and Barbuda',
          phone: '1-268',
        },
        { code: 'AI', label: 'Anguilla', phone: '1-264' },
        { code: 'AL', label: 'Albania', phone: '355' },
        { code: 'AM', label: 'Armenia', phone: '374' },
        { code: 'AO', label: 'Angola', phone: '244' },
        { code: 'AQ', label: 'Antarctica', phone: '672' },
        { code: 'AR', label: 'Argentina', phone: '54' },
        { code: 'AS', label: 'American Samoa', phone: '1-684' },
        { code: 'AT', label: 'Austria', phone: '43' },
        {
          code: 'AU',
          label: 'Australia',
          phone: '61',
          suggested: true,
        },]

  return (
    <>
    <Navbar/>
    <div       sx={{ display: 'flex', flexDirection: 'column', width: 300, alignItems:"center" ,
    justify: "center" }}    >
        <h1>Add a new recipe</h1>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '95%' }, display: 'flex', flexDirection: 'column', 
      }}
      noValidate
      autoComplete="off"
       >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Recipe Title"
          multiline
          minRows={1}
        />

        <div>
            
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        </div>
    

     <form>
      <TextField type="file" />
      {/* <Button variant="contained" color="primary" component="span">
      </Button> */}
     </form>

    
     <Autocomplete
      id="country-select-demo"
      sx={{ width: '100%', display:'flex', flexDirection: 'column', }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
      />
    <Button component={Link} to="/add-recipe" color="secondary" >ADD NEW RECIPE</Button>
      </div>
      </Box>
    </div>
    </>
  )
}

export default AddRecipe