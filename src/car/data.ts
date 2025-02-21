import { CarRecord, CarType } from "./entities/car.entity";

//타입별 주차 조회
export const parkingCarData : CarRecord[]= [
    {
        id: "1",
        name: '홍길동',
        number: '05가 1594',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 08:30:00')
    },
    {
        id: "2",
        name: '김철수',
        number: '34나 9284',
        carType: CarType.visit,
        entryTime: new Date('2024-02-21 09:15:00')
    },
    {
        id: "3",
        name: '이영희',
        number: '22다 4567',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 10:00:00')
    },
    {
        id: "4",
        name: '박민준',
        number: '15라 7823',
        carType: CarType.outside,
        entryTime: new Date('2024-02-21 10:30:00')
    },
    {
        id: "5",
        name: '정승훈',
        number: '88마 1111',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 11:45:00')
    },
    {
        id: "6",
        name: '강지아',
        number: '67바 3456',
        carType: CarType.visit,
        entryTime: new Date('2024-02-21 12:20:00')
    },
    {
        id: "7",
        name: '조현우',
        number: '91사 7777',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 13:10:00')
    },
    {
        id: "8",
        name: '윤서연',
        number: '45아 2468',
        carType: CarType.outside,
        entryTime: new Date('2024-02-21 14:00:00')
    },
    {
        id: "9",
        name: '임재현',
        number: '33자 9876',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 14:30:00')
    },
    {
        id: "10",
        name: '한미나',
        number: '77차 5432',
        carType: CarType.visit,
        entryTime: new Date('2024-02-21 15:15:00')
    },
    {
        id: "11",
        name: '신동훈',
        number: '12카 8888',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 16:00:00')
    },
    {
        id: "12",
        name: '오은지',
        number: '59타 1357',
        carType: CarType.outside,
        entryTime: new Date('2024-02-21 16:45:00')
    },
    {
        id: "13",
        name: '권현석',
        number: '83파 2222',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 17:20:00')
    },
    {
        id: "14",
        name: '최유진',
        number: '25하 6543',
        carType: CarType.visit,
        entryTime: new Date('2024-02-21 18:00:00')
    },
    {
        id: "15",
        name: '백승호',
        number: '47거 9999',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 18:30:00')
    },
    {
        id: "16",
        name: '류하은',
        number: '16너 4321',
        carType: CarType.outside,
        entryTime: new Date('2024-02-21 19:15:00')
    },
    {
        id: "17",
        name: '송민재',
        number: '92더 6666',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 20:00:00')
    },
    {
        id: "18",
        name: '장서영',
        number: '38러 7890',
        carType: CarType.visit,
        entryTime: new Date('2024-02-21 20:45:00')
    },
    {
        id: "19",
        name: '남기준',
        number: '71머 3333',
        carType: CarType.resident,
        entryTime: new Date('2024-02-21 21:30:00')
    },
    {
        id: "20",
        name: '구예린',
        number: '19버 5555',
        carType: CarType.outside,
        entryTime: new Date('2024-02-21 22:00:00')
    }
];