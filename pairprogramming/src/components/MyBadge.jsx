import React, {Component} from 'react';
import  {Badge, Button}  from 'react-bootstrap'



class MyBadge extends React.Component{
    
    render(){
        return(
            <h4>
            Books <Badge variant="secondary">New</Badge>
          </h4>
            );
            
           }



    
}
export default MyBadge