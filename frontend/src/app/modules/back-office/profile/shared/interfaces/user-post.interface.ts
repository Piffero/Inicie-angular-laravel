export interface UserPostInterface {
    id?: number;
    user_id: number;
    title: string;
    body: string;
}

export interface UserPostReturnInterface {
    status_code?: number
    data: UserPostInterface[];    
}
