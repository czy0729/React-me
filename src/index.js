/**
 *
 * @Date: 2017-04-04 05:03:28
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-10-12 15:22:49
 */
'use strict';

import React from 'react';

const el = document.createElement('div');
document.body.appendChild(el);

let count = 0;

const Rc1 = (
  <div
    style={{
      width: 120,
      height: 120,
      background: 'white',
      transition: 'all .5s',
    }}
  >
    <div key="1">1</div>
    <div key="2">2</div>
    <div key="3">3</div>
    {false}
  </div>
);

const Rc2 = (
  <div
    style={{
      width: 200,
      height: 200,
      background: 'pink',
      transition: 'all .5s',
    }}
  >
    <div key="1">1</div>
    <div key="2">2</div>
    <div>4</div>
  </div>
);

React.render(Rc1, el);

setInterval(() => {
  React.render(count % 2 === 0 ? Rc2 : Rc1, el);
  count++;
}, 2000);
