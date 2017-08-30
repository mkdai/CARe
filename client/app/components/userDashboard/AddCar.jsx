import React from 'react';

export default class AddCar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <div className="CarPic">
                    <img src="http://downloadicons.net/sites/default/files/plus-icon-64937.png" className="img-responsive" id="add-car-pic"/>
                    <div className="car-info">
                        <div>Add Car</div>
                    </div>      
                </div>   
            </div>
        );
    }
}