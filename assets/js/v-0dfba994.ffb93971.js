"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92820],{47332:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-0dfba994",path:"/guide/adapters/flashing/flashing_the_cc2538.html",title:"Flashing the firmware on the CC2538 MODULE",lang:"en-US",frontmatter:{pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Windows",slug:"windows",children:[]}],filePathRelative:"guide/adapters/flashing/flashing_the_cc2538.md",git:{updatedTime:166749354e4}}},70513:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var r=a(66252),i=a(66824),s=a(76118),o=a(71615),n=a(57662),l=a(81490),c=a(58235),h=a(5703);const d=(0,r._)("h1",{id:"flashing-the-firmware-on-the-cc2538-module",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#flashing-the-firmware-on-the-cc2538-module","aria-hidden":"true"},"#"),(0,r.Uk)(" Flashing the firmware on the CC2538 MODULE")],-1),u=(0,r.Uk)("The CC2538 module needs to be flashed with a custom firmware. This firmware can be flashed with a JTAG programmer. The programmer can be found on "),g={href:"https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=jlink+V8+jtag",target:"_blank",rel:"noopener noreferrer"},m=(0,r.Uk)("Aliexpress"),p=(0,r._)("h2",{id:"windows",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),(0,r.Uk)(" Windows")],-1),f=(0,r.Uk)("Install SEGGER "),w={href:"https://www.segger.com/downloads/jlink/",target:"_blank",rel:"noopener noreferrer"},_=(0,r.Uk)("J-Link Software"),k=(0,r._)("img",{src:i,alt:""},null,-1),b=(0,r._)("li",null,[(0,r.Uk)("Open SEGGER J-Link Configurator and ensure your JTAG has the latest firmware (upgrade it if this is not your case) "),(0,r._)("img",{src:s,alt:""})],-1),x=(0,r._)("li",null,[(0,r.Uk)("Connect JTAG programmer to CC2538 module following below diagram: "),(0,r._)("img",{src:o,alt:""})],-1),j=(0,r.Uk)("Download "),v={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},T=(0,r.Uk)("latest firmware"),U=(0,r._)("li",null,[(0,r.Uk)('Open SEGGER J-Link Flash and select "Create a New Project" '),(0,r._)("img",{src:n,alt:""})],-1),q=(0,r._)("li",null,[(0,r.Uk)("Make sure you select the right module [TI CC2538SF53] and [JTAG] as Target Interface "),(0,r._)("img",{src:l,alt:""})],-1),C=(0,r._)("li",null,[(0,r.Uk)('Now select "Open Data File..." and select the right firmware [MODKAMRU_V3_USB.hex] '),(0,r._)("img",{src:c,alt:""})],-1),E=(0,r._)("li",null,[(0,r.Uk)("Now as a final step in order to successfully program the module select first [Target/Manual Programming/Erase Chip] (or press F4) and then [Target/Manual Programming/Program & Verify] (or press F6) "),(0,r._)("img",{src:h,alt:""})],-1),G=(0,r.uE)('<h1 id="how-to-check-the-installed-firmware-version" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-installed-firmware-version" aria-hidden="true">#</a> How-to check the installed firmware version</h1><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: &#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>In the above example the version is <code>20190425</code>.</p>',4),M={},S=(0,a(83744).Z)(M,[["render",function(e,t){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[d,(0,r._)("p",null,[u,(0,r._)("a",g,[m,(0,r.Wm)(a)])]),p,(0,r._)("ol",null,[(0,r._)("li",null,[f,(0,r._)("a",w,[_,(0,r.Wm)(a)]),k]),b,x,(0,r._)("li",null,[j,(0,r._)("a",v,[T,(0,r.Wm)(a)])]),U,q,C,E]),G],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,r]of t)e[a]=r;return e}},71615:(e,t,a)=>{e.exports=a.p+"assets/img/cc2538-jtag-1.08ea6bcf.jpg"},66824:(e,t,a)=>{e.exports=a.p+"assets/img/cc2538-jtag-2.88e4ab40.jpg"},76118:(e,t,a)=>{e.exports=a.p+"assets/img/cc2538-jtag-3.98498905.jpg"},57662:(e,t,a)=>{e.exports=a.p+"assets/img/cc2538-jtag-4.a4cf0bc3.jpg"},81490:(e,t,a)=>{e.exports=a.p+"assets/img/cc2538-jtag-5.e8b0db3a.jpg"},58235:(e,t,a)=>{e.exports=a.p+"assets/img/cc2538-jtag-6.5d2a2d7e.jpg"},5703:(e,t,a)=>{e.exports=a.p+"assets/img/cc2538-jtag-7.5cc9adce.jpg"}}]);