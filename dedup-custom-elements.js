(() => {
    let _define = customElements.define;
    let registered = [];
    customElements.define = function() {
        const componentName = arguments[0];

        if(registered.includes(componentName)) {
            console.error(`Trying to register ${componentName} more than once`);
            return;
        }

        registered.push(componentName);
        return _define.apply(this, arguments);
    };
})();