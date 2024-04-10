# cf-doh

Typed Cloudflare DNS Over HTTPS Resolver

## Motivation

This lib is a type safe resolver that uses cloudflare's DNS Over HTTP service to resolve DNS records. It is primarily useful in contexts that do not have access to libc's dns resolver (e.g. non-node javascript like v8 isolates or the browser).

## Usage

`npm --save install cf-doh`

```javascript
import {}
```

## Usage in node.js

If you have access to the node stdlib, you probably want to use node's `dns` library rather than this one, as it will use the system's native resolver. If you explicitly want to use cloudflare's DoH resolver, you can still use this library in node, but you'll need to provide a fetch implementation. [JakeChampion's fetch polyfill](https://github.com/JakeChampion/fetch) is the preferred implmementation.

Install it in your local package.json
`npm install whatwg-fetch --save`

Then provide it to this library:

```javascript
import { queryDNS, setFetch } from "cf-doh";
import { fetch } from "whatwg-fetch";
setFetch(fetch);

// Use queryDNS normally
```

## API

`queryDNS(hostname: string, recordType: DNSRecordType | keyof typeof DNSRecordType): Promise<string[]>`

Queries Cloudflare DoH for the provided hostname. If you want to query a named record, pass the hostname including it.
recordType may be a DNS record type (e.g. `CNAME`, `TXT`) or the numeric value of a type as per the [spec](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4) (e.g. 5, 16).

This returns an array of all values of that type found at this hostname.

If cloudflare returns a non-200 response or a Status other than NoError, this will throw with a status message or the response from cloudflare.

```typescript
import { queryDNS } from "cf-doh";

const records = await queryDNS("_verification.jesseditson.com", "TXT");

records.forEach((r) => console.log(r));
```

`queryDNSRecords(hostname: string, recordType: DNSRecordType | keyof typeof DNSRecordType): Promise<DOHResponse>`

Queries Cloudflare DoH for the provided hostname. If you want to query a named record, pass the hostname including it.
recordType may be a DNS record type (e.g. `CNAME`, `TXT`) or the numeric value of a type as per the [spec](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4) (e.g. 5, 16).

This returns a DOHResponse, which is a typed version of the JSON returned from cloudflare:
https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/dns-json/

If cloudflare returns a non-200 response, this will throw.

```typescript
import { queryDNSRecords, DOHStatus } from "cf-doh";

const response = await queryDNSRecords("_verification.jesseditson.com", "TXT");

if (response.status === DOHStatus.NoError) {
  const records = r.Answer.map((r) => JSON.parse(r.data));
}
```

## Caveats and Notes

Cloudflare returns quoted strings for standardized record types, and hex values for unknown record types. This means that for most records, the string you get back will include double quotes. `queryDNS` uses `JSON.parse()` to strip these quotes before returning them, so if you're using `queryDNSRecords` directly, you'll need to process these values to use them as strings.
