import App from './App';

import startWebClient from '../aven-web/WebClient';
import CloudContext from '../aven-cloud/CloudContext';
import createCloudClient from '../aven-cloud/createCloudClient';
import createBrowserNetworkSource from '../aven-cloud-browser/createBrowserNetworkSource';

const networkSource = createBrowserNetworkSource({
  authority: 'localhost:3000',
  useSSL: false,
});

const client = createCloudClient({
  dataSource: networkSource,
  domain: 'example.aven.cloud',
});

const context = new Map();

context.set(CloudContext, client);

export default function startClient() {
  startWebClient(App, context);
}
