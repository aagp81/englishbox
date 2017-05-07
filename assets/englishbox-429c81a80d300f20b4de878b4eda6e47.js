"use strict";define("englishbox/app",["exports","ember","englishbox/resolver","ember-load-initializers","englishbox/config/environment"],function(e,t,n,l,s){var a=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,a=t.default.Application.extend({modulePrefix:s.default.modulePrefix,podModulePrefix:s.default.podModulePrefix,Resolver:n.default}),(0,l.default)(a,s.default.modulePrefix),e.default=a}),define("englishbox/components/flash-message",["exports","ember-cli-flash/components/flash-message"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-accordion-menu",["exports","ember-cli-foundation-6-sass/components/zf-accordion-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-accordion",["exports","ember-cli-foundation-6-sass/components/zf-accordion"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-callout",["exports","ember-cli-foundation-6-sass/components/zf-callout"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-drilldown-menu",["exports","ember-cli-foundation-6-sass/components/zf-drilldown-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-dropdown-menu",["exports","ember-cli-foundation-6-sass/components/zf-dropdown-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-dropdown",["exports","ember-cli-foundation-6-sass/components/zf-dropdown"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-magellan",["exports","ember-cli-foundation-6-sass/components/zf-magellan"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-off-canvas",["exports","ember-cli-foundation-6-sass/components/zf-off-canvas"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-orbit",["exports","ember-cli-foundation-6-sass/components/zf-orbit"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-reveal",["exports","ember-cli-foundation-6-sass/components/zf-reveal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-slider",["exports","ember-cli-foundation-6-sass/components/zf-slider"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-tabs",["exports","ember-cli-foundation-6-sass/components/zf-tabs"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/components/zf-tooltip",["exports","ember-cli-foundation-6-sass/components/zf-tooltip"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/flash/object",["exports","ember-cli-flash/flash/object"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/helpers/app-version",["exports","ember","englishbox/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,l){function s(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?a.match(l.versionRegExp)[0]:t.hideVersion?a.match(l.shaRegExp)[0]:a}e.appVersion=s;var a=n.default.APP.version;e.default=t.default.Helper.helper(s)}),define("englishbox/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("englishbox/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("englishbox/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","englishbox/config/environment"],function(e,t,n){var l=n.default.APP,s=l.name,a=l.version;e.default={name:"App Version",initialize:(0,t.default)(s,a)}}),define("englishbox/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("englishbox/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("englishbox/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("englishbox/initializers/export-application-global",["exports","ember","englishbox/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var s,a=n.default.exportApplicationGlobal;s="string"==typeof a?a:t.default.String.classify(n.default.modulePrefix),l[s]||(l[s]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[s]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("englishbox/initializers/flash-messages",["exports","ember","englishbox/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0],t=n.default||{},l=t.flashMessageDefaults,r=l||[],c=r.injectionFactories,u=a(o,l),m=!(c&&c.length);e.register("config:flash-messages",u,{instantiate:!1}),e.inject("service:flash-messages","flashMessageDefaults","config:flash-messages"),s(i,m,{id:"ember-cli-flash.deprecate-injection-factories",until:"2.0.0"}),u.injectionFactories.forEach(function(t){e.inject(t,"flashMessages","service:flash-messages")})}e.initialize=l;var s=t.default.deprecate,a=t.default.assign||t.default.merge,i="[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.",o={timeout:3e3,extendedTimeout:0,priority:100,sticky:!1,showProgress:!1,type:"info",types:["success","info","warning","danger","alert","secondary"],injectionFactories:["route","controller","view","component"],preventDuplicates:!1};e.default={name:"flash-messages",initialize:l}}),define("englishbox/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("englishbox/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("englishbox/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("englishbox/initializers/zf-widget",["exports","ember-cli-foundation-6-sass/initializers/zf-widget"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("englishbox/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("englishbox/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("englishbox/router",["exports","ember","englishbox/config/environment"],function(e,t,n){var l=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});l.map(function(){this.route("about")}),e.default=l}),define("englishbox/routes/about",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("englishbox/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("englishbox/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/services/flash-messages",["exports","ember-cli-flash/services/flash-messages"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("englishbox/templates/about",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"vNSoLfmk",block:'{"statements":[["text","\\n"],["block",["zf-tabs"],null,[["id"],["example-tabs"]],2],["open-element","div",[]],["static-attr","class","tabs-content"],["static-attr","data-tabs-content","example-tabs"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tabs-panel is-active"],["static-attr","id","panel1"],["flush-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["text","\\n      Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus\\n      ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est\\n      bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","tabs-panel"],["static-attr","id","panel2"],["flush-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["text","\\n      Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie\\n      vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis\\n      nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","callout"],["flush-element"],["text","\\n  "],["open-element","h2",[]],["flush-element"],["text","About Teacher Adolf"],["close-element"],["text","\\n  "],["open-element","p",[]],["flush-element"],["text","\\n  The "],["block",["zf-tooltip"],null,[["title"],["Fancy word for a beetle."]],1],["text"," hung quite\\n  clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand\\n  immediately took the scythe, and cleared with it a circular space, three or four yards\\n  in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to\\n  let go the string and come down from the tree.\\n"],["close-element"],["text","\\n"],["block",["link-to"],["about"],[["class"],["hollow button"]],0],["text","  "],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    About us\\n"]],"locals":[]},{"statements":[["text","scarabaeus"]],"locals":[]},{"statements":[["text","  "],["open-element","ul",[]],["static-attr","class","tabs vertical"],["static-attr","id","example-tabs"],["static-attr","data-tabs",""],["flush-element"],["text","\\n  "],["open-element","li",[]],["static-attr","class","tabs-title is-active"],["flush-element"],["open-element","a",[]],["static-attr","href","#panel1"],["static-attr","aria-selected","true"],["flush-element"],["text","Tab 1"],["close-element"],["close-element"],["text","\\n  "],["open-element","li",[]],["static-attr","class","tabs-title"],["flush-element"],["open-element","a",[]],["static-attr","href","#panel2"],["flush-element"],["text","Tab 2"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"englishbox/templates/about.hbs"}})}),define("englishbox/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"uDNSkH/1",block:'{"statements":[["block",["zf-off-canvas"],null,[["showRightOffCanvas"],[true]],8],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","ul",[]],["static-attr","class","orbit-container"],["flush-element"],["text","\\n      "],["open-element","button",[]],["static-attr","class","orbit-previous"],["static-attr","aria-label","previous"],["flush-element"],["open-element","span",[]],["static-attr","class","show-for-sr"],["flush-element"],["text","Previous Slide"],["close-element"],["text","◀"],["close-element"],["text","\\n      "],["open-element","button",[]],["static-attr","class","orbit-next"],["static-attr","aria-label","next"],["flush-element"],["open-element","span",[]],["static-attr","class","show-for-sr"],["flush-element"],["text","Next Slide"],["close-element"],["text","▶"],["close-element"],["text","\\n      "],["open-element","li",[]],["static-attr","class","is-active orbit-slide"],["flush-element"],["text","\\n        "],["open-element","div",[]],["flush-element"],["text","\\n          "],["open-element","h3",[]],["static-attr","class","text-center"],["flush-element"],["text","1: You can also throw some text in here!"],["close-element"],["text","\\n          "],["open-element","p",[]],["static-attr","class","text-center"],["flush-element"],["text","Achieve an animation-free Orbit with the data attribute data-use-m-u-i=\\"false\\""],["close-element"],["text","\\n          "],["open-element","h3",[]],["static-attr","class","text-center"],["flush-element"],["text","This Orbit slider does not use animations."],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","li",[]],["static-attr","class","orbit-slide"],["flush-element"],["text","\\n        "],["open-element","div",[]],["flush-element"],["text","\\n          "],["open-element","h3",[]],["static-attr","class","text-center"],["flush-element"],["text","2: You can also throw some text in here!"],["close-element"],["text","\\n          "],["open-element","p",[]],["static-attr","class","text-center"],["flush-element"],["text","\\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n            Unde harum rem, beatae ipsa consectetur quisquam. Rerum ratione, delectus atque\\n            tempore sed, suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora\\n            expedita.\\n          "],["close-element"],["text","\\n          "],["open-element","h3",[]],["static-attr","class","text-center"],["flush-element"],["text","This Orbit slider does not use animations."],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","li",[]],["static-attr","class","orbit-slide"],["flush-element"],["text","\\n        "],["open-element","div",[]],["flush-element"],["text","\\n          "],["open-element","h3",[]],["static-attr","class","text-center"],["flush-element"],["text","3: You can also throw some text in here!"],["close-element"],["text","\\n          "],["open-element","p",[]],["static-attr","class","text-center"],["flush-element"],["text","\\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde harum rem,\\n            beatae ipsa consectetur quisquam. Rerum ratione, delectus atque tempore sed,\\n            suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora expedita.\\n          "],["close-element"],["text","\\n          "],["open-element","h3",[]],["static-attr","class","text-center"],["flush-element"],["text","This Orbit slider does not use animations."],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","li",[]],["static-attr","class","orbit-slide"],["flush-element"],["text","\\n        "],["open-element","div",[]],["flush-element"],["text","\\n          "],["open-element","h3",[]],["static-attr","class","text-center"],["flush-element"],["text","4: You can also throw some text in here!"],["close-element"],["text","\\n          "],["open-element","p",[]],["static-attr","class","text-center"],["flush-element"],["text","\\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n            Unde harum rem, beatae ipsa consectetur quisquam. Rerum ratione, delectus atque\\n            tempore sed, suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora\\n            expedita.\\n          "],["close-element"],["text","\\n          "],["open-element","h3",[]],["static-attr","class","text-center"],["flush-element"],["text","This Orbit slider does not use animations."],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","nav",[]],["static-attr","class","orbit-bullets"],["flush-element"],["text","\\n     "],["open-element","button",[]],["static-attr","class","is-active"],["static-attr","data-slide","0"],["flush-element"],["open-element","span",[]],["static-attr","class","show-for-sr"],["flush-element"],["text","First slide details."],["close-element"],["text","\\n       "],["open-element","span",[]],["static-attr","class","show-for-sr"],["flush-element"],["text","Current Slide"],["close-element"],["close-element"],["text","\\n     "],["open-element","button",[]],["static-attr","data-slide","1"],["flush-element"],["open-element","span",[]],["static-attr","class","show-for-sr"],["flush-element"],["text","Second slide details."],["close-element"],["close-element"],["text","\\n     "],["open-element","button",[]],["static-attr","data-slide","2"],["flush-element"],["open-element","span",[]],["static-attr","class","show-for-sr"],["flush-element"],["text","Third slide details."],["close-element"],["close-element"],["text","\\n     "],["open-element","button",[]],["static-attr","data-slide","3"],["flush-element"],["open-element","span",[]],["static-attr","class","show-for-sr"],["flush-element"],["text","Fourth slide details."],["close-element"],["close-element"],["text","\\n   "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","\\n          "],["open-element","img",[]],["static-attr","src","/assets/logoslogan-b3ca3021dd90f6db36c5c49fb9f41c35.png"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","\\n    "],["comment"," Main body goes here "],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","title-bar"],["flush-element"],["text","\\n    "],["open-element","ul",[]],["static-attr","class","menu"],["flush-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["text","\\n          "],["open-element","button",[]],["static-attr","class","menu-icon"],["static-attr","type","button"],["static-attr","data-toggle","zf-off-canvas-left"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["index"],null,1],["text","        "],["close-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["open-element","input",[]],["static-attr","type","search"],["static-attr","placeholder","look for a lesson"],["flush-element"],["close-element"],["close-element"],["text","\\n      "],["open-element","li",[]],["flush-element"],["open-element","button",[]],["static-attr","type","button"],["static-attr","class","button"],["flush-element"],["text","Search"],["close-element"],["close-element"],["text","\\n      "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["block",["zf-orbit"],null,[["nav-buttons"],[true]],0],["text","\\n\\n\\n  "]],"locals":[]},{"statements":[["text","    "],["open-element","p",[]],["flush-element"],["text","Example right off canvas content"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["section","isOffCanvasRight"]]],null,3,2]],"locals":[]},{"statements":[["text","        "],["open-element","h5",[]],["flush-element"],["text","About"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","h5",[]],["flush-element"],["text","Lessons"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","ul",[]],["static-attr","class","vertical menu"],["flush-element"],["text","\\n      "],["open-element","li",[]],["static-attr","class","menu-text"],["static-attr","data-toggle","zf-off-canvas-left"],["flush-element"],["open-element","h2",[]],["flush-element"],["text","Menu"],["close-element"],["close-element"],["text","\\n      "],["open-element","li",[]],["static-attr","data-toggle","zf-off-canvas-left"],["flush-element"],["text","\\n"],["block",["link-to"],["index"],null,6],["text","        "],["close-element"],["text","\\n      "],["open-element","li",[]],["static-attr","data-toggle","zf-off-canvas-left"],["flush-element"],["text","\\n"],["block",["link-to"],["about"],null,5],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n"]],"locals":[]},{"statements":[["text","\\n"],["block",["if"],[["get",["section","isOffCanvasLeft"]]],null,7,4],["text","\\n"]],"locals":["section"]}],"hasPartials":false}',meta:{moduleName:"englishbox/templates/application.hbs"}})}),define("englishbox/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"qk7DSeni",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"englishbox/templates/index.hbs"}})}),define("englishbox/config/environment",["ember"],function(e){try{var t="englishbox/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),l=JSON.parse(unescape(n)),s={default:l};return Object.defineProperty(s,"__esModule",{value:!0}),s}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("englishbox/app").default.create({name:"englishbox",version:"0.0.0+0c14d518"});