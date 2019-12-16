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
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import Spinner from '@vkontakte/vkui/dist/components/Spinner/Spinner'
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';

const Home = ({ id, go, fetchedUser }) => (

       
  

<Panel id={id}>
		<PanelHeader>Купить TS3</PanelHeader>
       <Tabbar>
          <TabbarItem fill="#0000FF"
            onClick={go}
            data-to="home"
          ><Icon28MarketOutline fill="#0000FF" /></TabbarItem>
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
            data-to="persik2"
          ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Spinner size="large" style={{ marginTop: 1 }} />
        </div>

        <FixedLayout vertical="top">
              <Tabs theme="header" type="buttons">
                <HorizontalScroll>
                  <TabsItem
                    onClick={go}
                    data-to="home"
                  >
                    <u>Сервера</u>
                  </TabsItem>
                  <TabsItem
                    onClick={go}
                    data-to="home"
                  >
                    Дополнения к серверам
                  </TabsItem>
                  <TabsItem
                    onClick={go}
                    data-to="home"
                  >
                    Прочее
                  </TabsItem>
                </HorizontalScroll>
            </Tabs>
        </FixedLayout>
        
        <Group title="Примечание">
        <Div>
        В этой категории цены указаны за 1 слот.
        </Div>
        </Group>
        
        <Group>
        
        <Button level="tertiary" component="a" href="#" before={
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="110" />}>
        <h4>Новая версия (базовый)</h4>
        <div className="Cell__description">
		5 рублей/слот
		</div>
        </Button>
		<Separator style={{ margin: '12px 0' }} />

        
        <Button level="tertiary" component="a" href="#" before={
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="110" />}>
        <h4>Новая версия (базовый)</h4>
        <div className="Cell__description">
		5 рублей/слот
		</div>
        </Button>
        <Separator style={{ margin: '12px 0' }} />
		
        
        <Button level="tertiary" component="a" href="#" before={
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="110" />}>
        <h4>Новая версия (базовый)</h4>
        <div className="Cell__description">
		5 рублей/слот
		</div>
        </Button>
        <Separator style={{ margin: '12px 0' }} />
		
        
        <Button level="tertiary" component="a" href="#" before={
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="110" />}>
        <h4>Новая версия (базовый)</h4>
        <div className="Cell__description">
		5 рублей/слот
		</div>
        </Button>
        <Separator style={{ margin: '12px 0' }} />
		
        
        <Button level="tertiary" component="a" href="#" before={
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="110" />}>
        <h4>Новая версия (базовый)</h4>
        <div className="Cell__description">
		5 рублей/слот
		</div>
        </Button>
        <Separator style={{ margin: '12px 0' }} />

        </Group>
        
	</Panel>
);




Home.propTypes = {
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

export default Home;
