import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    paper: {
        width: '25vw',
        height: '45vh',
        minHeight: '400px'
    },
    header: {
        flexShrink: 0,
        height: '5vh',
        minHeight: '44px',
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
        margin: '5px'
    },
    body: {
        flex: '1 0 auto',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        height: '35vh',
        minHeight: '315px'
    },
    textFieldItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberTextField: {
        width: '50%'
    },
    switchButtonItem: {
        display: 'flex',
        alignItems: 'center',
    },
    switchButton: {
        color: 'white',
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    footer: {
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        height: '3vh',
        minHeight: '26px',
        margin: '5px',
        borderTop: `1px solid ${theme.palette.secondary.light}`
    }
}));

export default useStyles;