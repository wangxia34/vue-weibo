// ValidInput.js
const ValidRule = {
    required: value => value !== '',
    email: value => /[\w-_]@[\w-_].\w/.test(value),
    telephone: value => /1[1-9]{10}/.test(value),
    length: (value, params = {}) => {
        const selfParams = Object.assign({}, { min: 0, max: Number.MAX_VALUE }, params);
        return value.length > selfParams.min && value < selfParams.max
    },
    pattern: (value, params = {}) => {
        const selfParams = Object.assign({}, { pattern: /.*/ }, params);
        return selfParams.pattern.test(value)
    }
};
export default {
    functional: true,
    render(h, { parent, children, props }) {
        const { field, options, message = '' } = props;
        if (children.length > 1) throw new Error('组件ValidInput');
        let errorChild = h('div', { class: 'error' }, message);
        if (!parent._validFormResult) parent._validFormResult = {};
        if (!parent._isMounted) parent._validFormResult[field] = 'false';
        if (parent[field] !== '') parent._validFormResult[field] = 'inputed';
        if (/inputed/.test(parent._validFormResult[field]) && options && options.length) {
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                if (!ValidRule.hasOwnProperty(option.rule)) throw new Error(`不支持 *${option.rule}* 验证规则`);
                if (!ValidRule[option.rule](parent[field], option)) {
                    parent._validFormResult[field] = 'inputed_false';
                    errorChild = h('div', { class: 'error' }, option.message)
                } else {
                    parent._validFormResult[field] = 'inputed_true'
                }
            }
        }
        children[0].children.push(errorChild);
        return children
    }
}
