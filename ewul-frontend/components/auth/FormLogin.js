import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as UI from '@mui/material';

export default class FormLogin extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <UI.Container component='main' maxWidth='xs'>
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
            <UI.Box component='form'>
              <UI.TextField margin='normal' required fullWidth label='E-Mail' type='email' />
              <UI.TextField margin='normal' required fullWidth label='Password' type='password' />
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
