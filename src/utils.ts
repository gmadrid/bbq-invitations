import { getCollection } from 'astro:content';

export async function getPublishedInvitations() {
  const invitations = await getCollection('invitations');
  const isDev = import.meta.env.DEV;

  if (isDev) return invitations;

  const todayET = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' });
  const endOfToday = new Date(todayET + ' 23:59:59');
  return invitations.filter(inv => inv.data.date <= endOfToday);
}
