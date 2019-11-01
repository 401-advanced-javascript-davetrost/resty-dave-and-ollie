import React from 'react';
import CallForm from '../components/CallForm';
import Response from '../components/Response';
import propTypes from 'prop-types';

export default function CallContainer({ handleUrlChange, handleMethodChange, handleSubmit }) {
  return (
    <section>
      <CallForm handleUrlChange={handleUrlChange} handleMethodChange={handleMethodChange} handleSubmit={handleSubmit}/>
      <Response />
    </section>
  );
}

CallContainer.propTypes = {
  handleUrlChange: propTypes.func.isRequired,
  handleMethodChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired
};
