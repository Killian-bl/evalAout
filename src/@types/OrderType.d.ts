export type orderType = {
    id: number;
    email: string;
    date: string;
    products: {
        id: number;
        name: string;
        price: number;
        overview?: string;
        quantity?: number;
    }[];
}