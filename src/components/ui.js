import React,{useState} from 'react';
import classes from './ui.module.css'
import {Table ,Button} from 'antd';
import { Input,Select} from 'antd';
import Demo from './demo'
const columns = [
  {
    title: 'College Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href=''>{text}</a>,
  },
  {
    title: 'CollegeID',
    dataIndex: 'CollegeID',
    key: 'CollegeID',
  },
  {
    title: 'OnBoard-Date',
    dataIndex: 'onboarddate',
    key: 'onboarddate',
  },
  {
    title: 'City',
    key: 'city',
    dataIndex: 'city',
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Ranking',
    dataIndex: 'ranking',
    key: 'ranking',
  },
  {
    title: 'Affiliation',
    dataIndex: 'affiliation',
    key: 'affiliation',
  },
  {
    title: 'Streams',
    dataIndex: 'streams',
    key: 'streams',
  },
  {
    title: 'Specialization',
    dataIndex: 'specialization',
    key: 'specialization',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
];
const data = [
  {
    key: '1',
    name: 'IIT-MADRAS',
    CollegeID : 3211,
    onboarddate: "10/10/2022",
    city:"Bengaluru",
    region: "South",
    ranking: 12345,
    affiliation: "UGC",
    streams:"B.tech",
    specialization:"CSE",
    contact:8500491520,
    
  },
  {
    key: '2',
    name: 'IIT-MADRAS',
    CollegeID : 3211,
    onboarddate: "10/10/2022",
    city:"Bengaluru",
    region: "South",
    ranking: 12345,
    affiliation: "UGC",
    streams:"B.tech",
    specialization:"CSE",
    contact:8500491520,
  
  },
  {
    key: '3',
    name: 'IIT-MADRAS',
    CollegeID : 3211,
    onboarddate: "10/10/2022",
    city:"Bengaluru",
    region: "South",
    ranking: 12345,
    affiliation: "UGC",
    streams:"B.tech",
    specialization:"CSE",
    contact:8500491520,
   
  },
  {
    key: '4',
    name: 'IIT-MADRAS',
    CollegeID : 3211,
    onboarddate: "10/10/2022",
    city:"Bengaluru",
    region: "South",
    ranking: 12345,
    affiliation: "UGC",
    streams:"B.tech",
    specialization:"CSE",
    contact:8500491520,
    
  },
]
// ].filter(({CollegeID}) =>{
//   return CollegeID.indexOf(Term)>=0;
// })


const { Search } = Input;
const onSearch = (value) => console.log(value);
const handleChange = (value) => {
  console.log(value); 
};
function ui(){
  // const[Term,setTerm] = useState("")
    return(
      
      <div>
          <p className={classes.p}>SELECT REPORT*</p>
          <Select className={classes.select}
            labelInValue
            defaultValue={{
              value: 'list',
              label: 'ListOfCollege/Institute',
            }}
            style={{
              width: 300,
            }}
            onChange={handleChange}
            options={[
              {
                value: 'jack',
                label: 'ListOfCollege/Institute',
              },
              {
                value: 'lucy',
                label: 'Institute',
              },
            ]}
          /><br/>
        <Search className ={classes.serch}
          placeholder="input search text"
          onSearch={onSearch}
          // value= {Term} 
          // onChange = {(e) =>setTerm(e.target.value)}
          style={{
            width: 500,
          }}
        />
        <Select className={classes.select1}
        placeholder="Filter"
    
            style={{
              width: 570,
            }}     
            dropdownRender={() => (
             
              <Demo/>
            )}
          />
        <Button type="primary">Download</Button>
         <Table  className ={classes.table} columns={columns} dataSource={data} />
      </div>
    )
}

export default ui;