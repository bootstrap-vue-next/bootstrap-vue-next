export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical',
}

export interface PriorityOption {
  label: string
  value: Priority
  color: string
}
