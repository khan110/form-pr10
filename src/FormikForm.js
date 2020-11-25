import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form } from 'formik';
import * as yup from 'yup';





//Styles

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


//Formik signup form 

export  const Signup = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </Container>
    );
};


//Yup validation Schema

let SignupSchema = yup.object().shape({
    firstName: yup.string().required('This field is required.'), 
    lastName: yup.string().required('This field is required.'), 
    email: yup.string().email().required('This field is required.'), 
    password: yup.string()
        .min(6, 'Password is too short.')
        .max(20, 'Password is too long.')
        .required('This field is required.')
});


// Adding sign up schema to validation schema
<Formik
    initialValues={{
        firstName: '', 
        lastName: '', 
        email: '', 
        password: ''
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
        console.log(values);
    }}
>
{({errors, handleChange, touched}) => (
    
    <Form >
              <TextField
              error={errors.firstName && touched.firstName}
             autoComplete="fname"
              name="firstName"
              variant="outlined"
              fullWidth
               onChange={handleChange}
               id="firstName"
               label="First Name"
                autoFocus
                helperText={errors.firstName && touched.firstName ? errors.firstName : null}/>
    </Form>

    
)}


</Formik>

