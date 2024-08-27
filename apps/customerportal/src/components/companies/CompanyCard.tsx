import * as React from 'react';
import { useState } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import ContactsIcon from '@mui/icons-material/AccountCircle';
import DealIcon from '@mui/icons-material/MonetizationOn';
import {
    useCreatePath,
    SelectField,
    useRecordContext,
    Link,
} from 'react-admin';

import { CompanyAvatar } from './CompanyAvatar';
import { Customer } from '../../graphql/graphql';
import { useConfigurationContext } from '../root/ConfigurationContext';

export const CompanyCard = (props: { record?: Customer }) => {
    const { companySectors } = useConfigurationContext();
    const [elevation, setElevation] = useState(1);
    const createPath = useCreatePath();
    const record = useRecordContext<Customer>(props);
    if (!record) return null;

    return (
        <Link
            to={createPath({
                resource: 'companies',
                id: record.id,
                type: 'show',
            })}
            underline="none"
            onMouseEnter={() => setElevation(3)}
            onMouseLeave={() => setElevation(1)}
        >
            <Paper
                sx={{
                    height: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1em',
                }}
                elevation={elevation}
            >
                <Box display="flex" flexDirection="column" alignItems="center">
                    <CompanyAvatar />
                    <Box textAlign="center" marginTop={1}>
                        <Typography variant="subtitle2">
                            {record.name}
                        </Typography>
                        <SelectField
                            color="textSecondary"
                            source="sector"
                            choices={companySectors.map(sector => ({
                                id: sector,
                                name: sector,
                            }))}
                        />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-around" width="100%">
                    <Box display="flex" alignItems="center">
                        <ContactsIcon color="disabled" sx={{ mr: 1 }} />
                        <div>
                            <Typography variant="subtitle2" sx={{ mb: -1 }}>
                                {record.contacts?.length}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {record.contacts && record.contacts.length > 1
                                    ? 'contacts'
                                    : 'contact'}
                            </Typography>
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <DealIcon color="disabled" sx={{ mr: 1 }} />
                        <div>
                            <Typography variant="subtitle2" sx={{ mb: -1 }}>
                                {record.addresses?.length}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {record.addresses && record.addresses?.length > 1 ? 'deals' : 'deal'}
                            </Typography>
                        </div>
                    </Box>
                </Box>
            </Paper>
        </Link>
    );
};
