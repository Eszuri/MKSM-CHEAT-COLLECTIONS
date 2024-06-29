import axios from 'axios';
import { toast } from 'sonner';

// type AddressType = {
//     name: String,
//     imgSrc: String,
//     imgAlt: String,
//     Navigate: String,
//     characterCode: Number
// };

const getAddress = async (characterCode: number) => {
    try {
        const fetch = await axios.post(import.meta.env.VITE_API_URL + '/api/address-list/' + characterCode)
        return fetch.data
    }
    catch (err: any) {
        toast.error(err);
    };
};

export default getAddress;