/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    value: ComponentFramework.PropertyTypes.NumberProperty;
    minValue: ComponentFramework.PropertyTypes.WholeNumberProperty;
    maxValue: ComponentFramework.PropertyTypes.WholeNumberProperty;
    showLabel: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    colorMode: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1">;
}
export interface IOutputs {
    value?: number;
}
