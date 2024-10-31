import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Works from "./page/Works";
import Layout from "./Layout";
import Work from "./page/Work";

const Router = ()=>{
    return(
        <BrowserRouter>
        <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route  path="contact" element={<Contact/>}/>
            <Route path="works" element={<Works/>}/>
            <Route path="works/:id" element={<Work />}/>
        </Routes>
        </Layout>
        </BrowserRouter>
    );
}

export default Router;