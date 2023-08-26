import { Priority, TodoState } from './todo.model';
import { v4 as uuid } from 'uuid';

export const initialState: TodoState = [
  {
    id: uuid(),
    title: 'Finish quarterly report',
    description: 'Gather all department data and finalize the Q3 report.',
    priority: Priority.High,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Schedule team meeting',
    description: 'Find a suitable time for all team members next week.',
    priority: Priority.Medium,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Clean workspace',
    description: 'Organize desk and archive old documents.',
    priority: Priority.Low,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Review project proposal',
    description: 'Go through the new project proposal by the R&D department.',
    priority: Priority.High,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Send out survey',
    description: 'Send out the annual employee satisfaction survey.',
    priority: Priority.Medium,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Plan team building activity',
    description: 'Plan a fun team building activity for next month.',
    priority: Priority.Low,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Update client on progress',
    description: 'Email the client with the latest updates on their project.',
    priority: Priority.High,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Backup database',
    description: 'Ensure all data is backed up at the end of the month.',
    priority: Priority.Medium,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Renew software licenses',
    description:
      'Check which software licenses are expiring soon and renew them.',
    priority: Priority.Low,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    title: 'Interview new candidates',
    description: 'Conduct interviews for the open developer position.',
    priority: Priority.High,
    createdAt: new Date().getTime(),
  },
];
