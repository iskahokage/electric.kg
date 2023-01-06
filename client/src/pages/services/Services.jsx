import React, { useContext, useEffect } from 'react';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import {serviceContext} from '../../context/serviceContext';

const Services = () => {

    const {services, getData} = useContext(serviceContext)

    
    useEffect(()=>{
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container'>
            <p className="title">Услуги:</p>
            <ServiceCard data={services}/>
        </div>
    );
};

export default Services;