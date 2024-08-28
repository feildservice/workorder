import { RaRecord } from 'react-admin';
import { Customer, Contact } from '../../graphql/graphql';

export type CustomerRecord = Customer & Pick<RaRecord, 'id'>;
export type ContactRecord = Contact & Pick<RaRecord, 'id'>;
