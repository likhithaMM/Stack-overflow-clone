import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Avatar from '@mui/material/Avatar';
import FileUpload from '@mui/icons-material/AddPhotoAlternate';
import { useParams, useNavigate } from 'react-router-dom';
import { orange } from '@mui/material/colors';
import { readUserProfile, updateUserProfile } from '../../../api/index';

export default function EditProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    about: '',
    photo: '',
    email: '',
    password: '',
    redirectToProfile: false,
    error: '',
    id: '',
  });

  useEffect(() => {
    readUserProfile(userId)
      .then((data) => {
        if (data && data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            id: data._id,
            name: data.name,
            email: data.email,
            about: data.about,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId, values]);

  const clickSubmit = () => {
    let userData = new FormData();
    values.name && userData.append('name', values.name);
    values.email && userData.append('email', values.email);
    values.password && userData.append('password', values.password);
    values.about && userData.append('about', values.about);
    values.photo && userData.append('photo', values.photo);
    
    updateUserProfile(userId, userData)
      .then((data) => {
        if (data && data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, redirectToProfile: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };

  const photoUrl = values.id
    ? `${process.env.REACT_APP_NODE_JS}+users/photo/${values.id}?${new Date().getTime()}`
    : process.env.REACT_APP_NODE_JS + 'users/defaultphoto';

  if (values.redirectToProfile) {
    return navigate('/SocialMedia/User/' + values.id);
  }

  return (
    <Card
      style={{
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: '5px',
        paddingBottom: '2px',
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          style={{
            margin: '2px',
            color: orange['700'],
          }}
        >
          Edit Profile
        </Typography>
        <Avatar
          src={photoUrl}
          style={{
            width: 60,
            height: 60,
            margin: 'auto',
          }}
        />
        <br />
        <input
          accept="image/*"
          onChange={handleChange('photo')}
          style={{
            display: 'none',
          }}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <Button variant="contained" color="default" component="span">
            Upload
            <FileUpload />
          </Button>
        </label>{' '}
        <span style={{ marginLeft: '10px' }}>
          {values.photo ? values.photo.name : ''}
        </span>
        <br />
        <TextField
          id="name"
          label="Name"
          style={{
            marginLeft: '1px',
            marginRight: '1px',
            width: 300,
          }}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
        />
        <br />
        <TextField
          id="multiline-flexible"
          label="About"
          multiline
          rows="2"
          value={values.about}
          onChange={handleChange('about')}
          style={{
            marginLeft: '1px',
            marginRight: '1px',
            width: 300,
          }}
          margin="normal"
        />
        <br />
        <TextField
          id="email"
          type="email"
          label="Email"
          style={{
            marginLeft: '1px',
            marginRight: '1px',
            width: 300,
          }}
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          type="password"
          label="Password"
          style={{
            marginLeft: '1px',
            marginRight: '1px',
            width: 300,
          }}
          value={values.password}
          onChange={handleChange('password')}
          margin="normal"
        />
        <br />
        {values.error && (
          <Typography component="p" color="error">
            <Icon color="error" style={{ verticalAlign: 'middle' }}>
              error
            </Icon>
            {values.error}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={clickSubmit}
          style={{
            margin: 'auto',
            marginBottom: '2px',
          }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
