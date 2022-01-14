import {UrlSerializer, UrlTree, DefaultUrlSerializer} from '@angular/router';
import {HttpParameterCodec} from "@angular/common/http";

export class CustomUrlSerializer implements HttpParameterCodec {
  /*parse(url: any): UrlTree {
    let dus = new DefaultUrlSerializer();
    return dus.parse(url);
  }*/

  /*serialize(tree: UrlTree): any {
    let dus = new DefaultUrlSerializer(),
      path = dus.serialize(tree);
    // use your regex to replace as per your requirement.
    return path.replace(/%22/g,'"');
  }*/

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }

  encodeKey(key: string): string {
    console.log({key})
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    console.log({value})
    return encodeURIComponent(value);
  }
}
