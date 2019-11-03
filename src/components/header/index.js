import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import {
    Link as RouteLink
} from "react-router-dom";
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-around',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));

const sections = [{
        title: 'Список сотрудников',
        link: '/'
    },
    {
        title: 'Добавить запись',
        link: '/add'
    },
    {
        title: 'Настройки',
        link: '/options'
    }
];

export default function Header() {
    const classes = useStyles();
    return ( <
        React.Fragment >
        <
        CssBaseline / >
        <
        Container maxWidth = "lg" >
        <
        Toolbar component = "nav"
        variant = "dense"
        className = {
            classes.toolbarSecondary
        } > {
            sections.map(section => ( <
                Link component = {
                    RouteLink
                }
                color = "inherit"
                noWrap key = {
                    section
                }
                variant = "body2"
                to = {
                    section.link
                }
                className = {
                    classes.toolbarLink
                } >
                {
                    section.title
                } <
                /Link>
            ))
        } <
        /Toolbar> <
        /Container> <
        /React.Fragment>
    );
}