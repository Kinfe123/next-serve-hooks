import {z} from 'zod'
const RequestHeadersSchema = z.object({
    host: z.string(),
    'user-agent': z.string(),
    accept: z.string(),
    'accept-language': z.string(),
    'accept-encoding': z.string(),
    dnt: z.string(),
    'sec-gpc': z.string(),
    connection: z.string(),
    cookie: z.string(),
    'upgrade-insecure-requests': z.string(),
    'sec-fetch-dest': z.string(),
    'sec-fetch-mode': z.string(),
    'sec-fetch-site': z.string(),
    'sec-fetch-user': z.string(),
    priority: z.string(),
    'x-forwarded-host': z.string(),
    'x-forwarded-port': z.string(),
    'x-forwarded-proto': z.string(),
    'x-forwarded-for': z.string(),
  });