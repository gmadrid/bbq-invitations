/** Compute the UTC cutoff: start of the next ET calendar day. */
export function getETDayCutoff(now: Date = new Date()): Date {
  const etParts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const etYear  = Number(etParts.find(p => p.type === 'year')!.value);
  const etMonth = Number(etParts.find(p => p.type === 'month')!.value) - 1;
  const etDay   = Number(etParts.find(p => p.type === 'day')!.value);
  return new Date(Date.UTC(etYear, etMonth, etDay + 1));
}
