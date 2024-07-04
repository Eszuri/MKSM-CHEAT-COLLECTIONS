import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "@/Pages/Home";
import { CheatPagesFree } from "@/Pages/CheatPages";
import NotFound from "@/Pages/NotFound";
import { DataListFree } from "./ObjectData/DataListFree";

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Home>
            <div className="w-full text-center">
              <h1 className="font-semibold text-3xl capitalize mt-5 mb-2">collection of cheat<br /> mortal kombat shaolin monk</h1>
              <p className="text-white/70">Menyediakan berbagai cheat yg saya buat diyoutube dan bebarapa cheat yg tidak dipublikasikan</p>
            </div>
          </Home>} />
        <Route path="/free" element={
          <Home>
            <h1 className="font-semibold text-center text-3xl capitalize mt-5 mb-2 font-Taylor">Free Cheat</h1>
            <div className="my-12 flex justify-center items-center flex-wrap w-full  gap-3">
              {DataListFree.map((cheat, index) => (
                <div onClick={() => { navigate(cheat.navigate) }} key={index} className="relative border-2 border-white/20 cursor-pointer bg-slate-700 hover:bg-emerald-600 rounded p-2 w-[30%] h-24">
                  <span className="font-semibold font-Taylor tracking-wider">{cheat.title}</span>
                  <span className="absolute bottom-0 right-1 text-sm opacity-60">{cheat.dateAdd}</span>
                </div>
              ))}
            </div>
          </Home>} />
        <Route path="/*" element={<NotFound />} />

        {/* route navbar list pages */}
        <Route path="/free/1" element={<CheatPagesFree dataPosition={0} />} />
        <Route path="/free/2" element={<CheatPagesFree dataPosition={1} />} />
        <Route path="/free/3" element={<CheatPagesFree dataPosition={2} />} />
        <Route path="/free/4" element={<CheatPagesFree dataPosition={3} />} />
        <Route path="/free/5" element={<CheatPagesFree dataPosition={4} />} />
        <Route path="/free/6" element={<CheatPagesFree dataPosition={5} />} />
        <Route path="/free/7" element={<CheatPagesFree dataPosition={6} />} />
        <Route path="/free/8" element={<CheatPagesFree dataPosition={7} />} />
        <Route path="/free/9" element={<CheatPagesFree dataPosition={8} />} />
        <Route path="/free/10" element={<CheatPagesFree dataPosition={9} />} />
        <Route path="/free/11" element={<CheatPagesFree dataPosition={10} />} />
        <Route path="/free/12" element={<CheatPagesFree dataPosition={11} />} />
        <Route path="/free/13" element={<CheatPagesFree dataPosition={12} />} />
        <Route path="/free/14" element={<CheatPagesFree dataPosition={13} />} />
        <Route path="/free/15" element={<CheatPagesFree dataPosition={14} />} />
        <Route path="/free/16" element={<CheatPagesFree dataPosition={15} />} />
        <Route path="/free/17" element={<CheatPagesFree dataPosition={16} />} />
        <Route path="/free/18" element={<CheatPagesFree dataPosition={17} />} />
        <Route path="/free/19" element={<CheatPagesFree dataPosition={18} />} />
        <Route path="/free/20" element={<CheatPagesFree dataPosition={19} />} />
        <Route path="/free/21" element={<CheatPagesFree dataPosition={20} />} />
        <Route path="/free/22" element={<CheatPagesFree dataPosition={21} />} />
        <Route path="/free/23" element={<CheatPagesFree dataPosition={22} />} />


        {/* route premium */}
        {/* <Route path="/premium/1" element={<CheatPagesFree dataPosition={20} RawCode={CheatCode.Free.raw_21} PnachCode={CheatCode.Free.pnach_21} />} /> */}
      </Routes>
    </>
  )
}
