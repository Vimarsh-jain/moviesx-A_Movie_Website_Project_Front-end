import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/header/Header";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;



export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            params: {
                ...params,
                api_key: API_KEY,
            },
        });

        // console.log(data);
        return data;
    } catch (err) {
        // console.error(err);
        return err;
    }
};