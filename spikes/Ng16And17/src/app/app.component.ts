import { Component } from '@angular/core';
import {WritableSignalsComponent} from "./signals/writable-signals/writable-signals.component";
import {NewControlFlowSyntaxComponent} from "./new-control-flow-syntax/new-control-flow-syntax.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
  imports:[WritableSignalsComponent, NewControlFlowSyntaxComponent]
})
export class AppComponent {
  title = 'Ng16And17';
}
/* todo: features to add to this spike...

Standalone - This entire project/spike is standalone. No app module.

SSR

Signals

Jest - unit testing

Deferrable views - inc viewports

New control flow syntax


 */
