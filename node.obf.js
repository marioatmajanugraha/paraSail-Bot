const a0_0x506675=a0_0x358e;(function(_0xb00868,_0x13bc4f){const _0x44baae=a0_0x358e,_0x24dc9b=_0xb00868();while(!![]){try{const _0x592743=-parseInt(_0x44baae(0x199))/0x1+-parseInt(_0x44baae(0x185))/0x2+parseInt(_0x44baae(0x160))/0x3*(parseInt(_0x44baae(0x186))/0x4)+parseInt(_0x44baae(0x16b))/0x5*(-parseInt(_0x44baae(0x19b))/0x6)+-parseInt(_0x44baae(0x17f))/0x7+parseInt(_0x44baae(0x181))/0x8*(-parseInt(_0x44baae(0x16e))/0x9)+parseInt(_0x44baae(0x17a))/0xa;if(_0x592743===_0x13bc4f)break;else _0x24dc9b['push'](_0x24dc9b['shift']());}catch(_0x32f049){_0x24dc9b['push'](_0x24dc9b['shift']());}}}(a0_0x49bf,0x1b8a5));function a0_0x49bf(){const _0x2efb5a=['Bearer\x20','/v1/node/onboard','proxy.txt','center','🚫\x20No\x20tokens\x20found\x20in\x20tokens.txt','application/json','isArray','🚫\x20Error\x20loading\x20tokens:','filter','cyan','4871560ksvLli','error','chalk','🚨\x20Main\x20error:','transparent','752318IZgoXo','response','32puZhgF','ethers','floor','every','271384ZevQrA','328GZRtqG','Invalid\x20wallets.json\x20format.\x20Expected\x20array\x20of\x20objects\x20with\x20\x22address\x22\x20property','🚫\x20No\x20wallets\x20found\x20in\x20wallets.json','toLowerCase','stdout','http-proxy-agent','wallets.json','split','❌\x20[Onboard\x20Node]\x20Failed:\x20','axios','\x20\x20\x20↳\x20','stdin','readline','yellow','message','...','socks5://','trim','close','64872lScICj','question','13122MZauBn','Airdrop\x20888','utf8','length','readFile','4422VfklEI','tokens.txt','Mau\x20menggunakan\x20proxy?\x20(y/n):\x20','post','Script\x20coded\x20by\x20-\x20@balveerxyz\x20|\x20Channel\x20Tele:\x20t.me/airdroplocked\x20|\x20Auto\x20Run\x20Node\x20paraSail\x0a','green','startsWith','socks4://','red','createInterface','log','35regpjq','\x0a🌟\x20Processing\x20token\x20','address','386712DhAINH','promises'];a0_0x49bf=function(){return _0x2efb5a;};return a0_0x49bf();}const axios=require(a0_0x506675(0x18f)),chalk=require(a0_0x506675(0x17c)),cfonts=require('cfonts'),fs=require('fs')[a0_0x506675(0x16f)],{HttpProxyAgent}=require(a0_0x506675(0x18b)),{SocksProxyAgent}=require('socks-proxy-agent'),ethers=require(a0_0x506675(0x182)),readline=require(a0_0x506675(0x192))[a0_0x506675(0x169)]({'input':process[a0_0x506675(0x191)],'output':process[a0_0x506675(0x18a)]}),BASE_URL='https://www.parasail.network/api';async function displayBanner(){const _0x4617ae=a0_0x506675;cfonts['say'](_0x4617ae(0x15c),{'font':'block','align':_0x4617ae(0x173),'colors':[_0x4617ae(0x179),_0x4617ae(0x193)],'background':_0x4617ae(0x17e),'letterSpacing':0x1,'lineHeight':0x1,'space':!![]}),console[_0x4617ae(0x16a)](chalk[_0x4617ae(0x165)](_0x4617ae(0x164)));}async function loadProxies(){const _0x182592=a0_0x506675;try{const _0x122a42=await fs[_0x182592(0x15f)](_0x182592(0x172),'utf8');return _0x122a42[_0x182592(0x18d)]('\x0a')['filter'](_0x2d187a=>_0x2d187a[_0x182592(0x197)]());}catch(_0x30b72c){return console[_0x182592(0x16a)](chalk[_0x182592(0x168)]('🚫\x20Error\x20loading\x20proxies:',_0x30b72c[_0x182592(0x194)])),[];}}async function loadTokens(){const _0x1338b3=a0_0x506675;try{const _0x163535=await fs['readFile'](_0x1338b3(0x161),_0x1338b3(0x15d));return _0x163535[_0x1338b3(0x18d)]('\x0a')[_0x1338b3(0x178)](_0xa8f936=>_0xa8f936['trim']());}catch(_0x240da7){return console[_0x1338b3(0x16a)](chalk[_0x1338b3(0x168)](_0x1338b3(0x177),_0x240da7[_0x1338b3(0x194)])),[];}}function a0_0x358e(_0x3203de,_0x14d076){const _0x49bf01=a0_0x49bf();return a0_0x358e=function(_0x358e3f,_0x5b16c7){_0x358e3f=_0x358e3f-0x15c;let _0x4dcc4d=_0x49bf01[_0x358e3f];return _0x4dcc4d;},a0_0x358e(_0x3203de,_0x14d076);}async function loadWallets(){const _0x4878cd=a0_0x506675;try{const _0x3af638=await fs['readFile'](_0x4878cd(0x18c),_0x4878cd(0x15d)),_0xf0ab70=JSON['parse'](_0x3af638);if(!Array[_0x4878cd(0x176)](_0xf0ab70)||!_0xf0ab70[_0x4878cd(0x184)](_0x43e285=>_0x43e285[_0x4878cd(0x16d)]))throw new Error(_0x4878cd(0x187));return _0xf0ab70['map'](_0x17f538=>_0x17f538[_0x4878cd(0x16d)]);}catch(_0x3b75d3){return console[_0x4878cd(0x16a)](chalk[_0x4878cd(0x168)]('🚫\x20Error\x20loading\x20wallets:',_0x3b75d3[_0x4878cd(0x194)])),[];}}function getProxyAgent(_0x40680f){const _0x359b15=a0_0x506675;if(_0x40680f[_0x359b15(0x166)]('http://'))return new HttpProxyAgent(_0x40680f);else{if(_0x40680f[_0x359b15(0x166)](_0x359b15(0x196))||_0x40680f['startsWith'](_0x359b15(0x167)))return new SocksProxyAgent(_0x40680f);}return null;}async function onboardNode(_0xf25085,_0x45f5db,_0x239422){const _0x21d98c=a0_0x506675;try{const _0x349fdf={'headers':{'Authorization':_0x21d98c(0x170)+_0xf25085,'Content-Type':_0x21d98c(0x175)},'httpsAgent':_0x239422},_0x2f2fda=await axios[_0x21d98c(0x163)](BASE_URL+_0x21d98c(0x171),{'address':_0x45f5db},_0x349fdf);console['log'](chalk[_0x21d98c(0x165)]('✅\x20[Onboard\x20Node]\x20Success'));}catch(_0x5a5f4f){console[_0x21d98c(0x16a)](chalk[_0x21d98c(0x168)](_0x21d98c(0x18e)+_0x5a5f4f[_0x21d98c(0x194)])),_0x5a5f4f[_0x21d98c(0x180)]&&console[_0x21d98c(0x16a)](chalk[_0x21d98c(0x168)](_0x21d98c(0x190)+JSON['stringify'](_0x5a5f4f[_0x21d98c(0x180)]['data'][_0x21d98c(0x17b)]||_0x5a5f4f[_0x21d98c(0x180)]['data'])));}}async function main(){const _0x59fa34=a0_0x506675;await displayBanner();const _0x330b48=await new Promise(_0x5eac56=>{const _0x55de75=a0_0x358e;readline[_0x55de75(0x19a)](_0x55de75(0x162),_0x2a903c=>{const _0x2e8ef0=_0x55de75;_0x5eac56(_0x2a903c[_0x2e8ef0(0x189)]()==='y');});}),_0x3c0565=await loadTokens(),_0x130004=await loadWallets();if(_0x3c0565[_0x59fa34(0x15e)]===0x0){console[_0x59fa34(0x16a)](chalk['red'](_0x59fa34(0x174)));return;}if(_0x130004['length']===0x0){console[_0x59fa34(0x16a)](chalk[_0x59fa34(0x168)](_0x59fa34(0x188)));return;}const _0x161173=_0x330b48?await loadProxies():[],_0x325b6d=_0x330b48&&_0x161173[_0x59fa34(0x15e)]>0x0?getProxyAgent(_0x161173[Math[_0x59fa34(0x183)](Math['random']()*_0x161173[_0x59fa34(0x15e)])]):null;for(let _0x457789=0x0;_0x457789<_0x3c0565[_0x59fa34(0x15e)]&&_0x457789<_0x130004['length'];_0x457789++){const _0x58523b=_0x3c0565[_0x457789],_0xb07699=_0x130004[_0x457789];console[_0x59fa34(0x16a)](chalk[_0x59fa34(0x179)](_0x59fa34(0x16c)+(_0x457789+0x1)+':\x20'+_0x58523b['slice'](0x0,0x14)+_0x59fa34(0x195))),console[_0x59fa34(0x16a)](chalk[_0x59fa34(0x179)]('👛\x20Wallet:\x20'+_0xb07699)),await onboardNode(_0x58523b,_0xb07699,_0x325b6d),await new Promise(_0x2d257b=>setTimeout(_0x2d257b,0x7d0));}readline[_0x59fa34(0x198)]();}main()['catch'](_0x5ddb2f=>{const _0x3a4e39=a0_0x506675;console['error'](chalk[_0x3a4e39(0x168)](_0x3a4e39(0x17d),_0x5ddb2f[_0x3a4e39(0x194)]));});