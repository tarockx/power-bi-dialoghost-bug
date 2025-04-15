import powerbi from "powerbi-visuals-api";
import DialogConstructorOptions = powerbi.extensibility.visual.DialogConstructorOptions;
import DialogAction = powerbi.DialogAction;


export class MyDialogComponent {
    static id = "MyDialogComponent";

    target: HTMLElement;
    host: powerbi.extensibility.visual.IDialogHost;

    constructor(options: DialogConstructorOptions, initialState: any) {
        this.host = options.host;
        
        if(document){
            const btn: HTMLButtonElement = document.createElement("button");
            btn.innerText = "Click to close the dialog box";
            btn.onclick = () => {
                this.closeDialog();
            }
            options.element.appendChild(btn);
        }
    }

    public closeDialog() {
        console.log("closing dialog");
        try {
            //BUG: this appears to do nothing
            this.host.close(DialogAction.Cancel);
        }
        catch (e) {
            console.error("Error closing dialog", e);
        }        
    }

    
}

//Register the dialog
globalThis.dialogRegistry = globalThis.dialogRegistry || {};
globalThis.dialogRegistry[MyDialogComponent.id] = MyDialogComponent;