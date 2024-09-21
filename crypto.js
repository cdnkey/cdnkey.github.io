/** * Minified by jsDelivr using UglifyJS v3.4.3. * Original file: /npm/cryptojs@2.5.3/lib/Crypto.js * * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files */ "undefined"!=typeof Crypto&&Crypto.util||function(){var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof window?exports.Crypto={}:window.Crypto={},r=t.util={rotl:function(t,n){return t<<n|t>>>32-n},rotr:function(t,n){return t<<32-n|t>>>n},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var n=0;n<t.length;n++)t[n]=r.endian(t[n]);return t},randomBytes:function(t){for(var n=[];0<t;t--)n.push(Math.floor(256*Math.random()));return n},bytesToWords:function(t){for(var n=[],r=0,o=0;r<t.length;r++,o+=8)n[o>>>5]|=(255&t[r])<<24-o%32;return n},wordsToBytes:function(t){for(var n=[],r=0;r<32*t.length;r+=8)n.push(t[r>>>5]>>>24-r%32&255);return n},bytesToHex:function(t){for(var n=[],r=0;r<t.length;r++)n.push((t[r]>>>4).toString(16)),n.push((15&t[r]).toString(16));return n.join("")},hexToBytes:function(t){for(var n=[],r=0;r<t.length;r+=2)n.push(parseInt(t.substr(r,2),16));return n},bytesToBase64:function(t){if("function"==typeof btoa)return btoa(i.bytesToString(t));for(var n=[],r=0;r<t.length;r+=3)for(var o=t[r]<<16|t[r+1]<<8|t[r+2],e=0;e<4;e++)8*r+6*e<=8*t.length?n.push(u.charAt(o>>>6*(3-e)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){if("function"==typeof atob)return i.stringToBytes(atob(t));t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,o=0;r<t.length;o=++r%4)0!=o&&n.push((u.indexOf(t.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|u.indexOf(t.charAt(r))>>>6-2*o);return n}},n=t.charenc={},i=(n.UTF8={stringToBytes:function(t){return i.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(i.bytesToString(t)))}},n.Binary={stringToBytes:function(t){for(var n=[],r=0;r<t.length;r++)n.push(255&t.charCodeAt(r));return n},bytesToString:function(t){for(var n=[],r=0;r<t.length;r++)n.push(String.fromCharCode(t[r]));return n.join("")}})}(); //# sourceMappingURL=/sm/045ff3f3a0a6084311e78ef09ce3402d2965eca44249b94c1c7f536523dbbc7f.map
