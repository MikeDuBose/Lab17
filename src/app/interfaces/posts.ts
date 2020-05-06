export interface Posts {
    data:{
    children:Post[]; 
    }
}

export interface Post {
    data:{
    title:string;
    thumbnail:string;
    permalink:string;
    }
}