/*!
 * lunr.tokenizer
 * Copyright (C) @YEAR Oliver Nightingale
 */
lunr.tokenizer=function(r,n){if(null==r||r==undefined)return[];if(Array.isArray(r))return r.map(function(r){return new lunr.Token(lunr.utils.asString(r).toLowerCase(),lunr.utils.clone(n))});for(var e=r.toString().toLowerCase(),t=e.length,i=[],u=0,o=0;u<=t;u++){var l=u-o;if(e.charAt(u).match(lunr.tokenizer.separator)||u==t){if(l>0){var a=lunr.utils.clone(n)||{};a.position=[o,l],a.index=i.length,i.push(new lunr.Token(e.slice(o,u),a))}o=u+1}}return i},lunr.tokenizer.separator=/[\s\-]+/;