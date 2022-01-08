import React from 'react';
import dynamic from 'next/dynamic';

const FormNotes = dynamic(() => import('../../components/notes/FormNotes'));

export default class Index extends React.Component {
  render() {
    return (
      <>
        <FormNotes />
      </>
    );
  }
}
