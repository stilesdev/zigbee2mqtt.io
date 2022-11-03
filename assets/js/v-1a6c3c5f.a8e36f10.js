"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81334],{92914:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-1a6c3c5f",path:"/devices/ptvo.switch.html",title:"Custom devices (DiY) ptvo.switch control via MQTT",lang:"en-US",frontmatter:{title:"Custom devices (DiY) ptvo.switch control via MQTT",description:"Integrate your Custom devices (DiY) ptvo.switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-09-08T21:16:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Deprecated click event",slug:"deprecated-click-event",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (text)",slug:"action-text",children:[]},{level:3,title:"Switch (l1 endpoint)",slug:"switch-l1-endpoint",children:[]},{level:3,title:"L1 (text, l1 endpoint)",slug:"l1-text-l1-endpoint",children:[]},{level:3,title:"Switch (l2 endpoint)",slug:"switch-l2-endpoint",children:[]},{level:3,title:"L2 (text, l2 endpoint)",slug:"l2-text-l2-endpoint",children:[]},{level:3,title:"Switch (l3 endpoint)",slug:"switch-l3-endpoint",children:[]},{level:3,title:"L3 (text, l3 endpoint)",slug:"l3-text-l3-endpoint",children:[]},{level:3,title:"Switch (l4 endpoint)",slug:"switch-l4-endpoint",children:[]},{level:3,title:"L4 (text, l4 endpoint)",slug:"l4-text-l4-endpoint",children:[]},{level:3,title:"Switch (l5 endpoint)",slug:"switch-l5-endpoint",children:[]},{level:3,title:"L5 (text, l5 endpoint)",slug:"l5-text-l5-endpoint",children:[]},{level:3,title:"Switch (l6 endpoint)",slug:"switch-l6-endpoint",children:[]},{level:3,title:"L6 (text, l6 endpoint)",slug:"l6-text-l6-endpoint",children:[]},{level:3,title:"Switch (l7 endpoint)",slug:"switch-l7-endpoint",children:[]},{level:3,title:"L7 (text, l7 endpoint)",slug:"l7-text-l7-endpoint",children:[]},{level:3,title:"Switch (l8 endpoint)",slug:"switch-l8-endpoint",children:[]},{level:3,title:"L8 (text, l8 endpoint)",slug:"l8-text-l8-endpoint",children:[]},{level:3,title:"Switch (l9 endpoint)",slug:"switch-l9-endpoint",children:[]},{level:3,title:"L9 (text, l9 endpoint)",slug:"l9-text-l9-endpoint",children:[]},{level:3,title:"Switch (l10 endpoint)",slug:"switch-l10-endpoint",children:[]},{level:3,title:"L10 (text, l10 endpoint)",slug:"l10-text-l10-endpoint",children:[]},{level:3,title:"Switch (l11 endpoint)",slug:"switch-l11-endpoint",children:[]},{level:3,title:"L11 (text, l11 endpoint)",slug:"l11-text-l11-endpoint",children:[]},{level:3,title:"Switch (l12 endpoint)",slug:"switch-l12-endpoint",children:[]},{level:3,title:"L12 (text, l12 endpoint)",slug:"l12-text-l12-endpoint",children:[]},{level:3,title:"Switch (l13 endpoint)",slug:"switch-l13-endpoint",children:[]},{level:3,title:"L13 (text, l13 endpoint)",slug:"l13-text-l13-endpoint",children:[]},{level:3,title:"Switch (l14 endpoint)",slug:"switch-l14-endpoint",children:[]},{level:3,title:"L14 (text, l14 endpoint)",slug:"l14-text-l14-endpoint",children:[]},{level:3,title:"Switch (l15 endpoint)",slug:"switch-l15-endpoint",children:[]},{level:3,title:"L15 (text, l15 endpoint)",slug:"l15-text-l15-endpoint",children:[]},{level:3,title:"Switch (l16 endpoint)",slug:"switch-l16-endpoint",children:[]},{level:3,title:"L16 (text, l16 endpoint)",slug:"l16-text-l16-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ptvo.switch.md",git:{updatedTime:166749354e4}}},37988:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var d=o(66252);const i=(0,d._)("h1",{id:"custom-devices-diy-ptvo-switch",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#custom-devices-diy-ptvo-switch","aria-hidden":"true"},"#"),(0,d.Uk)(" Custom devices (DiY) ptvo.switch")],-1),c=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),a=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"ptvo.switch")],-1),l=(0,d._)("tr",null,[(0,d._)("td",null,"Vendor"),(0,d._)("td",null,"Custom devices (DiY)")],-1),s=(0,d._)("td",null,"Description",-1),n={href:"https://ptvo.info/zigbee-switch-configurable-firmware-router-199/",target:"_blank",rel:"noopener noreferrer"},u=(0,d.Uk)("Multi-channel relay switch"),h=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"action, switch (state), l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, linkquality")],-1),p=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ptvo.switch.jpg",alt:"Custom devices (DiY) ptvo.switch"})])],-1),r=(0,d.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event" aria-hidden="true">#</a> Deprecated click event</h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),q=(0,d.Uk)("How to use device type specific configuration"),g=(0,d.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-text" tabindex="-1"><a class="header-anchor" href="#action-text" aria-hidden="true">#</a> Action (text)</h3><p>Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;action&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="l1-text-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#l1-text-l1-endpoint" aria-hidden="true">#</a> L1 (text, l1 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l1&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="l2-text-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#l2-text-l2-endpoint" aria-hidden="true">#</a> L2 (text, l2 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l2&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint" aria-hidden="true">#</a> Switch (l3 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l3&quot;: &quot;&quot;}</code>.</p><h3 id="l3-text-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#l3-text-l3-endpoint" aria-hidden="true">#</a> L3 (text, l3 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l3&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l4-endpoint" aria-hidden="true">#</a> Switch (l4 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l4</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l4&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l4&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l4&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l4&quot;: &quot;&quot;}</code>.</p><h3 id="l4-text-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#l4-text-l4-endpoint" aria-hidden="true">#</a> L4 (text, l4 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l4&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l5-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l5-endpoint" aria-hidden="true">#</a> Switch (l5 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l5</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l5&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l5&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l5&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l5&quot;: &quot;&quot;}</code>.</p><h3 id="l5-text-l5-endpoint" tabindex="-1"><a class="header-anchor" href="#l5-text-l5-endpoint" aria-hidden="true">#</a> L5 (text, l5 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l5</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l5&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l5&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l6-endpoint" aria-hidden="true">#</a> Switch (l6 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l6</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l6&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l6&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l6&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l6&quot;: &quot;&quot;}</code>.</p><h3 id="l6-text-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#l6-text-l6-endpoint" aria-hidden="true">#</a> L6 (text, l6 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l6</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l6&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l6&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l7-endpoint" aria-hidden="true">#</a> Switch (l7 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l7</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l7&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l7&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l7&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l7&quot;: &quot;&quot;}</code>.</p><h3 id="l7-text-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#l7-text-l7-endpoint" aria-hidden="true">#</a> L7 (text, l7 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l7&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l8-endpoint" aria-hidden="true">#</a> Switch (l8 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l8</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l8&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l8&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l8&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l8&quot;: &quot;&quot;}</code>.</p><h3 id="l8-text-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#l8-text-l8-endpoint" aria-hidden="true">#</a> L8 (text, l8 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l8&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l9-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l9-endpoint" aria-hidden="true">#</a> Switch (l9 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l9</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l9&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l9&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l9&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l9&quot;: &quot;&quot;}</code>.</p><h3 id="l9-text-l9-endpoint" tabindex="-1"><a class="header-anchor" href="#l9-text-l9-endpoint" aria-hidden="true">#</a> L9 (text, l9 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l9</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l9&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l9&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l10-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l10-endpoint" aria-hidden="true">#</a> Switch (l10 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l10</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l10&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l10&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l10&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l10&quot;: &quot;&quot;}</code>.</p><h3 id="l10-text-l10-endpoint" tabindex="-1"><a class="header-anchor" href="#l10-text-l10-endpoint" aria-hidden="true">#</a> L10 (text, l10 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l10</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l10&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l10&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l11-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l11-endpoint" aria-hidden="true">#</a> Switch (l11 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l11</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l11&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l11&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l11&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l11&quot;: &quot;&quot;}</code>.</p><h3 id="l11-text-l11-endpoint" tabindex="-1"><a class="header-anchor" href="#l11-text-l11-endpoint" aria-hidden="true">#</a> L11 (text, l11 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l11</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l11&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l11&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l12-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l12-endpoint" aria-hidden="true">#</a> Switch (l12 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l12</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l12&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l12&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l12&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l12&quot;: &quot;&quot;}</code>.</p><h3 id="l12-text-l12-endpoint" tabindex="-1"><a class="header-anchor" href="#l12-text-l12-endpoint" aria-hidden="true">#</a> L12 (text, l12 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l12</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l12&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l12&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l13-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l13-endpoint" aria-hidden="true">#</a> Switch (l13 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l13</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l13&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l13&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l13&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l13&quot;: &quot;&quot;}</code>.</p><h3 id="l13-text-l13-endpoint" tabindex="-1"><a class="header-anchor" href="#l13-text-l13-endpoint" aria-hidden="true">#</a> L13 (text, l13 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l13</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l13&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l13&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l14-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l14-endpoint" aria-hidden="true">#</a> Switch (l14 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l14</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l14&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l14&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l14&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l14&quot;: &quot;&quot;}</code>.</p><h3 id="l14-text-l14-endpoint" tabindex="-1"><a class="header-anchor" href="#l14-text-l14-endpoint" aria-hidden="true">#</a> L14 (text, l14 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l14</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l14&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l14&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l15-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l15-endpoint" aria-hidden="true">#</a> Switch (l15 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l15</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l15&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l15&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l15&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l15&quot;: &quot;&quot;}</code>.</p><h3 id="l15-text-l15-endpoint" tabindex="-1"><a class="header-anchor" href="#l15-text-l15-endpoint" aria-hidden="true">#</a> L15 (text, l15 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l15</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l15&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l15&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l16-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l16-endpoint" aria-hidden="true">#</a> Switch (l16 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l16</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l16&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l16&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l16&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l16&quot;: &quot;&quot;}</code>.</p><h3 id="l16-text-l16-endpoint" tabindex="-1"><a class="header-anchor" href="#l16-text-l16-endpoint" aria-hidden="true">#</a> L16 (text, l16 endpoint)</h3><p>State or sensor value. Value can be found in the published state on the <code>l16</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l16&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l16&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',70),b={},w=(0,o(83744).Z)(b,[["render",function(e,t){const o=(0,d.up)("OutboundLink"),b=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("table",null,[c,(0,d._)("tbody",null,[a,l,(0,d._)("tr",null,[s,(0,d._)("td",null,[(0,d._)("a",n,[u,(0,d.Wm)(o)])])]),h,p])]),r,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(b,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[q])),_:1})])]),g],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);