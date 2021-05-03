import BraintreeDropIn

@objc(Braintree)
class Braintree: NSObject {

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }
    
    @objc func showDropIn(clientTokenOrTokenizationKey: String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) {
        let request = BTDropInRequest()
        let dropIn = BTDropInController(authorization: clientTokenOrTokenizationKey, request: request)
        { (controller, result, error) in
            if (error != nil) {
                reject("Error", "There was an error with the request.", error)
        } else if let result = result {
                resolve(result)
        }
            controller.dismiss(animated: true, completion: nil)
        }
        self.present(dropIn!, animated: true, completion: nil)
    }
}
