import React from 'react';
import MyButton from './MyButton';

// Write story in component-story format
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // the text you see in the left handle panel (required)
  title: 'Form/MyButton',
  // the component you are targeting with these stories
  component: MyButton,
};

// specify the named exports, each one is a story, a sub menu item is created for each named export
// each is basically a react component

export const Primary = () => <MyButton variant="primary">Primary</MyButton>;
export const Secondary = () => (
  <MyButton variant="secondary">Secondary</MyButton>
);
export const Success = () => <MyButton variant="success">Success</MyButton>;
export const Danger = () => <MyButton variant="danger">Danger</MyButton>;
