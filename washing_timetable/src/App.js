import './styles/App.css';

import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { AboutPage } from './components/AboutPage';
import RecordPage from './components/RecordPage';

const { Header, Footer, Content } = Layout;


class App extends Component {


  render() {
    const path = this.props.location.pathname;
    let selectedKeys;
    switch (path) {
      case '/':
        selectedKeys = ['root']
        break;
      case '/about':
        selectedKeys = ['about']
        break;
      case '/record':
        selectedKeys = ['record']
        break;  
      default:
        throw new Error('Unexpected page!')
    }
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={selectedKeys}>        
            <Menu.Item key="root">
              <Link to='/'>Главное</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to='/about'>О нас</Link>
            </Menu.Item>
            <Menu.Item key="record">
              <Link to='/record'>Запись</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content >
          <div className="main-container">
            <Switch>
              <Route exact path='/'>
                <MainPage />
              </Route>
              <Route exact path='/about'>
                <AboutPage />
              </Route>
              <Route exact path='/record'>
                <RecordPage />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Washing Timetable ©2021 Created by KingSLi</Footer>
      </Layout>
    );
  }
}

export default withRouter(App);
