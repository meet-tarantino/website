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
import { Button } from 'react-mdl';

class GetStarted extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
        <h1>Coming Soon</h1>
      </Layout>
    );
  }

}

export default GetStarted;
