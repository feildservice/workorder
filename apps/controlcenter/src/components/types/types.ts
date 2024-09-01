import { RaRecord } from 'react-admin';
import { Customer, Contact, Logo } from '../../graphql/graphql';
import { SvgIconComponent } from '@mui/icons-material';

export type CustomerRecord = Customer & Pick<RaRecord, 'id'>;
export type ContactRecord = Contact & Pick<RaRecord, 'id'>;
export type LogoRecord = Logo & Pick<RaRecord, 'id'>;


export interface ContactGender {
    value: string;
    label: string;
    icon: SvgIconComponent;
}