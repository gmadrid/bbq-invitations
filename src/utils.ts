import { getCollection } from 'astro:content';
import { getETDayCutoff } from './date';

export { getETDayCutoff } from './date';

export async function getPublishedInvitations() {
  const invitations = await getCollection('invitations');
  const isDev = import.meta.env.DEV;

  if (isDev) return invitations;

  // Invitation dates are midnight UTC, so < next-ET-day-midnight catches today's invitation.
  const cutoff = getETDayCutoff();
  return invitations.filter(inv => inv.data.date < cutoff);
}
