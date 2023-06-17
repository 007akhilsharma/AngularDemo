import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[conditionApply]'
})
export class ConditionDirective
{
    private hasView = false;
    constructor(private templateRef: TemplateRef<any> , 
        private viewContainerRef : ViewContainerRef
        ){  }

        @Input() set conditionApply(condition: boolean){

            if(condition && !this.hasView){

                this.viewContainerRef.createEmbeddedView(this.templateRef);
                this.hasView =  true ;
            }
            else{
                this.viewContainerRef.clear();
                this.hasView = false;
            }
        }

}