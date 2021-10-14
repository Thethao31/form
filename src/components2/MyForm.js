import React from 'react'
import TextField from '@mui/material/TextField'
import { Button } from "@material-ui/core"
import FormGroup from '@mui/material/FormGroup'
// import Select from "./components/Select";
// import RadioGroup from "./components/RadioGroup";
// import CheckboxGroup from "./components/CheckboxGroup"

import {useFormContext} from 'react-hook-form'


function Myform() {
    const formContext = useFormContext()

    console.log(formContext)

    return (
        <FormGroup>
            <TextField
        name="firstName"
        label="First Name"
        rules={{ required: "Required!" }}
      />
      <br />
      <TextField
        name="lastName"
        label="Last Name"
        rules={{ required: "Required!" }}
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
        </FormGroup>
    )
}

export default Myform
