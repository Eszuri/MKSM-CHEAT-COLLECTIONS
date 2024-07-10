// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { DataListFree_simple } from '@/ObjectData/DataListFree';

// // interface FileData {
// //     title: string;
// //     content: string | null;
// // }

// // const files = [
// //     { title: "sample 1", filePath: '/plainText/list-map-modifier.txt' },
// //     { title: "sample 2", filePath: '/plainText/test.txt' }
// // ];

// // const getData = async (file: string): Promise<string | null> => {
// //     try {
// //         const { data } = await axios.get(file);
// //         return data;
// //     } catch (err) {
// //         console.error(err);
// //         return null;
// //     }
// // };

// // const NotFound: React.FC = () => {
// //     const [arrayData, setArrayData] = useState<FileData[]>([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             const newData = await Promise.all(
// //                 files.map(async (file) => ({
// //                     title: file.title,
// //                     content: await getData(file.filePath)
// //                 }))
// //             );
// //             setArrayData(newData);
// //         };
// //         fetchData();
// //     }, []);

// //     return (
// //         <div id="data-container">
// //             {arrayData.map((item, index) => (
// //                 <div key={index} className='text-white'>
// //                     <h3>{item.title}</h3>
// //                     <p>{item.content}</p>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default NotFound;




// // Fungsi untuk mengambil data dari file tertentu
// export const fetchDataFromFile = async (filePath: string) => {
//     try {
//         const response = await axios.get(filePath);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return null;
//     }
// };


// export const fetchAllData = async () => {
//     try {
//         const dataArray = await Promise.all(dataPromises);
//         console.log(dataArray);
//         return dataArray.filter(item => item !== null);
//     } catch (error) {
//         console.error('Error fetching data from files:', error);
//         return [];
//     }
// };






// const dataPromises = [
//     { title: "test", content: fetchDataFromFile('/plainText/test.txt') },
//     { title: "test 2", content: fetchDataFromFile('/plainText/test2.txt') },
//     { title: "test 3", content: fetchDataFromFile('/plainText/test3.txt') },
//     { title: "test 4", content: fetchDataFromFile('/plainText/test4.txt') }
// ];

// export default function NotFound() {
//     const [data, setData] = useState<any>([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Tunggu semua promise di dataPromises.content untuk selesai
//                 const resolvedData = await Promise.all(
//                     dataPromises.map(async (item) => ({
//                         title: item.title,
//                         content: await item.content
//                     }))
//                 );
//                 setData(resolvedData.filter(item => item.content !== null));
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='text-white'>
//             <h1>Data from Files</h1>
//             <ul>
//                 {data.map((item: any, index: any) => (
//                     <li key={index}>
//                         <h2>{item.title}</h2>
//                         <p>{item.content}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }





export default function NotFound() {
    return (
        <h1 className="text-center">NotFound</h1>
    )
}
