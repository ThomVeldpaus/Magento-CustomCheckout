define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator'
    ],
    /**
     * @param   ko
     * @param   Component
     * @param   _
     * @param   stepNavigator
     * @returns {*}
     */
    function (
        ko,
        Component,
        _,
        stepNavigator
    ) {
        'use strict';

        /**
         * mystep is the name of the component's html file
         */
        return Component.extend(
            {
                defaults: {
                    template: "Thom_CustomCheckout/mystep"
                },

                // add here your logic to display step
                isVisible: ko.observable(true),

                /**
                 *
                 * @returns {*}
                 */
                initialize: function () {
                    /**
                     * this.super() will call parent's `initialize` method here
                     * if that method does not exists in the parent UI component,
                     * then the method tries to find it higher in the inheritance chain.
                     */
                    this._super();

                    // register your step
                    stepNavigator.registerStep(
                    // step code will be user as step content id in the component template
                        'step_code',
                        //step alias
                        null,
                        // step title value
                        "Step Title",
                        // observable property isVisible with login when display or hide the step
                        this.isVisible,
                        _.bind(this.navigate, this),
                        /**
                        * sort order value
                        * 'sort order value' < 10: step displays before shipping step;
                        * 10 < 'sort order value' < 20 : step displays between shipping and payment step
                        * 'sort order value' > 20 : step displays after payment step
                        */
                        15
                    );

                    return this;
                },

                /**
                 * @returns void
                 */
                navigateToNextStep: function () {
                    stepNavigator.next();
                }
            }
        );
    }
);
