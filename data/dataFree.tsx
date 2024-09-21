import ListMap_MODIFIER from "./file-modifier/list-map-modifier";
import HexName_MODIFIER from "./file-modifier/mksm-name-hex";

const dataFree = [
	{
		title: "Exp 9999+, health and energy bar max + infinite ",
		dateAdd: '27 Jun 2024',
		navigate: "/free/1",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code dasar/basic. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "experience 999999999", li_Desc: "membeli skill/combo menjadi gratis"},
			{li_title: "health bar max and infinite", li_Desc: "nyawa kebal/tidak akan mati dan bar nyawa panjang"},
			{li_title: "energy bar infinite", li_Desc: "memakai skill tidak akan mengurangi energy"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/tJsBBgg2CLc"},
			{url: "https://youtu.be/Xlre_HnNcvc"}
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: "Infinite Duration Brutality",
		dateAdd: '27 Jun 2024',
		navigate: "/free/2",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "brutality no decreased", li_Desc: "durasi brutality tidak akan habis"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/zDyNt1yHAV8"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: "Fatality meter always full",
		dateAdd: '27 Jun 2024',
		navigate: "/free/3",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "fatality meter always full", li_Desc: "merah merah bar fatality tidak akan berkurang"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/W-h5_19snps"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: "Fatality meter always level 3",
		dateAdd: '27 Jun 2024',
		navigate: "/free/4",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "fatality meter always level 3", li_Desc: "mendapatkan brutality diawal game"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/uGCadF6Y6GE"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: "Unlock all platform (moves)",
		dateAdd: '27 Jun 2024',
		navigate: "/free/5",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "unlock all platform", li_Desc: "mendapatkan semua platform diawal game tanpa harus mengalahkan boss"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/6xyhQBQGKJo"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: "Unlock door to the foundry",
		dateAdd: '27 Jun 2024',
		navigate: "/free/6",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "unlock door to the foundry", li_Desc: "mendapatkan 5 platform tanpa mengalahkan boss"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/cqsF64HpfTU"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: "Infinite Jump / fly v1",
		dateAdd: '27 Jun 2024',
		navigate: "/free/7",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "infinite jump v1", li_Desc: "terbang melayang bahkan bisa infinite jump, bisa untuk semua karakter"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/gPK8YOFctPw"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "untuk menggunakan cheat ini pastikan sudah memiliki platform double jump"},
		],
	},
	{
		title: "Infinite Jump / fly v2",
		dateAdd: '27 Jun 2024',
		navigate: "/free/8",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "infinite jump v2", li_Desc: "infinite jump lebih mudah tetapi tidak bisa melayang"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/2qYc_RdppTU"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "jocker command berbeda dari yg diyoutube"},
			{text: "cara pakai kode diatas, tekan dan tahan tombol 'bawah' lalu spam X"},
		],
	},
	{
		title: "Wallhack / walking through walls",
		dateAdd: '27 Jun 2024',
		navigate: "/free/9",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "wallhack / walking through walls", li_Desc: "berjalan menembus tembok"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/JOwwoh3xFLo"},
		],
		warning: [
			{text: "kode ini boleh dishare bebas, terserah. karena ini bukan buatan saya"},
			{text: "kode ini didapatkan dari web gamehacking.org dan ada beberapa kode yg saya diedit"},
			{text: "cara pakai kode diatas, tekan dan tahan tombol 'L3' lalu berjalan bebas"},
		],
	},
	{
		title: "Damage Modifier",
		dateAdd: '27 Jun 2024',
		navigate: "/free/10",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "damage modifier", li_Desc: "edit damage semau antum"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/5mpRiCKG0GM"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "ada kemungkinan beberapa karakter tidak berfungsi (damage normal)"},
		],
	},
	{
		title: "Shang Tsung menjadi shao kahn",
		dateAdd: '27 Jun 2024',
		navigate: "/free/11",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "shang tsung menjadi shao kahn", li_Desc: "edit shang tsung ketika ganti karakter menjadi shao kahn"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/CB9GeUxTZtQ"},
			{url: "https://youtu.be/fFfVKN-RJqE"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: "subzero & scorpion replace default character",
		dateAdd: '27 Jun 2024',
		navigate: "/free/12",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: "subzero & scorpion character replace", li_Desc: "mengganti karakter bawaan subzero & scorpion"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/CcQc9pvs0ws"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "untuk lebih jelasnya kalian kunjungi saja youtube saya (link diatas)"},
		],
	},
	{

		title: '"Test Your Might" hack duration and infinite meter',
		dateAdd: '27 Jun 2024',
		navigate: "/free/13",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: '"Test Your Might" Hack Duration', li_Desc: "durasi 1 detik tetapi unlimited"},
			{li_title: '"Test Your Might" Hack bar meter', li_Desc: "bar ijo ijo selalu penuh"}
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/rBF4Jc0sm1w"},
			{url: "https://youtu.be/34199REk5DQ"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: 'Brightness Modifier',
		dateAdd: '27 Jun 2024',
		navigate: "/free/14",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg kurang menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'Brightness Modifier', li_Desc: "mengatur kecerahan layar dengan cheat code"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/tkxBXWyofuU"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "untuk lebih jelasnya kalian kunjungi saja youtube saya (link diatas)"},
			{text: "value diatas 32 bisa merusak mata (cerah bgt)"}
		],
	},
	{
		title: 'Super Long Jump',
		dateAdd: '27 Jun 2024',
		navigate: "/free/15",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'Super Long Jump', li_Desc: "Lompatan R1 + X sangat jauh"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/wj_TqKOXI9c"},
			{url: "https://youtu.be/SNif280LP6g"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "untuk lebih jelasnya kalian kunjungi saja youtube saya (link diatas)"},
		],
	},
	{
		title: 'Unbreakable Sword',
		dateAdd: '27 Jun 2024',
		navigate: "/free/16",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'Unbreakable Sword', li_Desc: "Pedang tidak akan hancur"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/Z9sN1uKSUqM"},
			{url: "https://youtu.be/oKfn3pTwGMA"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "kode diatas hanya untuk pedang saja"},
		],
	},
	{
		title: 'Sub-Zero auto high jump',
		dateAdd: '27 Jun 2024',
		navigate: "/free/17",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'subzero auto high jump', li_Desc: "terbang tinggi setelah tekan segitiga diudara"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/HxNVaL1uVU4"},
			{url: "https://youtu.be/9Ckl3JPtjzw"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "kode diatas hanya BERFUNGSI pada SUB-ZERO saja"},
		],
	},
	{
		title: 'Change Name Character',
		dateAdd: '27 Jun 2024',
		navigate: "/free/18",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'Change Name Character', li_Desc: "ganti nama 4 karakter utama"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/1End8xkXhdY"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "untuk lebih jelasnya kalian kunjungi saja youtube saya (link diatas)"},
		],
	},
	{
		title: 'Change effect color sub-zero',
		dateAdd: '27 Jun 2024',
		navigate: "/free/19",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'Change effect color sub-zero', li_Desc: "ganti warna skill subzero menjadi kuning"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/LfoWYpOjYgw"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: 'Remove Alert Tutorial',
		dateAdd: '27 Jun 2024',
		navigate: "/free/20",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'Remove Alert Tutorial', li_Desc: "menghilangkan notifikasi tutorial"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/JZjkX47X47w"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: 'No Fataity Requires',
		dateAdd: '27 Jun 2024',
		navigate: "/free/21",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'No Fatality Requires', li_Desc: "menghilangkan alert L1 saat ditempat fatality,etc"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/KA2elUTbhEw"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "tidak disarankan bagi pemula"},
		],
	},
	{
		title: 'Wallhack (moves ketika masuk portal)',
		dateAdd: '29 Jun 2024',
		navigate: "/free/22",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'Wallhack (moves ketika masuk portal)', li_Desc: "terbang dan menembus apapun, bahkan tembok sekalipun"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/pZ49U_k9OQc"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: 'Save Anywhere',
		dateAdd: '29 Jun 2024',
		navigate: "/free/23",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'Save Anywhere', li_Desc: "save dimanapun tanpa harus nyembah patung"},
		],
		listModifier: [
			{title: "", content: ``},
		],
		ytvideo: [
			{url: "https://youtu.be/fw6FHGGjSIo"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: 'Map Modifier / Teleport',
		dateAdd: '05 Jul 2024',
		navigate: "/free/24",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'map modifier', li_Desc: "edit start map dengan map lain"},
		],
		listModifier: [
			{title: "List Modifier code:", content: ListMap_MODIFIER},
		],
		ytvideo: [
			{url: "https://youtu.be/kZXEt2g2MX4"},
			{url: "https://youtu.be/bm2s4urvRak"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: 'Change Text Pause menu',
		dateAdd: '10 Jul 2024',
		navigate: "/free/25",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg unfaedah. cheat ini terdapat:'},
		],
		cheatList: [
			{li_title: 'change text pause menu', li_Desc: "mengubah text bawaan dengan text sesuai keinginanmu"},
		],
		listModifier: [
			{title: "List Modifier code:", content: HexName_MODIFIER},
		],
		ytvideo: [
			{url: "https://youtu.be/_3eCb7P8fAs"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: 'Reptile always visible',
		dateAdd: '14 Jul 2024',
		navigate: "/free/26",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg sangat berguna. cheat ini terdapat:'},
		],
		listModifier: [
			{title: "", content: ``},
		],
		cheatList: [
			{li_title: 'Reptile always visible', li_Desc: "Reptile Boss tetap terlihat walaupun sudah menghilang"},
		],
		ytvideo: [
			{url: "https://youtu.be/jI5NbFPWLKs"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "Setelah mengalahkan Reptile lalu keluar dari map, jangan masuk ke map reptile lagi atau game akan mengalami crash"},
		],
	},
	{
		title: 'walk through the gate map wushi',
		dateAdd: '15 Jul 2024',
		navigate: "/free/27",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg sangat berguna. cheat ini terdapat:'},
		],
		listModifier: [
			{title: "", content: ``},
		],
		cheatList: [
			{li_title: 'walk through the gate', li_Desc: "berjalan menembus pintu/gerbang di map wushi"},
		],
		ytvideo: [
			{url: "https://youtu.be/ZeesiOl5Ebc"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
		],
	},
	{
		title: 'infinite spawn oni warlord',
		dateAdd: '25 Jul 2024',
		navigate: "/free/28",
		deskripsi: [
			{text: 'pada halaman ini saya membagikan cheat code yg sangat menarik. cheat ini terdapat:'},
		],
		listModifier: [
			{title: "", content: ``},
		],
		cheatList: [
			{li_title: 'infinite spawn oni warlord', li_Desc: "memunculkan oni warlord (boss) tak terbatas"},
		],
		ytvideo: [
			{url: "https://youtu.be/8bQg5aODYlY"},
		],
		warning: [
			{text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)"},
			{text: "max spawn adalah 4, jika lebih dari 4 maka boss akan jadi transparant dan tidak bisa di hit"},
			{text: "agar infinite yaitu bunuh salah satu lalu spawn lagi. ulangi terus menerus"},
			{text: "agar aktif cheat ini pastikan scene pertama / boss pertama kali sudah ter-spawn"},
		],
	},
];

export default dataFree;
