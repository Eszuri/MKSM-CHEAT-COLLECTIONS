import CheatPage from "@/components/CheatPage";
import Navbar from "@/components/Navbar";
import { DataListSideBar_simple } from "@/ObjectData/DataListFree";
import { Helmet } from "react-helmet-async";


type typeProp = {
    dataPosition: number,
    RawCode: string,
    PnachCode: string
}

function CheatPagesFree({ dataPosition, RawCode, PnachCode }: typeProp) {
    const dataArrayPosition = dataPosition;
    const { title } = DataListSideBar_simple(dataPosition);
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>{title}</title>
                <meta property="og:title" content={title} />
            </Helmet>
            <Navbar />
            <CheatPage position={dataArrayPosition}>

                <CheatPage.list position={dataArrayPosition} />

                <CheatPage.code CheatCodeRaw={RawCode} CheatCodePnach={PnachCode} />

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
