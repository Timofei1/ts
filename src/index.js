import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
import registerServiceWorker from './sw';
import mVKMiniAppsScrollHelper from '@vkontakte/mvk-mini-apps-scroll-helper';

const root = document.getElementById('root');
connect.send('VKWebAppInit');
connect.send('VKWebAppGetUserInfo')
mVKMiniAppsScrollHelper(root);


registerServiceWorker();

ReactDOM.render(<App />, root);