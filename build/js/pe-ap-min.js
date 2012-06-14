/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * www.tbs.gc.ca/ws-nw/wet-boew/terms / www.sct.gc.ca/ws-nw/wet-boew/conditions
 */
(function(c){var a,b;a=(typeof window.pe!=="undefined"&&window.pe!==null)?window.pe:{fn:{}};b={language:(c("html").attr("lang")?(c("html").attr("lang").indexOf("fr")===0?"fra":"eng"):c("meta[name='dc.language'], meta[name='dcterms.language']").attr("content")),touchscreen:"ontouchstart" in document.documentElement,theme:"",suffix:c('body script[src*="/pe-ap-min.js"]').length>0?"-min":"",header:c("#wb-head"),menubar:c(".wet-boew-menubar"),secnav:c("#wb-sec"),footer:c("#wb-foot"),html5:(function(){var d=false,e=/\s+(X?HTML)\s+([\d\.]+)\s*([^\/]+)*\//gi;if(typeof document.namespaces!=="undefined"){d=(document.all[0].nodeType===8)?e.test(document.all[0].nodeValue):false}else{d=(document.doctype!==null)?e.test(document.doctype.publicId):false}return(d)?false:true}()),ie:c.browser.msie?c.browser.version:0,_init:function(){var e,d;if(wet_boew_theme!==null){wet_boew_theme.init()}c("html").removeClass("no-js").addClass(a.theme+((a.touchscreen)?" touchscreen":""));if(a.mobilecheck()){a.mobile=true;c("body > div").attr("data-role","page")}c.when.apply(c,c.map(c("*[data-ajax-replace], *[data-ajax-append]"),function(h){d=c(h);var g=false,f;if(d.attr("data-ajax-replace")!==undefined){g=true;f=d.attr("data-ajax-replace")}else{if(d.attr("data-ajax-append")!==undefined){f=d.attr("data-ajax-append")}}return c.get(f,function(i){if(g){d.empty()}d.append(c(i))},"html")})).always(function(){c(document).bind("languageloaded",function(){if(a.mobile===true){if(wet_boew_theme!==null){wet_boew_theme.mobileview()}c(document).on("mobileinit",function(){c.mobile.ajaxEnabled=false;c.mobile.pushStateEnabled=false});c(document).on("pageinit",function(){})}a.dance()});a.add.language(a.language)});a.polyfills()},depends:{_ind:[],is:function(d){return -1!==c.inArray(d,a.depends._ind)},put:function(d){a.depends._ind[a.depends._ind.length]=d},on:(function(){c(document).on("wet-boew-dependency-loaded",function(){var e,f;for(e=0,f=a.depends.on.length;e<f;e+=1){a.depends.on[e](e)}});return[]}())},mobile:false,mobilecheck:function(){return(window.innerWidth<768&&!(a.ie>0&&a.ie<9))},pagecontainer:function(){return c("#wb-body-sec-sup,#wb-body-sec,#wb-body").add("body").eq(0)},parameter:function(d,e){return(a.html5)?e.data(d):e.attr("class").replace("/.*"+d+"-([a-z0-9_]+).*/i","$1")},resize:function(d){ResizeEvents.initialise();ResizeEvents.eventElement.bind("x-text-resize x-zoom-resize x-window-resize",function(){d()});return},url:function(e){var d;d=document.createElement("a");d.href=e;return{source:d.href,protocol:d.protocol.replace(":",""),host:d.hostname,port:d.port==="0"?"80":d.port,query:d.search,params:(function(){var i,h,j,g,k,f;h={};g=d.search.replace(/^\?/,"").split("&");for(k=0,f=g.length;k<f;k+=1){i=g[k];if(i){j=i.split("=");h[j[0]]=j[1]}}return h}()),file:d.pathname.match(/\/([^\/?#]+)$/i)?d.pathname.match(/\/([^\/?#]+)$/i)[1]:"",hash:d.hash.replace("#",""),path:d.pathname.replace(/^([^\/])/,"/$1"),relative:d.href.match(/tps?:\/\/[^\/]+(.+)/)?d.href.match(/tps?:\/\/[^\/]+(.+)/)[1]:"",segments:d.pathname.replace(/^\//,"").split("/"),removehash:function(){return this.source.replace(/#([A-Za-z0-9-_=&]+)/,"")}}},_execute:function(e,f){var d=(typeof e._exec!=="undefined")?e._exec:e.exec;if(typeof e.depends!=="undefined"){a.add.js(e.depends,function(){d(f)})}else{d(f)}return},cssenabled:function(){return c("link").get(0).disabled},limit:function(e){var d;d=c(e).attr("class").match(/\blimit-\d+/);if(!d){return 0}return Number(d[0].replace(/limit-/i,""))},focus:function(d){setTimeout(function(){return(typeof d.jquery!=="undefined"?d.focus():c(d).focus())},0);return d},string:{ify:(function(){return{link:function(d){return d.replace(/[a-z]+:\/\/[a-z0-9-_]+\.[a-z0-9-_@:~%&\?\+#\/.=]+[^:\.,\)\s*$]/ig,function(e){return'<a href="'+e+'">'+((e.length>25)?e.substr(0,24)+"...":e)+"</a>"})},at:function(d){return d.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15}(\/[a-zA-Z0-9-_]+)*)/g,function(e,g,f){return g+'@<a href="http://twitter.com/'+f+'">'+f+"</a>"})},hash:function(d){return d.replace(/(^|[^&\w'"]+)\#([a-zA-Z0-9_]+)/g,function(e,g,f){return g+'#<a href="http://search.twitter.com/search?q=%23'+f+'">'+f+"</a>"})},clean:function(d){return this.hash(this.at(this.link(d)))}}}()),pad:function(e,d){var f;f=String(e);while(f.length<d){f="0"+f}return f}},date:{convert:function(e){if(e.constructor===Date){return e}if(e.constructor===Array){return new Date(e[0],e[1],e[2])}if(e.constructor===Number){return new Date(e)}if(e.constructor===String){return new Date(e)}if(typeof e==="object"){return new Date(e.year,e.month,e.date)}return NaN},compare:function(e,d){if(isFinite(e=this.convert(e).valueOf())&&isFinite(d=this.convert(d).valueOf())){return(e>d)-(e<d)}return NaN},in_range:function(f,g,e){if(isFinite(f=this.convert(f).valueOf())&&isFinite(g=this.convert(g).valueOf())&&isFinite(e=this.convert(e).valueOf())){return g<=f&&f<=e}return NaN},to_iso_format:function(g,f){var e;e=this.convert(g);if(f){return e.getFullYear()+"-"+a.string.pad(e.getMonth()+1,2,"0")+"-"+a.string.pad(e.getDate(),2,"0")+" "+a.string.pad(e.getHours(),2,"0")+":"+a.string.pad(e.getMinutes(),2,"0")}return e.getFullYear()+"-"+a.string.pad(e.getMonth()+1,2,"0")+"-"+a.string.pad(e.getDate(),2,"0")}},polyfills:function(){var e=a.add.liblocation,d=(function(j){var h=j.createElement("details"),g,f,i;if(typeof h.open==="undefined"){return false}f=j.body||(function(){var k=j.documentElement;g=true;return k.insertBefore(j.createElement("body"),k.firstElementChild||k.firstChild)}());h.innerHTML="<summary>a</summary>b";h.style.display="block";f.appendChild(h);i=h.offsetHeight;h.open=true;i=i!==h.offsetHeight;f.removeChild(h);if(g){f.parentNode.removeChild(f)}return i}(document));if(!window.localStorage){a.add._load(e+"polyfills/localstorage"+a.suffix+".js")}if(typeof document.createElement("progress").position==="undefined"){a.add._load(e+"polyfills/progress"+a.suffix+".js")}if(!d){a.add._load(e+"polyfills/detailsummary"+a.suffix+".js")}},add:(function(){return{head:document.head||document.getElementsByTagName("head"),liblocation:(function(){var d=c('body script[src*="/pe-ap"]').attr("src");return d.substr(0,d.lastIndexOf("/")+1)}()),themecsslocation:(function(){var d=c('head link[rel="stylesheet"][href*="'+wet_boew_theme.themename()+'"]');return d.length>0?d.attr("href").substr(0,d.attr("href").lastIndexOf("/")+1):"theme-not-found/"}()),staged:[],_load:function(e){var d=a.add.head;if(c.inArray(e,this.staged)>-1){return this}setTimeout(function(){if(typeof d.item!=="undefined"){if(!d[0]){setTimeout(arguments.callee,25);return}d=d[0]}var f=document.createElement("script"),g=false;a.add.set(f,"async","async");f.onload=f.onreadystatechange=function(){if((f.readyState&&f.readyState!=="complete"&&f.readyState!=="loaded")||g){return false}f.onload=f.onreadystatechange=null;g=true;a.depends.put(e);c(document).trigger({type:"wet-boew-dependency-loaded",js:e})};f.src=e;if((a.ie>0&&a.ie<9)||!d.insertBefore){c(f).appendTo(c(d))}else{d.insertBefore(f,d.firstChild)}},0);this.staged[this.staged.length]=e;return this},set:function(f,d,e){f.setAttribute(d,e);return this},css:function(f){var e=a.add.head,d=document.createElement("link");a.add.set(d,"rel","stylesheet").set(d,"href",f);if((a.ie>0&&a.ie<10)||!e.insertBefore){c(d).appendTo(c(e)).attr("href",f)}else{e.insertBefore(d,e.firstChild)}return this},depends:function(g){var f=a.add.liblocation,e=c.map(g,function(d){return(/^http(s)?/i.test(d))?d:f+"dependencies/"+d+a.suffix+".js"});return e},language:function(e){var d=a.add.liblocation+"i18n/"+e.substring(0,2)+a.suffix+".js";a.add._load(d)},js:function(f,e){var d;f=a.add.depends(f);for(d=0;d<f.length;d+=1){if(!a.depends.is(f[d])){a.add._load(f[d])}}a.depends.on[a.depends.on.length]=function(g){var h=true;for(d=0;d<f.length;d+=1){if(!a.depends.is(f[d])){h=false}}if(h){a.depends.on[g]=function(){};e()}};c(document).trigger("wet-boew-dependency-loaded");return this},meta:function(e,f){var d;d=document.createElement("meta");a.add.set(d,"name",e).set(d,"content",f);a.add.head.appendChild(d);return this}}}()),dance:function(){var e,d=":not(a[href], input, button, textarea)",f=(typeof wet_boew_properties!=="undefined"&&wet_boew_properties!==null)?wet_boew_properties:false;c('[class^="wet-boew-"]').each(function(){var h,g;g=c(this);h=g.attr("class").replace(/^wet-boew-(\S*).*/i,"$1".toLowerCase());if(typeof a.fn[h]!=="undefined"){a._execute(a.fn[h],g)}});if(f){for(e=0;e<f.globals.length;e+=1){a._execute(a.fn[f.globals[e]],document)}}if(a.mobile){c("#wb-main a[href^='#']").click(function(){c("#"+c(this).attr("href").slice(1)+d).attr("tabindex","-1").focus()});a.add.css([a.add.themecsslocation+"jquery.mobile"+a.suffix+".css"]);a.add._load([a.add.liblocation+"jquery.mobile/jquery.mobile.min.js"])}else{c("#wb-skip a").click(function(){c("#"+c(this).attr("href").slice(1)+d).attr("tabindex","-1").focus()})}window.onresize=function(){if(a.mobile!==a.mobilecheck()){window.location.href=a.url(window.location.href).removehash()}}}};window.pe=c.extend(true,a,b);return window.pe}(jQuery))._init();(function(b){var a=window.pe||{fn:{}};a.fn.archived={type:"plugin",_exec:function(d){if(pe.mobile){return}var c=b('<div class="archived" role="toolbar"><a class="archived-top-page" href="#archived" role="link">'+pe.dic.get("%archived-page")+"</a></div>");b(window).on("scroll",function(){if(b(this).scrollTop()>10){c.fadeIn("normal").attr("aria-hidden","false")}else{c.fadeOut("normal").attr("aria-hidden","true")}});if(b(window).scrollTop()<10||b(window).scrollTop()==="undefined"){c.fadeOut("normal").attr("aria-hidden","true")}else{c.fadeIn("normal").attr("aria-hidden","false")}pe.pagecontainer().append(c)}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.charts={type:"plugin",depends:["excanvas","flot"],_exec:function(i){var d,h,g,f,e,c;d=b(i);e=d.find(".chart-canvas");if(!e.hasClass("fixed-size")){e.height(Math.round(e.width()/1.61663))}c=b(i).find("table").eq(0);g=[];h=f=[];c.find("thead td, thead th").each(function(){return h.push(b(this).text())});c.find("tbody tr").each(function(){var j;j={label:"",data:[]};j.label=b(this).find("th").eq(0).text();b(this).find("td").each(function(k){return j.data.push([h[k+1],b(this).text()])});return g.push(j)});b.plot(e,g,{xaxis:{tickDecimals:0}})}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.mathlib={type:"plugin",support:(function(){var c=false,d,f,e;if(document.createElementNS){d="http://www.w3.org/1998/Math/MathML";f=document.createElement("div");f.style.position="absolute";f.style.color="#fff";e=f.appendChild(document.createElementNS(d,"math")).appendChild(document.createElementNS(d,"mfrac"));e.appendChild(document.createElementNS(d,"mi")).appendChild(document.createTextNode("xx"));e.appendChild(document.createElementNS(d,"mi")).appendChild(document.createTextNode("yy"));document.body.appendChild(f);c=f.offsetHeight>f.offsetWidth;f.style.display="none"}return c}()),_exec:function(c){if(pe.fn.mathlib.support){return}pe.add._load("http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML")}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.menubar={type:"plugin",depends:["resize","equalheights","hoverintent","outside"],_exec:function(k){var m,d,j,p,o,l,q,n,g,c,f,h,e;o=b(k);e=function(s){var r,i;r=b(s).closest("li");g();i=r.find(".mb-sm");i.attr("aria-expanded","true").attr("aria-hidden","false").toggleClass("mb-sm mb-sm-open");if((Math.floor(i.offset().left+i.width())-Math.floor(j.offset().left+j.width()))>=-1){i.css("right","0px")}r.addClass("mb-active");return};n=function(s){var r,i;e(s);r=b(s);i=r.closest("li").find(".mb-sm-open");pe.focus(i.find("a[href]:first"));return};c=function(s){var r,i;r=b(s).closest("li");i=r.find(".mb-sm-open");i.attr("aria-expanded","false").attr("aria-hidden","true").toggleClass("mb-sm mb-sm-open").css("right","auto");r.removeClass("mb-active");return};g=function(){d.find(".mb-sm-open").each(function(){var i;i=b(this).closest("li");return c(i)});return};q=function(){var r,i;i=d.children("li:last");r=(i.offset().top+i.outerHeight())-o.offset().top;return o.css("min-height",r)};j=o.children("div");d=j.children("ul");o.attr("role","application");d.attr("role","menubar");pe.resize(q);o.find(".mb-sm").parent().find("> :header a").on("click",function(i){if(b(this).closest("li").hasClass("mb-active")){c(this)}else{e(this)}return false});o.on("keydown focus section-next section-previous item-next item-previous close","li",function(w){var u,z,y,v,x,r,t,s,i;z=b(w.target);y=b.map(/\bknav-(\d+)-(\d+)-(\d+)/.exec(z.attr("class")),function(A){return parseInt(A,10)});if(w.type==="keydown"){if(!(w.ctrlKey||w.altKey||w.metaKey)){switch(w.keyCode){case 13:if(y[2]===0&&y[3]===0){z.trigger("item-next");return false}break;case 27:z.trigger("close");return false;case 32:if(y[2]===0&&y[3]===0){z.trigger("item-next")}else{window.location=z.attr("href")}return false;case 37:z.trigger("section-previous");return false;case 38:z.trigger("item-previous");return false;case 39:z.trigger("section-next");return false;case 40:z.trigger("item-next");return false;default:if((w.keyCode>47&&w.keyCode<58)||(w.keyCode>64&&w.keyCode<91)){v=String.fromCharCode(w.keyCode).toLowerCase();x=(y[2]!==0||y[3]!==0);r=z.text();t=d.find(".mb-sm-open a").filter(function(A){return(b(this).text().substring(0,1).toLowerCase()===v||(x&&b(this).text()===r))});if(t.length>0){if(x){t.each(function(A){if(b(this).text()===r){s=A;return false}});if(s<(t.length-1)){pe.focus(t.eq(s+1));return false}}pe.focus(t.eq(0))}return false}}}}else{if(w.type==="close"){pe.focus(o.find(".knav-"+y[1]+"-0-0"));setTimeout(function(){return g()},5)}else{if(w.type==="section-previous"){i=!!y[2]<<1|!!y[3];switch(i){case 0:case 1:u=o.find(".knav-"+(y[1]-1)+"-0-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find("ul.mb-menu > li:last").find("a:eq(0)"))}break;case 2:case 3:u=o.find(".knav-"+(y[1])+"-"+(y[2]-1)+"-0");if(u.length>0&&y[2]>1){pe.focus(u)}else{u=o.find(".knav-"+(y[1]-1)+"-0-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find("ul.mb-menu > li:last").find("a:eq(0)"))}}break}}else{if(w.type==="section-next"){i=!!y[2]<<1|!!y[3];switch(i){case 0:case 1:u=o.find(".knav-"+(y[1]+1)+"-0-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find(".knav-0-0-0"))}break;case 2:case 3:u=o.find(".knav-"+(y[1])+"-"+(y[2]+1)+"-0");if(u.length>0){pe.focus(u)}else{u=o.find(".knav-"+(y[1]+1)+"-0-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find(".knav-0-0-0"))}}break}}else{if(w.type==="item-next"){u=o.find(".knav-"+y[1]+"-"+(y[2])+"-"+(y[3]+1));if(u.length>0){pe.focus(u)}else{u=o.find(".knav-"+y[1]+"-"+(y[2]+1)+"-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find(".knav-"+y[1]+"-0-0"))}}}else{if(w.type==="item-previous"){u=o.find(".knav-"+y[1]+"-"+(y[2])+"-"+(y[3]-1));if(u.length>0){pe.focus(u)}else{u=o.find(".knav-"+y[1]+"-"+(y[2]-1)+"-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find(".knav-"+y[1]+"-0-0"))}}}else{if(w.type==="focusin"&&y[2]===0&&y[3]===0){g();if(z.find(".expandicon").length>0){e(w.target)}return}}}}}}}});b(document).on("click",function(){o.trigger("focusoutside")});o.on("focusoutside",function(){return g()});o.find("ul.mb-menu > li").find("a:eq(0)").each(function(r,t){var s,i;i=b(t);i.addClass("knav-"+r+"-0-0");s=i.closest("li").find(".mb-sm");if(s.size()>0){i.attr("aria-haspopup","true").addClass("mb-has-sm").wrapInner('<span class="expandicon"><span class="sublink"></span></span>');s.attr("role","menu").attr("aria-expanded","false").attr("aria-hidden","true").find(":has(:header) ul").attr("role","menu");i.append('<span class="wb-invisible">'+(pe.dic.get("%sub-menu-help"))+"</span>");i.closest("li").hoverIntent(function(){return e(this)},function(){return c(this)});s.find("h4 a").each(function(u){b(this).addClass("knav-"+r+"-"+(u+1)+"-0");b(this).parent().next("ul").find("a").each(function(v){b(this).addClass("knav-"+r+"-"+(u+1)+"-"+(v+1));return});return});s.find("ul").not(function(){return(b(this).prev("h4").length?true:false)}).find("a").each(function(u){b(this).addClass("knav-"+r+"-0-"+(u+1))})}});if(pe.cssenabled){d.find("a").attr("role","menuitem").attr("tabindex","-1").filter(".knav-0-0-0").attr("tabindex","0")}l=b("#gcwu-bc, #cn-bcrumb");if(l.size()>0&&!o.hasClass("page-match-off")){p=d.children("li").find('a[href="'+window.location.pathname+'"]');if(p.size()>0){p.eq(0).addClass("nav-current")}else{h=false;m=l.find('li a:not([href^="#"])');if(m.size()>0){f=0;while(f<=m.size()){p=d.children("li").find('a[href="'+m.eq(f).attr("href")+'"]');if(p.size()>0){p.eq(0).addClass("nav-current");h=true;break}f+=1}}if(!h){p=d.children("li").find('a:contains("'+l.find("li:last-child").text()+'")');if(p.size()>0){p.eq(0).addClass("nav-current")}}}}q();return o}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.share={type:"plugin",depends:["metadata","bookmark"],_exec:function(l){var d,m,c,i,n,k,e,j,f,h,g;d={url:"",sourceTag:"",title:"",description:"",sites:[],compact:false,hint:pe.dic.get("%share-text")+pe.dic.get("%share-hint"),popup:true,popupText:pe.dic.get("%share-text"),hideText:(pe.dic.get("%hide")+" - "),addFavorite:false,favoriteText:pe.dic.get("%favourite"),addEmail:false,emailText:pe.dic.get("%email"),emailSubject:pe.dic.get("%share-email-subject"),emailBody:pe.dic.get("%share-email-body"),manualBookmark:pe.dic.get("%share-manual"),addShowAll:false,showAllText:pe.dic.get("%share-showall"),showAllTitle:pe.dic.get("%share-showall-title"),addAnalytics:false,analyticsName:"/share/{r}/{s}"};m={compact:l.hasClass("compact")?true:undefined,popup:l.hasClass("popup-none")?false:undefined,addFavorite:l.hasClass("favourite")?true:undefined,addEmail:l.hasClass("email")?true:undefined,addShowAll:l.hasClass("showall")?true:undefined,addAnalytics:l.hasClass("analytics")?true:undefined};b.metadata.setType("attr","data-wet-boew");if(typeof wet_boew_share!=="undefined"&&wet_boew_share!==null){b.extend(d,wet_boew_share,m,l.metadata())}else{b.extend(d,m,l.metadata())}l.bookmark(d);if(d.popup&&pe.cssenabled){l.attr("role","application");c=l.find(".bookmark_popup").attr("id","bookmark_popup").attr("aria-hidden","true").attr("role","menu").prepend('<p class="popup_title">'+d.popupText+"</p>");n=c.find("li").attr("role","presentation").find("a").attr("role","menuitem").attr("tabindex","-1");i=l.find(".bookmark_popup_text").off("click");i.attr("role","button").attr("aria-controls","bookmark_popup").attr("aria-pressed","false").on("click keydown",function(o){if(o.type==="keydown"&&(!(o.ctrlKey||o.altKey||o.metaKey))){switch(o.keyCode){case 13:c.trigger("open");return false;case 32:c.trigger("open");return false;case 38:c.trigger("open");return false;case 40:c.trigger("open");return false}}else{if(o.type==="click"){if(b(o.target).attr("aria-pressed")==="false"){c.trigger("open")}else{c.trigger("close")}return false}}});c.on("keydown open close",function(o){if(o.type==="keydown"){if(!(o.ctrlKey||o.altKey||o.metaKey)){switch(o.keyCode){case 9:c.trigger("close");return false;case 27:c.trigger("close");return false;case 37:k=b(o.target).closest("li").prev().find("a");if(k.length===0){k=n}pe.focus(k.last());return false;case 38:e=b(o.target).offset().left;k=b(o.target).closest("li").prevAll().find("a").filter(function(p){return(b(this).offset().left===e)});if(k.length>0){pe.focus(k.first())}else{k=n.filter(function(p){return(b(this).offset().left<e)});if(k.length>0){pe.focus(k.last())}else{e=n.last().offset().left;k=n.filter(function(p){return(b(this).offset().left>e)});if(k.length>0){pe.focus(k.last())}else{pe.focus(n.last())}}}return false;case 39:k=b(o.target).closest("li").next().find("a");if(k.length===0){k=n}pe.focus(k.first());return false;case 40:e=b(o.target).offset().left;k=b(o.target).closest("li").nextAll().find("a").filter(function(p){return(b(this).offset().left===e)});if(k.length>0){pe.focus(k.first())}else{k=n.filter(function(p){return(b(this).offset().left>e)});if(k.length>0){pe.focus(k.first())}else{pe.focus(n.first())}}return false;default:if((o.keyCode>47&&o.keyCode<58)||(o.keyCode>64&&o.keyCode<91)){j=String.fromCharCode(o.keyCode).toLowerCase();f=b(o.target).text();h=n.filter(function(p){return(b(this).text().substring(1,2).toLowerCase()===j||b(this).text()===f)});if(h.length>0){if(b(o.target).hasClass("bookmark_popup_text")){pe.focus(h.eq(0))}else{h.each(function(p){if(b(this).text()===f){g=p;return false}});if(g<(h.length-1)){pe.focus(h.eq(g+1));return false}pe.focus(h.eq(0))}}return false}}}}else{if(o.type==="open"){i.text(d.hideText+d.popupText).attr("aria-pressed","true");pe.focus(c.show().attr("aria-hidden","false").find("li a").first())}else{if(o.type==="close"){pe.focus(i.text(d.popupText).attr("aria-pressed","false").first());c.hide().attr("aria-hidden","true")}}}});b(document).on("click",function(o){if(c.attr("aria-hidden")==="false"){c.trigger("close")}})}else{l.addClass("popup-none")}return l}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.tabbedinterface={type:"plugin",depends:["metadata","easytabs","equalheights"],mobile:function(h){var d,g,f,e,c;d=h.find(".tabs li > a");g=h.find(".tabs-panel").children();f=b('<div data-role="collapsible-set" data-content-theme="b" data-theme="b"/>');for(e=0;e<d.length;e+=1){c=b('<div data-role="collapsible"/>');c.append("<h2>"+d.eq(e).text()+"</h2>");c.append(g.eq(e).html());if(d.eq(e).parent().hasClass("default")){c.attr("data-collapsed","false")}f.append(c)}h.replaceWith(f);return h},_exec:function(m){if(pe.mobile){return a.fn.tabbedinterface.mobile(m)}var k,x,n,d,h,u,o,q,p,e,c,l,v,r,w,i,j,f,g,s,t;q={panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",autoHeight:true,cycle:false,carousel:false,autoPlay:false,animate:false,animationSpeed:"normal",updateHash:false};p={defaultTab:((m.find(".default").length)?".default":undefined),autoHeight:m.hasClass("auto-height-none")?false:undefined,cycle:(m.hasClass("cycle-slow")?8000:(m.hasClass("cycle-fast")?2000:(m.hasClass("cycle")?6000:undefined))),carousel:m.hasClass("style-carousel")?true:undefined,autoPlay:m.hasClass("auto-play")?true:undefined,animate:(m.hasClass("animate")||m.hasClass("animate-slow")||m.hasClass("animate-fast"))?true:undefined,animationSpeed:(m.hasClass("animate-slow")?"slow":(m.hasClass("animate-fast")?"fast":undefined))};b.metadata.setType("attr","data-wet-boew");if(typeof wet_boew_tabbedinterface!=="undefined"&&wet_boew_tabbedinterface!==null){b.extend(q,wet_boew_tabbedinterface,p,m.metadata())}else{b.extend(q,p,m.metadata())}x=m.find(".tabs");d=x.find("li > a");n=m.find(".tabs-panel").children();k=(x.find(".default").length>0?x.find(".default"):x.find("li:first-child"));x.attr("role","tablist");x.find("li").each(function(){b(this).attr("role","presentation");return b(this).children("a").each(function(){return b(this).attr("role","tab").attr("aria-selected","false").attr("id",b(this).attr("href").substring(1)+"-link").bind("click",function(){b(this).parent().parent().children("."+q.tabActiveClass).children("a").each(function(){b(this).attr("aria-selected","false");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","true")});b(this).attr("aria-selected","true");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","false")})})});n.each(function(){return b(this).attr("role","tabpanel").attr("aria-hidden","true").attr("aria-labelledby",b('a[href*="#'+b(this).attr("id")+'"]').attr("id"))});k.children("a").each(function(){b(this).attr("aria-selected","true");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","false")});x.find("li a").bind("focus",function(){n.stop(true,true);b(this).click()});x.find("li a").keydown(function(z){if(z.keyCode===13||z.keyCode===32){var y=n.filter(function(){return b(this).is("."+q.tabActiveClass)});y.attr("tabindex","0");if(z.stopPropagation){z.stopImmediatePropagation()}else{z.cancelBubble=true}return setTimeout(function(){return y.focus()},0)}});m.keydown(function(y){if(y.which===37||y.which===38){c(d,n,q,false);y.preventDefault()}else{if(y.which===39||y.which===40){e(d,n,q,false);y.preventDefault()}}});c=function(y,E,D,C){var B,z,A;E.stop(true,true);B=y.filter(function(){return b(this).is("."+D.tabActiveClass)});z=y.eq((y.index(B)-1)+y.size()%y.size());if(D.animate){E.filter("."+D.panelActiveClass).removeClass(D.panelActiveClass).attr("aria-hidden","true").fadeOut(D.animationSpeed,function(){return E.filter("#"+z.attr("href").substr(1)).fadeIn(D.animationSpeed,function(){return b(this).addClass(D.panelActiveClass).attr("aria-hidden","false")})})}else{E.removeClass(D.panelActiveClass).attr("aria-hidden","true").hide();E.filter("#"+z.attr("href").substr(1)).show().addClass(D.panelActiveClass).attr("aria-hidden","false")}y.parent().removeClass(D.tabActiveClass).children().removeClass(D.tabActiveClass).filter("a").attr("aria-selected","false");z.parent().addClass(D.tabActiveClass).children().addClass(D.tabActiveClass).filter("a").attr("aria-selected","true");A=B.parent().siblings(".tabs-toggle");if(!C&&(A.length===0||A.data("state")==="stopped")){return z.focus()}};e=function(y,E,D,C){var B,z,A;E.stop(true,true);B=y.filter(function(){return b(this).is("."+D.tabActiveClass)});z=y.eq((y.index(B)+1)%y.size());if(D.animate){E.filter("."+D.panelActiveClass).removeClass(D.panelActiveClass).attr("aria-hidden","true").fadeOut(D.animationSpeed,function(){return E.filter("#"+z.attr("href").substr(1)).fadeIn(D.animationSpeed,function(){return b(this).addClass(D.panelActiveClass).attr("aria-hidden","false")})})}else{E.removeClass(D.panelActiveClass).attr("aria-hidden","true").hide();E.filter("#"+z.attr("href").substr(1)).show().addClass(D.panelActiveClass).attr("aria-hidden","false")}y.parent().removeClass(D.tabActiveClass).children().removeClass(D.tabActiveClass).filter("a").attr("aria-selected","false");z.parent().addClass(D.tabActiveClass).children().addClass(D.tabActiveClass).filter("a").attr("aria-selected","true");A=B.parent().siblings(".tabs-toggle");if(!C&&(A.length===0||A.data("state")==="stopped")){return z.focus()}};w=function(){if(u.data("state")==="stopped"){e(d,n,q,true);o(d,n,q);h.removeClass(l["class"]).addClass(v["class"]).html(v.text+"<span class='wb-invisible'>"+v["hidden-text"]+"</span>").attr("aria-pressed",true);return b(".wb-invisible",h).text(v["hidden-text"])}if(u.data("state")==="started"){return r()}};if(q.autoHeight&&!m.hasClass("tabs-style-4")&&!m.hasClass("tabs-style-5")){n.show();b(".tabs-panel",m).equalHeights(true)}m.easytabs(b.extend({},q,{cycle:false}));if(q.cycle){o=function(y,B,A){var z,C;z=y.filter(function(){return b(this).is("."+A.tabActiveClass)});C=z.siblings(".tabs-roller");m.find(".tabs-toggle").data("state","started");return C.show().animate({width:z.parent().width()},A.cycle-200,"linear",function(){b(this).width(0).hide();e(y,B,A,true);return m.data("interval",setTimeout(function(){return o(y,B,A)},0))})};r=function(){clearTimeout(m.data("interval"));m.find(".tabs-roller").width(0).hide().stop();m.find(".tabs-toggle").data("state","stopped");h.removeClass(v["class"]).addClass(l["class"]).html(l.text+"<span class='wb-invisible'>"+l["hidden-text"]+"</span>").attr("aria-pressed",false);return b(".wb-invisible",h).text(l["hidden-text"])};i=b("<li class='tabs-toggle'>");s={"class":"tabs-prev",text:"&nbsp;&nbsp;&nbsp;","hidden-text":pe.dic.get("%previous")};f=b("<a class='"+s["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+s.text+"<span class='wb-invisible'>"+s["hidden-text"]+"</span></a>");x.append(i.append(f));f.click(function(){c(d,n,q,true)});j=b("<li class='tabs-toggle'>");t={"class":"tabs-next",text:"&nbsp;&nbsp;&nbsp;","hidden-text":pe.dic.get("%next")};g=b("<a class='"+t["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+t.text+"<span class='wb-invisible'>"+t["hidden-text"]+"</span></a>");x.append(j.append(g));g.click(function(){e(d,n,q,true)});u=b("<li class='tabs-toggle'>");v={"class":"tabs-stop",text:pe.dic.get("%stop"),"hidden-text":pe.dic.get("%tab-rotation","disable")};l={"class":"tabs-start",text:pe.dic.get("%play"),"hidden-text":pe.dic.get("%tab-rotation","enable")};h=b("<a class='"+v["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+v.text+"<span class='wb-invisible'>"+v["hidden-text"]+"</span></a>");x.append(u.append(h));u.click(w).bind("keydown",function(y){if(y.keyCode===32){w();return y.preventDefault()}});x.find("li a").not(u.find("a")).click(function(){return r()});d.each(function(){var y;y=b('<div class="tabs-roller">').hide().click(function(){return b(this).siblings("a").click()}).hover(function(){return b(this).css("cursor","text")});if(b.browser.msie&&b.browser.version<8){b(".tabs-style-2 .tabs, .tabs-style-2 .tabs li").css("filter","")}return b(this).parent().append(y)});o(d,n,q);if(!q.autoPlay){r()}}m.find('a[href^="#"]').each(function(){var y,z;z=b(this).attr("href");if(z.length>1){y=b(z,n);if(y.length){return b(this).click(function(C){var A,B;A=y.parents('[role="tabpanel"]:hidden');if(A){C.preventDefault();B=A.attr("id");A.parent().siblings(".tabs").find('a[href="#'+B+'"]').click();return y.get(0).scrollIntoView(true)}})}}});return m.attr("class",m.attr("class").replace(/\bwidget-style-/,"style-"))}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.texthighlight={type:"plugin",_exec:function(f){var e,d=pe.url(document.location).params||"";function c(j,m){var g,l,h,k=0;j=j.replace(/^\s+|\s+$/g,"");j=j.replace(/\|+/g,"");g=j.split("+");if(g.length>0){j="";for(h=0;h<g.length;h+=1){j+=g[h]+" "}j=j.replace(/^\s+|\s+$|\"|\(|\)/g,"")}j=j.replace(/\s+/g,"|");j=decodeURIComponent(j);j="(?=([^>]*<))([\\s'])?("+j+")(?!>)";l=m.html().replace(new RegExp(j,"gi"),function(p,o,n,i){return n+'<span class="texthighlight"><mark>'+i+"</mark></span>"});m.html(l);return null}if(d.texthighlight!==null){c(d.texthighlight,f)}return this}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.toolbar={scope:"plugin",_exec:function(d){var c=b('<div class="wet-boew-toolbar" role="toolbar"><ul><li class="toolbar-top-page"> <a href="#wb-tphp" role="link">'+pe.dic.get("%top-of-page")+"</a> </li></ul></div>");b("#wb-body-sec-sup, #wb-body-sec, #wb-body").add("body").first().append(c);c.hide();b(window).bind("scroll",function(){if(b(this).scrollTop()>10){c.fadeIn("normal").attr("aria-hidden","false")}else{c.fadeOut("normal").attr("aria-hidden","true")}});if(b(window).scrollTop()<10||b(window).scrollTop()==="undefined"){c.fadeOut("normal").attr("aria-hidden","true")}else{c.fadeIn("normal").attr("aria-hidden","false")}}};window.pe=b.extend(true,window.pe,a);return window.pe}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.webwidget={type:"plugin",twitter:{_parse_entries:function(d,e,j){var h,g,c,f;h=(e>0&&e<d.length?e:d.length);f=d.sort(function(k,i){return pe.date.compare(i.created_at.replace("+0000 ","")+" GMT",k.created_at.replace("+0000 ","")+" GMT")});c='<ul class="widget-content">';g=0;while(g<h){c+='<li><a class="float-left" href="http://www.twitter.com/';c+=f[g].user.name+"/status/"+f[g].user.id+'"><img class="widget-avatar" src="'+f[g].user.profile_image_url+'" /></a> ';c+=pe.string.ify.clean(f[g].text);c+=' <span class="widget-datestamp-accent">'+pe.dic.ago(f[g].created_at)+"</span></li>";g+=1}c+="</ul>";return j.replaceWith(c)},_json_request:function(c){if(c.toLowerCase().indexOf("!/search/")>-1){return c.replace("http://","https://").replace(/https:\/\/twitter.com\/#!\/search\/(.+$)/,function(g,f,e,d){return"http://search.twitter.com/search.json?q="+encodeURI(decodeURI(f))})}return c.replace("http://","https://").replace(/https:\/\/twitter.com\/#!\/(.+$)/i,function(g,f,e,d){return"http://twitter.com/status/user_timeline/"+encodeURI(decodeURI(f))+".json?callback=?"})},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.length){c.push(l[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d}},weather:{_parse_entries:function(d,e,f){var c;c='<ul class="widget-content">';c+='<li><a href="'+d[1].link+'">'+d[1].title+'</a><span class="widget-datestamp">['+pe.date.to_iso_format(d[1].publishedDate,true)+"]</span></li>";c+="</ul>";return f.replaceWith(c)},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.responseData.feed.entries.length){c.push(l.responseData.feed.entries[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d},_json_request:function(d,c){var e;d=d.replace(/^.*?\.gc\.ca\/([a-z]+).+\/(.*?)_[a-z]+_([ef])\.html/i,"http://www.weatheroffice.gc.ca/rss/$1/$2_$3.xml");e="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURI(decodeURI(d));if(c>0){e+="&num="+c}return e}},rss:{_parse_entries:function(d,e,j){var h,g,c,f;h=(e>0&&e<d.length?e:d.length);f=d.sort(function(k,i){return pe.date.compare(i.publishedDate,k.publishedDate)});c='<ul class="widget-content">';g=0;while(g<h){c+='<li><a href="'+f[g].link+'">'+f[g].title+'</a><span class="widget-datestamp">['+pe.date.to_iso_format(f[g].publishedDate,true)+"]</span></li>";g+=1}c+="</ul>";return j.replaceWith(c)},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.responseData.feed.entries.length){c.push(l.responseData.feed.entries[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d},_json_request:function(d,c){var e;e="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURI(decodeURI(d));if(c>0){e+="&num="+c}return e}},_exec:function(h,g){var f,d,c,e;f=b(h);e=pe.limit(f);c=f.find("a").map(function(){var i;i=b(this).attr("href");if(!g&&/twitter.com/i.test(i)){g="twitter"}if(!g&&/weatheroffice.gc.ca/i.test(i)){g="weather"}if(!g){g="rss"}return b(this).attr("href")});d=b('<ul class="widget-content"><li class="widget-state-loading"><img src="'+pe.add.liblocation+'/images/webfeeds/ajax-loader.gif" alt="'+pe.dic.get("%loading")+'" /></li></ul>');f.find(".widget-content").replaceWith(d);b.extend({},a.fn.webwidget[g]).exec(c,e,d);return}};window.pe=a;return window.pe}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.zebra={type:"plugin",_exec:function(f){var c,d,e;if(f.is("table")){c=(f.children("tr").add(f.children("tbody").children("tr"))).filter(function(){return b(this).children("td").length>0});c.filter(":odd").addClass("table-even");c.filter(":even").addClass("table-odd");c.on("hover focusin focusout",function(g){g.stopPropagation();b(this).toggleClass("table-hover")})}else{d=f.children("li");e=(f.parents("li").length+1)%2;d.filter(":odd").addClass(e===0?"list-odd":"list-even");d.filter(":even").addClass(e===1?"list-odd":"list-even");d.on("mouseover mouseout focusin focusout",function(g){g.stopPropagation();b(this).toggleClass("list-hover")})}}};window.pe=a;return a}(jQuery));