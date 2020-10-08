import React, { useState } from 'react';
import {Link} from 'react-scroll';

import { MenuContainer, NavContainer, Button, NavMenu, DivList} from './styles';

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    //função para mudar o estado no menu
    const handleOpen = () => {
        setOpenMenu(!openMenu)
        console.log(openMenu);
    }
  return (
    <>    
        <NavMenu onClick={handleOpen}/> 
        <MenuContainer className={openMenu !== true ? '' : 'open'}>
            <NavContainer>
                <DivList>                  
                    <Button onClick={handleOpen}></Button>
                    <div>
                        <Link to="home"  smooth={true} offset={242} duration={1500}>
                            <a>Home</a>
                        </Link>
                        
                        <Link to="product"  smooth={true} duration={1500}>
                            <a>Product</a>
                        </Link>

                        <Link to="princing"  smooth={true} duration={1500}>
                            <a>Pricing</a>                                
                        </Link>
                    </div>
                    <div>
                        <Link to="partners"  smooth={true} duration={1500}>
                            <a>Partners</a>
                        </Link>

                        <Link to="contato"  smooth={true} duration={1500}>
                        <a>Contact</a>                      
                        </Link>                   

                        <a href="https://github.com/isaacam517?tab=repositories" target="blank">GitHub</a>  
                    </div>     
                </DivList> 
            </NavContainer>
        </MenuContainer>
    </>
  );
}

export default Menu;