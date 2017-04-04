/**
 * 
 * @Date: 2017-04-04 05:36:05
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-04-05 02:29:52
 */
'use strict';

import ReactElement from './reactElement';

export default function createElement(type, props, ...children) {
    const rc = new ReactElement();

    rc.type = type;
    rc.key = props && props.key || null;
    rc.ref = props && props.ref || null;

    if (children.length) {
        if (children.length === 1) {
            rc.props = {
                ...props,
                children: children[0],
            };

        } else {
            rc.props = {
                ...props,
                children,
            };
        }

    } else {
        rc.props = props;
    }

    return rc;
};