import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import LinerarProgress from '@material-ui/core/LinearProgress';
import { getThemeProps } from '@material-ui/styles';


const useStyles = makeStyles((theme) => {
    return createStyles({
        bar: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    })

})

export default () => {
    const classes = useStyles();
    
    return (
        <div className={classes.bar}>
            <LinerarProgress />

        </div>
    )
}