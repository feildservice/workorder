import { Avatar as MuiAvatar } from '@mui/material';
import { useRecordContext } from 'react-admin';

// import { Contact } from '../types';
import { Contact, Avatar as AvatarRecord } from '@/graphql/graphql';

export const Avatar = (props: {
    record?: Contact;
    width?: number;
    height?: number;
}) => {
    const record = useRecordContext<Contact>(props);
    // If we come from company page, the record is defined (to pass the company as a prop),
    // but neither of those fields are and this lead to an error when creating contact.
    if (!record?.avatar && !record?.firstName && !record?.lastName) {
        return null;
    }

    return (
        <MuiAvatar
            src={record.avatar?.src ?? undefined}
            sx={{
                width: props.width,
                height: props.height,
                fontSize: props.height ? '0.6rem' : undefined,
            }}
        >
            {record.firstName?.charAt(0)}
            {record.lastName?.charAt(0)}
        </MuiAvatar>
    );
};
