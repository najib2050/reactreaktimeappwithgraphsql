// import React from 'react'


import { Nave,Logo,Menu,MenuItem } from "./Style"
const Heade = () => {
    return (
        <div>Heade
            {/*to stop refreshing the page use Link
        not href but takes to
        <Link to=""/>
         */}
            <Nave>

                <Logo to="/">Logo</Logo>
                <Menu>
                        <MenuItem to='/posts'>posts</MenuItem>
                        <MenuItem to='/new-post'>new posts</MenuItem>
                        <MenuItem to='/other'>other pages</MenuItem>
                </Menu>
            </Nave>
        </div>
    )
}

export default Heade