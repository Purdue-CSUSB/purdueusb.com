/*!
 * lunr.trimmer
 * Copyright (C) @YEAR Oliver Nightingale
 */
lunr.trimmer=function(r){return r.update(function(r){return r.replace(/^\W+/,"").replace(/\W+$/,"")})},lunr.Pipeline.registerFunction(lunr.trimmer,"trimmer");