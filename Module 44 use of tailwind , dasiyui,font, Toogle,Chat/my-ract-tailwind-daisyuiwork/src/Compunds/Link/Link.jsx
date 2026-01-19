import React from 'react';

const Link = ({ link }) => {
    return (
        <div>

          <ul>
            <li><a href={link.link}>{link.name}</a></li>
          </ul>

        </div>
    );
};


export default Link;
