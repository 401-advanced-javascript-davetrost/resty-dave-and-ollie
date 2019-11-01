import React from 'react';
import CallForm from '../components/CallForm';
import Response from '../components/Response';
import propTypes from 'prop-types';

export default function CallContainer({ url, method, handleUrlChange, handleMethodChange, handleSubmit }) {
  return (
    <section>
      <CallForm 
        url={url} 
        method={method} 
        handleUrlChange={handleUrlChange} 
        handleMethodChange={handleMethodChange} 
        handleSubmit={handleSubmit}/>
      <Response />
    </section>
  );
}

CallContainer.propTypes = {
  url: propTypes.string.isRequired,
  method: propTypes.string.isRequired,
  handleUrlChange: propTypes.func.isRequired,
  handleMethodChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired
};
