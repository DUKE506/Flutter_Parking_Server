

/**
 * 차량 구분
 * - `ALL` : 전체
 * - `RESIDENT` : 입주
 * - `VISIT` : 방문
 * - `OUTSIDE` : 외부
 */
export enum CarType {
    ALL = 'all',
    RESIDENT = 'resident',
    VISIT = 'visit',
    OUTSIDE = 'outside',
}

/**
 * 주차 상태
 * --
 * - `IN` : 주차
 * - `OUT` : 출자
 */
export enum ParkingState{
    IN = 'IN',
    OUT = 'OUT',
}
