var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Thom_CustomCheckout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Thom_CustomCheckout/js/view/shipping-payment-mixin': true
            }
        }
    }
};

