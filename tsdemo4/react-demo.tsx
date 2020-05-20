import React from 'react'

type Layout = React.FunctionComponent & { Header: React.FunctionComponent }
const Layout: Layout = () => {
    return (
        React.createElement('div', null, 'hi')
    )
}

Layout.Header = () => {
    return (
        React.createElement('div', null, 'hi')
    )
}

interface Layout2 extends React.FunctionComponent {
    Header: React.FunctionComponent
}

const Layout2: Layout2 = () => {
    return (
        React.createElement('div', null, 'hi')
    )
}

Layout2.Header = () => {
    return (
        React.createElement('div', null, 'hi')
    )
}

