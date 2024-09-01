'use client';

import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import LabelIcon from '@mui/icons-material/Label';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import ProductIcon from '@mui/icons-material/Collections';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AllInboxIcon from '@mui/icons-material/AllInbox';

// import visitors from '../visitors';
// import orders from '../orders';
// import invoices from '../invoices';
// import products from '../products';
// import categories from '../categories';
// import reviews from '../reviews';
import SubMenu from './SubMenu';

//Menu should be Company Info | WorkOrders | Catalogs

// type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';
type MenuName = 'menuCatalog' | 'menuServices' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuWorkOrders: true,
        menuCustomers: true,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />
            <DashboardMenuItem leftIcon={<AllInboxIcon/>} primaryText = {translate('pos.inbox')} />
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                name="pos.menu.customers"
                icon={<ProductIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/customers"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.companies.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<BusinessIcon />}
                    dense={dense}
                />
                {/* <MenuItemLink
                    to="/invoices"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<ProductIcon />}
                    dense={dense}
                /> */}
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuServices')}
                isOpen={state.menuWorkOrders}
                name="pos.menu.services"
                icon={<ProductIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/customers"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.customers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<ProductIcon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/segments"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="pos.menu.catalog"
                icon={<ProductIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/categories"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<CategoryIcon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/products"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.products.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<ProductIcon />}
                    dense={dense}
                />              
            </SubMenu>            
            {/* <MenuItemLink
                to="/reviews"
                state={{ _scrollToTop: true }}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<ProductIcon />}
                dense={dense}
            /> */}
        </Box>
    );
};

export default Menu;
