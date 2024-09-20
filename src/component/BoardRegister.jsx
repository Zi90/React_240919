import React, { useState } from 'react';
import axios from 'axios';

const BoardRegister = () => {
    const [ board, setBoard ] = useState({
        title: '',
        writer: '',
        contents: ''
    });

    const { title, writer, contents } = board;

    const onChange = (e) => {
        const { name, value } = e.target;
        setBoard({
            ...board,
            [name]:value
        });
    }

    const onReset = () => {
        setBoard({
            ...board,
            title: '',
            writer: '',
            contents: ''
        })
    }

    const onCreate = async () => {
        // board 객체를 서버로 전송
        // board 객체의 내용 중 하나라도 null이면 안 됨.
        if(title === ''){
            alert('title is null');
            return;
        }
        if(writer === ''){
            alert('wirter is null');
            return;
        }
        if(contents === ''){
            alert('contents is null');
            return;
        }
        if(window.confirm('등록하시겠습니까?')){
            try{
                const res = await axios.post('/insert', board);
                console.log(res);
                // if(res.data[0] === 'OK'){}
                // 데이터 전송 후 이동
                window.location.href = "/list";
            }catch(error){
                console.log(error);
            }
        }
    }

    return (
        <div className='boardRegister'>
            <h2>Board Register</h2>
            <div className='content'>
                <input type="text" className='content-box' name='title' value={title} placeholder='Title' onChange={onChange}/>
                <input type="text" className='content-box' name='writer' value={writer} placeholder='Writer' onChange={onChange}/>
                <div className='contentContainer'>
                <textarea type="text" className='content-box' name='contents' value={contents} placeholder='Contents' onChange={onChange}/>
                </div>
            </div>
            <button onClick={onCreate}>Register</button> 
            <button onClick={onReset}>Init</button> 
        </div>
    );
};

export default BoardRegister;