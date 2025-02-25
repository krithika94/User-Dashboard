export interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
    };
}
    
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}