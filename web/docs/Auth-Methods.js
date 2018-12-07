import React from 'react';
import { Title, Body, Page } from '../DocViews';

function DocPage() {
  return (
    <Page>
      <Title>Auth Methods</Title>
      <Body>Hello, world!</Body>
    </Page>
  );
}

DocPage.navigationOptions = {
  title: 'Authe Methods',
};
DocPage.path = 'auth-methods';

export default DocPage;
