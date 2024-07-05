import CheatPage from "@/components/CheatPage";
import Navbar from "@/components/Navbar";
import CheatCodeFree from "@/ObjectData/CheatCodeFree";
import { DataListFree_simple } from "@/ObjectData/DataListFree";
import { Helmet } from "react-helmet-async";


type typeProp = {
    dataPosition: number,
}

function CheatPagesFree({ dataPosition }: typeProp) {
    const dataArrayPosition = dataPosition;
    const { title } = DataListFree_simple(dataPosition);
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>{title}</title>
                <meta property="og:title" content={title} />
            </Helmet>
            <Navbar />
            <CheatPage position={dataArrayPosition}>

                <CheatPage.list position={dataArrayPosition} />

                <CheatPage.code CheatCodeRaw={CheatCodeFree[dataArrayPosition].raw} CheatCodePnach={CheatCodeFree[dataArrayPosition].pnach} />

                <CheatPage.listModifier position={dataArrayPosition} />

                <CheatPage.yt position={dataArrayPosition} />

                <CheatPage.warning position={dataArrayPosition} />

                <CheatPage.problem />

                <CheatPage.Comment type="free" position={dataArrayPosition} />

                <CheatPage.footer />
            </CheatPage>
        </>
    )
}


const CheatPagesPremium = () => {
    return (
        <>
        </>
    )
};

export { CheatPagesFree, CheatPagesPremium };
