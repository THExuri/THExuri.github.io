const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
	lrcType: 3,
    audio: [
	{
      name: '麻雀',
      artist: '李荣浩',
      url: 'http://music.163.com/song/media/outer/url?id=1407551413.mp3',
	  cover: 'http://p1.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg?param=130y130',
	},
	{
	  name: '蜕',
	  artist: '司南',
	  url: 'http://music.163.com/song/media/outer/url?id=1466911194.mp3',
	  cover: 'http://p1.music.126.net/OPmSQpmHDdoXxojpNZtrEA==/109951165184895214.jpg?param=130y130',
	},	  
	{
		name: '爸爸妈妈',
		artist: '李荣浩',
		url: 'http://music.163.com/song/media/outer/url?id=407450223.mp3',
		cover: 'http://p1.music.126.net/e-Uc6W3Kug-HFHJ5nvCUPg==/109951166562828988.jpg?param=130y130',
	},
	{
	  name: '冬眠',
	  artist: '司南',
	  url: 'http://music.163.com/song/media/outer/url?id=1398663411.mp3',
	  cover: 'http://p2.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=130y130',
	},
	{
	  name: '下坠Falling',
	  artist: 'Corki刘宗鑫',
	  url: 'http://music.163.com/song/media/outer/url?id=1328146041.mp3',
	  cover: 'http://p1.music.126.net/TyQNalBMYwsCOl5sq_NBTA==/109951164573566845.jpg?param=130y130',
	},
	{
	  name: '琵琶行',
	  artist: '奇然,沈谧仁',
	  url: 'http://music.163.com/song/media/outer/url?id=476513774.mp3',
	  cover: 'http://p1.music.126.net/NQBaw13hHiaTh41QQUYsQg==/109951162922231753.jpg?param=130y130',
	},
	{
	  name: '海底',
	  artist: '一支榴莲',
	  url: 'http://music.163.com/song/media/outer/url?id=1430583016.mp3',
	  cover: 'http://p1.music.126.net/YRFYXG6YaJfTyy_mQntS4A==/109951164799337803.jpg?param=130y130',
	},
	{
	  name: '天下',
	  artist: '张杰',
	  url: 'http://music.163.com/song/media/outer/url?id=191254.mp3',
	  cover: 'http://p1.music.126.net/ixIs5kkukgNYMmeDsc35_g==/29686813955450.jpg?param=130y130',
	},
	{
	  name: '失眠飞行',
	  artist: '接个吻，开一枪,沈以诚,薛黛霏',
	  url: 'http://music.163.com/song/media/outer/url?id=1365898499.mp3',
	  cover: 'http://p1.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=130y130',
	},
	{
	  name: '起风了',
	  artist: '买辣椒也用券',
	  url: 'http://music.163.com/song/media/outer/url?id=1330348068.mp3',
	  cover: 'http://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130',
	},
	{
	  name: '观灯',
	  artist: '忘乡',
	  url: 'http://music.163.com/song/media/outer/url?id=460173322.mp3',
	  cover: 'http://p2.music.126.net/MJuyOarxyZriynC1EB7DaQ==/109951163890693576.jpg?param=130y130',
	},
	{
	  name: 'Outside',
	  artist: 'Calvin Harris,Ellie Goulding',
	  url: 'http://music.163.com/song/media/outer/url?id=29561077.mp3',
	  cover: 'http://p2.music.126.net/dU6u-d_11iO2iXRPOo8qaw==/109951165970033512.jpg?param=130y130',
	},
	{
	  name: 'Take a While',
	  artist: 'Yellow Lockdown,Licellow',
	  url: 'http://music.163.com/song/media/outer/url?id=1470657694.mp3',
	  cover: 'http://p2.music.126.net/L2OfwtNVsAHvvLv2DQwqLg==/109951165230641946.jpg?param=130y130',
	},
	{
	  name: '涅槃 (Phoenix)',
	  artist: '英雄联盟',
	  url: 'http://ws.stream.qqmusic.qq.com/C40000379G5G3FxmKx.m4a?guid=921284740&vkey=664D3B93722D96A26DB74F962C142BF002622DBA86692810F92D59AC20841BFB20B1A91980EAF2E9E2243DB635A17ECD58422BEDC0382B4F&uin=&fromtag=120032',
	  cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004NHcSP4IIbSC_2.jpg?max_age=2592000',
	},
	{
	  name: '孤勇者',
	  artist: '陈奕迅',
	  url: 'http://music.163.com/song/media/outer/url?id=1901371647.mp3',
	  cover: 'http://p2.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg?param=130y130',
	}, 
   ]
});