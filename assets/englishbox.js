"use strict";



define('englishbox/app', ['exports', 'ember', 'englishbox/resolver', 'ember-load-initializers', 'englishbox/config/environment'], function (exports, _ember, _englishboxResolver, _emberLoadInitializers, _englishboxConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _englishboxConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _englishboxConfigEnvironment['default'].podModulePrefix,
    Resolver: _englishboxResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _englishboxConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('englishbox/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('englishbox/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('englishbox/components/zf-accordion-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-accordion-menu'], function (exports, _emberCliFoundation6SassComponentsZfAccordionMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfAccordionMenu['default'];
    }
  });
});
define('englishbox/components/zf-accordion', ['exports', 'ember-cli-foundation-6-sass/components/zf-accordion'], function (exports, _emberCliFoundation6SassComponentsZfAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfAccordion['default'];
    }
  });
});
define('englishbox/components/zf-callout', ['exports', 'ember-cli-foundation-6-sass/components/zf-callout'], function (exports, _emberCliFoundation6SassComponentsZfCallout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfCallout['default'];
    }
  });
});
define('englishbox/components/zf-drilldown-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-drilldown-menu'], function (exports, _emberCliFoundation6SassComponentsZfDrilldownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDrilldownMenu['default'];
    }
  });
});
define('englishbox/components/zf-dropdown-menu', ['exports', 'ember-cli-foundation-6-sass/components/zf-dropdown-menu'], function (exports, _emberCliFoundation6SassComponentsZfDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDropdownMenu['default'];
    }
  });
});
define('englishbox/components/zf-dropdown', ['exports', 'ember-cli-foundation-6-sass/components/zf-dropdown'], function (exports, _emberCliFoundation6SassComponentsZfDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfDropdown['default'];
    }
  });
});
define('englishbox/components/zf-magellan', ['exports', 'ember-cli-foundation-6-sass/components/zf-magellan'], function (exports, _emberCliFoundation6SassComponentsZfMagellan) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfMagellan['default'];
    }
  });
});
define('englishbox/components/zf-off-canvas', ['exports', 'ember-cli-foundation-6-sass/components/zf-off-canvas'], function (exports, _emberCliFoundation6SassComponentsZfOffCanvas) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfOffCanvas['default'];
    }
  });
});
define('englishbox/components/zf-orbit', ['exports', 'ember-cli-foundation-6-sass/components/zf-orbit'], function (exports, _emberCliFoundation6SassComponentsZfOrbit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfOrbit['default'];
    }
  });
});
define('englishbox/components/zf-reveal', ['exports', 'ember-cli-foundation-6-sass/components/zf-reveal'], function (exports, _emberCliFoundation6SassComponentsZfReveal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfReveal['default'];
    }
  });
});
define('englishbox/components/zf-slider', ['exports', 'ember-cli-foundation-6-sass/components/zf-slider'], function (exports, _emberCliFoundation6SassComponentsZfSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfSlider['default'];
    }
  });
});
define('englishbox/components/zf-tabs', ['exports', 'ember-cli-foundation-6-sass/components/zf-tabs'], function (exports, _emberCliFoundation6SassComponentsZfTabs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfTabs['default'];
    }
  });
});
define('englishbox/components/zf-tooltip', ['exports', 'ember-cli-foundation-6-sass/components/zf-tooltip'], function (exports, _emberCliFoundation6SassComponentsZfTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassComponentsZfTooltip['default'];
    }
  });
});
define('englishbox/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('englishbox/helpers/app-version', ['exports', 'ember', 'englishbox/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _englishboxConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _englishboxConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('englishbox/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('englishbox/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('englishbox/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'englishbox/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _englishboxConfigEnvironment) {
  var _config$APP = _englishboxConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('englishbox/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('englishbox/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('englishbox/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('englishbox/initializers/export-application-global', ['exports', 'ember', 'englishbox/config/environment'], function (exports, _ember, _englishboxConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_englishboxConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _englishboxConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_englishboxConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('englishbox/initializers/flash-messages', ['exports', 'ember', 'englishbox/config/environment'], function (exports, _ember, _englishboxConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _englishboxConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('englishbox/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('englishbox/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('englishbox/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('englishbox/initializers/zf-widget', ['exports', 'ember-cli-foundation-6-sass/initializers/zf-widget'], function (exports, _emberCliFoundation6SassInitializersZfWidget) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassInitializersZfWidget['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliFoundation6SassInitializersZfWidget.initialize;
    }
  });
});
define("englishbox/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('englishbox/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('englishbox/router', ['exports', 'ember', 'englishbox/config/environment'], function (exports, _ember, _englishboxConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _englishboxConfigEnvironment['default'].locationType,
    rootURL: _englishboxConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('about');
  });

  exports['default'] = Router;
});
define('englishbox/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('englishbox/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('englishbox/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('englishbox/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define("englishbox/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vNSoLfmk", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"zf-tabs\"],null,[[\"id\"],[\"example-tabs\"]],2],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tabs-content\"],[\"static-attr\",\"data-tabs-content\",\"example-tabs\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tabs-panel is-active\"],[\"static-attr\",\"id\",\"panel1\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus\\n      ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est\\n      bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tabs-panel\"],[\"static-attr\",\"id\",\"panel2\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie\\n      vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis\\n      nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"callout\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"About Teacher Adolf\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  The \"],[\"block\",[\"zf-tooltip\"],null,[[\"title\"],[\"Fancy word for a beetle.\"]],1],[\"text\",\" hung quite\\n  clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand\\n  immediately took the scythe, and cleared with it a circular space, three or four yards\\n  in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to\\n  let go the string and come down from the tree.\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"about\"],[[\"class\"],[\"hollow button\"]],0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    About us\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"scarabaeus\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"tabs vertical\"],[\"static-attr\",\"id\",\"example-tabs\"],[\"static-attr\",\"data-tabs\",\"\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"tabs-title is-active\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#panel1\"],[\"static-attr\",\"aria-selected\",\"true\"],[\"flush-element\"],[\"text\",\"Tab 1\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"tabs-title\"],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#panel2\"],[\"flush-element\"],[\"text\",\"Tab 2\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "englishbox/templates/about.hbs" } });
});
define("englishbox/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SpG+9M2J", "block": "{\"statements\":[[\"block\",[\"zf-off-canvas\"],null,[[\"showRightOffCanvas\"],[true]],7],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"orbit-container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"orbit-previous\"],[\"static-attr\",\"aria-label\",\"previous\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"show-for-sr\"],[\"flush-element\"],[\"text\",\"Previous Slide\"],[\"close-element\"],[\"text\",\"◀\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"orbit-next\"],[\"static-attr\",\"aria-label\",\"next\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"show-for-sr\"],[\"flush-element\"],[\"text\",\"Next Slide\"],[\"close-element\"],[\"text\",\"▶\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"is-active orbit-slide\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"1: You can also throw some text in here!\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"Achieve an animation-free Orbit with the data attribute data-use-m-u-i=\\\"false\\\"\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"This Orbit slider does not use animations.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"orbit-slide\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"2: You can also throw some text in here!\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"\\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n            Unde harum rem, beatae ipsa consectetur quisquam. Rerum ratione, delectus atque\\n            tempore sed, suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora\\n            expedita.\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"This Orbit slider does not use animations.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"orbit-slide\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"3: You can also throw some text in here!\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"\\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde harum rem,\\n            beatae ipsa consectetur quisquam. Rerum ratione, delectus atque tempore sed,\\n            suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora expedita.\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"This Orbit slider does not use animations.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"orbit-slide\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"4: You can also throw some text in here!\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"\\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n            Unde harum rem, beatae ipsa consectetur quisquam. Rerum ratione, delectus atque\\n            tempore sed, suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora\\n            expedita.\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"This Orbit slider does not use animations.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"orbit-bullets\"],[\"flush-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"is-active\"],[\"static-attr\",\"data-slide\",\"0\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"show-for-sr\"],[\"flush-element\"],[\"text\",\"First slide details.\"],[\"close-element\"],[\"text\",\"\\n       \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"show-for-sr\"],[\"flush-element\"],[\"text\",\"Current Slide\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"data-slide\",\"1\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"show-for-sr\"],[\"flush-element\"],[\"text\",\"Second slide details.\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"data-slide\",\"2\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"show-for-sr\"],[\"flush-element\"],[\"text\",\"Third slide details.\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"data-slide\",\"3\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"show-for-sr\"],[\"flush-element\"],[\"text\",\"Fourth slide details.\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n   \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n    \"],[\"comment\",\" Main body goes here \"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title-bar\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"menu\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"menu-icon\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"data-toggle\",\"zf-off-canvas-left\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"menu-text\"],[\"flush-element\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"EnglishBox\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"type\",\"search\"],[\"static-attr\",\"placeholder\",\"look for a lesson\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"button\"],[\"flush-element\"],[\"text\",\"Search\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"zf-orbit\"],null,[[\"nav-buttons\"],[true]],0],[\"text\",\"\\n\\n\\n  \"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Example right off canvas content\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"section\",\"isOffCanvasRight\"]]],null,2,1]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"About\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Lessons\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"vertical menu\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"menu-text\"],[\"static-attr\",\"data-toggle\",\"zf-off-canvas-left\"],[\"flush-element\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Menu\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"data-toggle\",\"zf-off-canvas-left\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,5],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"data-toggle\",\"zf-off-canvas-left\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"about\"],null,4],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"section\",\"isOffCanvasLeft\"]]],null,6,3],[\"text\",\"\\n\"]],\"locals\":[\"section\"]}],\"hasPartials\":false}", "meta": { "moduleName": "englishbox/templates/application.hbs" } });
});
define("englishbox/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qk7DSeni", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "englishbox/templates/index.hbs" } });
});


define('englishbox/config/environment', ['ember'], function(Ember) {
  var prefix = 'englishbox';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("englishbox/app")["default"].create({"name":"englishbox","version":"0.0.0+61676367"});
}
//# sourceMappingURL=englishbox.map
