import React from "react";

function Header(){
    return (<div style={{width:"100%", height:"50px", backgroundColor:"coral"}}>
        <span>This is my NavBar</span>
    </div>);
}

function Footer(){
    return(
        <div style={{width:'100%', height:'100px', color:'white', backgroundColor:'black'}}>
            <span>copyright @footer</span>
        </div>
    );
}

function Layout({children}){
    return(
        <div>
            <Header/>
            <div style={{width:'100%', height:'600px'}}>
                { children }
            </div>
            <Footer/>
        </div>
    );
}
export default Layout;