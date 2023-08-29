

type Product = {title:string, price: number}

const data: Product[] = [
    {title:'Produto x', price: 10},
    {title:'Produto y', price: 15},
    {title:'Produto z', price: 20},
    {title:'Produto g', price: 5}
]

export const Product = {
    getAll: ():Product[] => {
        return data
    },
    getPriceAfter: (price:number):Product[] => {
        return data.filter(item => item.price >= price);
    }
}