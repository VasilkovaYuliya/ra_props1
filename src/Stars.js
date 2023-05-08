import React from 'react';
import Star from './Star';

const Stars = ({count = 0}) => {
    if ( count < 1 || count > 5 || isNaN(count)) {
    return null;  
   }

const StarElements = [];
for (let i = 0; i < count; i++) {
StarElements.push(<Star key={i} />)
}

return <ul class="card-body-stars u-clearfix">{StarElements}</ul>
}

export default Stars;