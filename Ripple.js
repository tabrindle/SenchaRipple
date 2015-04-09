/*
 * This is a Material Design - like plugin for Sencha buttons.
 *
 * @class Ext.ux.Ripple
 * @author Trevor Brindle
 *
 */

Ext.define('Ext.ux.Ripple', {
    alias: 'plugin.Ripple',

    init: function(component) {
        this.component = component;

        if (component.config.xtype === 'button' || component.config.xtype === 'container') {
            if (component.config.pressedCls) {
                component.setPressedCls(null);
            }
            component.bodyElement.on({
                touchstart: this.onButtonTouchStart,
                scope: this
            });
        } else {
            console.log('xtype unsupported -', component.config.xtype);
        }
    },

    /*
     * @method onButtonTouchStart
     * @description Fires on Ext.Button touch start
     * @param {object} event
     * @param {object} Dom node
     * @param {object} Event Options
     */
    onButtonTouchStart: function(e, node, options) {
        var element = this.component.element;
        var offsetLeft = parseInt(element.dom.getBoundingClientRect().left + 15);
        var offsetTop = parseInt(element.dom.getBoundingClientRect().top + 15);
        var x = parseInt(e.pageX - offsetLeft);
        var y = parseInt(e.pageY - offsetTop);

        Ext.DomHelper.append(element, '<div class="ripple-effect" style="position: absolute; top:' + y + 'px; left:' + x + 'px;"></div>');

        setTimeout(function() {
            var ripple = Ext.DomQuery.select('div[class=ripple-effect')[0];
            if (ripple) {
                ripple.remove();
            }
        }, 500);
    }
});
