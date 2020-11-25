import React from 'react';
import TextInput from './TextInput';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Form/TextInput',
  component: TextInput,
};

export const Small = () => <TextInput size="small" placeholder="Small Size" />;
export const Medium = () => (
  <TextInput size="medium" placeholder="Medium Size" />
);
export const Large = () => <TextInput size="large" placeholder="Large Size" />;
