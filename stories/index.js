import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Login from './components/Login';
import Layout from './components/layout/Layout';
import MemberList from './components/members/List';
import MemberCreate from './components/members/Create';

storiesOf('Login Component', module)
  .add('Login', () => (
      <Login />
  ));

storiesOf('Layout Component', module)
    .add('Layout', () => (
        <Layout />
  ))

  .add('Member List', () => (
      <Layout>
          <MemberList />
      </Layout>
  ))

  .add('Member Create', () => (
      <Layout>
          <MemberCreate />
      </Layout>
  ));
