export function calculateDiscount(nonMemberPrice: number, memberPrice: number) {
	return Math.round(((nonMemberPrice - memberPrice) / nonMemberPrice) * 100);
}

export function formatCurrency(length: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "PHP",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(length);
}

export function formatDate(dateString: string) {
	return new Date(dateString).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}
