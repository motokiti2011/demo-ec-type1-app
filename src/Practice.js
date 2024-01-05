// import "./Practice.css";
import { List } from "./List.js";//List.jsからとってくる

//List.jsからとってくる
const Practice = () => {

  // const items = ['Item 1','Item 2','Item 3','Item 4','Item 5'];
  const items2 = [
    {id:1 , name: 'Item 1'}
    ,{id:2 , name: 'Item 2'}
    ,{id:3 , name: 'Item 3'}
    ,{id:4 , name: 'Item 4'}
    ,{id:5 , name: 'Item 5'}
  ];
  const itemList = [];
  
  items2.forEach((item,index)=>{
    itemList.push( <li key={index}>{item.name}</li>)
  });

  return (
    <div>

      <div>
        <ul> 
          {itemList}
        </ul>
      </div>

      <div className="component">
        <h3>コンポーネント</h3>
        <List />
      </div>

    </div>
  );
};

export default Practice;
