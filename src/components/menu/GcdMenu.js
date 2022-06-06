import React from 'react';
//import {graphql, StaticQuery} from 'gatsby';
import { MenuItem } from "../menu/MenuItem"

export const GcdMenu = () => {
    return (
    <div className="homepage-links-container">
        <div>
          <MenuItem menuItem={{children: [], url: '/', label: 'Home', id: 4}} className={'homepage-links'}/>
        </div>
        <div>
          <MenuItem menuItem={{children: [], url: '/geo', label: 'Geo', id: 1}} orientation={'V'} className={'homepage-links'}/>
        </div>
        <div>
          <MenuItem menuItem={{children: [], url: '/code', label: 'Code', id: 2}}  className={'homepage-links'}/>
        </div>
        <div>
          <MenuItem menuItem={{children: [], url: '/design', label: 'Design', id: 3}} className={'homepage-links'}/>
        </div>
        <div>
          <MenuItem menuItem={{children: [], url: '/blog', label: 'Blog', id: 5}} className={'homepage-links'}/>
        </div>
    </div>
    )
}
