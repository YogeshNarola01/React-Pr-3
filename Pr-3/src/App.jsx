import { useState } from "react"
import { category,data } from "./data"
import Record from "./record"
import './record.css'


function App() {
  const [record,setRecord] = useState(data)

 const filterData = (cat)=>{
  if(cat == "all"){
    setRecord(data)
  }else{
    let datas = data.filter((val) => val.category === cat);
  setRecord(datas)
  }
 }

  return (
    <>
      <Record
        category={category}
        data={record}
        filterdata={filterData}
      />
    </>
  )
}

export default App
