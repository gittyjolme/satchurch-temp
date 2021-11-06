import React, { Fragment } from "react";
import { useRouter } from "next/router";

const AnyPages = ()=>{
    const router = useRouter()

    console.log(router.query)
    if(router.query.xpages === "about"){
        return(
            <Fragment>
                <section style={{
                          position:"absolute",
                          backgroundColor:"#33C51B",
                          top:"30%",
                          width:"100%",
                          left:"auto",
                          margin:"auto",
                          padding:"20px 0px 20px 0px"
                        }}>
                        <section style={{
                            width:"60%",
                            left:"auto",
                            margin:"auto",
                        }}>
                            <button onClick={()=>{router.push("/")}} style={{
                                position:"relative",
                                backgroundColor:"white",
                                width:100,
                                height:50,
                                fontFamily:"Segoe UI",
                                color:"#33C51B",
                                fontSize:"15pt",
                                borderRadius:10,
                                borderWidth:0,
                                left:"10%",
                                padding:"10px 10px 20px 10px"
                            }}>Home</button>
                            <h1 style={{
                                position:"absolute",
                                left:"36%",
                                top:11,
                                fontFamily:"Segoe UI",
                                color:"white"

                            }}>SAT Church Website is developed by <span><a href="https://jolme5d.com/services" style={{color:"rgb(227,227,227)"}}>Jolme5D.com</a></span></h1>
                        </section>
                </section>                            
                
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                <h1><span style={{color:"red"}}>{router.query.xpages}</span> is not a page. <br/>Sorry you are not at the right place!</h1>
            </Fragment>
        ) 
    }
}

export default AnyPages