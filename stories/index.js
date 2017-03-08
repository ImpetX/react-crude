import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Login from './components/Login';

storiesOf('Login Component', module)
  .add('Login', () => (
  <Login />
  ));
