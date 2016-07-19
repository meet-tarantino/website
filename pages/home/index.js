/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={cx(s.title)}>
          <div className={s.left}>
            <h1>Meet Tarantino.</h1>
            <div className="robot-font">
              <p>Hack on microservices with ease.</p>
              <p>Compose services into workspaces to share with your team.</p>
              <p><strong className="orb-font">Tarantino</strong> orchestrates <a href="http://docker.com">docker</a> to spin up exactly what you need.
              </p>
            </div>
          </div>
          <div className={s.right}>
            <h3>$ tt create myservice</h3>
          </div>
        </div>
        <div className={s.desc}>
          <h1>Why Tarantino?</h1>
          <div className={cx('robot-font', s.list)} dangerouslySetInnerHTML={{__html: html}} />
        </div>
      </Layout>
    );
  }

}

export default HomePage;
