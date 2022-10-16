import React, { useContext, useEffect, useState } from 'react';
import { usersContext } from '../Context/UsersContextProvider';
import './Search.css';


const Search = () => {
    const { getUsers, usersArr } = useContext(usersContext);
    
    const [searchTerm, setSearchTerm] =  useState('');
    const [filterUsers, setFilterUsers] = useState([]);

    useEffect(()=>{
        getUsers()
    }, [])

    const searchBtnClick = (()=>{
        setFilterUsers(usersArr.filter(user => {
            return user.name.toLowerCase().includes(searchTerm.toLowerCase())
        }))
        console.log(filterUsers)
    })

    return (
        <>
            <div className='search-box'>
                <div className='search-line'>
                    <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value || '')} className='search-line-inp' type="text"/>
                    <button onClick={()=>searchBtnClick()} className='search-line-btn'>Search</button>    
                </div>
                <h1 className='search-text'>Search results</h1> 
            </div>
            <div className='users-box'>
                <div className='list-users'>
                    {filterUsers.length === 0 ? (
                        <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
                            <div className='not-fonud'>
                                NOT FONUD
                            </div>
                        </div>
                    ) : (filterUsers.map((item)=>(
                            <div key={item.id} className='user'>
                                <p className="user-text">{item.name}</p>
                                <p className="user-text">{item.email}</p>
                                <p className="user-text">{item.phone}</p>
                            </div>
                        )))
                    }
                </div>
                <h1 className='search-text'>Users</h1>
                <div className='list-users'>
                {usersArr.length === 0 ? null : (
                    usersArr.map((item)=>(
                        <div key={item.id} className='user'>
                            <p className='user-text'>{item.name}</p>
                            <p className="user-text">{item.email}</p>
                            <p className="user-text">{item.phone}</p>
                        </div>
                    ))
                )}
                </div>
            </div>
        </>
    );
};

export default Search;