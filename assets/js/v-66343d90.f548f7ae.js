"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[9307],{3854:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-66343d90",path:"/devices/QT-05M.html",title:"QOTO QT-05M control via MQTT",lang:"en-US",frontmatter:{title:"QOTO QT-05M control via MQTT",description:"Integrate your QOTO QT-05M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-31T11:26:27.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Water_flow (numeric)",slug:"water-flow-numeric",children:[]},{level:3,title:"Last_watering_duration (numeric)",slug:"last-watering-duration-numeric",children:[]},{level:3,title:"Remaining_watering_time (numeric)",slug:"remaining-watering-time-numeric",children:[]},{level:3,title:"Valve_state (numeric)",slug:"valve-state-numeric",children:[]},{level:3,title:"Shutdown_timer (numeric)",slug:"shutdown-timer-numeric",children:[]},{level:3,title:"Valve_state_auto_shutdown (numeric)",slug:"valve-state-auto-shutdown-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/QT-05M.md",git:{updatedTime:166749354e4}}},78830:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});const i=(0,a(66252).uE)('<h1 id="qoto-qt-05m" tabindex="-1"><a class="header-anchor" href="#qoto-qt-05m" aria-hidden="true">#</a> QOTO QT-05M</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>QT-05M</td></tr><tr><td>Vendor</td><td>QOTO</td></tr><tr><td>Description</td><td>Solar powered garden watering timer</td></tr><tr><td>Exposes</td><td>water_flow, last_watering_duration, remaining_watering_time, valve_state, shutdown_timer, valve_state_auto_shutdown, battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/QT-05M.jpg" alt="QOTO QT-05M"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="water-flow-numeric" tabindex="-1"><a class="header-anchor" href="#water-flow-numeric" aria-hidden="true">#</a> Water_flow (numeric)</h3><p>Current water flow in %.. Value can be found in the published state on the <code>water_flow</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="last-watering-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-watering-duration-numeric" aria-hidden="true">#</a> Last_watering_duration (numeric)</h3><p>Last watering duration in seconds.. Value can be found in the published state on the <code>last_watering_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>sec</code>.</p><h3 id="remaining-watering-time-numeric" tabindex="-1"><a class="header-anchor" href="#remaining-watering-time-numeric" aria-hidden="true">#</a> Remaining_watering_time (numeric)</h3><p>Remaning watering time (for auto shutdown). Updates every minute, and every 10s in the last minute.. Value can be found in the published state on the <code>remaining_watering_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>sec</code>.</p><h3 id="valve-state-numeric" tabindex="-1"><a class="header-anchor" href="#valve-state-numeric" aria-hidden="true">#</a> Valve_state (numeric)</h3><p>Set valve to %.. Value can be found in the published state on the <code>valve_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_state&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="shutdown-timer-numeric" tabindex="-1"><a class="header-anchor" href="#shutdown-timer-numeric" aria-hidden="true">#</a> Shutdown_timer (numeric)</h3><p>Auto shutdown in seconds.. Value can be found in the published state on the <code>shutdown_timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;shutdown_timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>14400</code>. The unit of this value is <code>sec</code>.</p><h3 id="valve-state-auto-shutdown-numeric" tabindex="-1"><a class="header-anchor" href="#valve-state-auto-shutdown-numeric" aria-hidden="true">#</a> Valve_state_auto_shutdown (numeric)</h3><p>Set valve to % with auto shutdown.. Value can be found in the published state on the <code>valve_state_auto_shutdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_state_auto_shutdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),o={},d=(0,a(83744).Z)(o,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);