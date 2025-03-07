
//딜레이
export const sleep = async (ms:number) =>{
    return await new Promise((resolve)=> setTimeout(resolve,ms));
}

/**
 * 랜덤 차량번호 생성
 * --
 * @param range 
 * @returns 
 */
export const randomCarNumber = ()=>{
    const frontNumber = rangeRandomNumber(1,99).toString().padStart(2,'0');
    const korean = randomHangeul();
    const backNumber = rangeRandomNumber(1,9999).toString().padStart(4,'0');
    
    return frontNumber + korean + backNumber;
}

/**
 * 랜덤 숫자 생성
 * @param min 
 * @param max 
 * @returns 
 */
const rangeRandomNumber = (min:number,max:number) =>{
    return Math.floor(Math.random() * (max-min)) + min;
}

/**
 * 차량번호 한글 생성
 * @returns 차량번호 한글
 */
const randomHangeul = () => {
    const carHangeul = [
        "가","나","다","라","마",
        "거","너","더","러","머",
        "서","어","저","고","노",
        "도","로","모","보","소",
        "오","조","구","누","두",
        "루","무","부","수","우",
        "주"
    ];
    const index = rangeRandomNumber(1,carHangeul.length);    
    return carHangeul[index];
}

/**
 * 이름 생성
 * @returns 
 */
export const randomName = () => {
    const names = ["김민준","박지훈","이서연","최유정","정하늘","김도윤","이지우","박민서","최예진","강서현","유준서","한지민","박하준","오수진","장민혁","서윤아","신재윤","이나연","황도영","조민정","김한결","최민아","백수호","이윤지","박세연","김지환","윤서영","서도현","전민지","조현우","한예슬","강민재","김세린","박준영","이서인","정가온","유아현","강시현","김가은","노현서","신재민","윤서진","박아인","최재원","임나은","이준서","조하늘","백선우","김도연","김서현"]
    const index = rangeRandomNumber(1,names.length);

    return names[index];
}

/**
 * 차량모델 랜덤생성
 * @returns 
 */
export const randomCarModel = () =>{
    const carModels = ["그랜저 IG", "소나타 LF", "아반떼 AD", "싼타페 TM", "투싼 VN", "팰리세이드", "K5", "K7", "쏘렌토", "모하비", "카니발", "스팅어", "레이", "모닝", "G80", "G90", "코란도", "티볼리", "SM6", "QM6", "말리부", "임팔라", "트랙스", "뉴 SM3", "렉스턴", "i30", "스포티지", "코나", "K8", "넥쏘", "어코드", "시빅", "캠리", "코롤라", "포커스", "머스탱", "모델 S", "모델 3", "A4", "320i"];
    const index = rangeRandomNumber(1,carModels.length);
    return carModels[index];
}

/**
 * 휴대폰 번호 랜덤생성
 * @returns 
 */
export const randomPhone = () => {
    const mid = rangeRandomNumber(1,9999).toString().padStart(4,'0')
    const last = rangeRandomNumber(1,9999).toString().padStart(4,'0')

    return '010'+mid+last;
}