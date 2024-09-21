"use client"

import CheatPageFree from "@/components/cheatFree"
import Navbar from "@/components/navbar"

const App = ({params}: {params: {id: number}}) => {
    return (
        <div className="relative">
            <Navbar type="free" />
            <CheatPageFree position={params.id - 1} />
        </div>
    )
};

export default App;
