import React, {Component} from 'react';
import  Alert  from 'react-bootstrap/Alert'



class Warnings extends React.Component{
    
    render(){
        return(
            <div>Hello
            <Alert variant="danger" className="mt-5">
                No books in the library
            </Alert>
            </div>
            );
            
           }



    
}
export default Warnings