export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
}

export interface StatusOption {
  value: Status
  text: string
}

export const statusOptions: StatusOption[] = [
  {value: Status.Active, text: 'Active'},
  {value: Status.Inactive, text: 'Inactive'},
  {value: Status.Pending, text: 'Pending'},
] as const
