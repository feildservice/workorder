import * as React from 'react';
import { Layout } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';

const LayoutComponent = ({ children }: { children: React.ReactNode }) => (
    <Layout appBar={AppBar} menu={Menu}>
        {children}
    </Layout>
);

export default LayoutComponent;