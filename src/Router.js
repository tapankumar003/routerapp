import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Works from "./page/Works";
import Layout from "./Layout";

const Router = ()=>{
    return(
        <BrowserRouter>
        <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route  path="contact" element={<Contact/>}/>
            <Route path="works" element={<Works/>}/>
        </Routes>
        </Layout>
        </BrowserRouter>
    );
}

export default Router;