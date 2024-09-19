import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardList from './BoardList';
import '../component/board-style.css';
// import BoardDetail from './BoardDetail';
// import BoardRegister from './BoardRegister';
// import BoardModify from './BoardModify';

const BoardHome = () => {
    return (
        <div className='boardHome'>
            <h1 className='title'>My First React Board Project</h1>
            <hr />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BoardList/>}/>
                    <Route path='/list' element={<BoardList/>}/>
                    {/* <Route path="/detail/:id" element={<BoardDetail/>} />
                    <Route path='/register' element={<BoardRegister/>}/>
                    <Route path='/modify/:id' element={<BoardModify/>}/> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default BoardHome;