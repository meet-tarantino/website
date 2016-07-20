import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Layout as MDLLayout,
  Header, Navigation, Drawer, Content } from 'react-mdl';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const GitHubLink = (
      <a className="mdl-navigation__link" href="https://github.com/meet-tarantino/tarantino.git">
        <i className="material-icons" style={{marginRight:'8px', verticalAlign:'middle'}}>link</i>
        GitHub
      </a>
    );
    return (
      <MDLLayout>
        <Header className={cx(s.carbon)} title={'Tarantino'}>
          <Navigation>
            {GitHubLink}
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            {GitHubLink}
          </Navigation>
        </Drawer>
        <Content className={cx(s.content)}>
          <div {...this.props} className={this.props.className} />
        </Content>
      </MDLLayout>
    );
  }
}

export default Layout;
