import React, { SyntheticEvent } from 'react';
import { requireNativeComponent, ViewStyle } from 'react-native';

export type BTDropInResult = {
  isCancelled: boolean;
  paymentDescription: string;
  paymentOptionType: number;
  paymentMethod?: {
    nonce: string;
    type: string;
    isDefault: boolean;
  };
};

let token = '';

type BraintreeProps = {
  style?: ViewStyle;
  isShown?: boolean;
  onCompleteTransaction?: (result: BTDropInResult) => void;
};

const Braintree = (props: BraintreeProps): JSX.Element => {
  const onCompleteTransaction = (
    e: SyntheticEvent<typeof BraintreeView, BTDropInResult | { error: boolean }>
  ) => {
    const { nativeEvent } = e;
    console.log(nativeEvent);
    if (props?.onCompleteTransaction && !('error' in nativeEvent))
      props.onCompleteTransaction(nativeEvent);
  };

  return (
    <BraintreeView
      {...props}
      onCompleteTransaction={onCompleteTransaction}
      clientToken={token}
    />
  );
};

type configProps = {
  clientToken: string;
};
Braintree.config = ({ clientToken }: configProps): void => {
  if (clientToken) token = clientToken;
};

type BraintreePropsAndToken = {
  style?: ViewStyle;
  isShown?: boolean;
  clientToken: string;
  onCompleteTransaction?: (
    result: SyntheticEvent<
      typeof BraintreeView,
      BTDropInResult | { error: boolean }
    >
  ) => void;
};

export const BraintreeView = requireNativeComponent<BraintreePropsAndToken>(
  'BraintreeView'
);

export default Braintree;
