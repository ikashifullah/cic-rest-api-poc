export function getEpoch(dateString, tag) {
    const newDateString = tag === 'start' ? dateString + ' 00:00' : dateString + ' 23:59';
	return new Date(newDateString).getTime();
}