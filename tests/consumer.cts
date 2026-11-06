import * as api from '@lp-labs/case-converter';
import { convertCase } from '@lp-labs/case-converter';
console.log(convertCase('HTTPServer_ID', 'kebab'));
// @ts-expect-error invalid argument must be rejected by declarations
api.convertCase('hello', 'title');
