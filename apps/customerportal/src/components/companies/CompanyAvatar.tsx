import * as React from 'react';
import { Avatar } from '@mui/material';
import { useRecordContext } from 'react-admin';

// import { Company } from '../types';
import {CustomerRecord, LogoRecord} from '../types/types';

export const CompanyAvatar = (props: {
    record?: CustomerRecord;
    width?: number;
    height?: number;
}) => {
    const { width = 40, height = 40 } = props;
    const record = useRecordContext<CustomerRecord>(props);
    if (!record) return null;
    return (
        <Avatar
            src={record.logo?.src}
            alt={record.name}
            sx={{
                '& img': { objectFit: 'contain' },
                width,
                height,
            }}
        >
            {record.name.charAt(0)}
        </Avatar>
    );
};
