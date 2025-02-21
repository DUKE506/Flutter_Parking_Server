
//딜레이
export const sleep = async (ms:number) =>{
    return await new Promise((resolve)=> setTimeout(resolve,ms));
} 