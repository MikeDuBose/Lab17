export interface Posts {
    data:string;
    children:Post[]; 
}

export interface Post {
    data:string;
    title:string;
    thumbnail:string;
    permalink:string;
}