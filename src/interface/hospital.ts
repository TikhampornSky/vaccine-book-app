export interface IHospital {
    id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
}

export interface IHospitalsResponse {
    count: number,
    data: IHospital[],
    pagination: any,
    success: boolean,
}

export interface IHospitalResponse {
    data: IHospital,
    sucess: boolean,
}