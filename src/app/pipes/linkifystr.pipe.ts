import { Pipe, PipeTransform } from '@angular/core';
import * as linkifystr from 'linkifyjs/string';

@Pipe({
    name: 'linkifystr'
})
export class LinkifystrPipe implements PipeTransform {

    transform(str: string) {
        return str ? linkifystr(str, { target: '_system' }) : str;
    }

}
