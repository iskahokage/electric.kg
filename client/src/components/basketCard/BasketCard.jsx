import React from 'react';
import { IMG_API } from '../../consts';

const BasketCard = () => {
    return (
        <div className='basketCard'>
            <div className='basketCardContainer'>
                <div className="row">
                    <div className='imageContainer' style={{background: `url(${IMG_API}/f81b3f5d-d0e8-4682-bedb-08f4f4bb312c.jg)`,verticalAlign:'middle'}}>
                        <img src={`${IMG_API}/f81b3f5d-d0e8-4682-bedb-08f4f4bb312c.jpg`} alt="" style={{width: '170px', height: '170px'}}/>
                    </div>
                    <div className='detailsContainer'>
                        <h4>Карниз Onviz</h4>
                        <hr />
                        <div className="row">
                            <div><h4>Количетво:</h4></div>
                            <div className='quantityControl'>
                                <div className='quantityControl__minus'>-</div>
                                <input type="text" name="" id="" />
                                <div className='quantityControl__plus'>+</div>
                            </div>
                            <div>
                                <strong>11800 сом</strong>
                            </div>
                            <div>
                                <strong>
                                    23600 сом
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketCard;