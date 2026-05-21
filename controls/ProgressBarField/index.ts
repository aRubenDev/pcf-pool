// controls/ProgressBarField/index.ts
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { ProgressBarControl, IProgressBarProps } from "./ProgressBar";
import * as React from "react";

export class ProgressBarField implements ComponentFramework.ReactControl<IInputs, IOutputs> {
  private notifyOutputChanged: () => void;

  constructor() {
    // PCF required constructor
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    _state: ComponentFramework.Dictionary
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
  }

  public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
    const props: IProgressBarProps = {
      value: context.parameters.value.raw ?? 0,
      minValue: context.parameters.minValue.raw ?? 0,
      maxValue: context.parameters.maxValue.raw ?? 100,
      showLabel: context.parameters.showLabel.raw ?? true,
      colorMode: String(context.parameters.colorMode.raw ?? '0'),
    };
    return React.createElement(ProgressBarControl, props);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    // No cleanup required for this control
  }
}