import { Dropdown, Icon, Layout, Menu } from 'antd';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import ReminderContainer from '../reminder/reminder.container';
import TodoContainer from '../todo/todo.container';
import './app.container.less';

const { Header, Content, Footer } = Layout;
const dropdown = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.github.com/kfrancois">
        <Icon type="github" /> GitHub
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <Icon type="setting" /> Settings
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Icon type="logout" /> Log Out
    </Menu.Item>
  </Menu>
);

interface IAppContainerProps {
  history: History;
  currentRoute: string;
  changeRoute: (route: string) => void;
}

class AppContainer extends React.Component<IAppContainerProps> {
  constructor(props: IAppContainerProps) {
    super(props);
    this.props.history.listen(route => {
      this.props.changeRoute(route.pathname);
    });

    this.props.changeRoute(window.location.pathname);
  }

  public render() {
    const { history, currentRoute } = this.props;

    return (
      <ConnectedRouter history={history}>
        <Layout>
          <Header className="header">
            <div className="menu-left">
              <Icon type="ant-design" />
            </div>
            <Menu mode="horizontal" selectedKeys={[currentRoute]}>
              <Menu.Item key="/todo">
                <NavLink to="/todo">
                  <Icon type="bars" />Todos
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/reminder">
                <NavLink to="/reminder">
                  <Icon type="clock-circle-o" />Reminders
                </NavLink>
              </Menu.Item>
            </Menu>
            <div className="menu-right">
              <Dropdown overlay={dropdown} trigger={['click']}>
                <a>
                  Menu <Icon type="down" />
                </a>
              </Dropdown>
            </div>
          </Header>
          <Content id="content-container">
            <Switch>
              <Route path="/todo" component={TodoContainer} />
              <Route path="/reminder" component={ReminderContainer} />
              <Redirect to="/todo" />
            </Switch>
          </Content>
          <Footer className="text-center">
            Koen Fran&ccedil;ois &copy; 2018
          </Footer>
        </Layout>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentRoute: state.route.activeRoute
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeRoute: (text: string) =>
      dispatch({
        payload: text,
        type: 'CHANGE_ROUTE'
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
