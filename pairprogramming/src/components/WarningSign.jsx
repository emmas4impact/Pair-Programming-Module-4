import React, {Component} from 'react';
import  Alert  from 'react-bootstrap/Alert'



class Warnings extends React.Component{
    
    render(){
        return(
            <div>Hello
            <Alert variant="danger" className="mt-5">
                No dish selected
            </Alert>
            </div>
            );
            
           }



    
}
export default Warnings