import React, { useContext, useEffect } from 'react';

import { postContext } from '../../context/PostContext';


const Products = () => {
    const {posts, getPost}  = useContext(postContext);
    useEffect(()=>{
        getPost()
    }, [])
    return (
        <div className='products'>
            <p className='services-title'>Предостовляемые услуги:</p>
            <div className='products-container'>
                {
                    posts.map((item)=>(
                        <div className="card">
                            <div className='card-layout'>
                                <img src={item.operationImage} alt="" />
                                <p className='card-title'>{item.operationName}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;