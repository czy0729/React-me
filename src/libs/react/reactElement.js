/**
 * 
 * @Date: 2017-04-04 05:34:40
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-04-05 02:29:52
 */
'use strict';

export default class ReactElement {
    type;
    props;
    key;
    ref;
    get children() {
        return this.props && this.props.children;
    };
};