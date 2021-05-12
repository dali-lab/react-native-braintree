#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(BraintreeViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(isShown, BOOL)
RCT_EXPORT_VIEW_PROPERTY(clientToken, NSString)
RCT_EXPORT_VIEW_PROPERTY(onCompleteTransaction, RCTDirectEventBlock)

@end

@interface RCT_EXTERN_MODULE(BraintreeMethods, NSObject)

RCT_EXTERN_METHOD(getIsVenmoInstalled:(NSString)token
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

@end
