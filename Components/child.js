import React from 'react';
import {LocaleConsumer} from '../Context/ContextApi'
const child = () => {
    return (
           <LocaleConsumer>
               {props => (
				<h1>welcome user</h1>
				)}
        </LocaleConsumer>
    );
}

export default child;
