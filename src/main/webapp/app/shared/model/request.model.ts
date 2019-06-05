import { Moment } from 'moment';
import { IUser } from 'app/shared/model/user.model';

export const enum Priority {
  High = 'High',
  Normal = 'Normal',
  Low = 'Low'
}

export const enum RequestStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Assigned = 'Assigned'
}

export interface IRequest {
  id?: number;
  name?: string;
  descripcion?: string;
  created?: Moment;
  priority?: Priority;
  status?: RequestStatus;
  user?: IUser;
}

export const defaultValue: Readonly<IRequest> = {};
