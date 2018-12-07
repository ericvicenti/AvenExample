import { View, Text, Image } from 'react-native';
import React from 'react';

import SwitchRouter from '../navigation-core/routers/SwitchRouter';
import SceneView from '../navigation-core/views/SceneView';
import getActiveChildNavigationOptions from '../navigation-core/utils/getActiveChildNavigationOptions';
import createNavigator from '../navigation-core/navigators/createNavigator';

import Link from '../navigation-web/Link';

process.env.REACT_NAV_LOGGING = true;

function Header({ descriptors }) {
  return (
    <View style={{ borderBottomWidth: 1, height: 90, flexDirection: 'row' }}>
      <Image
        source={require('./assets/AvenLogo.svg')}
        style={{ alignSelf: 'stretch', width: 200, margin: 20 }}
      />
      {Object.keys(descriptors).map(descriptorId => {
        return (
          <Link key={descriptorId} routeName={descriptorId}>
            {descriptorId}
          </Link>
        );
      })}
    </View>
  );
}

const AppView = ({ navigation, descriptors }) => {
  const { state } = navigation;
  const route = state.routes[state.index];
  const descriptor = descriptors[route.key];
  return (
    <View style={{ flex: 1 }}>
      <Header descriptors={descriptors} navigation={navigation} />
      <SceneView
        component={descriptor.getComponent()}
        navigation={descriptor.navigation}
      />
    </View>
  );
};

function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home!</Text>
    </View>
  );
}

const DocsRouter = SwitchRouter({
  DocsOverview: require('./docs/Aven-Overview').default,
  AuthMethods: require('./docs/Auth-Methods').default,
});

function Sidebar({ descriptors, aboveList }) {
  return (
    <View style={{ borderRightWidth: 1, flex: 1, maxWidth: 360 }}>
      {aboveList}
      {Object.keys(descriptors).map(descriptorId => {
        return (
          <Link key={descriptorId} routeName={descriptorId}>
            {descriptorId}
          </Link>
        );
      })}
    </View>
  );
}

function SidebarView({ navigation, descriptors }) {
  const { state } = navigation;
  const route = state.routes[state.index];
  const descriptor = descriptors[route.key];
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Sidebar
        descriptors={descriptors}
        navigation={navigation}
        aboveList={
          <select
            value={navigation.getParam('version')}
            onChange={e =>
              navigation.setParams({ version: e.nativeEvent.target.value })
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        }
      />
      <SceneView
        component={descriptor.getComponent()}
        navigation={descriptor.navigation}
      />
    </View>
  );
}

const Docs = createNavigator(SidebarView, DocsRouter, {});

function About() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Abouuut</Text>
    </View>
  );
}

const AppRouter = SwitchRouter({
  Home: {
    screen: Home,
    path: '',
    navigationOptions: {
      title: 'Aven',
    },
  },
  Docs: {
    screen: Docs,
    path: 'docs/:version',
    params: { version: '1' },
    passDownParams: ['version'],
    navigationOptions: ({ navigation, screenProps }) => ({
      title:
        getActiveChildNavigationOptions(navigation, screenProps).title +
        ' - Aven Docs',
    }),
  },
  About: {
    screen: About,
    path: 'about',
    navigationOptions: {
      title: 'About Aven',
    },
  },
});

const AppNavigator = createNavigator(AppView, AppRouter, {});

export default AppNavigator;
