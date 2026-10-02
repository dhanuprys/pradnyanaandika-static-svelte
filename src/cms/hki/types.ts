export type HkiType = 'Hak Cipta' | 'Paten Sederhana' | 'Paten' | 'Merek';

export interface HkiRecord {
	id: string;
	title: string;
	hkiType: HkiType;
	registrationNumber: string;
	registrationDate: string;
	creators: string[];
	description: string;
	certificateUrl?: string;
}
