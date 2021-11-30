import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as UI from '@mui/material';
import { login } from '../../api/auth/index';

export default class FormLogin extends React.Component {
  //

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      email: '',
      password: ''
    };
  }

  changeLoading = (val) => {
    this.setState({ loading: Boolean(val) });
  };

  changeError = (val) => {
    this.setState({ error: val });
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = async (e) => {
    e.preventDefault();
    this.changeLoading(true);
    this.changeError(null);
    const email = this.state.email;
    const password = this.state.password;
    const result = await login(email, password)
      .catch((e) => {
        const val = e.response?.status === 401 ? 'Invalid credentials' : 'Unknown error';
        this.changeError(val);
      })
      .finally(() => {
        this.changeLoading(false);
      });
    return result;
  };

  render() {
    const loading = this.state.loading;
    const error = this.state.error;
    const email = this.state.email;
    const password = this.state.password;

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
                onChange={this.changeEmail}
                value={email}
                disabled={loading}
                margin='normal'
                required
                fullWidth
                label='E-Mail'
                type='email'
              />
              <UI.TextField
                onChange={this.changePassword}
                value={password}
                disabled={loading}
                margin='normal'
                required
                fullWidth
                label='Password'
                type='password'
              />
              <UI.Button type='submit' fullWidth variant='contained' disabled={loading} sx={{ mt: 2, mb: 2 }}>
                <span>Sign In</span>
              </UI.Button>
              {error ? (
                <UI.Alert severity='error' sx={{ mb: 2 }}>
                  {error}
                </UI.Alert>
              ) : (
                <></>
              )}
              {!loading ? (
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
              ) : (
                <></>
              )}
            </UI.Box>
          </UI.Box>
        </UI.Container>
      </ThemeProvider>
    );
  }
}

const theme = createTheme();
