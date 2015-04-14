# Sencha Ripple Effect

This is a work in progress, and might not be the best way to do this. However, it is reasonably performant, and has been in production in the Shop.com App for 6 months without issue. 

[Demo Sencha Fiddle](https://fiddle.sencha.com/#fiddle/l84)

##Installation:

- Copy Ripple.js contents into app/ux/Ripple.js
- Add Ext.ux to your Ext.Loader.setPath(), like so:

```
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Ext.ux': 'app/ux',
});
```

- Add the following to your SASS/CSS file
```
.ripple-effect {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.10);
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.35);
    animation: ripple 1s;
    -webkit-animation: ripple 1s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
}

@-webkit-keyframes ripple {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0.4;
    }

    100% {
        -webkit-transform: scale(75);
        transform: scale(75);
        opacity: 0;
    }
}

@keyframes ripple {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0.4;
    }

    100% {
        -webkit-transform: scale(75);
        transform: scale(1);
        opacity: 0;
    }
}
```
- Don't forget to recompile your SASS if it doesn't do it automagically.

##Usage

- Add ```plugins: [{xclass: 'Ext.ux.Ripple'}]``` to button config objects
- By adding more allowed xtypes to the Ripple.js you could use this plugin in other ways, however not every xtype has the same layout, so you may have to slightly adapt the code to have the ripple animate on the correct element


##Notes
- The ripple effect creates a dom node over your element, uses CSS animation to expand it, and then destroys it within a certain timeout. 
- Free beer to anyone who makes this better, easier to install, more performant, or more universally adapted to all xtypes. 
