'use client';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
    Admin,
    CustomRoutes,
    Resource,
    localStorageStore,
    useStore,
    StoreContextProvider,
} from 'react-admin';
import { themes, ThemeName } from './themes/themes';
import { Layout, Login } from './layout';
import englishMessages from '../i18n/en';
import dataProviderFactory from './dataProvider';
import companies  from './companies';

const i18nProvider = polyglotI18nProvider(
    (locale: string) => {
        if (locale === 'fr') {
            return import('../i18n/fr').then(messages => messages.default);
        }
        // Always fallback on english
        return englishMessages;
    },
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
    ]
);

const store = localStorageStore(undefined, 'ECommerce');

const App = () => {
    const [themeName] = useStore<ThemeName>('themeName', 'soft');
    const lightTheme = themes.find(theme => theme.name === themeName)?.light;
    const darkTheme = themes.find(theme => theme.name === themeName)?.dark;
    return (
        <Admin
            title=""
            dataProvider={dataProviderFactory(
                process.env.REACT_APP_DATA_PROVIDER || ''
            )}
            store={store}
            // authProvider={authProvider}
            // dashboard={Dashboard}
            // loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            defaultTheme="light"
        >
            <Resource name="customers" {...companies} />
            {/* <CustomRoutes>
                <Route path="/segments" element={<Segments />} />
            </CustomRoutes>
            <Resource name="customers" {...visitors} />
            <Resource name="orders" {...orders} />
            <Resource name="invoices" {...invoices} />
            <Resource name="products" {...products} />
            <Resource name="categories" {...categories} />
            <Resource name="reviews" {...reviews} /> */}
        </Admin>
    );
};

const AppWrapper = () => (
    <StoreContextProvider value={store}>
        <App/>
    </StoreContextProvider>
);

export default AppWrapper;
