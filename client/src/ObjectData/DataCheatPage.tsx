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