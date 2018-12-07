import React from 'react';
import { Title, Body, Page } from '../DocViews';

function DocPage() {
  return (
    <Page>
      <Title>Aven Overview</Title>
      <Body>Hello, world!</Body>
    </Page>
  );
}

DocPage.navigationOptions = {
  title: 'Aven Docs Home',
};
DocPage.path = '';

export default DocPage;
