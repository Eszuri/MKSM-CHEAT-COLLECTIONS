import CheatPagePremium from "@/components/cheatPremium";
import Navbar from "@/components/navbar"

const App = async ({params}: {params: {id: number}}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cloudinary`, {cache: "no-cache", method: "POST", body: JSON.stringify({id: params.id})});
    const data = await res.json();
    return (
        <div className="relative">
            <Navbar type="premium" />
            <CheatPagePremium position={params.id - 1} cloudinaryVideo={data.data} />
        </div>
    )
};

export default App;
