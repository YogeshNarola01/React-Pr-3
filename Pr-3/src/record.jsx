import React from "react";

const Record = ({category,data,filterdata})=>{
    return(
        <div>
            <header>
                <div className="flex">
                <div className="col-lg-4">
                    <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" width={150} alt="" />
                </div>
                <div className="col-lg-8">
                    <button className="btn" onClick={()=> filterdata("all")}>All</button>
                    {
                        category.map((val)=>{
                            return(
                                <button key={val.id} onClick={()=> filterdata(val.name)} className="btn">{val.name}</button>
                            )
                        })
                    }
                </div>
                </div>
                <hr/><hr/>
            </header>

            <div className="flex">
                    {
                        data.map((val)=>{
                            return(
                                <div className="card" key={val.id}>
                                    <img width={250} src={val.img}/><hr/><br/>
                                    <h2 className="mid">{val.name}</h2><br />
                                    <h3 className="mid">{val.price}</h3><br />
                                    <button className="btn2 mid2">Add To Cart</button>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Record;