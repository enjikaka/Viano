webpackJsonp([1],{0:function(e,t,r){e.exports=r("NHnr")},"0gc2":function(e,t){},"25dj":function(e,t){},"B9+v":function(e,t){},G0Av:function(e,t){},Iy1A:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("/5sW"),n=r("rzQm"),s=r.n(n),o=r("8aIh"),i=r.n(o),u={created:function(){var e;if(!this.timeSignature||2!==this.timeSignature.length||0!==this.timeSignature.filter(function(e){return"number"!==typeof e}).length)throw new Error("Invalid time signature. Expected an array of format [4, 4]. Instead received: ".concat(this.timeSignature));if(this.tempo<=0)throw new Error("Invalid tempo. Expected a tempo above 0 bpm. Instead received: ".concat(this.tempo));this.song=i.a.song(this.title),this.song.setTempo(this.tempo),(e=this.song).setTimeSignature.apply(e,s()(this.timeSignature))},data:function(){return{playing:!1,song:null}},methods:{registerMeasure:function(e,t){this.song.at(e).plays(t)},togglePlay:function(){this.playing?this.song.stop():this.song.play(),this.playing=!this.playing}},props:{tempo:{required:!1,default:120,type:Number},timeSignature:{required:!1,default:function(){return[4,4]},type:Array},title:{required:!1,default:"Untitled",type:String}},provide:function(){return{registerMeasure:this.registerMeasure}}},l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"player"},[r("div",{staticClass:"controls"},[r("div",{staticClass:"play-control",class:{stop:e.playing},on:{click:function(t){e.togglePlay()}}})]),r("div",{staticClass:"title",domProps:{textContent:e._s(e.title)}}),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._t("default")],2)])},c=[],v=r("XyMi");function h(e){r("mgLI"),r("TeKp")}var d=!1,f=h,p="data-v-22a7ee68",m=null,g=Object(v["a"])(u,l,c,d,f,p,m),N=g.exports,y={created:function(){if(this.measure<0)throw new Error("Invalid measure. Expected a measure of 0 or greater. Instead received: ".concat(this.measure))},data:function(){return{toRegister:[]}},inject:["registerMeasure"],methods:{registerNote:function(e){this.toRegister.push(e)},registerSequence:function(e){this.toRegister.push(e)},registerChord:function(e){this.toRegister.push(e)}},mounted:function(){var e=this;this.toRegister.forEach(function(t){return e.registerMeasure(e.measure,t)})},props:{measure:{required:!1,default:0,type:Number}},provide:function(){return{registerChord:this.registerChord,registerNote:this.registerNote,registerSequence:this.registerSequence}}},b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._t("default")],2)},_=[];function q(e){r("25dj")}var C=!1,S=q,E=null,w=null,I=Object(v["a"])(y,b,_,C,S,E,w),x=I.exports,R=(r("tqSY"),{data:function(){return{toRegister:[]}},inject:["registerSequence"],methods:{registerChord:function(e){this.toRegister.push(e)},registerNote:function(e){this.toRegister.push(e)},registerRest:function(e){this.toRegister.push(e)}},mounted:function(){var e=this.toRegister.slice();if(this.repeat)for(var t=0;t<this.repeat;t++)e.push.apply(e,this.toRegister);this.registerSequence(i.a.sequence(e))},props:{repeat:{required:!1,type:Number}},provide:function(){return{registerChord:this.registerChord,registerNote:this.registerNote,registerRest:this.registerRest}}}),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._t("default")],2)},P=[];function V(e){r("q+bY")}var A=!1,O=V,$=null,M=null,L=Object(v["a"])(R,j,P,A,O,$,M),T=L.exports,Y=(r("EuXz"),r("mJx5"),function(e){var t=e.split("/"),r=1===t.length?Number(t[0]):Number(t[0])/Number(t[1]);return r}),B={created:function(){if("string"!==typeof this.value||isNaN(Y(this.value))){if(!("number"===typeof this.value&&this.value>0))throw new Error('Invalid note value. Expected a value of format "1/4". Instead received: '.concat(this.value));this.noteValue=this.value}else this.noteValue=Y(this.value);if(this.repeat<=0)throw new Error("Invalid note repeat value. Expected a value above 0. Instead received: ".concat(this.repeat))},data:function(){return{noteValue:null}},inject:["registerNote"],mounted:function(){for(var e=0;e<this.repeat;e++)this.registerNote(i.a.note.apply(i.a,[this.name,this.noteValue].concat(s()(this.styles))))},props:{name:{required:!0,type:String},repeat:{required:!1,default:1,type:Number},styles:{required:!1,default:function(){return[]},type:Array},value:{required:!0}}},H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span")},Q=[];function k(e){r("0gc2")}var z=!1,D=k,G=null,J=null,K=Object(v["a"])(B,H,Q,z,D,G,J),X=K.exports,U=function(e){var t=e.split("/"),r=1===t.length?Number(t[0]):Number(t[0])/Number(t[1]);return r},W={created:function(){if("string"!==typeof this.value||isNaN(U(this.value))){if(!("number"===typeof this.value&&this.value>0))throw new Error('Invalid note value. Expected a value of format "1/4". Instead received: '.concat(this.value));this.noteValue=this.value}else this.noteValue=U(this.value)},data:function(){return{noteValue:null}},inject:["registerRest"],mounted:function(){this.registerRest(i.a.rest(this.noteValue))},props:{value:{required:!0}}},F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span")},Z=[];function ee(e){r("B9+v")}var te=!1,re=ee,ae=null,ne=null,se=Object(v["a"])(W,F,Z,te,re,ae,ne),oe=se.exports,ie={components:{Song:N,Part:x,Sequence:T,Note:X,Rest:oe}},ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Song",{attrs:{title:"La cucaracha",tempo:200,"time-signature":[4,4]}},[r("Part",{attrs:{measure:0}},[r("Sequence",[r("Note",{attrs:{name:"c4",value:"1/8",repeat:3}},[e._v("          La cuca-\n      ")]),r("Note",{attrs:{name:"f4",value:"3/8"}},[e._v("               ra-\n      ")]),r("Note",{attrs:{name:"a4",value:"1/4"}},[e._v("               cha\n      ")]),r("Note",{attrs:{name:"c4",value:"1/8",repeat:3}},[e._v("   La cuca-\n      ")]),r("Note",{attrs:{name:"f4",value:"3/8"}},[e._v("               ra-\n      ")]),r("Note",{attrs:{name:"a4",value:"1/4"}},[e._v("               cha\n      ")]),r("Rest",{attrs:{value:"3/8"}}),r("Note",{attrs:{name:"f4",value:"1/4"}},[e._v("                      ya\n      ")]),r("Note",{attrs:{name:"f4",value:"1/8"}},[e._v("               no\n      ")]),r("Note",{attrs:{name:"e4",value:"1/8",repeat:2}},[e._v("   puede\n      ")]),r("Note",{attrs:{name:"d4",value:"1/8",repeat:2}},[e._v("   cami-\n      ")]),r("Note",{attrs:{name:"c4",value:"3/8"}},[e._v("               nar\n      ")])],1)],1)],1)},le=[];function ce(e){r("Iy1A")}var ve=!1,he=ce,de=null,fe=null,pe=Object(v["a"])(ie,ue,le,ve,he,de,fe),me=pe.exports,ge=function(e){var t=e.split("/"),r=1===t.length?Number(t[0]):Number(t[0])/Number(t[1]);return r},Ne={created:function(){var e;if("string"===typeof this.notes)e=this.notes.split(" ");else{if(!Array.isArray(this.notes))throw new Error('Invalid notes for chord. Expected an array or a space-separated list of notes, e.g. "c4 e4 g4". Instead received: '.concat(this.notes));if(e=this.notes,e.filter(function(e){return"string"!==typeof e}).length>0)throw new Error("Invalid notes for chord. An element in the array was not a string. Received: ".concat(this.notes))}if(this.chordNotes=e,"string"!==typeof this.value||isNaN(ge(this.value))){if(!("number"===typeof this.value&&this.value>0))throw new Error('Invalid note value. Expected a value of format "1/4". Instead received: '.concat(this.value));this.noteValue=this.value}else this.noteValue=ge(this.value);if(this.repeat<=0)throw new Error("Invalid chord repeat value. Expected a value above 0. Instead received: ".concat(this.repeat))},data:function(){return{chordNotes:null,noteValue:null}},inject:["registerChord"],mounted:function(){for(var e=0;e<this.repeat;e++)this.registerChord(i.a.chord.apply(i.a,[this.chordNotes,this.noteValue].concat(s()(this.styles))))},props:{notes:{required:!0},repeat:{required:!1,default:1,type:Number},styles:{required:!1,default:function(){return[]},type:Array},value:{required:!0}}},ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span")},be=[];function _e(e){r("G0Av")}var qe=!1,Ce=_e,Se=null,Ee=null,we=Object(v["a"])(Ne,ye,be,qe,Ce,Se,Ee),Ie=we.exports,xe={components:{Song:N,Part:x,Sequence:T,Note:X,Rest:oe,Chord:Ie}},Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Song",{attrs:{title:"Pi song",tempo:102,"time-signature":[4,4]}},[r("Part",{attrs:{measure:0}},[r("Sequence",[r("Note",{attrs:{name:"c3",value:"1/8"}}),r("Chord",{attrs:{notes:"e3 g3",value:"1/4"}}),r("Chord",{attrs:{notes:"e3 g3",value:"1/8"}}),r("Note",{attrs:{name:"c3",value:"1/8"}}),r("Chord",{attrs:{notes:"e3 g3",value:"1/8"}}),r("Note",{attrs:{name:"c3",value:"1/8"}}),r("Chord",{attrs:{notes:"b2 e3 g3",value:"1/8"}})],1)],1),r("Part",{attrs:{measure:1}},[r("Sequence",[r("Note",{attrs:{name:"a2",value:"1/8"}}),r("Chord",{attrs:{notes:"c3 e3",value:"1/4"}}),r("Chord",{attrs:{notes:"c3 e3",value:"1/8"}}),r("Note",{attrs:{name:"a2",value:"1/8"}}),r("Chord",{attrs:{notes:"c3 e3",value:"1/8"}}),r("Note",{attrs:{name:"a2",value:"1/8"}}),r("Chord",{attrs:{notes:"c3 e3",value:"1/8"}})],1)],1),r("Part",{attrs:{measure:2}},[r("Sequence",[r("Note",{attrs:{name:"f2",value:"1/8"}}),r("Chord",{attrs:{notes:"a2 c3",value:"1/4"}}),r("Chord",{attrs:{notes:"a2 c3",value:"1/8"}}),r("Note",{attrs:{name:"f2",value:"1/8"}}),r("Chord",{attrs:{notes:"a2 c3",value:"1/8"}}),r("Note",{attrs:{name:"f2",value:"1/8"}}),r("Chord",{attrs:{notes:"f#2 a2 c3",value:"1/8"}})],1)],1),r("Part",{attrs:{measure:3}},[r("Sequence",[r("Note",{attrs:{name:"g2",value:"1/8"}}),r("Chord",{attrs:{notes:"b2 d3",value:"1/4"}}),r("Chord",{attrs:{notes:"b2 d3",value:"1/8"}}),r("Note",{attrs:{name:"g2",value:"1/8"}}),r("Chord",{attrs:{notes:"g2 b2 d3",value:"1/8"}}),r("Note",{attrs:{name:"a2",value:"1/8"}}),r("Chord",{attrs:{notes:"b2 d3",value:"1/8"}})],1)],1),r("Part",{attrs:{measure:0}},[r("Sequence",[r("Note",{attrs:{name:"g4",value:"2/4"}}),r("Note",{attrs:{name:"d4",value:"1/4"}}),r("Note",{attrs:{name:"a4",value:"2/4"}})],1)],1),r("Part",{attrs:{measure:1}},[r("Sequence",[r("Rest",{attrs:{value:"0.25"}}),r("Note",{attrs:{name:"d4",value:"1/4"}}),r("Note",{attrs:{name:"c5",value:"1/16"}}),r("Note",{attrs:{name:"a5",value:"3/4"}}),r("Note",{attrs:{name:"e4",value:"1/8"}})],1)],1),r("Part",{attrs:{measure:2}},[r("Sequence",[r("Rest",{attrs:{value:"0.1875"}}),r("Note",{attrs:{name:"d5",value:"1/4"}}),r("Note",{attrs:{name:"c5",value:"3/4"}})],1)],1),r("Part",{attrs:{measure:3}},[r("Sequence",[r("Note",{attrs:{name:"g4",value:"1/4"}}),r("Note",{attrs:{name:"c5",value:"1/16"}}),r("Note",{attrs:{name:"g5",value:"1/16"}}),r("Note",{attrs:{name:"a5",value:"1/8"}}),r("Note",{attrs:{name:"e5",value:"1/16"}})],1)],1)],1)},je=[];function Pe(e){r("YcHB")}var Ve=!1,Ae=Pe,Oe=null,$e=null,Me=Object(v["a"])(xe,Re,je,Ve,Ae,Oe,$e),Le=Me.exports,Te={name:"app",components:{LaCucaracha:me,PiSong:Le}},Ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("la-cucaracha"),r("pi-song")],1)},Be=[];function He(e){r("QDNr")}var Qe=!1,ke=He,ze="data-v-7710a1f6",De=null,Ge=Object(v["a"])(Te,Ye,Be,Qe,ke,ze,De),Je=Ge.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(Je)}}).$mount("#app")},QDNr:function(e,t){},TeKp:function(e,t){},YcHB:function(e,t){},mgLI:function(e,t){},"q+bY":function(e,t){}},[0]);
//# sourceMappingURL=app.9e30bb80.js.map