!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("lodash"),require("path-browserify"),require("firebase/app"),require("firebase/firestore"),require("firebase/auth"),require("firebase/storage")):"function"==typeof define&&define.amd?define(["exports","lodash","path-browserify","firebase/app","firebase/firestore","firebase/auth","firebase/storage"],r):r((e=e||self).reactAdminFirebase={},e.lodash,e.pathBrowserify,e.firebase)}(this,function(e,r,t,n){function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e){e&&"object"==typeof e&&Object.keys(e).map(function(r){e[r]=function e(r){return r?"object"!=typeof r?r:r.toDate&&"function"==typeof r.toDate?r.toDate():Array.isArray(r)?r.map(function(r){return e(r)}):"object"==typeof r?(Object.keys(r).map(function(t){r[t]=e(r[t])}),r):void 0:r}(e[r])})}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var s=function(e){var r=e.data();return a(r),o({id:e.id},r)};function u(e,t,n){e.sort(function(e,o){var i=r.get(e,t),a=r.get(o,t),s="asc"===n;return Number.isFinite(i)&&Number.isFinite(a)?c(i,a,s):"string"==typeof i&&"string"==typeof a?c(i.toLowerCase(),a.toLowerCase(),s):i instanceof Date&&a instanceof Date?c(i,a,s):c(!!i,!!a,s)})}function c(e,r,t){return e>r?t?1:-1:e<r?t?-1:1:0}function l(e,t){if(!t||r.isEmpty(t))return e;var n=[];return Object.keys(t).map(function(e){var r=function(e,r){if(!r||"string"==typeof r||"number"==typeof r||"boolean"==typeof r)return[{searchField:e,searchValue:r}];var t={};return t[e]=r,function(e){var r=[];return function e(t,n){for(var o in n=n||"",t)if(t.hasOwnProperty(o)){var i=t&&t[o],a=n?n+"."+o:o;"object"==typeof i||i instanceof Array?e(i,a):r.push({searchField:a,searchValue:i})}}(e,null),r}(t)}(e,t[e]);n.push.apply(n,r)}),e.filter(function(e){return n.reduce(function(t,n){return function(e,t,n){var o=r.get(e,t);return!o&&!n||!!o&&("string"==typeof n?o.toString().toLowerCase().includes(n.toLowerCase()):("boolean"==typeof n||"number"==typeof n)&&o===n)}(e,n.searchField,n.searchValue)&&t},!0)})}var f=function(){return null},d=function(){function e(e,r){this.title=e,this.cacheEnabledKey=r}var r,t=e.prototype;return t.isEnabled=function(){return!!localStorage.getItem(this.cacheEnabledKey)},t.SetEnabled=function(e){e?localStorage.setItem(this.cacheEnabledKey,"true"):localStorage.removeItem(this.cacheEnabledKey)},(r=[{key:"log",get:function(){return this.isEnabled()?console.log.bind(console,this.title):f}},{key:"warn",get:function(){return this.isEnabled()?console.warn.bind(console,this.title):f}},{key:"error",get:function(){return this.isEnabled()?console.error.bind(console,this.title):f}}])&&function(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,r),e}(),h=new d("🔥raf:","LOGGING_ENABLED"),v=h.log,m=h.error,p=h.warn,g=new d("💸firestore-costs:","LOGGING_FIRESTORE_COSTS_ENABLED"),y="firecosts-single-reads";function P(e,r,t){if(!e.s){if(t instanceof b){if(!t.s)return void(t.o=P.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(P.bind(null,e,r),P.bind(null,e,2));e.s=r,e.v=t;const n=e.o;n&&n(e)}}const b=function(){function e(){}return e.prototype.then=function(r,t){const n=new e,o=this.s;if(o){const e=1&o?r:t;if(e){try{P(n,1,e(this.v))}catch(e){P(n,2,e)}return n}return this}return this.o=function(e){try{const o=e.v;1&e.s?P(n,1,r?r(o):o):t?P(n,1,t(o)):P(n,2,o)}catch(e){P(n,2,e)}},n},e}();function w(e,r,t){var n,o,i=-1;return function a(s){try{for(;++i<e.length&&(!t||!t());)if((s=r(i))&&s.then){if(!((u=s)instanceof b&&1&u.s))return void s.then(a,o||(o=P.bind(null,n=new b,2)));s=s.v}n?P(n,1,s):n=s}catch(e){P(n||(n=new b),2,e)}var u}(),n}var j=function e(r,t){try{var n,i=Array.isArray(t),a=!i&&"object"==typeof t,s=a&&!!t&&t.hasOwnProperty("src"),u=function(){if(s){if(t.src.startsWith("https://"))return n=1,t;var u=null;return function(e,i){try{var a=(u=r.storage().ref(t.src),Promise.resolve(u.getDownloadURL()).then(function(e){return n=1,o({},t,{src:e})}))}catch(e){return i(e)}return a&&a.then?a.then(void 0,i):a}(0,function(e){return m("Error when getting download URL",{error:e,fieldValue:t,ref:u}),n=1,t})}return function(){if(a){var o=function(){return n=1,t},s=function(n,o,i){var a=[];for(var s in n)a.push(s);return w(a,function(n){return function(n){var o=function(){if(t.hasOwnProperty(n))return Promise.resolve(e(r,t[n])).then(function(e){t[n]=e})}();if(o&&o.then)return o.then(function(){})}(a[n])},void 0)}(t);return s&&s.then?s.then(o):o()}return function(){if(i){var o=function(){return n=1,t},a=w(t,function(n){return Promise.resolve(e(r,t[n])).then(function(e){t[n]=e})});return a&&a.then?a.then(o):o()}}()}()}();return Promise.resolve(u&&u.then?u.then(function(e){return n?e:t}):n?u:t)}catch(e){return Promise.reject(e)}};function R(e,r){if(!e)return r+"";if(!r)throw new Error("Resource name must be a string of length greater than 0 characters");var n="string"==typeof e?e:e(),o=t.join("/",n,"/",r,"/");if((o.split("/").length-1)%2)throw new Error('The rootRef path must point to a "document"\n    not a "collection"e.g. /collection/document/ or\n    /collection/document/collection/document/');return o.slice(1,-1)}function L(){return t.join.apply(t,[].slice.call(arguments))}var G=function(){function e(){this.firestore=null,this.app=null,this.options={}}var r=e.prototype;return r.GetApp=function(){return this.app},r.init=function(e,r){var t=r||{};this.options=t,this.app=function(e,r){return r.app?r.app:n.apps.length?n.app():n.initializeApp(e)}(e,t),this.firestore=this.app.firestore()},r.db=function(){return this.firestore},r.serverTimestamp=function(){return new Date},r.auth=function(){return this.app.auth()},r.storage=function(){return this.app.storage()},r.GetUserLogin=function(){try{var e=this;return Promise.resolve(new Promise(function(r,t){e.app.auth().onAuthStateChanged(function(e){e?r(e):t("getUserLogin() no user logged in")})}))}catch(e){return Promise.reject(e)}},r.OnUserLogout=function(e){this.app.auth().onAuthStateChanged(function(r){var t=!r;v("FirebaseWrapper.OnUserLogout",{user:r,isLoggedOut:t}),t&&e(r)})},e}(),F=function(){function e(e,r,t){var n=this;this.fireWrapper=e,this.options=r,this.flogger=t,this.resources={},this.db=e.db(),this.fireWrapper.OnUserLogout(function(){n.resources={}})}var r=e.prototype;return r.TryGetResource=function(e,r,t){try{var n=this,o=function(){return n.TryGetResourcePromise(e,t)},i=function(){if(r)return Promise.resolve(n.RefreshResource(e,t)).then(function(){})}();return Promise.resolve(i&&i.then?i.then(o):o())}catch(e){return Promise.reject(e)}},r.GetResource=function(e){var r=this.resources[e];if(!r)throw new Error("react-admin-firebase: Can't find resource: \""+e+'"');return r},r.TryGetResourcePromise=function(e,r){try{var t=this;return v("resourceManager.TryGetResourcePromise",{relativePath:e,collectionQuery:r}),Promise.resolve(t.initPath(e)).then(function(){var r=t.resources[e];if(!r)throw new Error('react-admin-firebase: Cant find resource: "'+e+'"');return r})}catch(e){return Promise.reject(e)}},r.RefreshResource=function(e,r){try{var t,n,o=this;if(null!=(t=o.options)&&null!=(n=t.lazyLoading)&&n.enabled)throw p("resourceManager.RefreshResource",{warn:"RefreshResource is not available in lazy loading mode"}),new Error("react-admin-firebase: RefreshResource is not available in lazy loading mode");return v("resourceManager.RefreshResource",{relativePath:e,collectionQuery:r}),Promise.resolve(o.initPath(e)).then(function(){var t=o.resources[e],n=t.collection,i=o.applyQuery(n,r);return Promise.resolve(i.get()).then(function(e){t.list=e.docs.map(function(e){return o.parseFireStoreDocument(e)}),o.flogger.logDocument(e.docs.length)(),v("resourceManager.RefreshResource",{newDocs:e,resource:t,collectionPath:n.path})})})}catch(e){return Promise.reject(e)}},r.GetSingleDoc=function(e,r){try{var t=this;return Promise.resolve(t.initPath(e)).then(function(){var n=t.GetResource(e);return t.flogger.logDocument(1)(),Promise.resolve(n.collection.doc(r).get()).then(function(o){if(!o.exists)throw new Error("react-admin-firebase: No id found matching: "+r);var i=t.parseFireStoreDocument(o);return v("resourceManager.GetSingleDoc",{relativePath:e,resource:n,docId:r,docSnap:o,result:i}),i})})}catch(e){return Promise.reject(e)}},r.initPath=function(e){try{var r=R(this.options&&this.options.rootRef,e),t=!!this.resources[e];if(v("resourceManager.initPath()",{absolutePath:r,hasBeenInited:t}),t)return v("resourceManager.initPath() has been initialized already..."),Promise.resolve();var n=this.db.collection(r),o={collection:n,list:[],path:e,pathAbsolute:r};return this.resources[e]=o,v("resourceManager.initPath() setting resource...",{resource:o,allResources:this.resources,collection:n,collectionPath:n.path}),Promise.resolve()}catch(e){return Promise.reject(e)}},r.parseFireStoreDocument=function(e){if(!e)return p("parseFireStoreDocument: no doc",{doc:e}),{};var r=e.data();return a(r),o({id:e.id},r)},r.getUserIdentifier=function(){try{var e=this,r=e.options.associateUsersById;return Promise.resolve(e.getCurrentUserEmail()).then(function(t){return r?identifier:Promise.resolve(e.getCurrentUserId())})}catch(e){return Promise.reject(e)}},r.getCurrentUserEmail=function(){try{return Promise.resolve(this.fireWrapper.GetUserLogin()).then(function(e){return e?e.email:"annonymous user"})}catch(e){return Promise.reject(e)}},r.getCurrentUserId=function(){try{return Promise.resolve(this.fireWrapper.GetUserLogin()).then(function(e){return e?e.uid:"annonymous user"})}catch(e){return Promise.reject(e)}},r.applyQuery=function(e,r){var t=r?r(e):e;return v("resourceManager.applyQuery() ...",{collection:e,collectionQuery:(r||"-").toString(),collRef:t}),t},e}(),A=function(){function e(e,r,t){this.fireWrapper=e,this.options=r,this.flogger=t,this.rm=new F(this.fireWrapper,this.options,this.flogger)}var t=e.prototype;return t.db=function(){return this.fireWrapper.db()},t.checkRemoveIdField=function(e,r){this.options.dontAddIdFieldToDoc||(e.id=r)},t.parseDataAndUpload=function(e,t,n){try{var o=this;if(!n)return Promise.resolve(n);var i=e.collection.doc(t).path,a=function(e){if(!e||"object"!=typeof e)return[];var r=[];return Object.keys(e).map(function(t){!function e(r,t,n){return r?"object"!=typeof r?r:r.toDate&&"function"==typeof r.toDate?r.toDate():Array.isArray(r)?r.map(function(r,o){return e(r,t+"."+o,n)}):"object"==typeof r?r&&r.hasOwnProperty("rawFile")?(n.push({fieldDotsPath:t,fieldSlashesPath:t.split(".").join("/"),rawFile:r.rawFile}),void delete r.rawFile):(Object.keys(r).map(function(o){e(r[o],t+"."+o,n)}),r):void 0:r}(e[t],t,r)}),r}(n);return Promise.resolve(Promise.all(a.map(function(e){try{return Promise.resolve(o.uploadAndGetLink(e.rawFile,i,e.fieldSlashesPath,!!o.options.useFileNamesInStorage)).then(function(t){r.set(n,e.fieldDotsPath+".src",t)})}catch(e){return Promise.reject(e)}}))).then(function(){return n})}catch(e){return Promise.reject(e)}},t.addCreatedByFields=function(e){try{return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_at)return e.renameMetaFields.created_at;var r=e.metaFieldCasing;return r?"camel"===r?"createDate":"snake"===r?"create_date":"pascal"===r?"CreateDate":"kebab"===r?"create-date":"createdate":"createdate"}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_by)return e.renameMetaFields.created_by;var r=e.metaFieldCasing;return r?"camel"===r?"createdBy":"snake"===r?"created_by":"pascal"===r?"CreatedBy":"kebab"===r?"created-by":"createdby":"createdby"}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,this.fireWrapper,this.rm,this.options))}catch(e){return Promise.reject(e)}},t.addUpdatedByFields=function(e){try{return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_at)return e.renameMetaFields.updated_at;var r=e.metaFieldCasing;return r?"camel"===r?"lastUpdate":"snake"===r?"last_update":"pascal"===r?"LastUpdate":"kebab"===r?"last-update":"lastupdate":"lastupdate"}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_by)return e.renameMetaFields.updated_by;var r=e.metaFieldCasing;return r?"camel"===r?"updatedBy":"snake"===r?"updated_by":"pascal"===r?"UpdatedBy":"kebab"===r?"updated-by":"updatedby":"updatedby"}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,this.fireWrapper,this.rm,this.options))}catch(e){return Promise.reject(e)}},t.uploadAndGetLink=function(e,r,t,n){try{var o=n?L(r,t,e.name):L(r,t);return Promise.resolve(this.saveFile(o,e))}catch(e){return Promise.reject(e)}},t.saveFile=function(e,r){try{var t=this;v("saveFile() saving file...",{storagePath:e,rawFile:r});var n=t.fireWrapper.storage().ref(e).put(r);return Promise.resolve(function(r,o){try{var i=Promise.resolve(new Promise(function(e,r){return n.then(e).catch(r)})).then(function(r){return Promise.resolve(r.ref.getDownloadURL()).then(function(n){return v("saveFile() saved file",{storagePath:e,taskResult:r,getDownloadURL:n}),t.options.relativeFilePaths?e:n})})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(e){m("storage/unknown"===e.code?'saveFile() error saving file, No bucket found! Try clicking "Get Started" in firebase -> storage':"saveFile() error saving file",{storageError:e})}))}catch(e){return Promise.reject(e)}},e}();function S(e,r,t){if(!e.s){if(t instanceof T){if(!t.s)return void(t.o=S.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(S.bind(null,e,r),S.bind(null,e,2));e.s=r,e.v=t;const n=e.o;n&&n(e)}}const T=function(){function e(){}return e.prototype.then=function(r,t){const n=new e,o=this.s;if(o){const e=1&o?r:t;if(e){try{S(n,1,e(this.v))}catch(e){S(n,2,e)}return n}return this}return this.o=function(e){try{const o=e.v;1&e.s?S(n,1,r?r(o):o):t?S(n,1,t(o)):S(n,2,o)}catch(e){S(n,2,e)}},n},e}();function k(e){return e instanceof T&&1&e.s}var I=function(e,r,t,n){try{var i=btoa(JSON.stringify(o({},r,{resourceName:t}))),a=localStorage.getItem(i);return a?Promise.resolve(e.doc(a).get()).then(function(e){return n.logDocument(1)(),!!e.exists&&e}):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},D=function(e,r,t,n,i){void 0===i&&(i=E);try{var a=i.filters?(u=e,c=r.filter,Object.keys(c).forEach(function(e){u=u.where(e,"==",c[e])}),u):e,s=i.sort?function(e,r){if(null!=r&&"id"!==r.field){var t=r.field,n=r.order.toLocaleLowerCase();e=e.orderBy(t,n)}return e}(a,r.sort):a;return Promise.resolve(i.pagination?function(e,r,t,n,i){try{var a=r.pagination,s=a.page,u=a.perPage,c=function(){if(1!==s)return Promise.resolve(I(t,r,n,i)).then(function(a){function s(){e=e.startAfter(a).limit(u)}var c=function(){if(!a)return Promise.resolve(function(e,r,t,n,i){try{var a=function(){var e=(u-f)*c,t=1===f?r.limit(e):r.startAt(l).limit(e);return Promise.resolve(t.get()).then(function(e){var r=e.docs.length;return i.logDocument(r)(),e.docs[r-1]})},s=t.pagination,u=s.page,c=s.perPage,l=!1,f=u-1,d=o({},t,{pagination:o({},t.pagination)}),h=function(e,r,t){for(var n;;){var o=e();if(k(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=t();if(i&&i.then){if(!k(i)){n=1;break}i=i.s}}var a=new T,s=S.bind(null,a,2);return(0===n?o.then(c):1===n?i.then(u):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,s):c(o):S(a,1,i)})).then(void 0,s),a;function u(r){i=r;do{if(!(o=e())||k(o)&&!o.v)return void S(a,1,i);if(o.then)return void o.then(c).then(void 0,s);k(i=t())&&(i=i.v)}while(!i||!i.then);i.then(u).then(void 0,s)}function c(e){e?(i=t())&&i.then?i.then(u).then(void 0,s):u(i):S(a,1,i)}}(function(){return!l&&f>1},0,function(){return f--,d.pagination.page=f,console.log("getting query cursor currentPage=",f),Promise.resolve(I(e,d,n,i)).then(function(e){l=e})});return Promise.resolve(h&&h.then?h.then(a):a())}catch(e){return Promise.reject(e)}}(t,e,r,n,i)).then(function(e){a=e})}();return c&&c.then?c.then(s):s()});e=e.limit(u)}();return Promise.resolve(c&&c.then?c.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}(s,r,e,t,n):s)}catch(e){return Promise.reject(e)}var u,c},E={filters:!0,sort:!0,pagination:!0};function U(e,r){return o({},e,{filter:r?o({deleted:!1},e.filter):e.filter})}function O(e,r,t){if(!e.s){if(t instanceof C){if(!t.s)return void(t.o=O.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(O.bind(null,e,r),O.bind(null,e,2));e.s=r,e.v=t;const n=e.o;n&&n(e)}}const C=function(){function e(){}return e.prototype.then=function(r,t){const n=new e,o=this.s;if(o){const e=1&o?r:t;if(e){try{O(n,1,e(this.v))}catch(e){O(n,2,e)}return n}return this}return this.o=function(e){try{const o=e.v;1&e.s?O(n,1,r?r(o):o):t?O(n,1,t(o)):O(n,2,o)}catch(e){O(n,2,e)}},n},e}();function M(e,r,t){var n=[];for(var o in e)n.push(o);return function(e,r,t){var n,o,i=-1;return function a(s){try{for(;++i<e.length&&(!t||!t());)if((s=r(i))&&s.then){if(!((u=s)instanceof C&&1&u.s))return void s.then(a,o||(o=O.bind(null,n=new C,2)));s=s.v}n?O(n,1,s):n=s}catch(e){O(n||(n=new C),2,e)}var u}(),n}(n,function(e){return r(n[e])},t)}var W=function(){function e(e,r,t){this.options=e,this.rm=r,this.client=t}var r=e.prototype;return r.apiGetList=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var i=U(r,!!t.options.softDelete);return v("apiGetListLazy",{resourceName:e,params:i}),Promise.resolve(D(n.collection,i,e,t.client.flogger)).then(function(r){return Promise.resolve(r.get()).then(function(r){var a=r.docs.length;if(!a)return v("apiGetListLazy",{message:"There are not records for given query"}),{data:[],total:0};t.client.flogger.logDocument(a)();var u=r.docs.map(s),c=r.docs[r.docs.length-1];!function(e,r,t){var n=btoa(JSON.stringify(o({},r,{resourceName:t})));localStorage.setItem(n,e.id);var i="ra-firebase-cursor-keys_"+t,a=localStorage.getItem(i);if(a){var s=JSON.parse(a).concat(n);localStorage.setItem(i,JSON.stringify(s))}else localStorage.setItem(i,JSON.stringify([n]))}(c,function(e){return o({},e,{pagination:o({},e.pagination,{page:e.pagination.page+1})})}(i),e);var l=9e3;return Promise.resolve(t.checkIfOnLastPage(n.collection,i,e,c)).then(function(e){var r;function o(e){return r?e:(v("apiGetListLazy result",{docs:u,resource:n,collectionPath:n.collection.path}),{data:u,total:l})}if(e){var a=i.pagination;l=(a.page-1)*a.perPage+u.length,v("apiGetListLazy",{message:"It's last page of collection."})}var s=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(u.map(function(e){try{var r=M(e,function(r){return Promise.resolve(j(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(e){return v("apiGetListLazy result",{docs:e,resource:n,collectionPath:n.collection.path}),r=1,{data:e,total:l}})}();return s&&s.then?s.then(o):o(s)})})})})}catch(e){return Promise.reject(e)}},r.apiGetManyReference=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var i;v("apiGetManyReferenceLazy",{resourceName:e,resource:n,reactAdminParams:r});var a=o({},r.filter,((i={})[r.target]=r.id,i)),u=U(o({},r,{filter:a}),!!t.options.softDelete);return Promise.resolve(D(n.collection,u,e,t.client.flogger)).then(function(e){return Promise.resolve(e.get()).then(function(e){var r;function o(e){return r?e:(v("apiGetManyReferenceLazy result",{docs:i,resource:n,collectionPath:n.collection.path}),{data:i,total:i.length})}t.client.flogger.logDocument(e.docs.length)();var i=e.docs.map(s),a=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(i.map(function(e){try{var r=M(e,function(r){return Promise.resolve(j(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(e){return v("apiGetManyReferenceLazy result",{docs:e,resource:n,collectionPath:n.collection.path}),r=1,{data:e,total:i.length}})}();return a&&a.then?a.then(o):o(a)})})})}catch(e){return Promise.reject(e)}},r.checkIfOnLastPage=function(e,r,t,n){try{return Promise.resolve(D(e,r,t,this.client.flogger,{filters:!0,sort:!0})).then(function(e){if(!n)throw new Error("Page cursor was empty...");return Promise.resolve(e.startAfter(n).limit(1).get()).then(function(e){return e.empty})})}catch(e){return Promise.reject(e)}},r.clearQueryCursors=function(e){!function(e){var r="ra-firebase-cursor-keys_"+e,t=localStorage.getItem(r);t&&(JSON.parse(t).forEach(function(e){return localStorage.removeItem(e)}),localStorage.removeItem(r))}(e)},r.tryGetResource=function(e,r){try{return Promise.resolve(this.rm.TryGetResourcePromise(e,r))}catch(e){return Promise.reject(e)}},e}();function N(e,r){try{var t=e()}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}var H=function(){function e(e,r){var t=r||{};v("Auth Client: initializing...",{firebaseConfig:e,options:t});var n=new G;n.init(e,t),this.auth=n.auth(),t.persistence&&this.setPersistence(t.persistence)}var r=e.prototype;return r.setPersistence=function(e){var r;switch(e){case"local":r=n.auth.Auth.Persistence.LOCAL;break;case"none":r=n.auth.Auth.Persistence.NONE;break;case"session":default:r=n.auth.Auth.Persistence.SESSION}v("setPersistence",{persistenceInput:e,persistenceResolved:r}),this.auth.setPersistence(r).catch(function(e){return console.error(e)})},r.HandleAuthLogin=function(e){try{var r=this,t=e.username,n=e.password;return Promise.resolve(t&&n?N(function(){return Promise.resolve(r.auth.signInWithEmailAndPassword(t,n)).then(function(e){return v("HandleAuthLogin: user sucessfully logged in",{user:e}),e})},function(){throw v("HandleAuthLogin: invalid credentials",{params:e}),new Error("Login error: invalid credentials")}):r.getUserLogin())}catch(e){return Promise.reject(e)}},r.HandleAuthLogout=function(){return this.auth.signOut()},r.HandleAuthError=function(e){return v("HandleAuthLogin: invalid credentials",{errorHttp:e}),"ok"===function(e){if(e>=200&&e<300)return"ok";switch(e){case 401:case 403:return"unauthenticated";case 0:case 400:case 404:case 409:case 429:case 499:case 500:case 501:case 503:case 504:default:return"ok"}}(!!e&&e.status)?(v("API is actually authenticated"),Promise.resolve()):(p("Recieved authentication error from API"),Promise.reject())},r.HandleAuthCheck=function(){try{return Promise.resolve(this.getUserLogin())}catch(e){return Promise.reject(e)}},r.getUserLogin=function(){var e=this;return new Promise(function(r,t){if(e.auth.currentUser)return r(e.auth.currentUser);var n=e.auth.onAuthStateChanged(function(e){n(),e?r(e):t()})})},r.HandleGetPermissions=function(){try{var e=this;return Promise.resolve(N(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.claims})})},function(e){return v("HandleGetPermission: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetIdentity=function(){try{var e=this;return Promise.resolve(N(function(){return Promise.resolve(e.getUserLogin()).then(function(e){var r=e.displayName,t=e.photoURL;return{id:e.uid,fullName:""+(null!=r?r:""),avatar:""+(null!=t?t:"")}})},function(e){return v("HandleGetIdentity: no user is logged in",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTAuthTime=function(){try{var e=this;return Promise.resolve(N(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.authTime})})},function(e){return v("HandleGetJWTAuthTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTExpirationTime=function(){try{var e=this;return Promise.resolve(N(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.expirationTime})})},function(e){return v("HandleGetJWTExpirationTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTSignInProvider=function(){try{var e=this;return Promise.resolve(N(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.signInProvider})})},function(e){return v("HandleGetJWTSignInProvider: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTIssuedAtTime=function(){try{var e=this;return Promise.resolve(N(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.issuedAtTime})})},function(e){return v("HandleGetJWTIssuedAtTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTToken=function(){try{var e=this;return Promise.resolve(N(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.token})})},function(e){return v("HandleGetJWTIssuedAtTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},e}();e.FirebaseAuthProvider=function(e,r){!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider")}(e,r),h.SetEnabled(!(null==r||!r.logging));var t=new H(e,r);return{login:function(e){return t.HandleAuthLogin(e)},logout:function(){return t.HandleAuthLogout()},checkAuth:function(){return t.HandleAuthCheck()},checkError:function(e){return t.HandleAuthError(e)},getPermissions:function(){return t.HandleGetPermissions()},getIdentity:function(){return t.HandleGetIdentity()},getAuthUser:function(){return t.getUserLogin()},getJWTAuthTime:function(){return t.HandleGetJWTAuthTime()},getJWTExpirationTime:function(){return t.HandleGetJWTExpirationTime()},getJWTSignInProvider:function(){return t.HandleGetJWTSignInProvider()},getJWTClaims:function(){return t.HandleGetPermissions()},getJWTToken:function(){return t.HandleGetJWTToken()}}},e.FirebaseDataProvider=function(e,r){var t,n,a=function(e){try{var r;return Promise.resolve(function(t,n){try{var o=Promise.resolve(e()).then(function(e){return r=e})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){var t=e.toString(),n=function(e){var r=/\[code\=([\w-]*)/g.exec(e),t=Array.isArray(r)&&r[1];switch(t||m("unknown StatusCode ",{statusTxt:e}),t){case"unauthenticated":return 401;case"permission-denied":return 403;case"internal":return 0;case"invalid-argument":return 400;case"not-found":return 404;case"aborted":return 409;case"resource-exhausted":return 429;case"cancelled":return 499;case"internal":return 500;case"unimplemented":return 501;case"unavailable":return 503;case"deadline-exceeded":return 504;default:return 200}}(t),o={status:n,message:t,json:r};throw m("DataProvider:",e,{errorMsg:t,code:n,errorObj:o}),o}))}catch(e){return Promise.reject(e)}},s=r||{};!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider");r&&r.rootRef&&R(r.rootRef,"test")}(e,s);var c=function(e){return{SetEnabled:function(e){g.SetEnabled(e)},ResetCount:function(e){e&&localStorage.removeItem(y)},logDocument:function(r){if(null==e||null==(t=e.lazyLoading)||!t.enabled)return f;var t,n=function(e){void 0===e&&(e=1);var r=localStorage.getItem(y)||"",t=(parseInt(r)||0)+e;return localStorage.setItem(y,t+""),t}(r);return g.log.bind(console,"+"+r+" (session total="+n+" documents read)")}}}(s);h.SetEnabled(!(null==s||!s.logging)),c.SetEnabled(!(null==s||null==(t=s.firestoreCostsLogger)||!t.enabled)),c.ResetCount(!(null!=s&&null!=(n=s.firestoreCostsLogger)&&n.persistCount)),v("Creating FirebaseDataProvider",{firebaseConfig:e,options:s});var d=new G;d.init(e,r);var p=new A(d,s,c);return{app:d.GetApp(),getList:function(e,r){return a(function(){return function(e,r,t){try{v("GetList",{resourceName:e,params:r});var n=t.rm,o=t.fireWrapper,i=t.options;if(console.log("options?.lazyLoading",null==i?void 0:i.lazyLoading),Object.keys(null==i?void 0:i.lazyLoading).includes(e)?console.log("options?.lazyLoading[resourceName]",null==i?void 0:i.lazyLoading[e]):console.log("Object.keys(options?.lazyLoading)",Object.keys(null==i?void 0:i.lazyLoading)),Object.keys(null==i?void 0:i.lazyLoading).includes(e)&&null!=i&&i.lazyLoading[e].enabled){var a=new W(i,n,t);return Promise.resolve(a.apiGetList(e,r))}var s=r.filter||{},c=s.collectionQuery;return delete s.collectionQuery,Promise.resolve(n.TryGetResource(e,"REFRESH",c)).then(function(e){var t;function n(e){return t?e:{data:v,total:m}}var a=e.list;if(null!=r.sort){var c=r.sort;u(a,c.field,"ASC"===c.order?"asc":"desc")}var f=a;i.softDelete&&!Object.keys(s).includes("deleted")&&(f=a.filter(function(e){return!e.deleted}));var d=l(f,s),h=(r.pagination.page-1)*r.pagination.perPage,v=d.slice(h,h+r.pagination.perPage),m=d.length,p=function(){if(i.relativeFilePaths)return Promise.resolve(Promise.all(v.map(function(e){return j(o,e)}))).then(function(e){return t=1,{data:e,total:m}})}();return p&&p.then?p.then(n):n(p)})}catch(e){return Promise.reject(e)}}(e,r,p)})},getOne:function(e,r){return a(function(){return function(e,r,t){try{v("GetOne",{resourceName:e,params:r});var n=t.rm,o=t.fireWrapper;return Promise.resolve(function(i,a){try{var s=Promise.resolve(n.GetSingleDoc(e,r.id+"")).then(function(e){return t.flogger.logDocument(1)(),Promise.resolve(j(o,e)).then(function(e){return{data:e}})})}catch(e){return a()}return s&&s.then?s.then(void 0,a):s}(0,function(){throw new Error("Error getting id: "+r.id+" from collection: "+e)}))}catch(e){return Promise.reject(e)}}(e,r,p)})},getMany:function(e,r){return a(function(){return function(e,r,t){try{var n=t.options,i=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(a){v("GetMany",{resourceName:e,resource:a,params:r});var s=r.ids;return Promise.resolve(Promise.all(s.map(function(e){return a.collection.doc(e+"").get()}))).then(function(e){var r;function a(e){return r?e:{data:c}}t.flogger.logDocument(s.length)();var u=e.map(function(e){return o({},e.data(),{id:e.id})}),c=n.softDelete?u.filter(function(e){return!e.deleted}):u,l=function(){if(n.relativeFilePaths)return Promise.resolve(Promise.all(c.map(function(e){return j(i,e)}))).then(function(e){return r=1,{data:e}})}();return l&&l.then?l.then(a):a(l)})})}catch(e){return Promise.reject(e)}}(e,r,p)})},getManyReference:function(e,r){return a(function(){return function(e,r,t){try{var n=t.rm,o=t.options,i=t.fireWrapper;v("GetManyReference",{resourceName:e,params:r});var a=r.filter||{};return Promise.resolve(n.TryGetResource(e,"REFRESH",a.collectionQuery)).then(function(t){var n;function s(e){return n?e:{data:b,total:w}}delete a.collectionQuery,v("apiGetManyReference",{resourceName:e,resource:t,params:r});var c=t.list,f=r.target,d=r.id,h=c;o.softDelete&&(h=c.filter(function(e){return!e.deleted}));var m=l(h,a),p={};p[f]=d;var g=l(m,p);if(null!=r.sort){var y=r.sort;u(g,y.field,"ASC"===y.order?"asc":"desc")}var P=(r.pagination.page-1)*r.pagination.perPage,b=g.slice(P,P+r.pagination.perPage),w=g.length,R=function(){if(o.relativeFilePaths)return Promise.resolve(Promise.all(g.map(function(e){return j(i,e)}))).then(function(e){return n=1,{data:e,total:w}})}();return R&&R.then?R.then(s):s(R)})}catch(e){return Promise.reject(e)}}(e,r,p)})},update:function(e,r){return a(function(){return function(e,r,t){try{var n=t.rm;v("Update",{resourceName:e,params:r});var i=r.id+"";return delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return v("Update",{resourceName:e,resource:n,params:r}),Promise.resolve(t.parseDataAndUpload(n,i,r.data)).then(function(e){var r=o({},e);return t.checkRemoveIdField(r,i),Promise.resolve(t.addUpdatedByFields(r)).then(function(){return Promise.resolve(n.collection.doc(i).update(r)).then(function(){return{data:o({},e,{id:i})}})})})})}catch(e){return Promise.reject(e)}}(e,r,p)})},updateMany:function(e,r){return a(function(){return function(e,r,t){try{var n=t.rm;return v("UpdateMany",{resourceName:e,params:r}),delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return v("UpdateMany",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(e){try{var i=e+"";return Promise.resolve(t.parseDataAndUpload(n,i,r.data)).then(function(e){var r=o({},e);return t.checkRemoveIdField(r,i),Promise.resolve(t.addUpdatedByFields(r)).then(function(){return Promise.resolve(n.collection.doc(i).update(r)).then(function(){return o({},e,{id:i})})})})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,p)})},create:function(e,r){return a(function(){return function(e,r,t){try{var n=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(i){var a;function s(e){if(a)return e;var s=n.db().collection("collections").doc().id;return Promise.resolve(t.parseDataAndUpload(i,s,r.data)).then(function(e){var r=o({},e);return t.checkRemoveIdField(r,s),Promise.resolve(t.addCreatedByFields(r)).then(function(){return Promise.resolve(t.addUpdatedByFields(r)).then(function(){return Promise.resolve(i.collection.doc(s).set(r,{merge:!1})).then(function(){return{data:o({},e,{id:s})}})})})})}v("Create",{resourceName:e,resource:i,params:r});var u=r.data&&r.data.id;v("Create",{hasOverridenDocId:u});var c=function(){if(u){var e=r.data.id;return Promise.resolve(i.collection.doc(e).get()).then(function(n){if(n.exists)throw new Error('the id:"'+e+"\" already exists, please use a unique string if overriding the 'id' field");return Promise.resolve(t.parseDataAndUpload(i,e,r.data)).then(function(r){if(!e)throw new Error("id must be a valid string");var n=o({},r);return t.checkRemoveIdField(n,e),Promise.resolve(t.addCreatedByFields(n)).then(function(){return Promise.resolve(t.addUpdatedByFields(n)).then(function(){return v("Create",{docObj:n}),Promise.resolve(i.collection.doc(e).set(n,{merge:!1})).then(function(){return a=1,{data:o({},r,{id:e})}})})})})})}}();return c&&c.then?c.then(s):s(c)})}catch(e){return Promise.reject(e)}}(e,r,p)})},delete:function(e,r){return a(function(){return function(e,r,t){try{var n=t.rm;return t.options.softDelete?Promise.resolve(function(e,r,t){try{var n=r.id+"";return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){v("DeleteSoft",{resourceName:e,resource:o,params:r});var i={deleted:!0};return Promise.resolve(t.addUpdatedByFields(i)).then(function(){return o.collection.doc(n).update(i).catch(function(e){m("DeleteSoft error",{error:e})}),{data:r.previousData}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){function n(e){return{data:r.previousData}}v("apiDelete",{resourceName:e,resource:t,params:r});var o=function(e,n){try{var o=Promise.resolve(t.collection.doc(r.id+"").delete()).then(function(){})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw new Error(e)});return o&&o.then?o.then(n):n()})}catch(e){return Promise.reject(e)}}(e,r,p)})},deleteMany:function(e,r){return a(function(){return function(e,r,t){try{var n=t.rm,o=t.fireWrapper;return t.options.softDelete?Promise.resolve(function(e,r,t){try{return Promise.resolve(t.rm.TryGetResource(e)).then(function(n){return v("DeleteManySoft",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(e){try{var r=e+"",o={deleted:!0};return Promise.resolve(t.addUpdatedByFields(o)).then(function(){return n.collection.doc(r).update(o).catch(function(e){m("apiSoftDeleteMany error",{error:e})}),r})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){function n(e){return{data:s}}v("DeleteMany",{resourceName:e,resource:t,params:r});for(var a,s=[],u=o.db().batch(),c=function(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return i(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,void 0):void 0}}(e))){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}(r.ids);!(a=c()).done;){var l=a.value,f=t.collection.doc(l+"");u.delete(f),s.push(l)}var d=function(e,r){try{var t=Promise.resolve(u.commit()).then(function(){})}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}(0,function(e){throw new Error(e)});return d&&d.then?d.then(n):n()})}catch(e){return Promise.reject(e)}}(e,r,p)})}}}});
//# sourceMappingURL=index.umd.js.map
