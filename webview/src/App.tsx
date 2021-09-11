import React from "react";
import {  Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()
import { Layout, Menu } from "antd";
const { Header, Sider, Content } = Layout;
import {HomeOutlined,MenuUnfoldOutlined,MenuFoldOutlined} 
from "@ant-design/icons";
import "./App.less";
import Home from "./pages/Home";
import Article from "./pages/Article"
import EditArticle from "./pages/EditArticle"


const routes = [
  {
    path: "/",
    exact: true,
    component: <Home history={history}/>,
  },
  {
    path: "/article",
    component: <Article history={history}/>,
  },
  {
    path: "/editArticle",
    component: <EditArticle />
  },
  {
    path: "/test2",
    component: () => <h2>test2</h2>,
  },
];

interface AppProps {}
interface AppState {
  lCollapsed: boolean;
  rCollapsed: boolean;
}
export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      lCollapsed: window.innerWidth < 768 ? true : false,
      rCollapsed: window.innerWidth < 1024 ? true : false,
    };

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden"; 
    window.addEventListener("resize", () => {
      this.setState({
        lCollapsed: window.innerWidth < 768 ? true : false,
        rCollapsed: window.innerWidth < 1024 ? true : false,
      });
    });
  }
  lToggle = () => {
    this.setState({
      lCollapsed: !this.state.lCollapsed,
    });
  };
  rToggle = () => {
    this.setState({
      rCollapsed: !this.state.rCollapsed,
    });
  };
  render() {            
    return (
      <Router history={history}>
        <Layout className="page">
          <Header className="header">
            {window.innerWidth < 768
              ? React.createElement(
                  this.state.lCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "lTrigger",
                    onClick: this.lToggle,
                  }
                )
              : undefined}
            <span className="title">古典吉他网</span>
            {window.innerWidth < 1024
              ? React.createElement(
                  this.state.rCollapsed ? MenuFoldOutlined : MenuUnfoldOutlined,
                  {
                    className: "rTrigger",
                    onClick: this.rToggle,
                  }
                )
              : undefined}
          </Header>
          <Layout className="layout">
            <Sider
              className="lsider"
              trigger={null}
              collapsible
              collapsed={this.state.lCollapsed}
              collapsedWidth={0}
            >
              <Menu className="menu" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<HomeOutlined />} onClick={()=>{history.push('/')}}>
                  首页
                </Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />} onClick={()=>{history.push('/article')}}>
                  展示文章
                </Menu.Item>
                <Menu.Item key="3" icon={<HomeOutlined />} onClick={()=>{history.push('/editArticle')}}>
                  编辑文章
                </Menu.Item>
              </Menu>
            </Sider>
            <Content className="main">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={route.component}
                  />
                ))}
              </Switch>
            </Content>
            <Sider
              className="rsider"
              trigger={null}
              collapsible
              collapsed={this.state.rCollapsed}
              collapsedWidth={0}
            >
              rside
            </Sider>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
