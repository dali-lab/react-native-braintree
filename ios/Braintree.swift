import BraintreeDropIn
import Braintree

@objc(BraintreeViewManager)
class BraintreeViewManager: RCTViewManager {

    override func view() -> (BraintreeView) {
      return BraintreeView()
    }
    override static func requiresMainQueueSetup() -> Bool {
      return true
    }
}

class BraintreeView : UIView {
    @objc var onCompleteTransaction: RCTDirectEventBlock?
    var viewController: UIViewController?
    var token: String
    
    override init(frame: CGRect) {
        self.token = ""
        self.viewController = RCTPresentedViewController()
        super.init(frame: frame)
    }
    
    required init?(coder: NSCoder) {
        fatalError()
    }
    
    @objc var clientToken: String = "" {
      didSet {
        self.token = clientToken;
      }
    }
    
    @objc var isShown: Bool = false {
        didSet {
            if (isShown && self.token.count > 0) {
                showDropIn(clientTokenOrTokenizationKey: self.token)
            }
        }
    }
    
    func showDropIn(clientTokenOrTokenizationKey: String) {
        let request = BTDropInRequest()
        request.cardDisabled = true
        request.paypalDisabled = true
        request.venmoDisabled = false
        let dropIn = BTDropInController(authorization: clientTokenOrTokenizationKey, request: request)
        { (controller, result, error) in
            if (error != nil) {
                self.onCompleteTransaction!(["error": true])
            } else if let result = result {
                dump("test")
                dump(result)
//                if (result.paymentMethod? != nil) {
//                    dump(result.paymentMethod? as String? ?? "null")
//                }
                self.onCompleteTransaction!([
                    "isCancelled": result.isCancelled,
                    "paymentDescription": result.paymentDescription,
                    "paymentOptionType": result.paymentOptionType,
                    "paymentMethod": [
                        "nonce": result.paymentMethod!.nonce,
                        "type": result.paymentMethod!.type,
                        "isDefault": result.paymentMethod!.isDefault
                    ]
                ])
            }
            controller.dismiss(animated: true, completion: nil)
        }
        self.viewController?.present(dropIn!, animated: true, completion: nil)
    }
}
