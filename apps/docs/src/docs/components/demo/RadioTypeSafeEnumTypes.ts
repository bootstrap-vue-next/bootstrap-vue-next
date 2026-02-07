export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical',
}

export interface PriorityOption {
  text: string
  value: Priority
  color: string
}
