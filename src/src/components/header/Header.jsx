import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header(props) {
    const { auth, userData } = props
    const { type, email } = userData
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Task
                    </Typography>
                    {auth && (
                        <div>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {type} : {email}
                            </Typography>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

Header.defaultProps = {
    userData: [],
    auth: false
}

export default React.memo(Header);

