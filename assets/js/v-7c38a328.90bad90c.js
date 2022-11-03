"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13944],{45719:(e,A,l)=>{l.r(A),l.d(A,{data:()=>t});const t={key:"v-7c38a328",path:"/devices/GZCGQ01LM.html",title:"Xiaomi GZCGQ01LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi GZCGQ01LM control via MQTT",description:"Integrate your Xiaomi GZCGQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-01-14T19:34:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Power_outage_count (numeric)",slug:"power-outage-count-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GZCGQ01LM.md",git:{updatedTime:166749354e4}}},42372:(e,A,l)=>{l.r(A),l.d(A,{default:()=>C});var t=l(66252),n=l(27963);const i=(0,t._)("h1",{id:"xiaomi-gzcgq01lm",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#xiaomi-gzcgq01lm","aria-hidden":"true"},"#"),(0,t.Uk)(" Xiaomi GZCGQ01LM")],-1),a=(0,t._)("table",null,[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,"Model"),(0,t._)("td",null,"GZCGQ01LM")]),(0,t._)("tr",null,[(0,t._)("td",null,"Vendor"),(0,t._)("td",null,"Xiaomi")]),(0,t._)("tr",null,[(0,t._)("td",null,"Description"),(0,t._)("td",null,"MiJia light intensity sensor")]),(0,t._)("tr",null,[(0,t._)("td",null,"Exposes"),(0,t._)("td",null,"battery, voltage, illuminance, illuminance_lux, power_outage_count, linkquality")]),(0,t._)("tr",null,[(0,t._)("td",null,"Picture"),(0,t._)("td",null,[(0,t._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/GZCGQ01LM.jpg",alt:"Xiaomi GZCGQ01LM"})])]),(0,t._)("tr",null,[(0,t._)("td",null,"White-label"),(0,t._)("td",null,"Xiaomi YTC4043GL")])])],-1),r=(0,t._)("h2",{id:"notes",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,t.Uk)(" Notes")],-1),u=(0,t._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,t.Uk)(" Adapter firmware")],-1),o=(0,t._)("p",null,"In order for this device to work (fully), at least the following firmware is required on your adapter:",-1),c=(0,t.Uk)("CC2530/CC2531: "),d={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},s=(0,t._)("code",null,"20211115",-1),h=(0,t.Uk)("CC1352/CC2652: "),m={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},p=(0,t._)("code",null,"20211114",-1),b=(0,t.Uk)("CC2538: "),f={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},k=(0,t._)("code",null,"20211222",-1),v=(0,t.Uk)("Conbee II: "),_={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},X=(0,t._)("code",null,"0x26720700",-1),g=(0,t._)("p",null,[(0,t._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),U=(0,t._)("h3",{id:"pairing",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,t.Uk)(" Pairing")],-1),x=(0,t._)("p",null,"Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn't work, try with a single short button press.",-1),w=(0,t._)("p",null,[(0,t._)("img",{src:n,alt:"GZCGQ01LM pairing"})],-1),y=(0,t._)("h2",{id:"options",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,t.Uk)(" Options")],-1),Q=(0,t.Uk)("How to use device type specific configuration"),q=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("code",null,"illuminance_calibration"),(0,t.Uk)(": Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.")])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("code",null,"illuminance_lux_calibration"),(0,t.Uk)(": Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.")])])],-1),j=(0,t._)("h2",{id:"exposes",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#exposes","aria-hidden":"true"},"#"),(0,t.Uk)(" Exposes")],-1),V=(0,t._)("h3",{id:"battery-numeric",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#battery-numeric","aria-hidden":"true"},"#"),(0,t.Uk)(" Battery (numeric)")],-1),T=(0,t._)("p",null,[(0,t.Uk)("Remaining battery in %. Value can be found in the published state on the "),(0,t._)("code",null,"battery"),(0,t.Uk)(" property. It's not possible to read ("),(0,t._)("code",null,"/get"),(0,t.Uk)(") or write ("),(0,t._)("code",null,"/set"),(0,t.Uk)(") this value. The minimal value is "),(0,t._)("code",null,"0"),(0,t.Uk)(" and the maximum value is "),(0,t._)("code",null,"100"),(0,t.Uk)(". The unit of this value is "),(0,t._)("code",null,"%"),(0,t.Uk)(".")],-1),L=(0,t._)("h3",{id:"voltage-numeric",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#voltage-numeric","aria-hidden":"true"},"#"),(0,t.Uk)(" Voltage (numeric)")],-1),Z=(0,t._)("p",null,[(0,t.Uk)("Voltage of the battery in millivolts. Value can be found in the published state on the "),(0,t._)("code",null,"voltage"),(0,t.Uk)(" property. It's not possible to read ("),(0,t._)("code",null,"/get"),(0,t.Uk)(") or write ("),(0,t._)("code",null,"/set"),(0,t.Uk)(") this value. The unit of this value is "),(0,t._)("code",null,"mV"),(0,t.Uk)(".")],-1),F=(0,t._)("h3",{id:"illuminance-numeric",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#illuminance-numeric","aria-hidden":"true"},"#"),(0,t.Uk)(" Illuminance (numeric)")],-1),B=(0,t._)("p",null,[(0,t.Uk)("Raw measured illuminance. Value can be found in the published state on the "),(0,t._)("code",null,"illuminance"),(0,t.Uk)(" property. To read ("),(0,t._)("code",null,"/get"),(0,t.Uk)(") the value publish a message to topic "),(0,t._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,t.Uk)(" with payload "),(0,t._)("code",null,'{"illuminance": ""}'),(0,t.Uk)(". It's not possible to write ("),(0,t._)("code",null,"/set"),(0,t.Uk)(") this value.")],-1),H=(0,t._)("h3",{id:"illuminance-lux-numeric",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#illuminance-lux-numeric","aria-hidden":"true"},"#"),(0,t.Uk)(" Illuminance_lux (numeric)")],-1),M=(0,t._)("p",null,[(0,t.Uk)("Measured illuminance in lux. Value can be found in the published state on the "),(0,t._)("code",null,"illuminance_lux"),(0,t.Uk)(" property. To read ("),(0,t._)("code",null,"/get"),(0,t.Uk)(") the value publish a message to topic "),(0,t._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,t.Uk)(" with payload "),(0,t._)("code",null,'{"illuminance_lux": ""}'),(0,t.Uk)(". It's not possible to write ("),(0,t._)("code",null,"/set"),(0,t.Uk)(") this value. The unit of this value is "),(0,t._)("code",null,"lx"),(0,t.Uk)(".")],-1),N=(0,t._)("h3",{id:"power-outage-count-numeric",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#power-outage-count-numeric","aria-hidden":"true"},"#"),(0,t.Uk)(" Power_outage_count (numeric)")],-1),P=(0,t._)("p",null,[(0,t.Uk)("Number of power outages. Value can be found in the published state on the "),(0,t._)("code",null,"power_outage_count"),(0,t.Uk)(" property. It's not possible to read ("),(0,t._)("code",null,"/get"),(0,t.Uk)(") or write ("),(0,t._)("code",null,"/set"),(0,t.Uk)(") this value.")],-1),z=(0,t._)("h3",{id:"linkquality-numeric",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#linkquality-numeric","aria-hidden":"true"},"#"),(0,t.Uk)(" Linkquality (numeric)")],-1),W=(0,t._)("p",null,[(0,t.Uk)("Link quality (signal strength). Value can be found in the published state on the "),(0,t._)("code",null,"linkquality"),(0,t.Uk)(" property. It's not possible to read ("),(0,t._)("code",null,"/get"),(0,t.Uk)(") or write ("),(0,t._)("code",null,"/set"),(0,t.Uk)(") this value. The minimal value is "),(0,t._)("code",null,"0"),(0,t.Uk)(" and the maximum value is "),(0,t._)("code",null,"255"),(0,t.Uk)(". The unit of this value is "),(0,t._)("code",null,"lqi"),(0,t.Uk)(".")],-1),D={},C=(0,l(83744).Z)(D,[["render",function(e,A){const l=(0,t.up)("OutboundLink"),n=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,a,r,u,o,(0,t._)("ul",null,[(0,t._)("li",null,[c,(0,t._)("a",d,[s,(0,t.Wm)(l)])]),(0,t._)("li",null,[h,(0,t._)("a",m,[p,(0,t.Wm)(l)])]),(0,t._)("li",null,[b,(0,t._)("a",f,[k,(0,t.Wm)(l)])]),(0,t._)("li",null,[v,(0,t._)("a",_,[X,(0,t.Wm)(l)])])]),g,U,x,w,y,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[Q])),_:1})])]),q,j,V,T,L,Z,F,B,H,M,N,P,z,W],64)}]])},83744:(e,A)=>{A.Z=(e,A)=>{for(const[l,t]of A)e[l]=t;return e}},27963:e=>{e.exports="data:image/jpeg;base64,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"}}]);