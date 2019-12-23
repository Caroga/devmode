/*!
 * @project        Example Project
 * @name           amplitudeplayer.9e5b4699f3692863d139.js
 * @author         Andrew Welch
 * @build          Mon, Dec 23, 2019 10:07 AM ET
 * @release        9fd2850b8f997b81ba48349e3b9790f3aea2235a [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{98:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"single-song-player"}},[i("div",{staticClass:"bottom-container flex items-center"},[i("div",{staticClass:"control-container flex-shrink"},[i("a",{staticClass:"amplitude-play-pause",attrs:{title:"Play/Pause",href:"#",id:"play-pause"},on:{click:function(e){e.preventDefault(),t.playing=!t.playing}}},[i("div",{staticClass:"text-devmode-pink text-4xl cursor-pointer"},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.playing,expression:"!playing"}],staticClass:"icon-play"}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],staticClass:"icon-pause"})])])]),t._v(" "),i("div",{staticClass:"hidden sm:block time-container flex-shrink pr-3 pl-1"},[i("span",{staticClass:"current-time text-devmode-pink font-mono text-xs text-left"},[t._v("\n                "+t._s(t.currentTime)+"\n            ")])]),t._v(" "),i("div",{staticClass:"flex-grow px-1 pt-0"},[i("progress",{staticClass:"amplitude-song-played-progress w-full h-3 rounded",attrs:{id:"song-played-progress",max:"100"},domProps:{value:t.percentComplete},on:{click:t.seek}})]),t._v(" "),i("div",{staticClass:"time-container flex-shrink pl-3 pr-1"},[i("span",{staticClass:"duration text-devmode-pink font-mono text-xs text-left"},[t._v("\n                "+t._s(t.durationTime)+"\n            ")])])]),t._v(" "),i("audio",{ref:"audiofile",staticStyle:{display:"none"},attrs:{loop:t.innerLoop,src:t.url,preload:"auto",autoplay:t.autoPlay}})])};s._withStripped=!0;const a=t=>{return new Date(1e3*t).toISOString().substr(11,8)};var o={components:{},props:{title:String,artist:String,url:String,autoPlay:Boolean},data:()=>({audio:void 0,currentSeconds:0,durationSeconds:0,innerLoop:!1,loaded:!1,playing:!1,previousVolume:35,showVolume:!1,volume:100}),computed:{currentTime(){return a(this.currentSeconds)},durationTime(){return a(this.durationSeconds)},percentComplete(){return this.currentSeconds/this.durationSeconds*100},muted(){return this.volume/100==0}},watch:{playing(t){if(t)return this.audio.play();this.audio.pause()},volume(t){this.showVolume=!1,this.audio.volume=this.volume/100}},methods:{download(){this.stop(),window.open(this.file,"download")},load(){if(this.audio.readyState>=2)return this.loaded=!0,this.durationSeconds=parseInt(this.audio.duration),this.playing=!this.audio.paused;throw new Error("Failed to load sound file.")},mute(){if(this.muted)return this.volume=this.previousVolume;this.previousVolume=this.volume,this.volume=0},seek(t){if(!this.playing||"SPAN"===t.target.tagName)return;const e=t.target.getBoundingClientRect(),i=(t.clientX-e.left)/e.width;this.audio.currentTime=parseInt(this.audio.duration*i)},stop(){this.playing=!1,this.audio.currentTime=0},update(t){this.currentSeconds=parseInt(this.audio.currentTime)}},created(){this.innerLoop=this.loop},mounted(){this.audio=this.$el.querySelectorAll("audio")[0],this.audio.addEventListener("timeupdate",this.update),this.audio.addEventListener("loadeddata",this.load),this.audio.addEventListener("pause",()=>{this.playing=!1}),this.audio.addEventListener("play",()=>{this.playing=!0})}},n=i(38),r=Object(n.a)(o,s,[],!1,null,null,null);r.options.__file="src/vue/amplitude-player.vue";e.default=r.exports}}]);
//# sourceMappingURL=amplitudeplayer.9e5b4699f3692863d139.js.map