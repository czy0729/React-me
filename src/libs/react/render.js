/**
 * 
 * @Date: 2017-04-04 05:49:19
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-04-05 02:29:52
 */
'use strict';

import ReactElement from './reactElement';

const EmptyNode = {};
const TextNode = {};

function getType(jsx) {
    if (typeof jsx === 'string' || typeof jsx === 'number') {
        return TextNode;
    }

    if (jsx === false || jsx === null) {
        return EmptyNode;
    }

    return jsx.type;
}

function compareStyle(el, newStyle, oldStyle, blacklist = {}) {
    const changeStyle = {};

    if (newStyle) {
        for (const key of Object.keys(newStyle)) {
            if (!blacklist[key] && newStyle[key] != null && !oldStyle || oldStyle[key] !== newStyle[key]) {
                if (typeof newStyle[key] === 'number') {
                    el.style[key] = `${newStyle[key]}px`;
                } else {
                    el.style[key] = newStyle[key];
                }

                changeStyle[key] = newStyle[key];
            }    
        }
    }

    if (oldStyle) {
        for (const key of Object.keys(oldStyle)) {
            if (!blacklist[key] && oldStyle[key] != null && !newStyle || newStyle[key] == null) {
                el.style[key] = null;

                changeStyle[key] = null;
            }
        }
    }

    return changeStyle;
}

function compareProps(el, newProps, oldProps, blacklist = {}) {
    if (newProps) {
        for (const key of Object.keys(newProps)) {
            if (!blacklist[key] && newProps[key] != null && (!oldProps || oldProps[key] !== newProps[key])) {
                el.setAttribute(key, newProps[key]);
            }
        }
    }

    if (oldProps) {
        for (const key of Object.keys(oldProps)) {
            if (!blacklist[key] && oldProps[key] != null && (!newProps || newProps[key] == null)) {
                el.removeAttribute(key);
            }
        }
    }
}

function initProps(el, props, blacklist) {
    if (props) {
        for (const key of Object.keys(props)) {
            if (key === 'style' && props[key]) {
                const style = props[key];

                for (const styleKey of Object.keys(style)) {
                    if (typeof style[styleKey] === 'number') {
                        el.style[styleKey] = `${style[styleKey]}px`;
                    } else {
                        el.style[styleKey] = style[styleKey];
                    }
                }
            } else if (props[key] != null && !blacklist[key]) {
                el.setAttribute(key, props[key]);
            }
        }
    }
}

function removeChildrens(el, oldChildren, newChildren) {
    const noKeys = [];
    const map = {};

    for (const child of newChildren) {
        if (child.key) {
            map[child.key] = true;
        } else {
            noKeys.push(true);
        }
    }

    const removes = [];

    for (const child of oldChildren) {
        if (child.jsx.key) {
            if (!map[child.jsx.key]) {
                child.unmount();
            }

        } else if (!noKeys.shift()) {
            child.unmount();
        }
    }
}

function getChildrenMap(oldChildren, newChildren) {
    const sources = [];
    const noKeys = [];
    const map = {};

    for (let i = 0; i < oldChildren.length; i++) {
        const key = oldChildren[i].jsx.key;

        if (key) {
            map[key] = i;
        } else {
            noKeys.push(i);
        }
    }

    for (let i = 0; i < newChildren.length; i++) {
        const key = newChildren[i].key;
        let v;

        if (key) {
            v = map[key];
        } else {
            v = noKeys.shift();
        }
        sources.push(v === undefined ? -1 : v);
    }

    return sources;
}

function lis_algorithm(arr) {
    const p = arr.slice(0);
    const result = [0];
    let i;
    let j;
    let u;
    let v;
    let c;
    const len = arr.length;

    for (i = 0; i < len; i++) {
        let arrI = arr[i];

        if (arrI === -1) {
            continue;
        }

        j = result[result.length - 1];
        if (arr[j] < arrI) {
            p[i] = j;
            result.push(i);
            continue;
        }

        u = 0;
        v = result.length - 1;

        while (u < v) {
            c = ((u + v) / 2) | 0;
            if (arr[result[c]] < arrI) {
                u = c + 1;
            } else {
                v = c;
            }
        }

        if (arrI < arr[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }

    u = result.length;
    v = result[u - 1];

    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }

    return result;
}

function updateChildren(el, newChildren, children) {
    const oldChildren = children.splice(0);

    if (!Array.isArray(newChildren)) {
        newChildren = newChildren ? [newChildren] : [];
    }

    removeChildrens(el, oldChildren, newChildren);

    const sources = getChildrenMap(oldChildren, newChildren);
    const lis = lis_algorithm(sources);
    let lastMountId = null;

    for (let i = newChildren.length -1; i >=0; i--) {
        const jsx = newChildren[i];
        let mount = null;

        if (lis[lis.length - 1] === i) {
            lis.pop();
            mount = oldChildren[sources[i]];
            mount.beforeId = lastMountId;
            mount.update(jsx);

        } else if (sources[i] >= 0) {
            mount = oldChildren[sources[i]];
            mount.moveTo(lastMountId);
            mount.update(jsx);

        } else {
            mount = new ReactMount();
            mount.parentEl = el;
            mount.mount(jsx, lastMountId);
        }

        children[i] = mount;
        lastMountId = mount.id;
    }
}


let counter = 0;
const elRegistry = [];

class ReactMount {
    id = ++counter;

    beforeId;

    el;

    parentEl;

    children = [];

    jsx;

    mount(jsx, beforeId) {
        this.jsx = jsx;
        this.beforeId = beforeId;

        if (getType(jsx) === TextNode) {
            this.el = document.createTextNode(jsx);
            elRegistry[this.id] = this.el;

            if (beforeId) {
                this.parentEl.insertBefore(this.el, elRegistry[this.beforeId]);
            } else {
                this.parentEl.appendChild(this.el);
            }

        } else if (getType(jsx) === EmptyNode) {
            this.el = document.createComment(`react-empty-node_${this.id}`);
            elRegistry[this.id] = this.el;

            if (beforeId) {
                this.parentEl.insertBefore(this.el, elRegistry[this.beforeId]);
            } else {
                this.parentEl.appendChild(this.el);
            }

        } else if (jsx instanceof ReactElement) {
            this.el = document.createElement(jsx.type);
            elRegistry[this.id] = this.el;

            this.el.setAttribute('data-react-id', this.id);

            if (beforeId) {
                this.parentEl.insertBefore(this.el, elRegistry[this.beforeId]);
            } else {
                this.parentEl.appendChild(this.el);
            }

            initProps(this.el, jsx.props, {
                children: true,
                ref: true,
                key: true,
            });

            if (jsx.children) {
                if (Array.isArray(jsx.children)) {
                    for (const child of jsx.children) {
                        const mount = new ReactMount();

                        mount.parentEl = this.el;
                        mount.mount(child);
                        this.children.push(mount);
                    }

                } else {
                    const mount = new ReactMount();

                    mount.parentEl = this.el;
                    mount.mount(jsx.children);
                    this.children.push(mount);
                }
            }
        }
    }

    unmount() {
        if (this.el) {
            this.parentEl.removeChild(this.el);
            delete elRegistry[this.id];
            this.el = null;
        }
    }

    moveTo(beforeId) {
        if (this.el) {
            this.parentEl.removeChild(this.el);
            this.beforeId = beforeId;

            if (beforeId) {
                this.parentEl.insertBefore(this.el, elRegistry[beforeId]);
            } else {
                this.parentEl.appendChild(this.el);
            }
        }
    }

    update(newJsx) {
        if (getType(newJsx) !== getType(this.jsx) || newJsx.key !== this.jsx.key) {
            this.unmount();
            this.mount(newJsx, this.beforeId);
        }

        if (getType(newJsx) === TextNode) {
            this.el.data = newJsx;
        }

        if (getType(newJsx) === EmptyNode) {

        } else if (this.el) {
            compareProps(this.el, newJsx.props, this.jsx.props, {
                children: true,
                ref: true,
                key: true,
                style: true,
            });

            //#todo fixed style
            const changeStyle = compareStyle(this.el, newJsx.props && newJsx.props.style, this.jsx.props && this.jsx.props.style);
            if (Object.keys(changeStyle).length) {
                this.jsx = {
                    ...this.jsx,
                    props: {
                        ...this.jsx.props,
                        style: {
                            ...this.jsx.props.style,
                            ...changeStyle,
                        },
                    },
                };
            }

            updateChildren(this.el, newJsx.children, this.children);
        }
    }
};

export default function render(jsx, el) {
    if (el._reactMount) {
        el._reactMount.update(jsx);
        return;
    }

    const mount = new ReactMount();

    mount.parentEl = el;
    el._reactMount = mount;

    mount.mount(jsx);
}