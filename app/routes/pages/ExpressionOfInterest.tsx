// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles } from '@fluentui/react-components';
import * as React from 'react';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%'
    }
});


const ExpressOfInterest = () => {
    const classes = useStyles();

    return (<div className={classes.container}>
        <h2>Expression of Interest</h2>

    </div>)
}

export default ExpressOfInterest;
