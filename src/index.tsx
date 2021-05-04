import React, { SyntheticEvent } from 'react';
import { requireNativeComponent, ViewStyle } from 'react-native';

export type BTDropInResult = {
  isCancelled: boolean;
  paymentDescription: string;
  paymentOptionType?: number;
  paymentMethod?: {
    nonce: string;
    type: string;
    isDefault: boolean;
    username: string;
  };
  deviceData: string;
};

let token = '';

type BraintreeProps = {
  style?: ViewStyle;
  isShown?: boolean;
  onCompleteTransaction?: (result: BTDropInResult | Error) => void;
};

const Braintree = (props: BraintreeProps): JSX.Element => {
  const onCompleteTransaction = (
    e: SyntheticEvent<typeof BraintreeView, BTDropInResult | { error: boolean }>
  ) => {
    const { nativeEvent } = e;
    console.log(nativeEvent);
    if (props?.onCompleteTransaction && !('error' in nativeEvent))
      props.onCompleteTransaction(nativeEvent);
    else if (props?.onCompleteTransaction && 'error' in nativeEvent)
      props.onCompleteTransaction(
        new Error('There was an error processing the transaction.')
      );
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

type BraintreeViewProps = {
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

const BraintreeView = requireNativeComponent<BraintreeViewProps>(
  'BraintreeView'
);

export default Braintree;
