import React from 'react';
import { requireNativeComponent, ViewStyle } from 'react-native';

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

let token = '';

type BraintreeProps = {
  style?: ViewStyle;
  isShown?: boolean;
};

const Braintree = (props: BraintreeProps): JSX.Element => {
  return <BraintreeView {...props} clientToken={token} />;
};

type configProps = {
  clientToken: string;
};
Braintree.config = ({ clientToken }: configProps): void => {
  if (clientToken) token = clientToken;
};

interface BraintreePropsAndToken extends BraintreeProps {
  clientToken: string;
}

export const BraintreeView = requireNativeComponent<BraintreePropsAndToken>(
  'BraintreeView'
);

export default Braintree;
