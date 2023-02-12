import { useState } from 'react'
import {
  Autocomplete,
  TextField
} from '@mui/material'
import { Stack } from '@mui/system'

const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React']

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}))

export const MuiAutocomplete = () => {

  const [value, setValue] = useState(null)
  const [skill, setSkill] = useState(null)
  console.log({value})

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }

  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={skill}
        onChange={(event, newValue) => setSkill(newValue)}
      />
    </Stack>
  )
}