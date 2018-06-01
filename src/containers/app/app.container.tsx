import { Dropdown, Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import ReminderContainer from '../reminder/reminder.container';
import TodoContainer from '../todo/todo.container';
import './app.container.less';

const ConnectedSwitch = connect((state: any) => {
  return {
    location: state.location,
  };
})(Switch);

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
  currentPath: string;
}

class AppContainer extends React.Component<IAppContainerProps> {
  public render() {
    const { currentPath } = this.props;

    return (
      <Layout>
        <Header className="header">
          <div className="menu-left">
            <Icon type="ant-design" />
          </div>
          <Menu mode="horizontal" selectedKeys={[currentPath]}>
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
          <ConnectedSwitch>
            <Route path="/todo" component={TodoContainer} />
            <Route path="/reminder" component={ReminderContainer} />
            <Redirect to="/todo" />
          </ConnectedSwitch>
        </Content>
        <Footer className="text-center">Koen Fran&ccedil;ois &copy; 2018</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentPath: state.routing.location.pathname,
  };
};
export default connect(mapStateToProps)(AppContainer);
