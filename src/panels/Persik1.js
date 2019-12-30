import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import { platform, IOS, Search, Switch } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';


import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();

const Persik1 = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>
    Сервера
    </PanelHeader>
         
    <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28MarketOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik1"
          ><Icon28Game fill="#0000FF" /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik3"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>
        <Group>
        <Div>
        <Button size="xl" component="a" href="https://vk.com/topic-184075993_40901326">Добавить свой TS3 сервер</Button> 
        </Div>
        </Group>
        <Group title="Каталог серверов">
        <Div>
        <center>
        <h3>ТС3 ГЕЙМЕРОВ</h3>
        <br/>
        <img src="https://sun9-37.userapi.com/c850324/v850324911/1dd0e5/2fXVWkGrRqk.jpg" width="270" />
        <br/>
        Айпи: <b>ABIDKAPLAY.vts3.pw</b><br/>
        Версия: <u>от 3.1.10</u><br/>
        Описание: <i>Сервер для общения геймеров и не только.</i>
        <br/>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится сервер</b>
        </Cell>
        <Separator style={{ margin: '12px 0' }} />
        <h3>TeamSpeak Ютуберов</h3>
        <br/>
        <img src="https://yt3.ggpht.com/a/AGF-l7_fydgquVpgXzU5Cnjv9GTvEFEyVvuv7oYtXw=s900-c-k-c0xffffffff-no-rj-mo" width="270" />
        <br/>
        Айпи: <b>DEM</b><br/>
        Версия: <u>от 3.1.7</u><br/>
        Описание: <i>TeamSpeak сервер Демастера и других ютуберов</i>
        <br/>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится сервер</b>
        </Cell>
        <Separator style={{ margin: '12px 0' }} />
        <h3>TeamSpeak Депоент</h3>
        <br/>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <br/>
        Айпи: <b>depoent.ruclan.ovh</b><br/>
        Версия: <u>от 3.1.10</u><br/>
        Описание: <i>Описание отсутствует.</i>
        <br/>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится сервер</b>
        </Cell>
        <Separator style={{ margin: '12px 0' }} />
        <h3>TeamSpeak Малых Ютуберов</h3>
        <br/>
        <img src="https://yt3.ggpht.com/a/AGF-l78OmphcVI6qca1sULJpbZ3frIUAno5h1Hfulg=s900-c-k-c0xffffffff-no-rj-mo" width="270" />
        <br/>
        Айпи: <b>185.211.244.109:10070</b><br/>
        Версия: <u>от 3.1.10</u><br/>
        Описание: <i>TeamSpeak для ютуберов, от самых маленьких, до больших</i>
        <br/>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится сервер</b>
        </Cell>
        <Separator style={{ margin: '12px 0' }} />
        <h3>Тут может быть ваш сервер</h3>
        <br/>
        <img src="https://sun9-67.userapi.com/c206528/v206528694/19cba/u0S8oKp98qM.jpg" width="270" />
        <br/>
        Айпи: <b>тут будет айпи</b><br/>
        Версия: <u>тут будет версия</u><br/>
        Описание: <i>Тут будет описание</i>
        <br/>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится сервер</b>
        </Cell>
        <Separator style={{ margin: '12px 0' }} />
        <Button size="xl" component="a" href="#">Вверх</Button>
        <br/>
        <br/>
        <br/>
        </center>
        </Div>
        </Group>
       
  </Panel>
);

Persik1.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Persik1;