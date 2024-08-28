import { RaRecord } from 'react-admin';
import { Customer, Contact, Logo } from '../../graphql/graphql';

export type CustomerRecord = Customer & Pick<RaRecord, 'id'>;
export type ContactRecord = Contact & Pick<RaRecord, 'id'>;
export type LogoRecord = Logo & Pick<RaRecord, 'id'>;
