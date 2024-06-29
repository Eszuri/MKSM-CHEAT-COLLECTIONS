import { DataListSideBar_simple } from "./DataListFree"
import mksmCheatActive from "@/Images/mksm-cheat-active.jpg";
import mksmCRCGame from "@/Images/mksm-crc-game.png";
import mksmCheatFolder from "@/Images/mksm-folder-cheat.png";
import mksmCheatLocal from "@/Images/mksm-cheat-activate-lokal.png"
import mksmCheatGlobal from "@/Images/mksm-cheat-gobal.png"
import mksmExplorerCheatFolder from '@/Images/mksm-explorer-folder-cheat.png'
import mksmNotepadEdit from "@/Images/mksm-notepad-edit-cheat.png"

export const DataCheatPageProblem = {
    pageOne: [
        {
            id: 0,
            label: "Full Text",
            content: (
                <ul className='list-disc list-inside'>
                    <li>periksa bahwa cheat benar benar aktif</li>
                    <li>periksa bahwa file pnach sama dengan CRC game</li>
                </ul>
            )
        },
        {
            id: 1,
            label: "Full Image",
            content: (
                <ul className='list-disc list-inside'>
                    <img src={mksmCheatActive} alt="cheat activated" />
                    <br />
                    <img src={mksmCheatLocal} alt="cheat activate local" />
                    <br />
                    <img src={mksmCheatGlobal} alt="cheat activate global" />
                    <br />
                    <img src={mksmCRCGame} alt="CRC GAME" />
                </ul>
            )
        }
    ],
    pageTwo: [
        {
            id: 0,
            label: "Full Text",
            content: (
                <ul className='list-disc list-inside'>
                    <li>pengguna PC : <span className='text-emerald-400 font-semibold italic'>PCSX2</span></li>
                    <li>pengguna HP : <span className='text-emerald-400 font-semibold italic'>AetherSX2</span></li>
                    <br />
                    <span>support all version {'(versi berapa pun bisa)'}</span>
                </ul>
            )
        },
        {
            id: 1,
            label: "Full Image",
            content: (
                <p className="text-center m-3 text-xl font-bold my-10">tidak ada gambar yg tersedia</p>
            )
        }
    ],
    pageThree: [
        {
            id: 0,
            label: "Full Text",
            content: (
                <ul className='list-decimal list-inside'>
                    <span className="font-semibold">Untuk pengguna PC di PCSX2 <span className='text-sm text-emerald-400'>{'(nightly version/v1.7)'}</span> :</span>
                    <li className='mt-2'>buka file explorer lalu cari folder cheatnya</li>
                    <li>jika tidak tahu lokai folder cheat nya, kalian ikuti ini:</li>
                    <div className="ml-3 grid opacity-80">
                        <span>- buka pcsx2 v1.7</span>
                        <span>- pilih 'pengaturan' sebelah kiri atas</span>
                        <span>- akan muncul pilihan, kalian pilih 'Folder'</span>
                        <span>- nanti akan muncul popup, kalian cari saja 'Directory Cheat'</span>
                        <span>- pilih 'buka...' atau bisa mencari folder secara manual</span>
                    </div>
                    <li>pada folder tersebut, buat file '455DD546.pnach'</li>
                    <li>jika file '455DD546.pnach' sudah ada sebelumnya, kalian tinggal buka saja</li>
                    <li>buka file '455DD546.pnach' dengan text editor apapun, bebas, terserah</li>
                    <li>salin kode diatas atau kode pnach yg sudah anda siapkan ntah dapet darimana</li>
                    <li>paste atau tempel kode cheatnya</li>
                    <li>save, lalu aktifkan cheat</li>
                    <li>jika tidak tau cara aktifkan cheatnya, kalian ikuti ini:</li>
                    <div className="ml-3 grid opacity-80">
                        <span>- buka pcsx2 v1.7</span>
                        <span>- pilih 'pengaturan' sebelah kiri atas</span>
                        <span>- akan muncul pilihan, kalian pilih 'Emulasi'</span>
                        <span>- nanti akan muncul popup, kalian cari saja 'Aktifkan Cheat'</span>
                        <span>- lalu centang dalam checkbox tersebut</span>
                        <span>- cheat sudah aktif, game bisa langsung diluncurkan</span>
                    </div>
                    <br /><br /><br /><br />
                    <span className="font-semibold">Untuk pengguna PC di PCSX2 <span className='text-sm text-emerald-400'>{'(stable version/v1.6)'}</span> :</span>
                    <ul className='list-decimal list-inside'>
                        <p className="mt-2">carannya sama seperti diatas</p>
                        <li>buka file explorer lalu cari folder cheatnya</li>
                        <li>jika tidak tahu lokai folder cheat nya, kalian ikuti ini:</li>
                        <div className="ml-3 grid opacity-80">
                            <span>- buka pcsx2 v1.6</span>
                            <span>- pilih 'Konfigurasi' sebelah atas</span>
                            <span>- akan muncul pilihan, kalian pilih 'Pemilih Plugin/BIOS'</span>
                            <span>- nanti akan muncul popup, kalian cari saja 'Folder' sebelah kiri</span>
                            <span>- lalu cari 'Cheats' ada dibagian paling atas</span>
                            <span>- pilih 'Buka dalam Explorer' atau bisa mencari folder secara manual</span>
                        </div>
                        <li>pada folder tersebut, buat file '455DD546.pnach'</li>
                        <li>jika file '455DD546.pnach' sudah ada sebelumnya, kalian tinggal buka saja</li>
                        <li>buka file '455DD546.pnach' dengan text editor apapun, bebas, terserah</li>
                        <li>salin kode diatas atau kode pnach yg sudah anda siapkan ntah dapet darimana</li>
                        <li>paste atau tempel kode cheatnya</li>
                        <li>save, lalu aktifkan cheat</li>
                        <li>jika tidak tau cara aktifkan cheatnya, kalian ikuti ini:</li>
                        <div className="ml-3 grid opacity-80">
                            <span>- buka pcsx2 v1.6</span>
                            <span>- pilih 'Sistem' sebelah kiri atas</span>
                            <span>- akan muncul pilihan, kalian cari 'Aktifkan Cheats'</span>
                            <span>- lalu centang sampai muncul logo checklist/centang</span>
                            <span>- cheat sudah aktif, game bisa langsung diluncurkan</span>
                        </div>
                    </ul>
                    <br /><br /><br /><br />
                    <span className="font-semibold">Untuk pengguna HP di AetherSX2 <span className='text-sm text-emerald-400'>{'(all version)'}</span> :</span>
                    <ul className='list-decimal list-inside mt-2'>
                        <p className='mt-2'>sebelum memulai, kalian siapkan kode pnach terlebih dahulu</p>
                        <li>buka aplikasi AetherSX2</li>
                        <li>pilih game 'Mortal Kombat Shaolin Monk' dan masuk ke game nya</li>
                        <li>tunggu beberapa saat sampai booting bios selesai</li>
                        <li>setelah booting bios selesai, masuk ke pengaturan</li>
                        <li>tombol pengaturan biasanya ada di pojok kanan atas</li>
                        <li>alternatif lain, tekan tombol kembali dari hp bawaan</li>
                        <li>setelah masuk ke pengaturan, kalian scroll ke bawah</li>
                        <li>cari dan klik 'Kode Patch'</li>
                        <li>akan muncul 5 pilihan, kalian pilih 'Ubah Patch'</li>
                        <li>lalu paste atau tempelkan kode pnach yg sudah anda siapkan</li>
                        <li>tekan tombol simpan di pojok kanan atas</li>
                        <li>setelah tersimpan nanti otomatis akan keluar dari pengaturan</li>
                        <li>kalian masuk lagi ke pengaturan dan pilih 'Kode Patch'</li>
                        <li>lalu pilih 'Aktifkan Patch' dan otomatis akan keluar dari pengaturan</li>
                        <li>kalian perhatikan notifikasi di kiri atas</li>
                        <li>jika muncul '10 cheat patches are active' berarti cheat sudah aktif</li>
                        <li>angka 10 itu hanya perumpamaan atau contoh</li>
                        <li>agar cheat benar benar sudah dimuat semuanya, kalian keluar game dan masuk ke game lagi</li>
                    </ul>
                </ul >
            )
        },
        {
            id: 1,
            label: "Full Image",
            content: (
                <ul className='list-disc list-inside'>
                    <br />
                    <img src={mksmCheatFolder} alt="folder cheat" />
                    <br />
                    <img src={mksmExplorerCheatFolder} alt="cheat folder" />
                    <br />
                    <img src={mksmNotepadEdit} alt="edit pnach" />
                    <br />
                    <img src={mksmCheatGlobal} alt="cheat activate global" />
                </ul>
            )
        }
    ]
}

const DataCheatPage = [
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code dasar/basic. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "experience 999999999", li_Desc: "membeli skill/combo menjadi gratis" },
            { li_title: "health bar max and infinite", li_Desc: "nyawa kebal/tidak akan mati dan bar nyawa panjang" },
            { li_title: "energy bar infinite", li_Desc: "memakai skill tidak akan mengurangi energy" }
        ],
        ytvideo: [
            { url: "https://youtu.be/tJsBBgg2CLc" },
            { url: "https://youtu.be/Xlre_HnNcvc" }
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "brutality no decreased", li_Desc: "durasi brutality tidak akan habis" }
        ],
        ytvideo: [
            { url: "https://youtu.be/zDyNt1yHAV8" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "fatality meter always full", li_Desc: "merah merah bar fatality tidak akan berkurang" }
        ],
        ytvideo: [
            { url: "https://youtu.be/W-h5_19snps" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "fatality meter always level 3", li_Desc: "mendapatkan brutality diawal game" }
        ],
        ytvideo: [
            { url: "https://youtu.be/uGCadF6Y6GE" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "unlock all platform", li_Desc: "mendapatkan semua platform diawal game tanpa harus mengalahkan boss" }
        ],
        ytvideo: [
            { url: "https://youtu.be/6xyhQBQGKJo" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "unlock door to the foundry", li_Desc: "mendapatkan 5 platform tanpa mengalahkan boss" }
        ],
        ytvideo: [
            { url: "https://youtu.be/cqsF64HpfTU" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "infinite jump v1", li_Desc: "terbang melayang bahkan bisa infinite jump, bisa untuk semua karakter" }
        ],
        ytvideo: [
            { url: "https://youtu.be/gPK8YOFctPw" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "untuk menggunakan cheat ini pastikan sudah memiliki platform double jump" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "infinite jump v2", li_Desc: "infinite jump lebih mudah tetapi tidak bisa melayang" }
        ],
        ytvideo: [
            { url: "https://youtu.be/2qYc_RdppTU" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "jocker command berbeda dari yg diyoutube" },
            { text: "cara pakai kode diatas, tekan dan tahan tombol 'bawah' lalu spam X" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "wallhack / walking through walls", li_Desc: "berjalan menembus tembok" }
        ],
        ytvideo: [
            { url: "https://youtu.be/JOwwoh3xFLo" },
        ],
        warning: [
            { text: "kode ini boleh dishare bebas, terserah. karena ini bukan buatan saya" },
            { text: "kode ini didapatkan dari web gamehacking.org dan ada beberapa kode yg saya diedit" },
            { text: "cara pakai kode diatas, tekan dan tahan tombol 'L3' lalu berjalan bebas" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "damage modifier", li_Desc: "edit damage semau antum" }
        ],
        ytvideo: [
            { url: "https://youtu.be/5mpRiCKG0GM" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "ada kemungkinan beberapa karakter tidak berfungsi (damage normal)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "shang tsung menjadi shao kahn", li_Desc: "edit shang tsung ketika ganti karakter menjadi shao kahn" }
        ],
        ytvideo: [
            { url: "https://youtu.be/CB9GeUxTZtQ" },
            { url: "https://youtu.be/fFfVKN-RJqE" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: "subzero & scorpion character replace", li_Desc: "mengganti karakter bawaan subzero & scorpion" }
        ],
        ytvideo: [
            { url: "https://youtu.be/CcQc9pvs0ws" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "untuk lebih jelasnya kalian kunjungi saja youtube saya (link diatas)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: '"Test Your Might" Hack Duration', li_Desc: "durasi 1 detik tetapi unlimited" },
            { li_title: '"Test Your Might" Hack bar meter', li_Desc: "bar ijo ijo selalu penuh" }
        ],
        ytvideo: [
            { url: "https://youtu.be/rBF4Jc0sm1w" },
            { url: "https://youtu.be/34199REk5DQ" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg kurang menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'Brightness Modifier', li_Desc: "mengatur kecerahan layar dengan cheat code" },
        ],
        ytvideo: [
            { url: "https://youtu.be/tkxBXWyofuU" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "untuk lebih jelasnya kalian kunjungi saja youtube saya (link diatas)" },
            { text: "value diatas 32 bisa merusak mata (cerah bgt)" }
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'Super Long Jump', li_Desc: "Lompatan R1 + X sangat jauh" },
        ],
        ytvideo: [
            { url: "https://youtu.be/wj_TqKOXI9c" },
            { url: "https://youtu.be/SNif280LP6g" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "untuk lebih jelasnya kalian kunjungi saja youtube saya (link diatas)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'Unbreakable Sword', li_Desc: "Pedang tidak akan hancur" },
        ],
        ytvideo: [
            { url: "https://youtu.be/Z9sN1uKSUqM" },
            { url: "https://youtu.be/oKfn3pTwGMA" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "kode diatas hanya untuk pedang saja" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'subzero auto high jump', li_Desc: "terbang tinggi setelah tekan segitiga diudara" },
        ],
        ytvideo: [
            { url: "https://youtu.be/HxNVaL1uVU4" },
            { url: "https://youtu.be/9Ckl3JPtjzw" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "kode diatas hanya BERFUNGSI pada SUB-ZERO saja" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'Change Name Character', li_Desc: "ganti nama 4 karakter utama" },
        ],
        ytvideo: [
            { url: "https://youtu.be/1End8xkXhdY" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "untuk lebih jelasnya kalian kunjungi saja youtube saya (link diatas)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'Change effect color sub-zero', li_Desc: "ganti warna skill subzero menjadi kuning" },
        ],
        ytvideo: [
            { url: "https://youtu.be/LfoWYpOjYgw" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'Remove Alert Tutorial', li_Desc: "menghilangkan notifikasi tutorial" },
        ],
        ytvideo: [
            { url: "https://youtu.be/JZjkX47X47w" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'No Fatality Requires', li_Desc: "menghilangkan alert L1 saat ditempat fatality,etc" },
        ],
        ytvideo: [
            { url: "https://youtu.be/KA2elUTbhEw" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
            { text: "tidak disarankan bagi pemula" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'Wallhack (moves ketika masuk portal)', li_Desc: "terbang dan menembus apapun, bahkan tembok sekalipun" },
        ],
        ytvideo: [
            { url: "https://youtu.be/pZ49U_k9OQc" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
    {
        deskripsi: [
            { text: 'pada halaman ini saya membagikan cheat code yg menarik. cheat ini terdapat:' },
        ],
        cheatList: [
            { li_title: 'Save Anywhere', li_Desc: "save dimanapun tanpa harus nyembah patung" },
        ],
        ytvideo: [
            { url: "?????" },
        ],
        warning: [
            { text: "berikan sumber jika share cheat dari web ini (tidak harus, asal jangan claim bikinan sendiri)" },
        ],
    },
];





const DataCheatPage_simple = (position: number) => {
    const { title } = DataListSideBar_simple(position)
    return {
        title: title,
        deskripsi: DataCheatPage[position].deskripsi,
        cheatList: DataCheatPage[position].cheatList,
        ytlink: DataCheatPage[position].ytvideo,
        warning: DataCheatPage[position].warning,
    }
}

export default DataCheatPage_simple;