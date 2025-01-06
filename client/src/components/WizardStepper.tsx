import React from "react";

import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export const WizardStepper = ({ currentStep }: WizardStepperProps) => {
  return (
    <div className="wizard-stepper">
      <div className="wizard-stepper__container">
        {Array.from([1, 2, 3], (step, index) => (
          <React.Fragment key={step}>
            <div className="wizard-stepper__step">
              <div
                className={cn("wizard-stepper__circle", {
                  "wizard-stepper__circle--completed":
                    currentStep > step || (currentStep === 3 && step === 3),
                  "wizard-stepper__circle--current":
                    currentStep === step && step !== 3,
                  "wizard-stepper__circle--upcoming": currentStep < step,
                })}
              >
                {currentStep > step || (currentStep === 3 && step === 3) ? (
                  <CheckIcon className="size-5" />
                ) : (
                  <span>{step}</span>
                )}
              </div>
              <p
                className={cn("wizard-stepper__text", {
                  "wizard-stepper__text--active": currentStep >= step,
                  "wizard-stepper__text-inactive": currentStep < step,
                })}
              >
                {step === 1 && "Details"}
                {step === 2 && "Payment"}
                {step === 3 && "Completion"}
              </p>
            </div>
            {index < 2 && (
              <div
                className={cn("wizard-stepper__line", {
                  "wizard-stepper__line--completed": currentStep > step,
                  "wizard-stepper__line-incomplete": currentStep < step,
                })}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
