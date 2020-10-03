import axios from 'axios';
export {}

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// use axios
axios.get(url)
  .then(function (response) {
    
    //let data: any;
    //let data: object[];
    
    // インタフェースを作成して型を制限する。
    interface Article {
        id: number;
        title: string;
        description: string;
    }
    let data: Article[];

    data = response.data;
    console.log(data);
  });
  