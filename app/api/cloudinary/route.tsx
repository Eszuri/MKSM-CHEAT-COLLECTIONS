import ConnectCloudinary from "@/lib/cloudinary";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const path = `mksm cheat collections/premium/${body.id}/video`;
    try {
        const result = await ConnectCloudinary.api.resources_by_asset_folder(path);
        const secureUrls = result.resources.map((resource) => resource.secure_url);
        return NextResponse.json({data: secureUrls});
    } catch (error) {
        //  console.log('errrrrrrrror is:' + error)
        return NextResponse.json({data: 'Failed to fetch images:' + error});
    }
};
