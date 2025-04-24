type Charges = {
	daily: number;
	monthly: number;
	yearly: number;
};

type BaseRates = {
	charges: Charges;
};

type ExtendedRates = BaseRates & {
	lengthOccupancy: number;
	lengthCharges: number;
};

type Rate = BaseRates | ExtendedRates;

export type PricingData = {
	memberRates: Rate;
	nonMemberRates: Rate;
};

export type PricingDataMap = {
	[key: string]: PricingData;
};

export function hasLengthData(rates: Rate): rates is ExtendedRates {
	return "lengthOccupancy" in rates && "lengthCharges" in rates;
}
