/*!
 * lunr.utils
 * Copyright (C) @YEAR Oliver Nightingale
 */
lunr.utils={},lunr.utils.warn=function(n){return function(e){n.console&&console.warn&&console.warn(e)}}(this),lunr.utils.asString=function(n){return null==n?"":n.toString()},lunr.utils.clone=function(n){if(null===n||n===undefined)return n;for(var e=Object.create(null),r=Object.keys(n),t=0;t<r.length;t++){var o=r[t],l=n[o];if(Array.isArray(l))e[o]=l.slice();else{if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l)throw new TypeError("clone is not deep and does not support nested objects");e[o]=l}}return e};