export interface SingUpInterface {
    id?: number;
	name: string;
    email: string;
    gender: string;
    status: string;
}

export interface SingUpReturnInterface {
    status_code?: number
    data: SingUpInterface;
}