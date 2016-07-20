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
import { html as whyTarantinoHtml } from './why-tarantino.md';
import { Button } from 'react-mdl';
import history from '../../core/history';

function createHandleClick(path, event) {
  if (event.button !== 0 /* left click */) {
    return;
  }

  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
    return;
  }

  if (event.defaultPrevented === true) {
    return;
  }
  event.preventDefault();
  history.push(path);
}

function linkProps(path) {
  return {
    href: history.createHref(path),
    onClick: createHandleClick.bind(null, path)
  }
}

class HomePage extends React.Component {



  render() {
    return (
      <Layout className={s.content}>
        <div className={s.titleWrapper}>
          <div className={s.title}>
            <div className={s.left}>
              <h1>Meet Tarantino.</h1>
              <div className="robot-font">
                <p>Hack on microservices with ease.</p>
                <p>Compose services into workspaces to share with your team.</p>
                <p><strong className="orb-font">Tarantino</strong> orchestrates <a href="http://docker.com">docker</a> to spin up exactly what you need.
                </p>
              </div>
              <div className={s.titleButtons}>
                <Button accent={true} {...linkProps('/get-started')} raised={true} ripple={true}>
                  Get Started
                </Button>
                <Button className={s.greyButton} {...linkProps('/learn')} raised={true} ripple={true}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className={s.right}>
              <h3>$ tt create myservice</h3>
            </div>
          </div>
        </div>
        <div className={s.desc}>
          <h1>Why Tarantino?</h1>
          <div className={cx('robot-font', s.list)} dangerouslySetInnerHTML={{__html: whyTarantinoHtml}} />
        </div>
      </Layout>
    );
  }

}

export default HomePage;
