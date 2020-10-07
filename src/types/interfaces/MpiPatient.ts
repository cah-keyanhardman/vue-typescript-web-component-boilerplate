export interface MpiPatient {
  data: Data;
  included: IncludedAttribute[];
}

export interface Attributes {
  'plan-term-date': string;
  'plan-name': string;
  'date-of-birth': string;
  'plan-effective-date': string;
  'mtm-patient': string;
  'policy-id': number;
  'condition-last-modified-date': string;
  'last-completed-cmr-date': string;
  'gender': string;
  'last-name': string;
  'allergy-last-modified-date': string;
  'first-name': string;
  'timezone': string;
}

export interface Datum {
  id: number;
  type: string;
}

export interface Conditions {
  data: Datum[];
}

export interface Data2 {
  id: string;
  type: string;
}

export interface Actions {
  data: Data2;
}

export interface Data3 {
  id: number;
  type: string;
}

export interface PhoneNumber {
  data: Data3;
}

export interface Data4 {
  id: number;
  type: string;
}

export interface Address {
  data: Data4;
}

export interface Datum2 {
  id: number;
  type: string;
}

export interface Reasons {
  data: Datum2[];
}

export interface Datum3 {
  id: number;
  type: string;
}

export interface AllergyOccurrences {
  data: Datum3[];
}

export interface Relationships {
  'conditions': Conditions;
  'actions': Actions;
  'phone-number': PhoneNumber;
  'address': Address;
  'reasons': Reasons;
  'allergy-occurrences': AllergyOccurrences;
}

export interface Data {
  attributes: Attributes;
  relationships: Relationships;
  id: string;
  type: string;
}

export interface Attributes2 {
  'active': number;
  'modified-date': string;
  'name': string;
  'reactions': string[];
  'other-reactions': string[];
  'allergen': string;
  'number': string;
  'preferred?': boolean;
  'street-address2': string;
  'city': string;
  'state-province': string;
  'postal-code': string;
  'street-address1': string;
  'description': string;
  'patient': string;
  'show-phone-delivery-method?': boolean;
  'show-telehealth-delivery-method?': boolean;
  'can-see-lab-data?': boolean;
  'can-start-claim-from-action-plan?': boolean;
  'require-prior-auth-code?': boolean;
  'can-see-diagnosis-codes?': boolean;
}

export interface Data5 {
  id: number;
  type: string;
}

export interface Patient {
  data: Data5;
}

export interface Relationships2 {
  patient: Patient;
}

export interface IncludedAttribute {
  attributes: Attributes2;
  relationships: Relationships2;
  id: string | number;
  type: string;
}
