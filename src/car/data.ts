import { CarRecord, CarType } from "./entities/car.entity";
import { CarDetail } from "./entities/car_detail.entity";
import { ParkingState } from "./entities/parking_history.entity";

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


//주차 차량 상세 정보
export const detailCarData: CarDetail[] = [
    {
      id: "1",
      name: "홍길동",          // 거주자
      number: "05가 1594",
      address: "서울시 강남구 테헤란로 1",  // 임의 값
      phone: "010-1111-0001",            // 임의 값
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-1",
          time: new Date("2024-02-21T08:30:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "2",
      name: "김철수",          // 방문차량
      number: "34나 9284",
      address: "",                     // 방문차량은 address 빈 값
      phone: "010-2222-0002",         // 방문차량은 phone만
      carType: CarType.visit,
      state: ParkingState.IN,
      history: [
        {
          id: "history-2",
          time: new Date("2024-02-21T09:15:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "3",
      name: "이영희",          // 거주자
      number: "22다 4567",
      address: "서울시 강남구 테헤란로 3",
      phone: "010-1111-0003",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-3",
          time: new Date("2024-02-21T10:00:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "4",
      name: "",               // 외부차량
      number: "15라 7823",
      address: "",            // 외부차량은 address, phone, name 모두 빈 값
      phone: "",
      carType: CarType.outside,
      state: ParkingState.IN,
      history: [
        {
          id: "history-4",
          time: new Date("2024-02-21T10:30:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "5",
      name: "정승훈",          // 거주자
      number: "88마 1111",
      address: "서울시 강남구 테헤란로 5",
      phone: "010-1111-0005",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-5",
          time: new Date("2024-02-21T11:45:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "6",
      name: "강지아",          // 방문차량
      number: "67바 3456",
      address: "",
      phone: "010-2222-0006",
      carType: CarType.visit,
      state: ParkingState.IN,
      history: [
        {
          id: "history-6",
          time: new Date("2024-02-21T12:20:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "7",
      name: "조현우",          // 거주자
      number: "91사 7777",
      address: "서울시 강남구 테헤란로 7",
      phone: "010-1111-0007",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-7",
          time: new Date("2024-02-21T13:10:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "8",
      name: "",               // 외부차량
      number: "45아 2468",
      address: "",
      phone: "",
      carType: CarType.outside,
      state: ParkingState.IN,
      history: [
        {
          id: "history-8",
          time: new Date("2024-02-21T14:00:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "9",
      name: "임재현",          // 거주자
      number: "33자 9876",
      address: "서울시 강남구 테헤란로 9",
      phone: "010-1111-0009",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-9",
          time: new Date("2024-02-21T14:30:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "10",
      name: "한미나",          // 방문차량
      number: "77차 5432",
      address: "",
      phone: "010-2222-0010",
      carType: CarType.visit,
      state: ParkingState.IN,
      history: [
        {
          id: "history-10",
          time: new Date("2024-02-21T15:15:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "11",
      name: "신동훈",          // 거주자
      number: "12카 8888",
      address: "서울시 강남구 테헤란로 11",
      phone: "010-1111-0011",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-11",
          time: new Date("2024-02-21T16:00:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "12",
      name: "",               // 외부차량
      number: "59타 1357",
      address: "",
      phone: "",
      carType: CarType.outside,
      state: ParkingState.IN,
      history: [
        {
          id: "history-12",
          time: new Date("2024-02-21T16:45:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "13",
      name: "권현석",          // 거주자
      number: "83파 2222",
      address: "서울시 강남구 테헤란로 13",
      phone: "010-1111-0013",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-13",
          time: new Date("2024-02-21T17:20:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "14",
      name: "최유진",          // 방문차량
      number: "25하 6543",
      address: "",
      phone: "010-2222-0014",
      carType: CarType.visit,
      state: ParkingState.IN,
      history: [
        {
          id: "history-14",
          time: new Date("2024-02-21T18:00:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "15",
      name: "백승호",          // 거주자
      number: "47거 9999",
      address: "서울시 강남구 테헤란로 15",
      phone: "010-1111-0015",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-15",
          time: new Date("2024-02-21T18:30:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "16",
      name: "",               // 외부차량
      number: "16너 4321",
      address: "",
      phone: "",
      carType: CarType.outside,
      state: ParkingState.IN,
      history: [
        {
          id: "history-16",
          time: new Date("2024-02-21T19:15:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "17",
      name: "송민재",          // 거주자
      number: "92더 6666",
      address: "서울시 강남구 테헤란로 17",
      phone: "010-1111-0017",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-17",
          time: new Date("2024-02-21T20:00:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "18",
      name: "장서영",          // 방문차량
      number: "38러 7890",
      address: "",
      phone: "010-2222-0018",
      carType: CarType.visit,
      state: ParkingState.IN,
      history: [
        {
          id: "history-18",
          time: new Date("2024-02-21T20:45:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "19",
      name: "남기준",          // 거주자
      number: "71머 3333",
      address: "서울시 강남구 테헤란로 19",
      phone: "010-1111-0019",
      carType: CarType.resident,
      state: ParkingState.IN,
      history: [
        {
          id: "history-19",
          time: new Date("2024-02-21T21:30:00"),
          state: ParkingState.IN,
        },
      ],
    },
    {
      id: "20",
      name: "",               // 외부차량
      number: "19버 5555",
      address: "",
      phone: "",
      carType: CarType.outside,
      state: ParkingState.IN,
      history: [
        {
          id: "history-20",
          time: new Date("2024-02-21T22:00:00"),
          state: ParkingState.IN,
        },
      ],
    },
  ];