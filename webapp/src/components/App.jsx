import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useMatch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import About from './About';
import JokesList from './JokesList/JokesList';
import ViewOne from './ViewOne';
import { JokeContext } from 'contexts/JokeContext';

const { Header, Content } = Layout;

const App = () => {
    return (
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
            <Menu.Item key="jokes">
              <Link to="/jokes">Joke</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/jokes" element={<JokesList />} />
          <Route path="/jokes/:id" element={<ViewOne/>} />
        </Routes>
      </Layout>
  );
};

export default App;
