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
import { Separator } from '@vkontakte/vkui';
import { PanelHeaderBack, Epic, View, Switch, platform } from '@vkontakte/vkui';
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';







const Home = ({ go, id}) => (
  
  

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
            data-to="persik3"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>

        
        
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
                    data-to="persik4"
                  >
                    Дополнения к серверам
                  </TabsItem>
                  <TabsItem
                    onClick={go}
                    data-to="persik5"
                  >
                    Прочее
                  </TabsItem>
                </HorizontalScroll>
            </Tabs>
            
           
        </FixedLayout>
        

        
        <Group>
        <center>
        
        <br/>
        <br/>
        <br/>
        <Button level="tertiary" component="xl" href="#">
        <h2>Новая версия (базовый)</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 5 рублей/слот
    </div>
    <br/>
    
        </Button>
        <Div>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится товар</b>
        </Cell>
        </Div>
        <center>
        
        <div>
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4152924%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
    <Separator style={{ margin: '12px 0' }} />

        
        <Button level="tertiary" component="xl" href="#">
        <h2>Новая версия (с AHTP)</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 5 рублей/слот
    </div>
    <br/>
    
        </Button>
        <Div>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится товар</b>
        </Cell>
        </Div>
        <center>
        
        <div>
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4152926%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        
        <Separator style={{ margin: '12px 0' }} />
    
        
        <Button level="tertiary" component="xl" href="#">
        <h2>Старые версии</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 5 рублей/слот
    </div>
    <br/>
    
        </Button>
        <Div>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится товар</b>
        </Cell>
        </Div>
        <center>
        
        <div>
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4152928%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        <Separator style={{ margin: '12px 0' }} />
    
        
        <Button level="tertiary" component="xl" href="#">
        <h2>Старые версии(Акция)</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 50 рублей/100 слотов
    </div>
    <br/>
    
        </Button>
        <Div>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится товар</b>
        </Cell>
        </Div>
        <center>
        
        <div>
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4152929%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        <Separator style={{ margin: '12px 0' }} />
    
        
        <Button level="tertiary" component="xl" href="#">
        <h2>Новая версия (БЛ)</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 2.5 рублей/слот
    </div>
    <br/>
    
        </Button>
        <Div>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится товар</b>
        </Cell>
        </Div>
        <center>
        
        <div>
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4152931%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        <Separator style={{ margin: '12px 0' }} />

        <Button level="tertiary" component="xl" href="#">
        <h2>Новая версия (БЛ Огр.)</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: см в описании товара
    </div>
    <br/>
    
        </Button>
        <Div>
        <Cell asideContent={<Switch />}>
           <b>Мне нравится товар</b>
        </Cell>
        </Div>
        <center>
        
        <div>
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4153003%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        <Separator style={{ margin: '12px 0' }} />
        </center>
        
        <Button size="xl" component="a" href="#">Вверх</Button>
        <br/>
        <br/>
        <br/>
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