import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Version from './Version';
import App from './App';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/version" element={<Version/>} />
                <Route path="*" element={<h1>NotFound</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;