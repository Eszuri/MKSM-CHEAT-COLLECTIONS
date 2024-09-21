const CheatCodeFree = [

	{
		raw:
			`// exp unlimited
20C2E224 3B9AC9FF

// health unlimited && max health
20C08928 00000258 -> bar health
20C29760 00000004 -> max health

// energy unlimited
205CCE30 42C80000`,
		pnach:
			`// exp unlimited
patch=1,EE,20C2E224,extended,3B9AC9FF

// health unlimited && max health
patch=1,EE,20C08928,extended,00000258 // bar health
patch=1,EE,20C29760,extended,00000004 // max health

// energy unlimited
patch=1,EE,205CCE30,extended,42C80000`,
	},




	{
		raw:
			`// brutality no decreased
205BB23C 000003E7`,
		pnach:
			`// brutality no decreased
patch=1,EE,205BB23C,extended,000003E7`,
	},



	{
		raw:
			`// fatality meter always full
20C2E238 44960000`,
		pnach:
			`// fatality meter always full
patch=1,EE,20C2E238,extended,44960000`,
	},




	{
		raw:
			`// fatality meter level 3
20C2E260 00000003`,
		pnach:
			`// fatality meter level 3
patch=1,EE,20C2E260,extended,00000003`,
	},




	{
		raw:
			`// unlock all platform (moves)
20C29848 00000001 // wall climb
20C29849 00000001 // wall run
20C2984A 00000001 // wall jump
20C2984B 00000001 // double jump
20C2984C 00000001 // long jump
20C2984D 00000001 // swing on poles
20C2984E 00000001 // fist of ruin`,

		pnach:
			`// unlock all platform (moves)
patch=1,EE,20C29848,byte,01 // wall climb
patch=1,EE,20C29849,byte,01 // wall run
patch=1,EE,20C2984A,byte,01 // wall jump
patch=1,EE,20C2984B,byte,01 // double jump
patch=1,EE,20C2984C,byte,01 // long jump
patch=1,EE,20C2984D,byte,01 // swing on poles
patch=1,EE,20C2984E,byte,01 // fist of ruin`,
	},




	{
		raw:
			`// Open door to the foundry
20C2E04C 00000001
20C2E048 00000001
20C2E044 00000001
20C2E040 00000001
20C2DF94 00000001`,
		pnach:
			`// Open door to the foundry
patch=1,EE,20C2E04C,byte,01
patch=1,EE,20C2E048,byte,01
patch=1,EE,20C2E044,byte,01
patch=1,EE,20C2E040,byte,01
patch=1,EE,20C2DF94,byte,01`,
	},




	{
		raw:
			`// fly / infinite jump v1
D0651F02 0000F7FF // R1
205E8954 00000000 // fly`,
		pnach:
			`// fly / infinite jump v1
patch=1,EE,D0651F02,extended,0000F7FF // R1
patch=1,EE,205E8954,extended,00000000 // fly`,
	},




	{
		raw:
			`// fly / infinite jump v2
D0651F02 0000FFBF // D-PAD DOWN
205E6D70 00000002 // fly`,
		pnach:
			`// fly / infinite jump v2
patch=1,EE,D0651F02,extended,0000FFBF // D-PAD DOWN
patch=1,EE,205E6D70,extended,00000002 // fly`,
	},




	{
		raw:
			`// walking through walls
D0651F02 0000FFFD // L3
2038DFA4 1000001C
D0651F02 0000FFFF // ini jangan diganti
2038DFA4 0620001C`,

		pnach:
			`// walking through walls
patch=1,EE,D0651F02,extended,0000FFFD // L3
patch=1,EE,2038DFA4,extended,1000001C
patch=1,EE,D0651F02,extended,0000FFFF // ini jangan diganti
patch=1,EE,2038DFA4,extended,0620001C`,
	},




	{
		raw:
			`// damage modifier
// default = 100
20C08950 000003EB // 1000`,
		pnach:
			`// damage modifier
// default = 100
patch=1,EE,20C08950,extended,000003EB // 1000`,
	},




	{
		raw:
			`// Shang tsung berubah jadi Shao kahn
20707708 00000040`,
		pnach:
			`// Shang tsung berubah jadi Shao kahn
patch=1,EE,20707708,byte,40`,
	},




	{
		raw:
			`// character modifier
205CC680 00000053 // scorpion to baraka
205CC65C 00000044 // sub-zero to ermac`,
		pnach:
			`// character modifier
patch=1,EE,005CC680,byte,53 // scorpion to baraka
patch=1,EE,005CC65C,byte,44 // sub-zero to ermac`,
	},




	{
		raw:
			`// "Test Your Might"
205CCF04 00000064 // durasi 1s
205CCF0C 42C80000 // bar full`,
		pnach:
			`// "Test Your Might"
patch=1,EE,205CCF04,extended,00000064 // durasi 1s
patch=1,EE,205CCF0C,extended,42C80000 // bar full`,
	},





	{
		raw:
			`// Brightness Modifier
// default min = 0
// default max = 32
204F4C54 00000020 // 32`,
		pnach:
			`// Brightness Modifier
// default min = 0
// default max = 32
patch=1,EE,204F4C54,extended,00000020 // 32`,
	},




	{
		raw:
			`// super long jump
// default = 100
2064DB34 437A0000 // 250`,
		pnach:
			`// super long jump
// default = 100
patch=1,EE,2064DB34,extended,437A0000 // 250`,
	},





	{
		raw:
			`// unbreakable sword
205D892C 0098967F`,
		pnach:
			`// unbreakable sword
patch=1,EE,205D892C,extended,0098967F`,
	},




	{
		raw:
			`// auto high jump (press triangle after jump)
// default = 60
20FCC278 000001F4 // 500`,

		pnach:
			`// auto high jump (press triangle after jump)
// default = 60
patch=1,EE,20FCC278,extended,000001F4 // 500`,
	},





	{
		raw:
			`// ganti nama karakter
// LIU KANG to ASEP
00C6E500 00000041 // L to A
00C6E501 00000053 // I to S
00C6E502 00000045 // U to E
00C6E503 00000050 // spasi to P
00C6E504 00000020 // K to text kosong
00C6E505 00000020 // A to text kosong
00C6E506 00000020 // N to text kosong
00C6E507 00000020 // G to text kosong
            
            
// KUNG LAO to AGUS
00C6E580 00000041 // K to A
00C6E581 00000047 // U to G
00C6E582 00000055 // N to U
00C6E583 00000053 // G to S
00C6E584 00000020 // spasi to text kosong
00C6E585 00000020 // L to text kosong
00C6E586 00000020 // A to text kosong
00C6E587 00000020 // O to text kosong
            
            
// SCORPION to HENGKERS
00C70E00 00000048 // S to H
00C70E01 00000045 // C to E
00C70E02 0000004E // O to N
00C70E03 00000047 // R to G
00C70E04 0000004B // P to K
00C70E05 00000045 // I to E
00C70E06 00000052 // O to R
00C70E07 00000053 // N to S
            
            
// SUB-ZERO to ?????
00C71100 000000?? S 
00C71101 000000?? U 
00C71102 000000?? B 
00C71103 000000?? - 
00C71104 000000?? Z 
00C71105 000000?? E 
00C71106 000000?? R
00C71107 000000?? O`,
		pnach:
			`// ganti nama karakter
// LIU KANG to ASEP
patch=1,EE,00C6E500,byte,41 // L to A
patch=1,EE,00C6E501,byte,53 // I to S
patch=1,EE,00C6E502,byte,45 // U to E
patch=1,EE,00C6E503,byte,50 // spasi to P
patch=1,EE,00C6E504,byte,20 // K to text kosong
patch=1,EE,00C6E505,byte,20 // A to text kosong
patch=1,EE,00C6E506,byte,20 // N to text kosong
patch=1,EE,00C6E507,byte,20 // G to text kosong
            
            
// KUNG LAO to AGUS
patch=1,EE,00C6E580,byte,41 // K to A
patch=1,EE,00C6E581,byte,47 // U to G
patch=1,EE,00C6E582,byte,55 // N to U
patch=1,EE,00C6E583,byte,53 // G to S
patch=1,EE,00C6E584,byte,20 // spasi to text kosong
patch=1,EE,00C6E585,byte,20 // L to text kosong
patch=1,EE,00C6E586,byte,20 // A to text kosong
patch=1,EE,00C6E587,byte,20 // O to text kosong
            
            
// SCORPION to HENGKERS
patch=1,EE,00C70E00,byte,48 // S to H
patch=1,EE,00C70E01,byte,45 // C to E
patch=1,EE,00C70E02,byte,4E // O to N
patch=1,EE,00C70E03,byte,47 // R to G
patch=1,EE,00C70E04,byte,4B // P to K
patch=1,EE,00C70E05,byte,45 // I to E
patch=1,EE,00C70E06,byte,52 // O to R
patch=1,EE,00C70E07,byte,53 // N to S
            
            
// SUB-ZERO to ?????
patch=1,EE,00C71100,byte,?? // S 
patch=1,EE,00C71101,byte,?? // U 
patch=1,EE,00C71102,byte,?? // B 
patch=1,EE,00C71103,byte,?? // - 
patch=1,EE,00C71104,byte,?? // Z 
patch=1,EE,00C71105,byte,?? // E 
patch=1,EE,00C71106,byte,?? // R
patch=1,EE,00C71107,byte,?? // O`,
	},



	{
		raw: `20F3EE38 00000000 // color hit after R1 + X && R1 + Triangle
20F3EE48 00000000 // color hit after R1 + X && R1 + Triangle
20F3ED48 00000190 // color R1 + Square
20F3F13C 000003E8 // snow effect appears three times R1 + Square
20629AEC 00000000 // color skin 'oni' yellow`,
		pnach: `patch=1,EE,20F3EE38,extended,00000000 // color hit after R1 + X && R1 + Triangle
patch=1,EE,20F3EE48,extended,00000000 // color hit after R1 + X && R1 + Triangle
patch=1,EE,20F3ED48,extended,00000190 // color R1 + Square
patch=1,EE,20F3F13C,extended,000003E8 // snow effect appears three times R1 + Square
patch=1,EE,20629AEC,extended,00000000 // color skin 'oni' yellow`,
	},





	{
		raw: `// tidak ada notifikasi tutorial dan karakter tetap bisa bergerak
205D11F8 00000000 // menghilangkan notifikasi
205D1228 00000000 // karaker tetap bisa bergerak`,
		pnach: `// tidak ada notifikasi tutorial dan karakter tetap bisa bergerak
patch=1,EE,005D11F8,byte,00 // menghilangkan notifikasi
patch=1,EE,005D1228,byte,00 // karaker tetap bisa bergerak`,
	},




	{
		raw: `// no requires fatality
204AD58C 00000000`,
		pnach: `// no requires fatality
patch=1,EE,204AD58C,byte,00`,
	},





	{
		raw: `// press R2
// Kung lao
2100A950 00000026

// Liu Kang
210398D0 00000026

// Subzero 
20FDF240 00000026

// Scorpion 
20FFC500 00000026


// if you want to use the joker command:
// Kung lao
//D0651F02 0000FEEF // L2 + UP ACTIVE
//2100A950 00000026 // Press R2
//D0651F02 0000FEFF // L2 DEACTIVE
//2100A950 000001C2 // Press R2

// Liu Kang
//D0651F02 0000FEEF // L2 + UP ACTIVE
//210398D0 00000026 // Press R2
//D0651F02 0000FEFF // L2 DEACTIVE
//210398D0 0000010A // Press R2

// Subzero
//D0651F02 0000FEEF // L2 + UP ACTIVE
//20FDF240 00000026 // Press R2
//D0651F02 0000FEFF // L2 DEACTIVE
//20FDF240 00000A2D // Press R2

// Scorpion
//D0651F02 0000FEEF // L2 + UP ACTIVE
//20FFC500 00000026 // Press R2
//D0651F02 0000FEFF // L2 DEACTIVE
//20FFC500 0000082C // Press R2`,
		pnach: `// press R2
// Kunglao
patch=1,EE,2100A950,byte,26

// Liu kang
patch=1,EE,210398D0,byte,26

// Subzero 
patch=1,EE,20FDF240,byte,26

// Scorpion 
patch=1,EE,20FFC500,byte,26


// if you want to use the joker command:
// Kung lao
//patch=1,EE,D0651F02,extended,0000FEEF // L2 + UP ACTIVE
//patch=1,EE,2100A950,extended,00000026 // Press R2
//patch=1,EE,D0651F02,extended,0000FEFF // L2 DEACTIVE
//patch=1,EE,2100A950,extended,000001C2 // Press R2

// Liu Kang
//patch=1,EE,D0651F02,extended,0000FEEF // L2 + UP ACTIVE
//patch=1,EE,210398D0,extended,00000026 // Press R2
//patch=1,EE,D0651F02,extended,0000FEFF // L2 DEACTIVE
//patch=1,EE,210398D0,extended,0000010A // Press R2

// Subzero
//patch=1,EE,D0651F02,extended,0000FEEF // L2 + UP ACTIVE
//patch=1,EE,20FDF240,extended,00000026 // Press R2
//patch=1,EE,D0651F02,extended,0000FEFF // L2 DEACTIVE
//patch=1,EE,20FDF240,extended,00000A2D // Press R2

// Scorpion
//patch=1,EE,D0651F02,extended,0000FEEF // L2 + UP ACTIVE
//patch=1,EE,20FFC500,extended,00000026 // Press R2
//patch=1,EE,D0651F02,extended,0000FEFF // L2 DEACTIVE
//patch=1,EE,20FFC500,extended,0000082C // Press R2`,
	},





	{
		raw: `// press R2
// Kung lao
2100A950 0000000F

// Liu Kang
210398D0 0000000F

// Subzero 
20FDF240 0000000F

// Scorpion
20FFC500 0000000F


// if you want to use the joker command:
// Kung lao
//D0651F02 0000FEDF // L2 + Right ACTIVE
//2100A950 0000000F // Press R2
//D0651F02 0000FEFF // L2 DEACTIVE
//2100A950 000001C2 // Press R2

// Liu Kang
//D0651F02 0000FEDF // L2 + Right ACTIVE
//210398D0 0000000F // Press R2
//D0651F02 0000FEFF // L2 DEACTIVE
//210398D0 0000010A // Press R2

// Subzero
//D0651F02 0000FEDF // L2 + Right ACTIVE
//20FDF240 0000000F // Press R2
//D0651F02 0000FEFF // L2 DEACTIVE
//20FDF240 00000A2D // Press R2

// Scorpion
//D0651F02 0000FEDF // L2 + Right ACTIVE
//20FFC500 0000000F // Press R2
//D0651F02 0000FEFF // L2 DEACTIVE
//20FFC500 0000082C // Press R2`,
		pnach: `// press R2
// Kunglao
patch=1,EE,2100A950,byte,0F

// Liu kang
patch=1,EE,210398D0,byte,0F

// Subzero 
patch=1,EE,20FDF240,byte,0F

// Scorpion 
patch=1,EE,20FFC500,byte,0F


// if you want to use the joker command:
// Kung lao
//patch=1,EE,D0651F02,extended,0000FEDF // L2 + Right ACTIVE
//patch=1,EE,2100A950,extended,0000000F // Press R2
//patch=1,EE,D0651F02,extended,0000FEFF // L2 DEACTIVE
//patch=1,EE,2100A950,extended,000001C2 // Press R2

// Liu Kang
//patch=1,EE,D0651F02,extended,0000FEDF // L2 + Right ACTIVE
//patch=1,EE,210398D0,extended,0000000F // Press R2
//patch=1,EE,D0651F02,extended,0000FEFF // L2 DEACTIVE
//patch=1,EE,210398D0,extended,0000010A // Press R2

// Subzero
//patch=1,EE,D0651F02,extended,0000FEDF // L2 + Right ACTIVE
//patch=1,EE,20FDF240,extended,0000000F // Press R2
//patch=1,EE,D0651F02,extended,0000FEFF // L2 DEACTIVE
//patch=1,EE,20FDF240,extended,00000A2D // Press R2

// Scorpion
//patch=1,EE,D0651F02,extended,0000FEDF // L2 + Right ACTIVE
//patch=1,EE,20FFC500,extended,0000000F // Press R2
//patch=1,EE,D0651F02,extended,0000FEFF // L2 DEACTIVE
//patch=1,EE,20FFC500,extended,0000082C // Press R2`,
	},
	{
		raw: `// Press Select for active
D0651F02 0000FFFE // press Select
205E2FC4 000000XX // map modifier`,
		pnach: `// Press Select for active
patch=1,EE,D0651F02,extended,0000FFFE // press Select
patch=1,EE,205E2FC4,extended,000000XX // map modifier`
	},
	{
		raw: `20C47700 = Continue
20C47780 = Options
20C47880 = Exit Game
20C66E80 = x Select  △ Exit ↑/↓ Navigate

--- isi dari Options/Debug Menu ---
20C46A00 = Reload Level
20C47380 = Map Select
20C47500 = Save Menu
20C6DA00 = God Mode On
20C6DA80 = God Mode Off
20C6D700 = P1 Fatality Level
20C6D780 = P2 Fatality Level
20C47800 = Warp Player

--- isi dari Exit Game ---
20C47900 = Exit Game? All Progress Will Be Lost.
20C48900 = Yes
20C48980 = No`,
		pnach: `// Continue -> Lanjutkan
patch=1,EE,20C47700,byte,4C // L
patch=1,EE,20C47701,byte,61 // a
patch=1,EE,20C47702,byte,6E // n
patch=1,EE,20C47703,byte,6A // j
patch=1,EE,20C47704,byte,75 // u
patch=1,EE,20C47705,byte,74 // t
patch=1,EE,20C47706,byte,6B // k
patch=1,EE,20C47707,byte,61 // a
patch=1,EE,20C47708,byte,6E // n

// Options -> Buka Menu Cheat
patch=1,EE,20C47780,byte,42 // B
patch=1,EE,20C47781,byte,75 // u
patch=1,EE,20C47782,byte,6B // k
patch=1,EE,20C47783,byte,61 // a
patch=1,EE,20C47784,byte,20 // spasi
patch=1,EE,20C47785,byte,4D // M
patch=1,EE,20C47786,byte,65 // e
patch=1,EE,20C47787,byte,6E // n
patch=1,EE,20C47788,byte,75 // u
patch=1,EE,20C47789,byte,20 // spasi
patch=1,EE,20C4778A,byte,43 // C
patch=1,EE,20C4778B,byte,68 // h
patch=1,EE,20C4778C,byte,65 // e
patch=1,EE,20C4778D,byte,61 // a
patch=1,EE,20C4778E,byte,74 // t

// Exit Menu -> Keluar Dari Game
patch=1,EE,20C47880,byte,4B // K
patch=1,EE,20C47881,byte,65 // e
patch=1,EE,20C47882,byte,6C // l
patch=1,EE,20C47883,byte,75 // u
patch=1,EE,20C47884,byte,61 // a
patch=1,EE,20C47885,byte,72 // r
patch=1,EE,20C47886,byte,20 // spasi
patch=1,EE,20C47887,byte,44 // D
patch=1,EE,20C47888,byte,61 // a
patch=1,EE,20C47889,byte,72 // r
patch=1,EE,20C4788A,byte,69 // i
patch=1,EE,20C4788B,byte,20 // spasi
patch=1,EE,20C4788C,byte,47 // G
patch=1,EE,20C4788D,byte,61 // a
patch=1,EE,20C4788E,byte,6D // m
patch=1,EE,20C4788F,byte,65 // e

// Reload Level -> Muat Ulang Map ini
patch=1,EE,20C46A00,byte,4D // M
patch=1,EE,20C46A01,byte,75 // u
patch=1,EE,20C46A02,byte,61 // a
patch=1,EE,20C46A03,byte,74 // t
patch=1,EE,20C46A04,byte,20 // spasi
patch=1,EE,20C46A05,byte,75 // u
patch=1,EE,20C46A06,byte,6C // l
patch=1,EE,20C46A07,byte,61 // a
patch=1,EE,20C46A08,byte,6E // n
patch=1,EE,20C46A09,byte,67 // g
patch=1,EE,20C46A0A,byte,20 // spasi
patch=1,EE,20C46A0B,byte,6D // m
patch=1,EE,20C46A0C,byte,61 // a
patch=1,EE,20C46A0D,byte,70 // p
patch=1,EE,20C46A0E,byte,20 // spasi
patch=1,EE,20C46A0F,byte,69 // i
patch=1,EE,20C46A10,byte,6E // n
patch=1,EE,20C46A11,byte,69 // i

// Map Select -> Pindah Map
patch=1,EE,20C47380,byte,50 // P
patch=1,EE,20C47381,byte,69 // i
patch=1,EE,20C47382,byte,6E // n
patch=1,EE,20C47383,byte,64 // d
patch=1,EE,20C47384,byte,61 // a
patch=1,EE,20C47385,byte,68 // h
patch=1,EE,20C47386,byte,20 // spasi
patch=1,EE,20C47387,byte,6D // m
patch=1,EE,20C47388,byte,61 // a
patch=1,EE,20C47389,byte,70 // p

// Save game -> Simpan game
patch=1,EE,20C47500,byte,53 // S
patch=1,EE,20C47501,byte,69 // i
patch=1,EE,20C47502,byte,6D // m
patch=1,EE,20C47503,byte,70 // p
patch=1,EE,20C47504,byte,61 // a
patch=1,EE,20C47505,byte,6E // n
patch=1,EE,20C47506,byte,20 // spasi
patch=1,EE,20C47507,byte,67 // g
patch=1,EE,20C47508,byte,61 // a
patch=1,EE,20C47509,byte,6D // m
patch=1,EE,20C4750A,byte,65 // e

// God Mode On -> Aktifkan God Mode
patch=1,EE,20C6DA00,byte,41 // A
patch=1,EE,20C6DA01,byte,6B // k
patch=1,EE,20C6DA02,byte,74 // t
patch=1,EE,20C6DA03,byte,69 // i
patch=1,EE,20C6DA04,byte,66 // f
patch=1,EE,20C6DA05,byte,6B // k
patch=1,EE,20C6DA06,byte,61 // a
patch=1,EE,20C6DA07,byte,6E // n
patch=1,EE,20C6DA08,byte,20 // spasi
patch=1,EE,20C6DA09,byte,67 // g
patch=1,EE,20C6DA0A,byte,6F // o
patch=1,EE,20C6DA0B,byte,64 // d
patch=1,EE,20C6DA0C,byte,20 // spasi
patch=1,EE,20C6DA0D,byte,6D // m
patch=1,EE,20C6DA0E,byte,6F // o
patch=1,EE,20C6DA0F,byte,64 // d
patch=1,EE,20C6DA10,byte,65 // e

// God Mode Off -> Matikan God Mode
patch=1,EE,20C6DA80,byte,4D // M
patch=1,EE,20C6DA81,byte,61 // a
patch=1,EE,20C6DA82,byte,74 // t
patch=1,EE,20C6DA83,byte,69 // i
patch=1,EE,20C6DA84,byte,6B // k
patch=1,EE,20C6DA85,byte,61 // a
patch=1,EE,20C6DA86,byte,6E // n
patch=1,EE,20C6DA87,byte,20 // spasi
patch=1,EE,20C6DA88,byte,67 // g
patch=1,EE,20C6DA89,byte,6F // o
patch=1,EE,20C6DA8A,byte,64 // d
patch=1,EE,20C6DA8B,byte,20 // spasi
patch=1,EE,20C6DA8C,byte,6D // m
patch=1,EE,20C6DA8D,byte,6F // o
patch=1,EE,20C6DA8E,byte,64 // d
patch=1,EE,20C6DA8F,byte,65 // e

// P1 Fatality Level -> Fatality Level Player 1
patch=1,EE,20C6D700,byte,46 // F
patch=1,EE,20C6D701,byte,61 // a
patch=1,EE,20C6D702,byte,74 // t
patch=1,EE,20C6D703,byte,61 // a
patch=1,EE,20C6D704,byte,6C // l
patch=1,EE,20C6D705,byte,69 // i
patch=1,EE,20C6D706,byte,74 // t
patch=1,EE,20C6D707,byte,79 // y
patch=1,EE,20C6D708,byte,20 // spasi
patch=1,EE,20C6D709,byte,6C // l
patch=1,EE,20C6D70A,byte,65 // e
patch=1,EE,20C6D70B,byte,76 // v
patch=1,EE,20C6D70C,byte,65 // e
patch=1,EE,20C6D70D,byte,6C // l
patch=1,EE,20C6D70E,byte,20 // spasi
patch=1,EE,20C6D70F,byte,70 // p
patch=1,EE,20C6D710,byte,6C // l
patch=1,EE,20C6D711,byte,61 // a
patch=1,EE,20C6D712,byte,79 // y
patch=1,EE,20C6D713,byte,65 // e
patch=1,EE,20C6D714,byte,72 // r
patch=1,EE,20C6D715,byte,20 // spasi
patch=1,EE,20C6D716,byte,31 // 1

// P2 Fatality Level -> Fatality Level Player 2
patch=1,EE,20C6D780,byte,46 // F
patch=1,EE,20C6D781,byte,61 // a
patch=1,EE,20C6D782,byte,74 // t
patch=1,EE,20C6D783,byte,61 // a
patch=1,EE,20C6D784,byte,6C // l
patch=1,EE,20C6D785,byte,69 // i
patch=1,EE,20C6D786,byte,74 // t
patch=1,EE,20C6D787,byte,79 // y
patch=1,EE,20C6D788,byte,20 // spasi
patch=1,EE,20C6D789,byte,6C // l
patch=1,EE,20C6D78A,byte,65 // e
patch=1,EE,20C6D78B,byte,76 // v
patch=1,EE,20C6D78C,byte,65 // e
patch=1,EE,20C6D78D,byte,6C // l
patch=1,EE,20C6D78E,byte,20 // spasi
patch=1,EE,20C6D78F,byte,70 // p
patch=1,EE,20C6D790,byte,6C // l
patch=1,EE,20C6D791,byte,61 // a
patch=1,EE,20C6D792,byte,79 // y
patch=1,EE,20C6D793,byte,65 // e
patch=1,EE,20C6D794,byte,72 // r
patch=1,EE,20C6D795,byte,20 // spasi
patch=1,EE,20C6D796,byte,32 // 2

// Warp Player -> Pindah Posisi
patch=1,EE,20C47800,byte,50 // P
patch=1,EE,20C47801,byte,69 // i
patch=1,EE,20C47802,byte,6E // n
patch=1,EE,20C47803,byte,64 // d
patch=1,EE,20C47804,byte,61 // a
patch=1,EE,20C47805,byte,68 // h
patch=1,EE,20C47806,byte,20 // spasi
patch=1,EE,20C47807,byte,70 // p
patch=1,EE,20C47808,byte,6F // o
patch=1,EE,20C47809,byte,73 // s
patch=1,EE,20C4780A,byte,69 // i
patch=1,EE,20C4780B,byte,73 // s
patch=1,EE,20C4780C,byte,69 // i

// Exit Game? All Progress Will Be Lost. -> Keluar game? data tidak akan tersimpan!
patch=1,EE,20C47900,byte,4B // K
patch=1,EE,20C47901,byte,65 // e
patch=1,EE,20C47902,byte,6C // l
patch=1,EE,20C47903,byte,75 // u
patch=1,EE,20C47904,byte,61 // a
patch=1,EE,20C47905,byte,72 // r
patch=1,EE,20C47906,byte,20 // spasi
patch=1,EE,20C47907,byte,67 // g
patch=1,EE,20C47908,byte,61 // a
patch=1,EE,20C47909,byte,6D // m
patch=1,EE,20C4790A,byte,65 // e
patch=1,EE,20C4790B,byte,3F // ?
patch=1,EE,20C4790C,byte,0A // pindah baris
patch=1,EE,20C4790D,byte,64 // d
patch=1,EE,20C4790E,byte,61 // a
patch=1,EE,20C4790F,byte,74 // t
patch=1,EE,20C47910,byte,61 // a
patch=1,EE,20C47911,byte,20 // spasi
patch=1,EE,20C47912,byte,74 // t
patch=1,EE,20C47913,byte,69 // i
patch=1,EE,20C47914,byte,64 // d
patch=1,EE,20C47915,byte,61 // a
patch=1,EE,20C47916,byte,6B // k
patch=1,EE,20C47917,byte,20 // spasi
patch=1,EE,20C47918,byte,61 // a
patch=1,EE,20C47919,byte,6B // k
patch=1,EE,20C4791A,byte,61 // a
patch=1,EE,20C4791B,byte,6E // n 
patch=1,EE,20C4791C,byte,20 // spasi
patch=1,EE,20C4791D,byte,74 // t
patch=1,EE,20C4791E,byte,65 // e
patch=1,EE,20C4791F,byte,72 // r
patch=1,EE,20C47920,byte,73 // s
patch=1,EE,20C47921,byte,69 // i
patch=1,EE,20C47922,byte,6D // m
patch=1,EE,20C47923,byte,70 // p
patch=1,EE,20C47924,byte,61 // a
patch=1,EE,20C47925,byte,6E // n
patch=1,EE,20C47926,byte,21 // !

// x Select  △ Exit ↑/↓ Navigate -> x Konfirmasi  △ Keluar ↑/↓ Navigasi
patch=1,EE,20C66E80,byte,3D // icon x (jangan diganti)
patch=1,EE,20C66E81,byte,4B // K
patch=1,EE,20C66E82,byte,6F // o
patch=1,EE,20C66E83,byte,6E // n
patch=1,EE,20C66E84,byte,66 // f
patch=1,EE,20C66E85,byte,69 // i
patch=1,EE,20C66E86,byte,72 // r
patch=1,EE,20C66E87,byte,6D // m
patch=1,EE,20C66E88,byte,61 // a
patch=1,EE,20C66E89,byte,73 // s
patch=1,EE,20C66E8A,byte,69 // i
patch=1,EE,20C66E8B,byte,20 // spasi
patch=1,EE,20C66E8C,byte,20 // spasi
patch=1,EE,20C66E8D,byte,7E // icon △ (jangan diganti)
patch=1,EE,20C66E8E,byte,4B // k
patch=1,EE,20C66E8F,byte,65 // e
patch=1,EE,20C66E90,byte,6C // l
patch=1,EE,20C66E91,byte,75 // u
patch=1,EE,20C66E92,byte,61 // a
patch=1,EE,20C66E93,byte,72 // r
patch=1,EE,20C66E94,byte,20 // spasi
patch=1,EE,20C66E95,byte,20 // spasi
patch=1,EE,20C66E96,byte,7B // icon ↑ (jangan diganti)
patch=1,EE,20C66E97,byte,2F // icon / (jangan diganti)
patch=1,EE,20C66E98,byte,7D // icon ↓ (jangan diganti)
patch=1,EE,20C66E99,byte,4E // n
patch=1,EE,20C66E9A,byte,61 // a
patch=1,EE,20C66E9B,byte,76 // v
patch=1,EE,20C66E9C,byte,69 // i
patch=1,EE,20C66E9D,byte,67 // g
patch=1,EE,20C66E9E,byte,61 // a
patch=1,EE,20C66E9F,byte,73 // s
patch=1,EE,20C66EA0,byte,69 // i

// Yes -> Yakin
patch=1,EE,20C48900,byte,59 // Y
patch=1,EE,20C48901,byte,61 // a
patch=1,EE,20C48902,byte,6B // k
patch=1,EE,20C48903,byte,69 // i
patch=1,EE,20C48904,byte,6E // n

// No -> Nggak
patch=1,EE,20C48980,byte,4E // N
patch=1,EE,20C48981,byte,67 // g
patch=1,EE,20C48982,byte,67 // g
patch=1,EE,20C48983,byte,61 // a
patch=1,EE,20C48984,byte,6B // k`
	},
	{
		raw: `// menhilangkan ular saat menghancurkan tiang
205B37E0 00000006
        
// reptile tidak bisa menghilang
217375D4 00000001
217377A4 00000001
21737B44 00000001
21737D14 00000001
21737EE4 00000001
217380B4 00000001
21738284 00000001
21738454 00000001
21738624 00000001
217387F4 00000001
217389C4 00000001
21738B94 00000001
21738D64 00000001
21738F34 00000001
21739104 00000001
217392D4 00000001
217394A4 00000001
21735534 00000001
21735704 00000001
217358D4 00000001
21735AA4 00000001
21735C74 00000001
21735E44 00000001
21736014 00000001
217361E4 00000001
21736584 00000001
21737974 00000001
21739674 00000001
21739844 00000001
21739A14 00000001
21739BE4 00000001
21739DB4 00000001
21739F84 00000001
2173A154 00000001
2173A324 00000001
2173A894 00000001
2173AA64 00000001
2173AC34 00000001
2173AE04 00000001
2173AFD4 00000001
2173B1A4 00000001
2173B374 00000001
2173B544 00000001
2173B714 00000001
2173B8E4 00000001
2173BAB4 00000001
2173BC84 00000001
2173BE54 00000001
2173C024 00000001
2173C1F4 00000001
2173C594 00000001
2173C934 00000001
2173CB04 00000001
2173CCD4 00000001`,
		pnach: `// menhilangkan ular saat menghancurkan tiang
patch=1,EE,205B37E0,byte,06

// reptile tidak bisa menghilang
patch=1,EE,217375D4,byte,01
patch=1,EE,217377A4,byte,01
patch=1,EE,21737B44,byte,01
patch=1,EE,21737D14,byte,01
patch=1,EE,21737EE4,byte,01
patch=1,EE,217380B4,byte,01
patch=1,EE,21738284,byte,01
patch=1,EE,21738454,byte,01
patch=1,EE,21738624,byte,01
patch=1,EE,217387F4,byte,01
patch=1,EE,217389C4,byte,01
patch=1,EE,21738B94,byte,01
patch=1,EE,21738D64,byte,01
patch=1,EE,21738F34,byte,01
patch=1,EE,21739104,byte,01
patch=1,EE,217392D4,byte,01
patch=1,EE,217394A4,byte,01
patch=1,EE,21735534,byte,01
patch=1,EE,21735704,byte,01
patch=1,EE,217358D4,byte,01
patch=1,EE,21735AA4,byte,01
patch=1,EE,21735C74,byte,01
patch=1,EE,21735E44,byte,01
patch=1,EE,21736014,byte,01
patch=1,EE,217361E4,byte,01
patch=1,EE,21736584,byte,01
patch=1,EE,21737974,byte,01
patch=1,EE,21739674,byte,01
patch=1,EE,21739844,byte,01
patch=1,EE,21739A14,byte,01
patch=1,EE,21739BE4,byte,01
patch=1,EE,21739DB4,byte,01
patch=1,EE,21739F84,byte,01
patch=1,EE,2173A154,byte,01
patch=1,EE,2173A324,byte,01
patch=1,EE,2173A894,byte,01
patch=1,EE,2173AA64,byte,01
patch=1,EE,2173AC34,byte,01
patch=1,EE,2173AE04,byte,01
patch=1,EE,2173AFD4,byte,01
patch=1,EE,2173B1A4,byte,01
patch=1,EE,2173B374,byte,01
patch=1,EE,2173B544,byte,01
patch=1,EE,2173B714,byte,01
patch=1,EE,2173B8E4,byte,01
patch=1,EE,2173BAB4,byte,01
patch=1,EE,2173BC84,byte,01
patch=1,EE,2173BE54,byte,01
patch=1,EE,2173C024,byte,01
patch=1,EE,2173C1F4,byte,01
patch=1,EE,2173C594,byte,01
patch=1,EE,2173C934,byte,01
patch=1,EE,2173CB04,byte,01
patch=1,EE,2173CCD4,byte,01`
	},
	{
		raw:
			`20B31094 00000000
20B31594 00000000
20B31814 00000000`,
		pnach: `// tembus pagar pertama wushi-01
patch=1,EE,20B31094,byte,00

// tembus pagar kedua wushi-01
patch=1,EE,20B31594,byte,00

// tembus pagar ketiga wushi-01
patch=1,EE,20B31814,byte,00`
	},
	{
		raw:
			`D0651F02 0000F6FF
2073D700 FFFFFFFF`,
		pnach: `patch=1,EE,D0651F02,extended,0000F6FF // L2 + R1
patch=1,EE,2073D700,extended,FFFFFFFF // spawn oni warlord`
	}
]

export default CheatCodeFree;  
