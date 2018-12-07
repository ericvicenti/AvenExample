import React from 'react';
import { Title, Body, Page } from '../DocViews';
import { useNavigation } from '../../navigation-hooks/Hooks';

function DocPage() {
  const { getParam } = useNavigation();
  return (
    <Page>
      <Title>Aven Overview</Title>
      <Body>Version: {getParam('version')}</Body>
      <Body>Section: {getParam('section')}</Body>
    </Page>
  );
}

DocPage.navigationOptions = {
  title: 'Aven Docs Home',
};
DocPage.path = '';

export default DocPage;
