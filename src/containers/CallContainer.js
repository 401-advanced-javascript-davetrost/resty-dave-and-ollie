import React from 'react';
import CallForm from '../components/CallForm';
import Response from '../components/Response';
import PropTypes from 'prop-types';

export default function CallContainer({ url, method, response, handleUrlChange, handleMethodChange, handleSubmit }) {
  return (
    <section>
      <CallForm 
        url={url} 
        method={method} 
        handleUrlChange={handleUrlChange} 
        handleMethodChange={handleMethodChange} 
        handleSubmit={handleSubmit}/>
      <Response 
        response={response}/>
    </section>
  );
}

CallContainer.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  response: PropTypes.string,
  handleUrlChange: PropTypes.func.isRequired,
  handleMethodChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
