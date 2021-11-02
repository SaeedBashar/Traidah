 export interface CategoryInterface {
    cat_id: number;
    cat_name: string;
}

export interface ProductInterface {
    prod_id: number;
    prod_name: string;
    price: number;
    prod_desc: string;
    prod_img: string;
    cat_id: number;
}

