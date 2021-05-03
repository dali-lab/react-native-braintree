import { NativeModules } from 'react-native';

type BraintreeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Braintree } = NativeModules;

export default Braintree as BraintreeType;
