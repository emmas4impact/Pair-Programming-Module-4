import React, {Component} from 'react';
import  Alert  from 'react-bootstrap/Alert'



class Warnings extends React.Component{
    
    render(){
        return(
            
            <Alert variant="danger" className="mt-5">
                No books in the library
            </Alert>
            
            );
            
           }



    
}
export default Warnings