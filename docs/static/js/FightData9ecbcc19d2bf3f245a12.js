(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{445:function(e,t,n){"use strict";t.a=[{name:"Tier 1-1",success:70,hploss:200,exp:100,reward:.003135},{name:"Tier 1-2",success:67,hploss:200,exp:110,reward:.003762},{name:"Tier 1-3",success:63,hploss:200,exp:120,reward:.004389},{name:"Tier 2-1",success:59,hploss:200,exp:130,reward:.005016},{name:"Tier 2-2",success:55,hploss:200,exp:150,reward:.005643},{name:"Tier 2-3",success:51,hploss:200,exp:200,reward:.00627},{name:"Boss 1",success:28,hploss:400,exp:400,reward:.02299}]},454:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"f",(function(){return y})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d}));var a=n(478),i=n.n(a),r=n(445),s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var s,u=e[Symbol.iterator]();!(a=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{!a&&u.return&&u.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=function(e){return i.a.encode(e)},p=function(e){return i.a.decode(e)},o=function(e){try{return JSON.parse(e)}catch(e){return""}},y=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];localStorage[u(e)]=u(n?JSON.stringify(t):t)},l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=localStorage[u(e)];if(n)try{var a=p(n);return t?o(a):a}catch(e){return""}return""},c=function(e){var t,n=e.card,a=e.build,i=(e.gas,s(n,4)),r=i[0],u=i[1],p=i[2],o=i[3],y=s(a,4),l=y[0],c=y[1],d=y[2],m=y[3],f=2==+(t=l)?30:3==+t?60:4==+t?140:0,T=function(e){return 2==+e?3:3==+e?6:4==+e?16:0}(c),h=function(e){return 2==+e?-5:3==+e?-13:4==+e?-28:0}(d),b=86.4*(100+h)/100;return{buildData:{attr:f,reward:T,exp:function(e){return 2==+e?30:3==+e?60:4==+e?90:0}(m),dishp:h},cardData:{vatk:10*(r-1)+u+f,vdef:10*(r-1)+p+f,vagi:10*(r-1)+o+f,hpcd:b,everyDayHp:(86400/b).strip(4)}}},d=function(e){var t=e.cardData,n=e.buildData,a=e.gas,i=t.vatk,s=t.vdef,u=t.vagi,p=t.everyDayHp,o=n.reward,y=n.exp;return r.a.map((function(e){var t=e.name,n=e.success,r=e.hploss,l=e.exp,c=e.reward,d=n+i/100,m=c*(100+o)/100,f=m+u*m/1e3,T=r-s/10,h=p/(((100-d)*r+d*T)/100),b=d/100*(l+y),v=Math.ceil(h*b),w=(h*(d/100*f-a)).strip(4);return{name:t,successC:d,rewardC:f.strip(8),hplossC:T,everyXp:v,everyRewrad:w}}))}},521:function(e,t,n){},603:function(e,t,n){},631:function(e,t,n){"use strict";n(521)},645:function(e,t){},647:function(e,t){},649:function(e,t){},653:function(e,t){},677:function(e,t){},679:function(e,t){},694:function(e,t){},696:function(e,t){},725:function(e,t){},727:function(e,t){},810:function(e,t){},811:function(e,t){},901:function(e,t,n){"use strict";n(603)},908:function(e,t,n){"use strict";n.r(t);var a=n(454),i=n(511),r=n.n(i),s=n(520),u=n.n(s),p={name:"item-component",data:function(){return{columns:[{title:"英雄 Hero",key:"_attackingHero"},{title:"敵人 Enemies",key:"enemyType"},{title:"獎勵 Rewards",key:"rewards"},{title:"經驗值 EXP",key:"xpGained"},{title:"損血 Hploss",key:"hpLoss"},{title:"時間 Date",key:"date"}],rowClassName:this.source.rewards?"":"fair"}},props:{index:{type:Number},source:{type:Object,default:function(){return{}}}},methods:{handleRowClick:function(){this.$parent.$parent.$parent.filterHero=this.source._attackingHero,this.$parent.$parent.$parent.filterEnemyType=this.source.enemyType}}},o=(n(631),n(2)),y=Object(o.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex",class:e.rowClassName},e._l(e.columns,(function(t){return n("div",{key:t.key+e.source.date,on:{click:e.handleRowClick}},[e._v(e._s(e.source[t.key]))])})),0)}),[],!1,null,"1fde9c63",null).exports,l=n(445),c=n(632),d=n.n(c),m=n(633),f=new(n.n(m).a)(window.ethereum),T=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"CancelledListing",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bnbPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bnbhPrice",type:"uint256"}],name:"ListingPriceChange",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bnbPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bnbhPrice",type:"uint256"}],name:"NewListing",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bnbPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bnbhPrice",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tax",type:"uint256"}],name:"PurchaseListing",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"bannedList",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"bnbhToken",outputs:[{internalType:"contract IBEP20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"characters",outputs:[{internalType:"contract IBNBHCharacter",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"excludeFromTax",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"lastTransferredTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maintenanceMode",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"minimumPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"priceOracle",outputs:[{internalType:"contract IPriceOracle",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"taxFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"taxFeeRecepient",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IBEP20",name:"_bnbhToken",type:"address"},{internalType:"contract IBNBHCharacter",name:"_characters",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"migrateExcludeFromTax",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"removeBannedHeores",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"setTokenAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"character",type:"address"}],name:"setCharacterAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"mode",type:"bool"}],name:"setmaintenanceMode",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setTaxFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"setTaxFeeRecepient",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"oracle",type:"address"}],name:"setPriceOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"setMinimumPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"state",type:"bool"}],name:"setBannedAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_limit",type:"uint256"},{internalType:"uint256",name:"_pageNumber",type:"uint256"}],name:"getCharacterListingIDsPage",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_limit",type:"uint256"},{internalType:"uint256",name:"_pageNumber",type:"uint256"}],name:"getCharactersForPage",outputs:[{components:[{internalType:"uint256",name:"name",type:"uint256"},{internalType:"uint256",name:"heroType",type:"uint256"},{internalType:"uint256",name:"xp",type:"uint256"},{internalType:"uint256",name:"attack",type:"uint256"},{internalType:"uint256",name:"armor",type:"uint256"},{internalType:"uint256",name:"speed",type:"uint256"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"heroClass",type:"uint256"}],internalType:"struct BNBHMarket.MarketHero[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAllTokenIds",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"seller",type:"address"}],name:"getCharactersForSeller",outputs:[{components:[{internalType:"uint256",name:"name",type:"uint256"},{internalType:"uint256",name:"heroType",type:"uint256"},{internalType:"uint256",name:"xp",type:"uint256"},{internalType:"uint256",name:"attack",type:"uint256"},{internalType:"uint256",name:"armor",type:"uint256"},{internalType:"uint256",name:"speed",type:"uint256"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"heroClass",type:"uint256"}],internalType:"struct BNBHMarket.MarketHero[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_heroId",type:"uint256"}],name:"getCharacterDataById",outputs:[{components:[{internalType:"uint256",name:"name",type:"uint256"},{internalType:"uint256",name:"heroType",type:"uint256"},{internalType:"uint256",name:"xp",type:"uint256"},{internalType:"uint256",name:"attack",type:"uint256"},{internalType:"uint256",name:"armor",type:"uint256"},{internalType:"uint256",name:"speed",type:"uint256"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"heroClass",type:"uint256"}],internalType:"struct BNBHMarket.MarketHero",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"getCharacterDataByIds",outputs:[{components:[{internalType:"uint256",name:"name",type:"uint256"},{internalType:"uint256",name:"heroType",type:"uint256"},{internalType:"uint256",name:"xp",type:"uint256"},{internalType:"uint256",name:"attack",type:"uint256"},{internalType:"uint256",name:"armor",type:"uint256"},{internalType:"uint256",name:"speed",type:"uint256"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"heroClass",type:"uint256"}],internalType:"struct BNBHMarket.MarketHero[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getSellerOfNftID",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_seller",type:"address"}],name:"getNumberOfListingsBySeller",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_seller",type:"address"}],name:"getListingIDsBySeller",outputs:[{internalType:"uint256[]",name:"tokens",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNumberOfCharacterListings",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_heroId",type:"uint256"}],name:"canListOrChangePrice",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"addListing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"uint256",name:"_newPrice",type:"uint256"}],name:"changeListingPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"cancelListing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"purchaseListing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"",type:"bytes"}],name:"onERC721Received",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"view",type:"function"}],h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var s,u=e[Symbol.iterator]();!(a=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{!a&&u.return&&u.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function b(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function a(i,r){try{var s=t[i](r),u=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(u).then((function(e){a("next",e)}),(function(e){a("throw",e)}));e(u)}("next")}))}}var v={name:"FightData",components:{VirtualList:u.a},data:function(){return{item:y,api:"https://graphql.bitquery.io",walletAddress:Object(a.e)("walletAddress")||"",dataAddress:"0xde9fFb228C1789FEf3F08014498F2b16c57db855",contract:"0x5CFFca0321b83dc873Bd2439aE7fEA10aE163fac",contractData:void 0,filterHero:"",filterEnemyType:"",network:"bsc",eventType:"Fight",startDate:null,endDate:null,data:[],columns:[{title:"英雄 Hero",key:"_attackingHero"},{title:"敵人 Enemies",key:"enemyType"},{title:"獎勵 Rewards",key:"rewards"},{title:"經驗值 EXP",key:"xpGained"},{title:"損血 Hploss",key:"hpLoss"},{title:"時間 Date",key:"date"}],typeObj:{1:"普通 Common",2:"罕見 Uncommon",3:"稀有 Rare",4:"史詩 Epic",5:"傳說 Legendary"},classObj:{1:"士兵 Soldier",2:"獵人 Hunter",3:"刺客 Rogue",4:"法師 Mage",5:"騎士 Knight"},heroObj:{},isLoading:!1}},beforeMount:function(){var e=this;return b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new f.eth.Contract(T,e.contract);case 2:e.contractData=t.sent,e.walletAddress&&e.handleCalc();case 4:case"end":return t.stop()}}),t,e)})))()},methods:{handleCalc:function(){var e=this;return b(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.fetchGetCount();case 3:return n=t.sent,t.next=6,e.fetchGetFightData(n);case 6:e.isLoading=!1;case 7:case"end":return t.stop()}}),t,e)})))()},fetchGetCount:function(){var e=this;return r()({method:"post",url:this.api,headers:{"X-API-KEY":"BQYvhnv04csZHaprIBZNwtpRiDIwEIW9"},data:{query:"query ($network: EthereumNetwork!, $address: String!, $eventType: String!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $to: ISO8601DateTime, $txFrom: [String!]) {\n  ethereum(network: $network) {\n    smartContractEvents(\n      options: {limit: $limit, offset: $offset}\n      date: {since: $from, till: $to}\n      txFrom: {in: $txFrom}\n      smartContractAddress: {is: $address}\n      smartContractEvent: {is: $eventType}\n    ) {\n      count(smartContractEvent: {is: $eventType})\n      __typename\n    }\n    __typename\n  }\n}",variables:{network:this.network,address:this.dataAddress,eventType:this.eventType,offset:0,limit:1e4,from:null,to:null,txFrom:[this.walletAddress]}}}).then((function(e){return e.data.data.ethereum.smartContractEvents[0].count})).catch((function(t){return e.$Message.error("查詢戰鬥數據失敗，請過段時間再查詢"),console.error(t,"查詢戰鬥數據失敗，請過段時間再查詢"),-1}))},fetchGetFightData:function(e){return r()({method:"post",url:this.api,headers:{"X-API-KEY":"BQYvhnv04csZHaprIBZNwtpRiDIwEIW9"},data:{query:'query ($network: EthereumNetwork!, $address: String!, $eventType: String!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $to: ISO8601DateTime, $txFrom: [String!]) {\n  ethereum(network: $network) {\n    smartContractEvents(\n      options: {desc: "block.height", limit: $limit, offset: $offset}\n      date: {since: $from, till: $to}\n      txFrom: {in: $txFrom}\n      smartContractAddress: {is: $address}\n      smartContractEvent: {is: $eventType}\n    ) {\n      smartContractEvent {\n        name\n        __typename\n      }\n      block {\n        height\n        timestamp {\n          iso8601\n          unixtime\n          __typename\n        }\n        __typename\n      }\n      arguments {\n        value\n        argument\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}',variables:{network:this.network,address:this.dataAddress,eventType:this.eventType,offset:0,limit:e,from:null,to:null,txFrom:[this.walletAddress]}}}).then(this.handleFightData).catch((function(e){return console.error(e,"查詢戰鬥數據失敗"),[]}))},handleFightData:function(e){var t=this,n=e.data.data.ethereum.smartContractEvents;return b(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=function(e,n){switch(e){case"_attackingHero":return t.heroObj[n]=!0,n;case"enemyType":return l.a[n].name;case"rewards":return n/1e18;default:return n}},t.heroObj={},r=n.map((function(e){var t=e.arguments,n=e.block,a={};t.slice(1,7).forEach((function(e){var t=e.argument,n=e.value;return a[t]=i(t,n)}));var r=d.a.unix(n.timestamp.unixtime);return a.timestamp=r.valueOf(),a.date=r.format("YYYY/MM/DD HH:mm:ss"),a})),t.data=r,Object(a.f)("walletAddress",t.walletAddress);case 5:case"end":return e.stop()}}),e,t)})))()},handleChangeDate:function(e){var t=h(e,2),n=t[0],a=t[1];this.startDate=n,this.endDate=a.replace("00:00","23:59")}},computed:{tableData:function(){var e=this;if(this.filterHero||this.filterEnemyType||this.endDate||this.startDate){var t=this.data.filter((function(t){var n=t._attackingHero,a=t.enemyType;return(n.includes(e.filterHero)||!e.filterHero)&&(a.includes(e.filterEnemyType)||!e.filterEnemyType)}));if(this.endDate||this.startDate){var n=d()(this.startDate),a=d()(this.endDate);return t.filter((function(e){var t=e.timestamp;return n<=t&&t<=a}))}return t}return this.data},fightCount:function(){return this.tableData.length},fightSuccess:function(){return this.tableData.filter((function(e){return e.rewards})).length},fightFair:function(){return this.fightCount-this.fightSuccess},totalRewards:function(){return this.tableData.reduce((function(e,t){var n=t.rewards;return e+(void 0===n?0:n)}),0).toFixed(2)}}},w=(n(901),Object(o.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Row",[n("Col",{attrs:{span:"4"}},[n("Input",{attrs:{placeholder:"bsc 錢包位址"},model:{value:e.walletAddress,callback:function(t){e.walletAddress=t},expression:"walletAddress"}})],1),e._v(" "),n("Col",{attrs:{span:"4"}},[n("Input",{attrs:{clearable:"",placeholder:"篩選英雄"},model:{value:e.filterHero,callback:function(t){e.filterHero=t},expression:"filterHero"}})],1),e._v(" "),n("Col",{attrs:{span:"4"}},[n("Input",{attrs:{clearable:"",placeholder:"篩選敵人"},model:{value:e.filterEnemyType,callback:function(t){e.filterEnemyType=t},expression:"filterEnemyType"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"篩選日期"},on:{"on-change":e.handleChangeDate}})],1),e._v(" "),n("Col",{attrs:{span:"4"}},[n("Button",{attrs:{loading:e.isLoading,type:"success",long:"",icon:"ios-search"},on:{click:e.handleCalc}},[e._v("\n                    計算\n                ")])],1)],1),e._v(" "),e.tableData.length?n("Row",[n("Col",{staticClass:"info",attrs:{span:"24"}},[e._v("\n            總戰鬥次數: "+e._s(e.fightCount)+"\n            戰鬥成功: "+e._s(e.fightSuccess)+"\n            戰鬥失敗: "+e._s(e.fightFair)+"\n            實際勝率: "+e._s((e.fightSuccess/e.fightCount*100).toFixed(2))+"%\n            總獎金: "+e._s(e.totalRewards)+" BNB\n        ")])],1):e._e(),e._v(" "),n("div",{staticClass:"flex"},e._l(e.columns,(function(t){return n("div",{key:t.key},[e._v(e._s(t.title))])})),0),e._v(" "),n("VirtualList",{staticStyle:{height:"calc(100vh - 234px)","overflow-y":"auto"},attrs:{"data-key":"date","data-sources":e.tableData,"data-component":e.item}})],1)}),[],!1,null,"626e3361",null));t.default=w.exports}}]);
//# sourceMappingURL=FightData9ecbcc19d2bf3f245a12.js.map