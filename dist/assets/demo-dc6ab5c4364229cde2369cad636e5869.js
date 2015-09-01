define("demo/app",["ember","ember/resolver","ember/load-initializers","demo/config/environment","exports"],function(e,t,a,n,i){"use strict";var r=e["default"],l=t["default"],o=a["default"],p=n["default"];r.MODEL_FACTORY_INJECTIONS=!0;var s=r.Application.extend({modulePrefix:p.modulePrefix,podModulePrefix:p.podModulePrefix,Resolver:l});o(s,p.modulePrefix),i["default"]=s}),define("demo/components/ember-inplace-edit",["ember-inplace-edit/components/ember-inplace-edit","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a}),define("demo/initializers/export-application-global",["ember","demo/config/environment","exports"],function(e,t,a){"use strict";function n(){var e=arguments[1]||arguments[0];if(r.exportApplicationGlobal!==!1){var t,a=r.exportApplicationGlobal;t="string"==typeof a?a:i.String.classify(r.modulePrefix),window[t]||(window[t]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[t]}}))}}var i=e["default"],r=t["default"];a.initialize=n,a["default"]={name:"export-application-global",initialize:n}}),define("demo/router",["ember","demo/config/environment","exports"],function(e,t,a){"use strict";var n=e["default"],i=t["default"],r=n.Router.extend({location:i.locationType});r.map(function(){}),a["default"]=r}),define("demo/templates/application",["ember","exports"],function(e,t){"use strict";var a=e["default"];t["default"]=a.Handlebars.template(function(e,t,n,i,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.Handlebars.helpers),r=r||{};var l,o,p,s="",u=n.helperMissing,d=this.escapeExpression;return r.buffer.push('<h1 id=\'title\'>Demo of ember-inplace-edit</h1>\n\n<h3>1. Simple use case : </h3><p>ember-inplace-edit text="Sample text" value="Sample text" type="input"</p>\n<h3>Output:</h3>\n'),r.buffer.push(d((o=n["ember-inplace-edit"]||t&&t["ember-inplace-edit"],p={hash:{text:"Sample text",value:"Sample text",type:"input"},hashTypes:{text:"STRING",value:"STRING",type:"STRING"},hashContexts:{text:t,value:t,type:t},contexts:[],types:[],data:r},o?o.call(t,p):u.call(t,"ember-inplace-edit",p)))),r.buffer.push('\n\n<h3>2. With Placeholder : </h3><p>ember-inplace-edit placeholder="placeholder" type="input"</p>\n<h3>Output:</h3>\n'),r.buffer.push(d((o=n["ember-inplace-edit"]||t&&t["ember-inplace-edit"],p={hash:{placeholder:"placeholder",type:"input"},hashTypes:{placeholder:"STRING",type:"STRING"},hashContexts:{placeholder:t,type:t},contexts:[],types:[],data:r},o?o.call(t,p):u.call(t,"ember-inplace-edit",p)))),r.buffer.push("\n"),l=n._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(l||0===l)&&r.buffer.push(l),r.buffer.push("\n"),s})}),define("demo/config/environment",["ember"],function(e){var t="demo";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),i=JSON.parse(unescape(n));return{"default":i}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("demo/tests/test-helper"):require("demo/app")["default"].create({});