// ValidForm.js
const noop = () => {};
export default {
    name: 'ValidForm',
    created () {
        this._$parent = this.$parent
    },
    methods : {
        validate(callback = noop) {
            // 改变每个验证表单的输入状态
            Object.keys(this._$parent._validFormResult).forEach(field => this._$parent._validFormResult[field] = 'inputed')
            this._$parent.$forceUpdate();
            // 所有表单验证完成后执行回调
            this.$nextTick(() => {
                callback(!Object.keys(this._$parent._validFormResult).every(field => this._$parent._validFormResult[field] === 'inputed_true'))
            })
        },
        validateField (fields, callback = noop) {
            if (Object.prototype.toString.call(fields) !== '[object Array]') {
                throw new Error('error from ValidFrom: validateField first param must been **Array**')
            }
            fields.forEach(field => this._$parent._validFormResult[field] = 'inputed');
            this._$parent.$forceUpdate();
            this.$nextTick(() => {
                callback(!fields.every(item => this._$parent._validFormResult[item] === 'inputed_true'))
            })
        }
    },
    render (h) {
        return h('form',
            {
                class: {
                    'valid-form': true
                }
            },
            this.$slots.default
        )
    }
}
