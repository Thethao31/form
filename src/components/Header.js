import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { BrowserRouter as Link, NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material';
import { LockOutlined } from '@material-ui/icons'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
// import { makeStyles } from '@mui/Styles'

// const useStyles = makeStyles((theme) => ({
//   link: {
//     color: 'white',
//     textDecoration: 'none',
//   }
// }))

const schema = yup.object().shape({
  firstName: yup.string().required("First Name"),
  lastName: yup.string().required('Last Name'),
  email: yup.string().email().required('Email'),
  //số dương và số nguyên
  age: yup.number().positive().integer().required('Age'),
  password: yup.string().min(4).max(15).required("Password"),
  // oneOf là method của yup
  confirmPassword: yup.string().oneOf([yup.ref("re-password"), null]),
  //kiểm tra trong trường mật khẩu này có giống với trường ô "password" không
})

export default function Header() {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const submitForm = (data) => {
    console.log(data)
  }



  // const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <FormGroup onSubmit={handleSubmit(submitForm)}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <CodeIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>The</Link>
          </Typography>

          <NavLink to='form' >
            <Button color="inherit">form</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen} >Register</Button>
        </Toolbar>
      </AppBar>

      <Dialog 
        open={open} 
        onClose={handleClose}
        disableEscapeKeyDown
        onBackdropClick
      >
        <DialogContent>
          <Avatar>
            <LockOutlined></LockOutlined>
          </Avatar>
          <Typography>
            Create An Account
          </Typography>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField type="text" name="firstName" ref={register} fullWidth margin="normal" label="First Name" id="fullWidth" />
            <p> {errors.firstName?.message}</p>

            <TextField type="text" name="lastname" ref={register} fullWidth margin="normal" label="Last Name" id="fullWidth" />
            <p> {errors.lastName?.message} </p>

            <TextField type="email" name="email" ref={register} fullWidth margin="normal" label="Email" id="fullWidth" />
            <p> {errors.email?.message} </p>

            <TextField type="text" name="age" ref={register} fullWidth margin="normal" label="Age" id="fullWidth" />
            <p> {errors.age?.message} </p>

            <TextField type="password" name="password" ref={register} fullWidth margin="normal" label="Password" id="fullWidth" />
            <p> {errors.password?.message} </p>

            <TextField type="password" name="confirmPassword" ref={register} fullWidth margin="normal" label="Retype Password" id="fullWidth" />
            <p> {errors.confirmPassword && "Passwords Should Match!"} </p>

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog> 
    </Box>
    </FormGroup>
  );
}
