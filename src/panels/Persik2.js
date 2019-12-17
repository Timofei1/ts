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
import { platform, IOS } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { ListItem, ModalCard, Switch, Checkbox, Footer, Tooltip, Radio, Gallery } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';


import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();
const MODAL_CARD_NOTIFICATIONS = 'notifications';
const Persik2 = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Дополнительно</PanelHeader>
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
          ><Icon28Game /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik3"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon28SettingsOutline fill="#0000FF" /></TabbarItem>
        </Tabbar>
         


        <Group title="Настройки">
        <Div>
        <Cell asideContent={<Switch />}>
            Уведомления
        </Cell>
        <Cell asideContent={<Switch />}>
            Добавить в избранное
        </Cell>
        <Cell asideContent={<Switch />}>
            Что то еще
        </Cell>
        <Separator style={{ margin: '12px 0' }} />
        Тут что то будет
        </Div>
        </Group>

        {fetchedUser &&
    <Group title="Ваш профиль:">
      <ListItem
        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
      >
        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
      </ListItem>
    </Group>}

      <Group title="Обратная связь">
      
      <Cell
                  before={<Avatar size={72}
                  src="https://sun3-10.userapi.com/c855136/v855136589/18636c/1_D877Mj2bE.jpg" />}
                  size="l"
                  description="Разработчик"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m" component="a" href="https://vk.me/id288498260">Написать</Button>
                      <Button size="m" level="secondary" style={{ marginLeft: 8 }} component="a" href="https://vk.com/id288498260">Перейти</Button>
                    </div>
                  }
                >
                  Рылов Тимофей</Cell>
      <Separator style={{ margin: '12px 0' }} />
      <Div style={{display: 'flex'}}>
      
      <Button size="l" level="outline" component="a" href="https://vk.cc/a8TT8i" before={
        <Icon28Messages />
      }>
     
      Беседа
      </Button>
      
      <Separator style={{ margin: '12px 0' }} />
      
      <Button size="l" level="outline" component="a" href="https://vk.cc/a8TT8i" before={
        <Icon28UsersOutline />
      }>
      Сообщество
      </Button>
      <br/>
      
      </Div>
      </Group>

      <Footer>Версия: 1.0</Footer>

	</Panel>

);

Persik2.propTypes = {
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

export default Persik2;
