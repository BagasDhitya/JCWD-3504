export interface CartItem {
    id_product: number,
    quantity: number
}

export interface TransactionDTO {
    cart: CartItem[],
    payment: string,
    id_user: number
}