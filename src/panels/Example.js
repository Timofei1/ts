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
import { Separator, platform } from '@vkontakte/vkui';
import { PanelHeaderBack, Epic, View, Switch } from '@vkontakte/vkui';
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';

import persik from '../img/persik.png';
import './Persik.css';



class Example extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        activeTab1: 'recomendations',
        activeTab2: 'all',
        activeTab3: 'all',
        activeTab4: 'dial',
        activeTab5: 'events',
        activeTab6: 'all',

      };

      
    }

    render () {

      return (
 
        <Group>
        <FixedLayout vertical="top">
      <Tabs>
      
        <HorizontalScroll>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'all' })}
                    selected={this.state.activeTab6 === 'all'}
                  >
                    Сервера
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'users' })}
                    selected={this.state.activeTab6 === 'users'}
                  >
                    Дополнения к серверам
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'groups' })}
                    selected={this.state.activeTab6 === 'groups'}
                  >
                    Другое
                  </TabsItem>
                  
           </HorizontalScroll>
           

          </Tabs>
          </FixedLayout>
         

          {this.state.activeTab6 === 'all' ? 
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
        <br/>
        <br/>
        <br/>
        </center> 
           : null }

          {this.state.activeTab6 === 'groups' ?
          <Group>
        <br/>
        <br/>
        <br/>
        <center>
        <Button level="tertiary" component="xl" href="#">
        <h2>Бейджик Gamescom 2018</h2>
        <img src="https://sun9-62.userapi.com/c858128/v858128583/8dd6/TElIeE1Zg2g.jpg" width="270" />
        <div className="Cell__description">
    Цена: 7 рублей
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
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_3590200%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
    <Separator style={{ margin: '12px 0' }} />

        
        <Button level="tertiary" component="xl" href="#">
        <h2>Бейджик RB TV</h2>
        <img src="https://sun9-72.userapi.com/c853528/v853528583/84d8f/kSmake32R-A.jpg" width="270" />
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
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_3590204%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        
        <Separator style={{ margin: '12px 0' }} />
    
      
        </center>
        
        <br/>
        <br/>
        </Group>
           : null }

          {this.state.activeTab6 === 'users' ? 
          <Group>
        <br/>
        <br/>
        <br/>
        <center>
        <Button level="tertiary" component="xl" href="#">
        <h2>Смена IP(с букв. на цифр)</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 30 рублей
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
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4153032%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
    <Separator style={{ margin: '12px 0' }} />

        
        <Button level="tertiary" component="xl" href="#">
        <h2>Адрес по желанию</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 50 рублей
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
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4153044%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        
        <Separator style={{ margin: '12px 0' }} />
    
        
        <Button level="tertiary" component="xl" href="#">
        <h2>Смена адреса(букв.)</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 30 рублей
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
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4153052%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        <Separator style={{ margin: '12px 0' }} />
    
        
        <Button level="tertiary" component="xl" href="#">
        <h2>Анти-DDoS</h2>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <div className="Cell__description">
    Цена: 40 рублей
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
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4153057%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        <Separator style={{ margin: '12px 0' }} />
    
        
        <Button level="tertiary" component="xl" href="#">
        <h2>Муз. бот(х2)</h2>
        <img src="https://lh3.googleusercontent.com/awutOKZubpyNkZsa67VWu-Va874_65xPJuzQxnzam3ftMktxyE8naKCl8hm-K_NE2g" width="270" />
        <div className="Cell__description">
    Цена: 160 рублей
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
        
                      
                      <Button size="l" level="outline" component="a" href="https://vk.com/market-184075993?w=product-184075993_4153059%2Fquery">Купить </Button>
                      &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/hostingteamspeak"> Продавец</Button>
                       &nbsp;
                      <Button size="l" level="outline" component="a" href="https://vk.com/topic-184075993_40405305"> Отзывы</Button>
                      
                    </div>
                                    </center>
        <Separator style={{ margin: '12px 0' }} />
        </center>
        
        
        <br/>
        <br/>
        <br/>
        </Group>
           : null }

          
          </Group>

          
      )
    }
  }

export default Example;