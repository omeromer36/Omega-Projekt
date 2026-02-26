import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

function ShoppingCard({isopen, toggleDrawer}) {
    
    return (
        <div>
            <Drawer open={isopen} anchor='right' onClose={toggleDrawer(false)}>

                <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}/>

            </Drawer>
        </div>

    )
}
export default ShoppingCard