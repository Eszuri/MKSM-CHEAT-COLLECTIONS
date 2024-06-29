const CheatCode = {
        Free: {
                raw_1:
                        `// exp unlimited
20C2E224 3B9AC9FF

// health unlimited && max health
20C08928 00000258 -> bar health
20C29760 00000004 -> max health

// energy unlimited
205CCE30 42C80000`,


                pnach_1:
                        `// exp unlimited
patch=1,EE,20C2E224,extended,3B9AC9FF

// health unlimited && max health
patch=1,EE,20C08928,extended,00000258 // bar health
patch=1,EE,20C29760,extended,00000004 // max health

// energy unlimited
patch=1,EE,205CCE30,extended,42C80000`,


                raw_2:
                        `// brutality no decreased
205BB23C 000003E7`,

                pnach_2:
                        `// brutality no decreased
patch=1,EE,205BB23C,extended,000003E7`,

                raw_3:
                        `// fatality meter always full
20C2E238 44960000`,

                pnach_3:
                        `// fatality meter always full
patch=1,EE,20C2E238,extended,44960000`,

                raw_4:
                        `// fatality meter level 3
20C2E260 00000003`,

                pnach_4:
                        `// fatality meter level 3
patch=1,EE,20C2E260,extended,00000003`,

                raw_5:
                        `// unlock all platform (moves)
20C29848 00000001 // wall climb
20C29849 00000001 // wall run
20C2984A 00000001 // wall jump
20C2984B 00000001 // double jump
20C2984C 00000001 // long jump
20C2984D 00000001 // swing on poles
20C2984E 00000001 // fist of ruin`,

                pnach_5:
                        `// unlock all platform (moves)
patch=1,EE,20C29848,byte,01 // wall climb
patch=1,EE,20C29849,byte,01 // wall run
patch=1,EE,20C2984A,byte,01 // wall jump
patch=1,EE,20C2984B,byte,01 // double jump
patch=1,EE,20C2984C,byte,01 // long jump
patch=1,EE,20C2984D,byte,01 // swing on poles
patch=1,EE,20C2984E,byte,01 // fist of ruin`,

                raw_6:
                        `// Open door to the foundry
20C2E04C 00000001
20C2E048 00000001
20C2E044 00000001
20C2E040 00000001
20C2DF94 00000001`,

                pnach_6:
                        `// Open door to the foundry
patch=1,EE,20C2E04C,byte,01
patch=1,EE,20C2E048,byte,01
patch=1,EE,20C2E044,byte,01
patch=1,EE,20C2E040,byte,01
patch=1,EE,20C2DF94,byte,01`,

                raw_7:
                        `// fly / infinite jump v1
D0651F02 0000F7FF // R1
205E8954 00000000 // fly`,

                pnach_7:
                        `// fly / infinite jump v1
patch=1,EE,D0651F02,extended,0000F7FF // R1
patch=1,EE,205E8954,extended,00000000 // fly`,

                raw_8:
                        `// fly / infinite jump v2
D0651F02 0000FFBF // D-PAD DOWN
205E6D70 00000002 // fly`,

                pnach_8:
                        `// fly / infinite jump v2
patch=1,EE,D0651F02,extended,0000FFBF // D-PAD DOWN
patch=1,EE,205E6D70,extended,00000002 // fly`,

                raw_9:
                        `// walking through walls
D0651F02 0000FFFD // L3
2038DFA4 1000001C
D0651F02 0000FFFF // ini jangan diganti
2038DFA4 0620001C`,

                pnach_9:
                        `// walking through walls
patch=1,EE,D0651F02,extended,0000FFFD // L3
patch=1,EE,2038DFA4,extended,1000001C
patch=1,EE,D0651F02,extended,0000FFFF // ini jangan diganti
patch=1,EE,2038DFA4,extended,0620001C`,

                raw_10:
                        `// damage modifier
// default = 100
20C08950 000003EB // 1000`,

                pnach_10:
                        `// damage modifier
// default = 100
patch=1,EE,20C08950,extended,000003EB // 1000`,

                raw_11:
                        `// Shang tsung berubah jadi Shao kahn
20707708 00000040`,

                pnach_11:
                        `// Shang tsung berubah jadi Shao kahn
patch=1,EE,20707708,byte,40`,

                raw_12:
                        `// character modifier
205CC680 00000053 // scorpion to baraka
205CC65C 00000044 // sub-zero to ermac`,

                pnach_12:
                        `// character modifier
patch=1,EE,005CC680,byte,53 // scorpion to baraka
patch=1,EE,005CC65C,byte,44 // sub-zero to ermac`,

                raw_13:
                        `// "Test Your Might"
205CCF04 00000064 // durasi 1s
205CCF0C 42C80000 // bar full`,

                pnach_13:
                        `// "Test Your Might"
patch=1,EE,205CCF04,extended,00000064 // durasi 1s
patch=1,EE,205CCF0C,extended,42C80000 // bar full`,

                raw_14:
                        `// Brightness Modifier
// default min = 0
// default max = 32
204F4C54 00000020 // 32`,

                pnach_14:
                        `// Brightness Modifier
// default min = 0
// default max = 32
patch=1,EE,204F4C54,extended,00000020 // 32`,

                raw_15:
                        `// super long jump
// default = 100
2064DB34 437A0000 // 250`,

                pnach_15:
                        `// super long jump
// default = 100
patch=1,EE,2064DB34,extended,437A0000 // 250`,

                raw_16:
                        `// unbreakable sword
205D892C 0098967F`,

                pnach_16:
                        `// unbreakable sword
patch=1,EE,205D892C,extended,0098967F`,

                raw_17:
                        `// auto high jump (press triangle after jump)
// default = 60
20FCC278 000001F4 // 500`,

                pnach_17:
                        `// auto high jump (press triangle after jump)
// default = 60
patch=1,EE,20FCC278,extended,000001F4 // 500`,

                raw_18:
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

                pnach_18:
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

                raw_19: `20F3EE38 00000000 // color hit after R1 + X && R1 + Triangle
20F3EE48 00000000 // color hit after R1 + X && R1 + Triangle
20F3ED48 00000190 // color R1 + Square
20F3F13C 000003E8 // snow effect appears three times R1 + Square
20629AEC 00000000 // color skin 'oni' yellow`,

                pnach_19: `patch=1,EE,20F3EE38,extended,00000000 // color hit after R1 + X && R1 + Triangle
patch=1,EE,20F3EE48,extended,00000000 // color hit after R1 + X && R1 + Triangle
patch=1,EE,20F3ED48,extended,00000190 // color R1 + Square
patch=1,EE,20F3F13C,extended,000003E8 // snow effect appears three times R1 + Square
patch=1,EE,20629AEC,extended,00000000 // color skin 'oni' yellow`,

                raw_20: `// tidak ada notifikasi tutorial dan karakter tetap bisa bergerak
205D11F8 00000000 // menghilangkan notifikasi
205D1228 00000000 // karaker tetap bisa bergerak`,

                pnach_20: `// tidak ada notifikasi tutorial dan karakter tetap bisa bergerak
patch=1,EE,005D11F8,byte,00 // menghilangkan notifikasi
patch=1,EE,005D1228,byte,00 // karaker tetap bisa bergerak`,

                raw_21: `// no requires fatality
204AD58C 00000000`,

                pnach_21: `// no requires fatality
patch=1,EE,204AD58C,byte,00`,

                raw_22: `// press R2
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


                pnach_22: `// press R2
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


                raw_23: `// press R2
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


                pnach_23: `// press R2
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
        }
}

export default CheatCode;  