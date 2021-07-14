import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <input
        className='p-2 w-full content-center outline-none rounded-md border border-gray-200 focus:border-gray-50 focus:ring-1'
        type={this.props.type || 'text'}
        placeholder={this.props.placeholder || ''}
      />
    );
  }
}
