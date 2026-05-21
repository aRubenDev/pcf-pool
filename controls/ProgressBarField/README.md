# Progress Bar Field

PCF control for Dynamics 365 model-driven apps that visualizes a numeric
field as a configurable progress bar.

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| value | Number | Yes | Numeric field to display as progress |
| minValue | Whole.None | No | Minimum value (default: 0) |
| maxValue | Whole.None | No | Maximum value (default: 100) |
| showLabel | TwoOptions | No | Show percentage label (default: true) |
| colorMode | Enum | No | Auto = threshold-based colors, Fixed = brand blue |

## Color thresholds (Auto mode)

| Range | Color |
|-------|-------|
| 0–49% | Green |
| 50–79% | Orange |
| 80–100% | Red |

## Installation

Import the solution `.zip` from the `out/` folder into your Dataverse
environment via make.powerapps.com → Solutions → Import.

## Development

```bash
cd controls
npm start        # local harness at localhost:8181
pac pcf push --publisher-prefix dqs   # deploy to dev environment
```