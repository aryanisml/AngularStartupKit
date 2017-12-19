import { Pipe } from "@angular/core";



@Pipe({

    name: "SortPipe"

})

export class SortPipe {
    transform(value: object[], args: string[]): object[] {

        var resultCollection: object[] = [];
        var originalCollection = value;
        var SortCondition = parseInt(args[0]);
        if (args[0]) {
            resultCollection=  originalCollection.sort(
                (currentValue: any, nextValue: any) => {
                        return currentValue[SortCondition] = nextValue[SortCondition]
                }
            )
        }
        return resultCollection;
    }




}