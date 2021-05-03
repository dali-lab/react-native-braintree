import { NativeModules } from 'react-native';

type BTDropInResult = {
  cancelled: boolean;
  paymentDescription: string;
  paymentOptionType: number;
  paymentMethod: {
    nonce: string;
    type: string;
    isDefault: boolean;
  };
};

type BraintreeType = {
  multiply(a: number, b: number): Promise<number>;
  showDropIn(clientToken: string): Promise<BTDropInResult>;
};

const { Braintree } = NativeModules;

export default Braintree as BraintreeType;
