try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s_u3d=function(a,b,c,d,e,f,g){a="number"===typeof a?Date.UTC(a,b||0,c||1,d||0,e||0,f||0,g||0):a?a.getTime():s_5e();this.date=new Date(a)};s_6e(s_u3d,s_Qv);s_=s_u3d.prototype;s_.clone=function(){var a=new s_u3d(this.date);a.Gaa=this.Gaa;a.RDa=this.RDa;return a};s_.add=function(a){(a.oa||a.rz)&&s_Nv.prototype.add.call(this,new s_Mv(a.oa,a.rz));a=1E3*(a.ka+60*(a.minutes+60*(a.hours+24*a.hq)));this.date=new Date(this.date.getTime()+a)};s_.getTimezoneOffset=function(){return 0};s_.getFullYear=s_Qv.prototype.getUTCFullYear;
s_.getMonth=s_Qv.prototype.getUTCMonth;s_.getDate=s_Qv.prototype.getUTCDate;s_.getHours=s_Qv.prototype.getUTCHours;s_.getMinutes=s_Qv.prototype.getUTCMinutes;s_.getSeconds=s_Qv.prototype.getUTCSeconds;s_.getMilliseconds=s_Qv.prototype.getUTCMilliseconds;s_.getDay=s_Qv.prototype.getUTCDay;s_.setFullYear=s_Qv.prototype.setUTCFullYear;s_.setMonth=s_Qv.prototype.setUTCMonth;s_.setDate=s_Qv.prototype.setUTCDate;s_.setHours=s_Qv.prototype.setUTCHours;s_.setMinutes=s_Qv.prototype.setUTCMinutes;
s_.setSeconds=s_Qv.prototype.setUTCSeconds;s_.setMilliseconds=s_Qv.prototype.setUTCMilliseconds;

}catch(e){_DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s_v3d=function(a){return s_$Wc(a.getFullYear(),a.getMonth())},s_w3d=function(a,b,c,d,e){a=new Date(a,b,c);d=void 0!==d?d:3;e=e||0;b=((a.getDay()+6)%7-e+7)%7;return a.valueOf()+864E5*((d-e+7)%7-b)};
var s_x3d=function(){},s_Jy=function(a){if("number"==typeof a){var b=new s_x3d;b.Ba=a;var c=a;if(0==c)c="Etc/GMT";else{var d=["Etc/GMT",0>c?"-":"+"];c=Math.abs(c);d.push(Math.floor(c/60)%100);c%=60;0!=c&&d.push(":",s_qh(c,2));c=d.join("")}b.wa=c;c=a;0==c?c="UTC":(d=["UTC",0>c?"+":"-"],c=Math.abs(c),d.push(Math.floor(c/60)%100),c%=60,0!=c&&d.push(":",c),c=d.join(""));a=s_y3d(a);b.Aa=[c,c];b.ka={NJf:a,Pxc:a};b.oa=[];return b}b=new s_x3d;b.wa=a.id;b.Ba=-a.std_offset;b.Aa=a.names;b.ka=a.names_ext;b.oa=
a.transitions;return b},s_y3d=function(a){var b=["GMT"];b.push(0>=a?"+":"-");a=Math.abs(a);b.push(s_qh(Math.floor(a/60)%100,2),":",s_qh(a%60,2));return b.join("")},s_z3d=function(a,b){b=Date.UTC(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate(),b.getUTCHours(),b.getUTCMinutes())/36E5;for(var c=0;c<a.oa.length&&b>=a.oa[c];)c+=2;return 0==c?0:a.oa[c-1]},s_A3d=function(a,b){a=a.Ba-s_z3d(a,b);return-1440===a?0:a};
var s_Ky=function(a,b){this.oa=[];this.ka=b||s_Lv;"number"==typeof a?s_B3d(this,a):s_C3d(this,a)},s_D3d=[/^'(?:[^']|'')*('|$)/,/^(?:G+|y+|Y+|M+|k+|S+|E+|a+|b+|B+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,/^[^'GyYMkSEabBhKHcLQdmsvVwzZ]+/],s_E3d=function(a){return a.getHours?a.getHours():0},s_C3d=function(a,b){for(s_F3d&&(b=b.replace(/\u200f/g,""));b;){for(var c=b,d=0;d<s_D3d.length;++d){var e=b.match(s_D3d[d]);if(e){var f=e[0];b=b.substring(f.length);0==d&&("''"==f?f="'":(f=f.substring(1,"'"==e[1]?
f.length-1:f.length),f=f.replace(/''/g,"'")));a.oa.push({text:f,type:d});break}}if(c===b)throw Error("Yg`"+b);}};
s_Ky.prototype.format=function(a,b){if(!a)throw Error("Zg");var c=b?6E4*(a.getTimezoneOffset()-s_A3d(b,a)):0,d=c?new Date(a.getTime()+c):a,e=d;b&&d.getTimezoneOffset()!=a.getTimezoneOffset()&&(e=6E4*(d.getTimezoneOffset()-a.getTimezoneOffset()),d=new Date(d.getTime()+e),c+=0<c?-864E5:864E5,e=new Date(a.getTime()+c));c=[];for(var f=0;f<this.oa.length;++f){var g=this.oa[f].text;1==this.oa[f].type?c.push(s_G3d(this,g,a,d,e,b)):c.push(g)}return c.join("")};
var s_B3d=function(a,b){if(4>b)var c=a.ka.Dsa[b];else if(8>b)c=a.ka.Xsa[b-4];else if(12>b)c=a.ka.rJb[b-8],c=c.replace("{1}",a.ka.Dsa[b-8]),c=c.replace("{0}",a.ka.Xsa[b-8]);else if(12===b)c=a.ka.Dsa[0].replace(/[^EMd]*yy*[^EMd]*/,"");else{s_B3d(a,10);return}s_C3d(a,c)},s_Ly=function(a,b){b=String(b);a=a.ka||s_Lv;if(void 0!==a.YNb&&!s_H3d){for(var c=[],d=0;d<b.length;d++){var e=b.charCodeAt(d);c.push(48<=e&&57>=e?String.fromCharCode(a.YNb+e-48):b.charAt(d))}b=c.join("")}return b},s_H3d=!1,s_F3d=!1,
s_I3d=function(a){if(!(a.getHours&&a.getSeconds&&a.getMinutes))throw Error("$g");},s_J3d=function(a,b){s_I3d(b);b=s_E3d(b);return a.ka.wlb[12<=b&&24>b?1:0]},s_G3d=function(a,b,c,d,e,f){var g=b.length;switch(b.charAt(0)){case "G":return c=0<d.getFullYear()?1:0,4<=g?a.ka.vrc[c]:a.ka.xJb[c];case "y":return c=d.getFullYear(),0>c&&(c=-c),2==g&&(c%=100),s_Ly(a,s_qh(c,g));case "Y":return c=d.getMonth(),e=d.getDate(),c=s_w3d(d.getFullYear(),c,e,a.ka.J_a,a.ka.wea),c=(new Date(c)).getFullYear(),0>c&&(c=-c),
2==g&&(c%=100),s_Ly(a,s_qh(c,g));case "M":a:switch(c=d.getMonth(),g){case 5:g=a.ka.gxc[c];break a;case 4:g=a.ka.a1a[c];break a;case 3:g=a.ka.Anb[c];break a;default:g=s_Ly(a,s_qh(c+1,g))}return g;case "k":return s_I3d(e),c=s_E3d(e)||24,s_Ly(a,s_qh(c,g));case "S":return s_Ly(a,(e.getMilliseconds()/1E3).toFixed(Math.min(3,g)).slice(2)+(3<g?s_qh(0,g-3):""));case "E":return c=d.getDay(),4<=g?a.ka.Rnb[c]:a.ka.Bnb[c];case "a":return s_J3d(a,e);case "b":return s_J3d(a,e);case "B":return s_J3d(a,e);case "h":return s_I3d(e),
c=s_E3d(e)%12||12,s_Ly(a,s_qh(c,g));case "K":return s_I3d(e),c=s_E3d(e)%12,s_Ly(a,s_qh(c,g));case "H":return s_I3d(e),c=s_E3d(e),s_Ly(a,s_qh(c,g));case "c":a:switch(c=d.getDay(),g){case 5:g=a.ka.mOa[c];break a;case 4:g=a.ka.Mxc[c];break a;case 3:g=a.ka.GNb[c];break a;default:g=s_Ly(a,s_qh(c,1))}return g;case "L":a:switch(c=d.getMonth(),g){case 5:g=a.ka.Lxc[c];break a;case 4:g=a.ka.rBa[c];break a;case 3:g=a.ka.FNb[c];break a;default:g=s_Ly(a,s_qh(c+1,g))}return g;case "Q":return c=Math.floor(d.getMonth()/
3),4>g?a.ka.ENb[c]:a.ka.yNb[c];case "d":return s_Ly(a,s_qh(d.getDate(),g));case "m":return s_I3d(e),s_Ly(a,s_qh(e.getMinutes?e.getMinutes():0,g));case "s":return s_I3d(e),s_Ly(a,s_qh(e.getSeconds(),g));case "v":return(f||s_Jy(c.getTimezoneOffset())).wa;case "V":return a=f||s_Jy(c.getTimezoneOffset()),2>=g?a.wa:0<s_z3d(a,c)?void 0!==a.ka.Amd?a.ka.Amd:a.ka.DST_GENERIC_LOCATION:void 0!==a.ka.Pxc?a.ka.Pxc:a.ka.STD_GENERIC_LOCATION;case "w":return c=e.getMonth(),d=e.getDate(),c=s_w3d(e.getFullYear(),c,
d,a.ka.J_a,a.ka.wea),s_Ly(a,s_qh(Math.floor(Math.round((c-(new Date((new Date(c)).getFullYear(),0,1)).valueOf())/864E5)/7)+1,g));case "z":return a=f||s_Jy(c.getTimezoneOffset()),4>g?a.Aa[0<s_z3d(a,c)?2:0]:a.Aa[0<s_z3d(a,c)?3:1];case "Z":return d=f||s_Jy(c.getTimezoneOffset()),4>g?(g=-s_A3d(d,c),a=[0>g?"-":"+"],g=Math.abs(g),a.push(s_qh(Math.floor(g/60)%100,2),s_qh(g%60,2)),g=a.join("")):g=s_Ly(a,s_y3d(s_A3d(d,c))),g;default:return""}};

}catch(e){_DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s_My={l1a:"y",Fyc:"y G",tOa:"MMM y",gla:"MMMM y",Gyc:"MM/y",g$:"MMM d",bNb:"MMMM dd",b1a:"M/d",unb:"MMMM d",Usa:"MMM d, y",a6:"EEE, MMM d",Ayc:"EEE, MMM d, y",sJb:"d",eyd:"MMM d, h:mm a zzzz"};s_My={l1a:"y",Fyc:"y G",tOa:"MMM 'de' y",gla:"MMMM 'de' y",Gyc:"MM/y",g$:"d 'de' MMM",bNb:"dd 'de' MMMM",b1a:"d/M",unb:"d 'de' MMMM",Usa:"d 'de' MMM 'de' y",a6:"EEE, d 'de' MMM",Ayc:"EEE, d 'de' MMM 'de' y",sJb:"d",eyd:"d 'de' MMM HH:mm zzzz"};

}catch(e){_DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s_rZe=new s_Nv(0,0,1),s_sZe=new s_Nv(9999,11,31);

}catch(e){_DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s_tZe=function(a){this.ka=a.oa.clone();this.oa=Number(a.ka.wg())};s_6e(s_tZe,s_5i);s_tZe.prototype.next=function(){if(Number(this.ka.wg())>this.oa)return s_6i;var a=this.ka.clone();this.ka.add(new s_Mv("d",1));return s_7i(a)};var s_uZe=function(){this.oa=s_rZe;this.ka=s_sZe};s_uZe.prototype.contains=function(a){return a.valueOf()>=this.oa.valueOf()&&a.valueOf()<=this.ka.valueOf()};s_uZe.prototype.iterator=function(){return new s_tZe(this)};
var s_vZe=function(a,b){this.ka=a;this.oa=b||s__d()};
s_vZe.prototype.Da=function(a,b,c,d){b?(d=this.oa.createElement("TD"),d.colSpan=c?1:2,s_sE(this,d,"\u00ab",this.ka+"-previousMonth"),a.appendChild(d),d=this.oa.createElement("TD"),d.colSpan=c?6:5,d.className=this.ka+"-monthyear",a.appendChild(d),d=this.oa.createElement("TD"),s_sE(this,d,"\u00bb",this.ka+"-nextMonth"),a.appendChild(d)):(c=this.oa.createElement("TD"),c.colSpan=5,s_sE(this,c,"\u00ab",this.ka+"-previousMonth"),s_sE(this,c,"",this.ka+"-month"),s_sE(this,c,"\u00bb",this.ka+"-nextMonth"),
b=this.oa.createElement("TD"),b.colSpan=3,s_sE(this,b,"\u00ab",this.ka+"-previousYear"),s_sE(this,b,"",this.ka+"-year"),s_sE(this,b,"\u00bb",this.ka+"-nextYear"),d.indexOf("y")<d.indexOf("m")?(a.appendChild(b),a.appendChild(c)):(a.appendChild(c),a.appendChild(b)))};
s_vZe.prototype.wa=function(a,b){var c=this.oa.createElement("TD");c.colSpan=b?2:3;c.className=this.ka+"-today-cont";s_sE(this,c,"Hoje",this.ka+"-today-btn");a.appendChild(c);c=this.oa.createElement("TD");c.colSpan=b?4:3;a.appendChild(c);c=this.oa.createElement("TD");c.colSpan=2;c.className=this.ka+"-none-cont";s_sE(this,c,"Nenhum",this.ka+"-none-btn");a.appendChild(c)};
var s_sE=function(a,b,c,d){var e=[a.ka+"-btn"];d&&e.push(d);d=a.oa.createElement("BUTTON");d.className=e.join(" ");d.appendChild(s_vpa(a.oa,c));b.appendChild(d)};
var s_tE=function(a,b,c,d){s_ns.call(this,c);this.Ba=b||s_Lv;this.Ie=this.Ba.GNb;this.Ol=new s_Ky("d",this.Ba);new s_Ky("dd",this.Ba);this.Or=new s_Ky("w",this.Ba);this.Zp=new s_Ky("d MMM",this.Ba);this.Rc=new s_Ky(s_My.l1a||"y",this.Ba);this.Pl=new s_Ky(s_My.gla||"MMMM y",this.Ba);this.Le=d||new s_vZe(this.Mq(),this.ka);this.wa=new s_Nv(a);this.wa.RDa=this.Ba.J_a;this.wa.Gaa=this.Ba.wea;this.oa=this.wa.clone();this.oa.setDate(1);this.Ub="      ".split(" ");this.Ub[this.Ba.WNb[0]]=this.Mq()+"-wkend-start";
this.Ub[this.Ba.WNb[1]]=this.Mq()+"-wkend-end";this.Ta={};this.Oa=[];this.qd=0};s_6e(s_tE,s_ns);s_=s_tE.prototype;s_.PEb=!0;s_.tpc=new s_uZe;s_.cFb=!0;s_.dFb=!0;s_.QOa=!0;s_.bFb=!0;s_.Rkc=!1;s_.Pqb=null;s_.zrb=null;s_.yrb=null;s_.xrb=null;s_.dId=s_Crc.Yb();s_.Mq=function(){return"goog-date-picker"};var s_xZe=function(a){a.Rkc=!0;s_wZe(a);s_uE(a)},s_zZe=function(a){a.cFb=!1;s_wZe(a);s_yZe(a);s_uE(a)},s_AZe=function(a){s_i.Sa(a.Nb,a.bFb);s_i.Sa(a.Jb,a.QOa);s_i.Sa(a.Li,a.bFb||a.QOa)};s_=s_tE.prototype;
s_.iec=function(){this.oa.add(new s_Mv("m",-1));s_uE(this);s_BZe(this)};s_.cIa=function(){this.oa.add(new s_Mv("m",1));s_uE(this);s_BZe(this)};s_.y_e=function(){this.oa.add(new s_Mv("y",-1));s_uE(this);s_BZe(this)};s_.OGe=function(){this.oa.add(new s_Mv("y",1));s_uE(this);s_BZe(this)};s_.C9c=function(){this.setDate(new s_Nv)};s_.aic=function(){this.QOa&&this.setDate(null)};s_.getDate=function(){return this.wa&&this.wa.clone()};s_.setDate=function(a){s_CZe(this,a,!0)};
var s_CZe=function(a,b,c){var d=b==a.wa||b&&a.wa&&b.getFullYear()==a.wa.getFullYear()&&b.getMonth()==a.wa.getMonth(),e=b==a.wa||d&&b.getDate()==a.wa.getDate();a.wa=b&&new s_Nv(b);b&&(a.oa.set(a.wa),a.oa.setFullYear(a.wa.getFullYear()),a.oa.setDate(1));s_uE(a);c&&a.dispatchEvent(new s_DZe("select",a,a.wa));e||a.dispatchEvent(new s_DZe("change",a,a.wa));d||s_BZe(a)},s_wZe=function(a){if(a.zrb){for(var b=a.zrb;b.firstChild;)b.removeChild(b.firstChild);a.Le.Da(b,a.Rkc,a.cFb,a.Ba.Dsa[0].toLowerCase());
if(a.Rkc){s_vE(a,b,a.Mq()+"-previousMonth",a.iec);var c=s_H(a.Mq()+"-previousMonth",b);c&&(s_Kr(c,"hidden",!0),c.tabIndex=-1);s_vE(a,b,a.Mq()+"-nextMonth",a.cIa);if(c=s_H(a.Mq()+"-nextMonth",b))s_Kr(c,"hidden",!0),c.tabIndex=-1;a.yrb=s_H(a.Mq()+"-monthyear",b)}else s_vE(a,b,a.Mq()+"-previousMonth",a.iec),s_vE(a,b,a.Mq()+"-nextMonth",a.cIa),s_vE(a,b,a.Mq()+"-month",a.Zbf),s_vE(a,b,a.Mq()+"-previousYear",a.y_e),s_vE(a,b,a.Mq()+"-nextYear",a.OGe),s_vE(a,b,a.Mq()+"-year",a.ldf),a.Na=s_H(a.Mq()+"-month",
b),c=s__d(),b=s_H(a.Mq()+"-year",b||c.ka),a.Lb=b}},s_vE=function(a,b,c,d){b=s_H(c,b);s_ps(a).listen(b,"click",function(e){e.preventDefault();d.call(this,e)})},s_yZe=function(a){if(a.xrb){var b=a.xrb;s_Qh(b);a.Le.wa(b,a.cFb);s_vE(a,b,a.Mq()+"-today-btn",a.C9c);s_vE(a,b,a.Mq()+"-none-btn",a.aic);a.Nb=s_H(a.Mq()+"-today-btn",b);a.Jb=s_H(a.Mq()+"-none-btn",b);s_AZe(a)}};s_=s_tE.prototype;
s_.bD=function(a){s_tE.yd.bD.call(this,a);s_K.add(a,this.Mq());var b=this.ka.Ti("TABLE",{role:"presentation"}),c=this.ka.Ti("THEAD"),d=this.ka.Ti("TBODY",{role:"grid"}),e=this.ka.Ti("TFOOT");d.tabIndex=0;this.Vi=d;this.Li=e;var f=this.ka.Ti("TR",{role:"row"});f.className=this.Mq()+"-head";this.zrb=f;s_wZe(this);c.appendChild(f);this.Da=[];for(var g=0;7>g;g++){f=this.ka.createElement("TR");this.Da[g]=[];for(var k=0;8>k;k++){var h=this.ka.createElement(0==k||0==g?"th":"td");0!=k&&0!=g||k==g?0!==g&&
0!==k&&(s_Jr(h,"gridcell"),h.setAttribute("tabindex","-1")):(h.className=0==k?this.Mq()+"-week":this.Mq()+"-wday",s_Jr(h,0==k?"rowheader":"columnheader"));f.appendChild(h);this.Da[g][k]=h}d.appendChild(f)}f=this.ka.createElement("TR");f.className=this.Mq()+"-foot";this.xrb=f;s_yZe(this);e.appendChild(f);b.cellSpacing="0";b.cellPadding="0";b.appendChild(c);b.appendChild(d);b.appendChild(e);a.appendChild(b);s_EZe(this);s_uE(this);a.tabIndex=0};s_.Ly=function(){s_tE.yd.Ly.call(this);this.bD(this.Ca())};
s_.Do=function(){s_tE.yd.Do.call(this);var a=s_ps(this);a.listen(this.Vi,"click",this.yhe);a.listen(s_FZe(this,this.Ca()),"key",this.Ahe)};s_.Vy=function(){s_tE.yd.Vy.call(this);this.Qa();for(var a in this.Ta)this.Ta[a].dispose();this.Ta={}};s_.create=s_tE.prototype.Tk;s_.xc=function(){s_tE.yd.xc.call(this);this.Jb=this.Nb=this.Lb=this.yrb=this.Na=this.xrb=this.zrb=this.Li=this.Vi=this.Da=null};
s_.yhe=function(a){if("TD"==a.target.tagName){var b,c=-2,d=-2;for(b=a.target;b;b=b.previousSibling,c++);for(b=a.target.parentNode;b;b=b.previousSibling,d++);a=this.Oa[d][c];this.tpc.contains(a)&&this.setDate(a.clone())}};
s_.Ahe=function(a){switch(a.keyCode){case 33:a.preventDefault();var b=-1;break;case 34:a.preventDefault();b=1;break;case 37:a.preventDefault();var c=-1;break;case 39:a.preventDefault();c=1;break;case 38:a.preventDefault();c=-7;break;case 40:a.preventDefault();c=7;break;case 36:a.preventDefault();this.C9c();break;case 46:a.preventDefault();this.aic();break;case 13:case 32:a.preventDefault(),s_CZe(this,this.wa,!0);default:return}this.wa?(a=this.wa.clone(),a.add(new s_Mv(0,b,c))):(a=this.oa.clone(),
a.setDate(1));this.tpc.contains(a)&&(s_CZe(this,a,!1),this.bu.focus())};s_.Zbf=function(a){a.stopPropagation();a=[];for(var b=0;12>b;b++)a.push(this.Ba.rBa[b]);s_GZe(this,this.Na,a,this.ike,this.Ba.rBa[this.oa.getMonth()])};s_.ldf=function(a){a.stopPropagation();a=[];for(var b=this.oa.getFullYear(),c=this.oa.clone(),d=-5;5>=d;d++)c.setFullYear(b+d),a.push(this.Rc.format(c));s_GZe(this,this.Lb,a,this.Ope,this.Rc.format(this.oa))};
s_.ike=function(a){a=Number(a.getAttribute("itemIndex"));this.oa.setMonth(a);s_uE(this);this.Na.focus&&this.Na.focus()};s_.Ope=function(a){3==a.firstChild.nodeType&&(a=Number(a.getAttribute("itemIndex")),this.oa.setFullYear(this.oa.getFullYear()+a-5),s_uE(this));this.Lb.focus()};
var s_GZe=function(a,b,c,d,e){a.Qa();var f=a.ka.createElement("DIV");f.className=a.Mq()+"-menu";a.nb=null;for(var g=a.ka.createElement("UL"),k=0;k<c.length;k++){var h=a.ka.Ti("LI",null,c[k]);h.setAttribute("itemIndex",k);c[k]==e&&(a.nb=h);g.appendChild(h)}f.appendChild(g);f.style.left=b.offsetLeft+b.parentNode.offsetLeft+"px";f.style.top=b.offsetTop+"px";f.style.width=b.clientWidth+"px";a.Na.parentNode.appendChild(f);a.Ia=f;a.nb||(a.nb=g.firstChild);a.nb.className=a.Mq()+"-menu-selected";a.zd=d;b=
s_ps(a);b.listen(a.Ia,"click",a.Gh);b.listen(s_FZe(a,a.Ia),"key",a.Og);b.listen(a.ka.Lg(),"click",a.Qa);f.tabIndex=0;f.focus()};s_tE.prototype.Gh=function(a){a.stopPropagation();this.Qa();this.zd&&this.zd(a.target)};
s_tE.prototype.Og=function(a){a.stopPropagation();var b=this.nb;switch(a.keyCode){case 35:a.preventDefault();var c=b.parentNode.lastChild;break;case 36:a.preventDefault();c=b.parentNode.firstChild;break;case 38:a.preventDefault();c=b.previousSibling;break;case 40:a.preventDefault();c=b.nextSibling;break;case 13:case 9:case 0:a.preventDefault(),this.Qa(),this.zd(b)}c&&c!=b&&(b.className="",c.className=this.Mq()+"-menu-selected",this.nb=c)};
s_tE.prototype.Qa=function(){if(this.Ia){var a=s_ps(this);a.unlisten(this.Ia,"click",this.Gh);a.unlisten(s_FZe(this,this.Ia),"key",this.Og);a.unlisten(this.ka.Lg(),"click",this.Qa);s_Uh(this.Ia);delete this.Ia}};
var s_uE=function(a){if(a.Ca()){var b=a.oa.clone();b.setDate(1);a.yrb&&s__h(a.yrb,a.Pl.format(b));a.Na&&s__h(a.Na,a.Ba.rBa[b.getMonth()]);a.Lb&&s__h(a.Lb,a.Rc.format(b));var c=b.oba();s_v3d(b);b.add(new s_Mv("m",-1));b.setDate(s_v3d(b)-(c-1));c=new s_Mv("d",1);a.Oa=[];for(var d=0;6>d;d++){a.Oa[d]=[];for(var e=0;7>e;e++){a.Oa[d][e]=b.clone();var f=b.getFullYear();b.add(c);0==b.getMonth()&&1==b.getDate()&&f++;b.setFullYear(f)}}s_HZe(a)}},s_HZe=function(a){if(a.Ca()){var b=a.oa.getMonth(),c=new s_Nv,
d=c.getFullYear(),e=c.getMonth();c=c.getDate();for(var f=6,g=0;6>g;g++){a.cFb?(s__h(a.Da[g+1][0],a.Or.format(a.Oa[g][0])),s_K.set(a.Da[g+1][0],a.Mq()+"-week")):(s__h(a.Da[g+1][0],""),s_K.set(a.Da[g+1][0],""));for(var k=0;7>k;k++){var h=a.Oa[g][k],l=a.Da[g+1][k+1];l.id||(l.id=s_Drc(a.dId));s_Jr(l,"gridcell");s_Nr(l,a.Zp.format(h));var m=[a.Mq()+"-date"];a.tpc.contains(h)||m.push(a.Mq()+"-unavailable-date");h.getMonth()!=b&&m.push(a.Mq()+"-other-month");var n=(k+a.oa.Gaa+7)%7;a.Ub[n]&&m.push(a.Ub[n]);
h.getDate()==c&&h.getMonth()==e&&h.getFullYear()==d&&m.push(a.Mq()+"-today");a.wa&&h.getDate()==a.wa.getDate()&&h.getMonth()==a.wa.getMonth()&&h.getFullYear()==a.wa.getFullYear()&&(m.push(a.Mq()+"-selected"),a.bu=l);a.Pqb&&(n=a.Pqb(h))&&m.push(n);h=a.Ol.format(h);s__h(l,h);s_K.set(l,m.join(" "))}4<=g&&(k=a.Da[g+1][0].parentElement||a.Da[g+1][0].parentNode,l=a.Oa[g][0].getMonth()==b,s_i.Sa(k,l||a.PEb),l||(f=Math.min(f,g)))}b=(a.PEb?6:f)+(a.dFb?1:0);a.qd!=b&&(a.qd<b&&a.dispatchEvent("gridSizeIncrease"),
a.qd=b)}},s_BZe=function(a){var b=new s_DZe("changeActiveMonth",a,a.oa.clone());a.dispatchEvent(b)},s_EZe=function(a){if(a.Ca()){if(a.dFb)for(var b=0;7>b;b++)s__h(a.Da[0][b+1],a.Ie[((b+a.oa.Gaa+7)%7+1)%7]);s_i.Sa(a.Da[0][0].parentElement||a.Da[0][0].parentNode,a.dFb)}},s_FZe=function(a,b){var c=s_Fa(b);c in a.Ta||(a.Ta[c]=new s_0u(b));return a.Ta[c]},s_DZe=function(a,b,c){s_Wg.call(this,a,b);this.date=c};s_6e(s_DZe,s_Wg);

}catch(e){_DumpException(e)}
try{
var s_tuo=function(a){return a.replace(/_/g,"_1").replace(/,/g,"_2").replace(/:/g,"_3")};

}catch(e){_DumpException(e)}
try{
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s_JAo=function(a){this.ka=[];this.oa=s_Lv;if("number"==typeof a){11<a&&(a=10);if(4>a)var b=this.oa.Dsa[a];else 8>a?b=this.oa.Xsa[a-4]:(b=this.oa.rJb[a-8],b=b.replace("{1}",this.oa.Dsa[a-8]),b=b.replace("{0}",this.oa.Xsa[a-8]));s_IAo(this,b)}else s_IAo(this,a)},s_IAo=function(a,b){for(var c=!1,d="",e=0;e<b.length;e++){var f=b.charAt(e);if(" "==f)for(0<d.length&&(a.ka.push({text:d,count:0,wBa:!1,numeric:!1}),d=""),a.ka.push({text:" ",count:0,wBa:!1,numeric:!1});e<b.length-1&&" "==b.charAt(e+1);)e++;
else if(c)"'"==f?e+1<b.length&&"'"==b.charAt(e+1)?(d+="'",e++):c=!1:d+=f;else if(0<="GyMdkHmsSEDabBhKzZvQL".indexOf(f)){0<d.length&&(a.ka.push({text:d,count:0,wBa:!1,numeric:!1}),d="");for(var g=b.charAt(e),k=e+1;k<b.length&&b.charAt(k)==g;)k++;g=k-e;0>=g?k=!1:(k="MydhHmsSDkK".indexOf(f),k=0<k||0==k&&3>g);a.ka.push({text:f,count:g,wBa:!1,numeric:k});e+=g-1}else"'"==f?e+1<b.length&&"'"==b.charAt(e+1)?(d+="'",e++):c=!0:d+=f}0<d.length&&a.ka.push({text:d,count:0,wBa:!1,numeric:!1});b=!1;for(c=0;c<a.ka.length;c++)a.ka[c].numeric?
!b&&c+1<a.ka.length&&a.ka[c+1].numeric&&(b=!0,a.ka[c].wBa=!0):b=!1};
s_JAo.prototype.parse=function(a,b,c){var d=!1,e=!1;c&&(d=c.GXf||!1,e=c.validate||!1);if(d)for(c=0;c<this.ka.length;c++){var f=this.ka[c];if(0<f.count&&(0>"abBhHkKm".indexOf(f.text.charAt(0))||2<f.count||f.wBa))throw Error("gl`"+f.text.charAt(0));}f=new s_KAo;c=[0];f.La=-1;for(var g=0;g<this.ka.length&&!(d&&c[0]>=a.length);g++){if(0==this.ka[g].count){a:{var k=a;var h=this.ka[g],l=d;if(" "==h.text.charAt(0)){if(h=c[0],s_LAo(k,c),c[0]>h){k=!0;break a}}else{if(k.indexOf(h.text,c[0])==c[0]){c[0]+=h.text.length;
k=!0;break a}if(l&&0==h.text.indexOf(k.substring(c[0]))){c[0]+=k.length-c[0];k=!0;break a}}k=!1}if(k)continue;return 0}if(this.ka[g].wBa){a:{h=a;l=g;var m=c[0],n=0;for(k=l;k<this.ka.length;k++){var p=this.ka[k],q=p.count;if(0===q)break;if(k==l&&(q-=n,n++,0==q)){k=0;break a}var r=k>l&&p.numeric,t=c[0];if(!s_MAo(this,h,c,p,q,f,!1)||r&&c[0]-t<q)k=l-1,c[0]=m}k-=l}if(0>=k)return 0;g+=k-1}else if(!s_MAo(this,a,c,this.ka[g],0,f,d))return 0}a:{a=e;if(null==b)throw Error("hl");void 0!=f.era&&void 0!=f.year&&
0==f.era&&0<f.year&&(f.year=-(f.year-1));void 0!=f.year&&b.setFullYear(f.year);d=b.getDate();b.setDate(1);void 0!=f.month&&b.setMonth(f.month);void 0!=f.day?b.setDate(f.day):(e=s_$Wc(b.getFullYear(),b.getMonth()),b.setDate(d>e?e:d));"function"===typeof b.setHours&&(void 0==f.hours&&(f.hours=b.getHours()),12>f.hours&&(void 0!=f.Ia&&0<f.Ia?f.hours+=12:void 0!==f.Aa&&("isPm noon afternoon1 afternoon2 evening1 evening2".split(" ").includes(f.Aa)||["night1","night2"].includes(f.Aa)&&6<=f.hours)&&(f.hours+=
12)),b.setHours(f.hours));"function"===typeof b.setMinutes&&void 0!=f.minutes&&b.setMinutes(f.minutes);"function"===typeof b.setSeconds&&void 0!=f.ka&&b.setSeconds(f.ka);"function"===typeof b.setMilliseconds&&void 0!=f.oa&&b.setMilliseconds(f.oa);if(a&&(f.year&&f.year!=b.getFullYear()||f.month&&f.month!=b.getMonth()||f.day&&f.day!=b.getDate()||f.hours&&24<=f.hours||f.minutes&&60<=f.minutes||f.ka&&60<=f.ka||f.oa&&1E3<=f.oa))b=!1;else{void 0!=f.Ba&&(a=b.getTimezoneOffset(),b.setTime(b.getTime()+6E4*
(f.Ba-a)));f.Da&&(a=new Date,a.setFullYear(a.getFullYear()-80),b.getTime()<a.getTime()&&b.setFullYear(a.getFullYear()+100));if(void 0!=f.wa)if(void 0==f.day)f=(7+f.wa-b.getDay())%7,3<f&&(f-=7),a=b.getMonth(),b.setDate(b.getDate()+f),b.getMonth()!=a&&b.setDate(b.getDate()+(0<f?-7:7));else if(f.wa!=b.getDay()){b=!1;break a}b=!0}}return b?c[0]:0};
var s_MAo=function(a,b,c,d,e,f,g){s_LAo(b,c);if(d.numeric&&0<e&&c[0]+e>b.length)return!1;switch(d.text.charAt(0)){case "G":return s_NAo(b,c,[a.oa.xJb],function(k){return f.era=k}),!0;case "M":case "L":return s_OAo(a,b,c,e,d,f);case "E":return s_NAo(b,c,[a.oa.Rnb,a.oa.Bnb],function(k){return f.wa=k});case "B":case "b":return e=[],a=[[].concat(a.oa.wlb)],e.push("isAm"),e.push("isPm"),b=s_NAo(b,c,a,function(k){return f.La=k},g),f.Aa=e[f.La],g?b:!0;case "a":return b=s_NAo(b,c,[a.oa.wlb],function(k){return f.Ia=
k},g),g?b:!0;case "y":return s_PAo(a,b,c,d,e,f);case "Q":return s_NAo(b,c,[a.oa.yNb,a.oa.ENb],function(k){f.month=3*k;f.day=1});case "d":return s_QAo(a,b,c,d,e,function(k){f.day=k}),!0;case "S":return s_RAo(a,b,c,e,f);case "h":case "K":case "H":case "k":return b=s_QAo(a,b,c,d,e,function(k){f.hours="h"===d.text.charAt(0)&&12===k?0:k},g),g?b:!0;case "m":return b=s_QAo(a,b,c,d,e,function(k){f.minutes=k},g),g?b:!0;case "s":return s_QAo(a,b,c,d,e,function(k){f.ka=k}),!0;case "z":case "Z":case "v":return s_SAo(a,
b,c,f);default:return!1}},s_PAo=function(a,b,c,d,e,f){var g=c[0];e=s_TAo(a,b,c,e);null===e&&(e=s_TAo(a,b,c,0,!0));if(null===e)return!1;0<=e&&2==c[0]-g&&2==d.count?(a=e,b=(new Date).getFullYear()-80,c=b%100,f.Da=a==c,a+=100*Math.floor(b/100)+(a<c?100:0),f.year=a):f.year=e;return!0},s_OAo=function(a,b,c,d,e,f){return e.numeric&&s_QAo(a,b,c,e,d,function(g){f.month=g-1})?!0:s_NAo(b,c,[a.oa.a1a,a.oa.rBa,a.oa.Anb,a.oa.FNb],function(g){f.month=g})},s_RAo=function(a,b,c,d,e){var f=c[0];a=s_TAo(a,b,c,d);if(null===
a)return!1;c=c[0]-f;e.oa=3>c?a*Math.pow(10,3-c):Math.round(a/Math.pow(10,c-3));return!0},s_SAo=function(a,b,c,d){b.indexOf("GMT",c[0])==c[0]&&(c[0]+=3);if(c[0]>=b.length)return d.Ba=0,!0;var e=c[0],f=s_TAo(a,b,c,0,!0);if(null===f)return!1;if(c[0]<b.length&&":"==b.charAt(c[0])){var g=60*f;c[0]++;f=s_TAo(a,b,c,0);if(null===f)return!1;g+=f}else g=f,g=24>g&&3>=c[0]-e?60*g:g%100+g/100*60;d.Ba=-g;return!0},s_QAo=function(a,b,c,d,e,f,g){g=g||!1;var k=c[0];a=s_TAo(a,b,c,e);if(null===a)return!1;if(g&&c[0]-
k<d.count){if(c[0]<b.length)return!1;a*=Math.pow(10,d.count-(c[0]-k))}f(a);return!0},s_NAo=function(a,b,c,d,e){e=e||!1;for(var f,g=0;g<c.length;g++){f=b;for(var k=c[g],h=e,l=0,m=null,n=a.substring(f[0]).toLowerCase(),p=0;p<k.length;p++){var q=k[p].toLowerCase();if(h&&0==q.indexOf(n)){l=n.length;m=p;break}k[p].length>l&&0==n.indexOf(q)&&(l=k[p].length,m=p)}null!==m&&(f[0]+=l);f=m;if(null!==f)return d(f),!0}return!1},s_LAo=function(a,b){(a=a.substring(b[0]).match(/^\s+/))&&(b[0]+=a[0].length)},s_TAo=
function(a,b,c,d,e){b=0<d?b.substring(0,c[0]+d):b;e=e||!1;if(a.oa.YNb){d=[];for(var f=c[0];f<b.length;f++){var g=b.charCodeAt(f)-a.oa.YNb;d.push(0<=g&&9>=g?String.fromCharCode(g+48):b.charAt(f))}b=d.join("")}else b=b.substring(c[0]);a=b.match(new RegExp("^"+(e?"[+-]?":"")+"\\d+"));if(!a)return null;c[0]+=a[0].length;return parseInt(a[0],10)},s_KAo=function(){};s_KAo.prototype.Da=!1;

}catch(e){_DumpException(e)}
try{
s_a("VD4Qme");

var s_UAo=function(){var a={};a=(a.OouJcb="cd_min",a.rzG2be="cd_max",a);var b=s_Nb("HjtPBb");if(b)for(var c in a){var d=s_Nb(c);b.value=b.value.replace(new RegExp("("+a[c]+":)([^,]*)"),"$1"+s_tuo(d.value).replace(/^\s+|\s+$/g,""))}},s_WAo=function(a){var b=s_VAo();a.Pqb=b},s_XAo=s_6Wc.Dsa[3],s_qR=function(a){s_m.call(this,a.Ka);this.oa=this.link=this.container=this.ka=null;this.Aa=!0;this.Ba=this.getData("m").bool()};s_u(s_qR,s_m);s_qR.Fa=s_m.Fa;s_qR.prototype.c2d=function(){return this.ka};
s_qR.prototype.c_d=function(){return this.oa};s_qR.prototype.Eb=function(){this.Fba();s_2g(window,"resize",this.wa)};var s_YAo=function(a,b){var c=new Date,d=new s_JAo(s_XAo);b=b.value.trim();if(0===b.length||d.parse(b,c,{validate:!0})!==b.length)a.oa.aic();else{a.Aa=!1;try{a.oa.setDate(c)}finally{a.Aa=!0}}},s_ZAo=function(a){var b=a.oa.getDate();if(a.Aa&&b){var c=new s_Ky(s_XAo.replace(/yy/,"y"));a.ka.value=c.format(b);"OouJcb"===a.ka.id?s_xh("rzG2be").focus():a.ka.focus()}};s_qR.prototype.w$e=function(){s_ZAo(this)};
var s__Ao=function(a,b){var c=s_H("qomYCd",a.container);s_K.enable(c,"KbfSHd","OouJcb"!==b.id);s__i(function(){s_K.add(c,"lRiKjb");s_fc(function(){s_K.remove(c,"lRiKjb")})},150)},s_0Ao=function(){var a=s_H("goog-date-picker-head");return a&&(a=s_Ah("goog-date-picker-btn",a))&&1<a.length?a[1]:null};s_qR.prototype.k2d=function(){return s_0Ao()};
var s_VAo=function(){var a=new Date(Date.now());a.setDate(28);var b,c=new Date(Date.now());return function(d){b||(b=s_0Ao());b&&s_K.enable(b,"suap3e",Number(a)<=Number(d));return Number(d)<=Number(c)?null:"suap3e"}};s_qR.prototype.lDe=function(){return s_VAo()};
var s_2Ao=function(a){var b=s_Kh("DIV","UfY8P");s_Oh(s_H("NwEGxd",a.container),b);var c=new s_tE;s_zZe(c);c.bFb=!1;c.Nb&&s_AZe(c);c.PEb=!0;s_uE(c);c.QOa=!0;c.Jb&&s_AZe(c);c.Ie=c.Ba.mOa;s_EZe(c);s_xZe(c);s_WAo(c);c.Tk(b);a.oa=c;var d=s_H("Gwgzqd",a.container),e=s_H("Ru1Ao",a.container);b=s_Nb("OouJcb");var f=s_Nb("rzG2be");s_l(c,"select",function(){return s_ZAo(a)});s_l(a.container,"keyup",function(g){27===g.keyCode&&a.Fba()});s_l(d,"keydown",function(g){9===g.keyCode&&g.shiftKey&&(g.preventDefault(),
e.focus())});s_l(e,"keydown",function(g){9!==g.keyCode||g.shiftKey||(g.preventDefault(),d.focus())});s_l(e,"click",function(){for(var g=[s_Nb("OouJcb"),s_Nb("rzG2be")],k=new Date,h=new s_JAo(s_XAo),l=new s_Ky(s_XAo.replace(/yy/,"y")),m=0;m<g.length;m++){var n=g[m],p=n.value.trim();0!==p.length&&h.parse(p,k,{validate:!0})===p.length&&(n.value=l.format(k))}});s_1Ao(a,b);s_1Ao(a,f);s_l(window,"resize",function(){return a.wa()})};
s_qR.prototype.wa=function(){if(this.container){var a=this.container,b=Math.max(s_H("tmDYm",a).clientWidth,s_H("iWBKNe",a).clientWidth),c=s_St()?"right":"left",d=s_H("J6UZg",a),e=s_i.getSize(document.body||document.documentElement),f=s_i.getSize(d),g=f.width+b;g<e.width?(d.style.width=g+"px",s_H("NwEGxd",a).style[c]=b+"px",s_K.remove(d,"QIQ7Cc")):(d.style.width=e.width+"px",s_H("NwEGxd",a).style[c]="0",s_K.add(d,"QIQ7Cc"));this.Ba?(a=s_Yu(0,!0),s_i.xl(d)+f.height<=a?d.style.top="":d.style.top=Math.max(0,
a-f.height)+"px"):d.style.top="0"}};s_qR.prototype.SDd=function(){this.wa()};var s_1Ao=function(a,b){s_l(b,"keyup",function(c){s_YAo(a,b);27===c.keyCode&&a.Fba()})};s_qR.prototype.Xga=function(a){this.ka=a=a.actionElement.el();s__Ao(this,a);s_YAo(this,a)};
s_qR.prototype.Fba=function(){if(this.link){var a=s_Nb("top_nav");a:{for(var b=this.link.parentElement;b&&b!==a;b=b.parentElement)if(b.hasAttribute("role")){a=b;break a}a=null}a.focus();this.link=null}this.container&&(this.container.style.display="none",this.ka=null)};s_qR.prototype.Uaf=function(a){(a=a.actionElement.el())&&s_3Ao(this,a)};
var s_3Ao=function(a,b){a.link=b;a.container||(b=s_H("n5Ug4b",b.parentElement),s_Oh(s_Nb("top_nav"),b),b.style.display="block",a.container=b,s_$c(a.container,a.getRoot().el()),s_2Ao(a));a.container.style.display="block";a.wa();var c=s_Nb("OouJcb");s_YAo(a,c);s_fc(function(){c.focus()})};s_qR.prototype.Uxa=function(){s_UAo()};s_qR.prototype.YKa=function(){s_UAo();s_Nb("T3kYXe").submit()};s_M(s_qR.prototype,"hNEEAb",function(){return this.YKa});s_M(s_qR.prototype,"zbvklb",function(){return this.Uxa});
s_M(s_qR.prototype,"EEGHee",function(){return this.Uaf});s_M(s_qR.prototype,"xp3IKd",function(){return this.Fba});s_M(s_qR.prototype,"daRB0b",function(){return this.Xga});s_M(s_qR.prototype,"Rb1Mac",function(){return this.SDd});s_M(s_qR.prototype,"Kpa0wd",function(){return this.lDe});s_M(s_qR.prototype,"jFBxGd",function(){return this.k2d});s_M(s_qR.prototype,"VUQXyf",function(){return this.w$e});s_M(s_qR.prototype,"k4Iseb",function(){return this.Eb});s_M(s_qR.prototype,"wUeKKe",function(){return this.c_d});
s_M(s_qR.prototype,"wKX3te",function(){return this.c2d});s_V(s_QOa,s_qR);

s_b();

}catch(e){_DumpException(e)}
try{
s_hd(s_kl);

}catch(e){_DumpException(e)}
try{
s_a("kHVSUb");

var s_rJb=function(a){s_J.call(this,a.Ka)};s_u(s_rJb,s_J);s_rJb.ob=s_J.ob;s_rJb.Fa=s_J.Fa;s_rJb.prototype.isAvailable=function(){return!1};s_rJb.prototype.Xl=function(){return s_Me("uim","ebm")};s_rJb.prototype.Eq=function(){return s_Me("uim","xbm")};s_rJb.prototype.ty=function(){return!1};s_pj(s_tJa,s_rJb);

s_b();

}catch(e){_DumpException(e)}
try{
var s_LVe=function(a,b,c){c=void 0===c?"m":c;var d=void 0===d?!0:d;var e=void 0===e?a:e;if(s_ac("l")){var f=window.localStorage;e=new s_Zfa("l",e);b=s_e(b);for(var g=b.next();!g.done;g=b.next()){g=g.value;var k=a+"::"+g,h=f.getItem(k);d&&f.removeItem(k);null===e.get(g)&&null!==h&&(k=JSON.parse(h),null!==k&&e.set(g,k,c))}}};

}catch(e){_DumpException(e)}
try{
s_a("Exk9Ld");

var s_HWo={name:"abar"},s_IWo=function(a){s_m.call(this,a.Ka);s_LVe(s_HWo.name,["bbh"],"h");a=s_Rc("l",s_HWo);var b=1===a.get("bbh");this.getData("showSafesearchGlobalNotice").bool(!1)?a.set("bbh",1,"h"):b||(this.getRoot().show(),a.set("bbh",1,"h"))};s_u(s_IWo,s_m);s_IWo.Fa=s_m.Fa;s_IWo.prototype.Tse=function(){this.getRoot().hide()};s_M(s_IWo.prototype,"R194mf",function(){return this.Tse});s_V(s_SZa,s_IWo);

s_b();

}catch(e){_DumpException(e)}
try{
s_a("GGTOgd");

var s_JWo=function(a){s_m.call(this,a.Ka);this.hd=a.service.navigation};s_u(s_JWo,s_m);s_JWo.Fa=function(){return{service:{navigation:s_bu}}};s_JWo.prototype.Pkc=function(a){var b=s_L(this,"BFbLfd").el();b&&s_W(b);a=null==a.targetElement.Qc("checked");b=s_Bi(this.getRoot().getData(a?"setprefsOnUrl":"setprefsOffUrl"),"");s_du(this.hd,s_Hb(b));this.getRoot().setData("safeSearchEnabled",a?"1":"0");a&&this.gIc();return!0};s_JWo.prototype.gIc=function(){s_Rc("l",s_HWo).remove("bbh")};
s_M(s_JWo.prototype,"CojpKc",function(){return this.gIc});s_M(s_JWo.prototype,"hqPouf",function(){return this.Pkc});s_V(s_2Za,s_JWo);

s_b();

}catch(e){_DumpException(e)}
// Google Inc.
