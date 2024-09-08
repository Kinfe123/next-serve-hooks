import {z, ZodSchema} from 'zod'
const CookieSchema = z.record(z.string(), z.string());
function inferSchemaFromCookieObject(cookieObject: Record<string, string>): ZodSchema {
    const schemaObject = Object.keys(cookieObject).reduce((acc, key) => {
      acc[key] = z.string().optional();
      return acc;
    }, {} as Record<string, z.ZodType<any, any, any>>);
    const zObject = z.object(schemaObject);
    return zObject
  }

export const cookieParser = (cookieTemplate: string) => {
    let cookie: Record<string , any>;
    const cookiesArray = cookieTemplate.split('; ');
    const cookiesObject = cookiesArray.reduce<Record<string, string>>((acc, cookie) => {
        const [key, value] = cookie.split('=');
        if (key && value) {
          acc[key]  = value;
        }
        return acc;
      }, {})
    const cookieReturnSchema = inferSchemaFromCookieObject(cookiesObject)
    return cookiesObject as Record<keyof typeof cookiesObject , any>



}