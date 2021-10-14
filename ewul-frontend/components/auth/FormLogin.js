import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as UI from '@mui/material';
import { login } from '../../api/auth/index';

export default class FormLogin extends React.Component {
  //

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  passwordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  login = async (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const result = await login(email, password).catch((e) => {
      // TODO
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <UI.Container component='div' maxWidth='xs'>
          <UI.CssBaseline />
          <UI.Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <UI.Typography component='h1' variant='h4' sx={{ mb: 1 }}>
              <span>Sign in</span>
            </UI.Typography>
            <UI.Box component='form' onSubmit={this.login}>
              <UI.TextField
                onChange={this.emailChange}
                value={this.state.email}
                margin='normal'
                required
                fullWidth
                label='E-Mail'
                type='email'
              />
              <UI.TextField
                onChange={this.passwordChange}
                value={this.state.password}
                margin='normal'
                required
                fullWidth
                label='Password'
                type='password'
              />
              <UI.FormControlLabel control={<UI.Checkbox />} label='Remember me' />
              <UI.Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                <span>Sign In</span>
              </UI.Button>
              <UI.Grid container>
                <UI.Grid item xs>
                  <UI.Link>
                    <span>Forgot password?</span>
                  </UI.Link>
                </UI.Grid>
                <UI.Grid item>
                  <UI.Link>
                    <span>Sign Up</span>
                  </UI.Link>
                </UI.Grid>
              </UI.Grid>
            </UI.Box>
          </UI.Box>
        </UI.Container>
      </ThemeProvider>
    );
  }
}

const theme = createTheme();
