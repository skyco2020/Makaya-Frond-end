import { Injectable } from '@angular/core';

@Injectable()
export class GlobalFunctionService{
    loadScript( urljs: string) {
        const node = document.createElement('script');
        node.src = urljs;
        node.type = 'text/javascript';
        node.async = true;
        // tslint:disable-next-line: deprecation
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
}