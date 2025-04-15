# power-bi-dialoghost-bug

This repository contains a minimal Power Bi custom visual that showcases a (possible?) bug in the Power Bi Custom Visual API, described here:
https://github.com/microsoft/powerbi-visuals-api/issues/98

The visual consists of a simple button that, when pressed, opens a Dialog Box.
The Dialog Box contains a simple button that SHOULD close the dialog box itself, by calling the `powerbi.extensibility.visual.IDialogHost.closeDialog()` api.

However, this doesn't work, nothing happens when the button is pressed (even after waiting the 5 seconds described in the documentation to make the API functional)

