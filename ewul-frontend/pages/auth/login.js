import React from 'react';
import dynamic from 'next/dynamic';

const FormLogin = dynamic(() => import('../../components/auth/FormLogin'));

export default class Login extends React.Component {
  render() {
    return (
      <>
        <FormLogin />
      </>
    );
  }
}
