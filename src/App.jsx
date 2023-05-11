import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './UserRoutes';

import { Layout as SharedLayout } from 'antd';
import Navbar from './components/Navbar/Navbar';

import style from './App.module.scss'

const { Header, Content } = SharedLayout;


export const App = () => {
  return (

      <BrowserRouter basename="/project-test">
        <SharedLayout>
          <Header className={style.header}>
              <Navbar/>
          </Header>
          <Content>
            <UserRoutes />
          </Content>
        </SharedLayout>


      </BrowserRouter>

  );
};
