import { useState } from 'react';
import {
  Box,
  FormControlLabel, FormLabel, FormControl, FormGroup,
  Checkbox
} from '@mui/material';
import { BookmarkBorder, Bookmark } from '@mui/icons-material';

export const MuiCheckBox = () => {

  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log({skills})

  const handleChange = (event) => {
    setAcceptTnC(event.target.checked)
  }

  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value)
    if (index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value))
    }
  }

  return (
  	<Box>
      <Box>
        <FormControlLabel
          label='I accept term and conditions'
          control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder/>}
          checkedIcon={<Bookmark/>}
          checked={setAcceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label='HTML'
              control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange}/>}
            />
            <FormControlLabel
              label='CSS'
              value='css'
              control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange}/>}
            />
            <FormControlLabel
              label='Javascript'
              value='javascript'
              control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange}/>}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}