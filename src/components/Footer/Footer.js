import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

import { ContainerView, Button}  from './FooterStyledComponents.js';

const Footer = ({ ...props }) => {    
    return (
        <ContainerView>
            <Button  
                activeOpacity   =   {  0.5 }
                noBorder        
            >
                <FontAwesome 
                    name    =   "home"
                    size    =   {   30  } 
                    color   =   "white" 
                />
            </Button>

            <Button  
                activeOpacity   =   {  0.5 }
                noBorder        
            >
                <FontAwesome 
                    name    =   "search"
                    size    =   {  30  } 
                    color   =   "white" 
                />
            </Button>
            
            <Button  
                activeOpacity   =   {  0.5 }
                noBorder        
            >
                <FontAwesome5 
                    name    =   "receipt"
                    size    =   {  30  } 
                    color   =   "white" 
                />
            </Button>
       
        </ContainerView>
    ); //end return statement
}; //end Footer()

export default Footer;