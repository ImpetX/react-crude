import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Login from './components/Login';
import Layout from './components/layout/Layout';

storiesOf('Login Component', module)
  .add('Login', () => (
      <Login />
  ));

storiesOf('Layout Component', module)
  .add('Layout', () => (
      <Layout />
  ));
