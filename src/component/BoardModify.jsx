import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BoardModify = () => {

    // const [ boardListTmp, setBoardListTmp ] = useState([]);
    // console.log(boardListTmp);

    const { id } = useParams();

    const [ mod, setMod ] = useState({
        title: '',
        writer: '',
        contents: '',
        reg_date: ''
    });

    const { title, writer, contents, reg_date } = mod;

    // useEffect(() => {
    //     const board = Number(id);
    //     const boardToModify = boardListTmp.find(I => I.id === board);
    //     setMod(boardToModify);
    // }, [id, boardListTmp]);

    const getBoard = async () => {
        try{
            const res = await axios(`/modify/${id}`);
            // res.data : 데이터가 1개 더라도 배열로 돌어옴
            setMod(res.data[0]);
            console.log(res);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getBoard();
    },[]);

    // 변경코드 짜기
    /*
    const [ form, setForm ] = useState({
        title : mod.title,
        writer : mod.writer,
        contents : mod.contents
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setMod({
            ...form,
            [name]:value
        });
    };

    const { title, writer, contents } = from;

    const onSubmit = async () => {
        try{
            const res = await axios.post(`/update/${id}`, form);
            console.log(res);
            window.location.href = `detail/${id}`;
        }catch{
            console.log(error);
        }
    }
    */

    const onChange = (e) => {
        const { name, value } = e.target;
        setMod({
            ...mod,
            [name]:value
        });
    };

    // const onCreate = () => {
    //     const b = {
    //         id : id,
    //         title : title,
    //         writer : writer,
    //         contents : contents
    //     };
    //     setBoardListTmp(boardListTmp.concat(b));
    //     setMod({
    //         title: '',
    //         writer: '',
    //         contents: '',
    //         reg_date: ''
    //     });
    // }

    const onSubmit = async () => {
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
        if(window.confirm('수정하시겠습니까?')){
            try{
                const res = await axios.post(`/modify/${id}`, mod);
                console.log(res);
                // if(res.data[0] === 'OK'){}
                // 데이터 전송 후 이동
                window.location.href = `/detail/${id}`;
            }catch(error){
                console.log(error);
            }
        }
    };

    if(mod != null){
        return (
            <div className='boardRegister'>
            <h2>Board Modify</h2>
            <div className='content'>
                <input type="text" className='content-box' name='reg_date' value={reg_date.substring(0, reg_date.indexOf("T"))}/>
                <input type="text" className='content-box' name='title' placeholder='Title' value={title} onChange={onChange}/>
                <input type="text" className='content-box' name='writer' placeholder='Writer' value={writer} onChange={onChange}/>
                <div className='contentContainer'>
                <textarea type="text" className='content-box' name='contents' placeholder='Contents' value={contents} onChange={onChange}/>
                </div>
            </div>
            <Link to={'/'}><button onClick={onSubmit}>Modify</button></Link> 
        </div>
        );
    }
};

export default BoardModify;