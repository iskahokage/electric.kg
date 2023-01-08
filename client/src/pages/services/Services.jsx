import React, { useContext, useEffect } from 'react';
import AddForm from '../../components/addForm/AddForm';
import Card from '../../components/card/Card';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import {serviceContext} from '../../context/serviceContext';

const Services = () => {

    const {services, getData} = useContext(serviceContext)

    
    useEffect(()=>{
        getData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container'>
            <AddForm page={'услугу'} type={'service'}/>
            <p className="title">Услуги:</p>
            <Card data={services}/>
        </div>
    );
};

export default Services;