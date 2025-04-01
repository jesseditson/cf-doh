// https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6
export enum DOHStatus {
  NoError = 0, // No Error [RFC1035]
  FormErr = 1, // Format Error [RFC1035]
  ServFail = 2, // Server Failure [RFC1035]
  NXDomain = 3, // Non-Existent Domain [RFC1035]
  NotImp = 4, // Not Implemented [RFC1035]
  Refused = 5, // Query Refused [RFC1035]
  YXDomain = 6, // Name Exists when it should not [RFC2136][RFC6672]
  YXRRSet = 7, // RR Set Exists when it should not [RFC2136]
  NXRRSet = 8, // RR Set that should exist does not [RFC2136]
  NotAuth = 9, // Server Not Authoritative for zone [RFC2136]
  // NotAuth = 9, // Not Authorized [RFC8945]
  NotZone = 10, // Name not contained in zone [RFC2136]
  DSOTYPENI = 11, // DSO-TYPE Not Implemented [RFC8490]
  //  12-15 Unassigned
  BADVERS = 16, // Bad OPT Version [RFC6891]
  BADSIG = 16, // TSIG Signature Failure [RFC8945]
  BADKEY = 17, // Key not recognized [RFC8945]
  BADTIME = 18, // Signature out of time window [RFC8945]
  BADMODE = 19, // Bad TKEY Mode [RFC2930]
  BADNAME = 20, // Duplicate key name [RFC2930]
  BADALG = 21, // Algorithm not supported [RFC2930]
  BADTRUNC = 22, // Bad Truncation [RFC8945]
  BADCOOKIE = 23, // Bad/missing Server Cookie [RFC7873]
  // 24-3840 Unassigned
  // 3841-4095 Reserved for Private Use  [RFC6895]
  // 4096-65534 Unassigned
  // 65535 Reserved, can be allocated by Standards Action  [RFC6895]
}

export const DOHStatusMessage = {
  [DOHStatus.NoError]: "No Error [RFC1035]",
  [DOHStatus.FormErr]: "Format Error [RFC1035]",
  [DOHStatus.ServFail]: "Server Failure [RFC1035]",
  [DOHStatus.NXDomain]: "Non-Existent Domain [RFC1035]",
  [DOHStatus.NotImp]: "Not Implemented [RFC1035]",
  [DOHStatus.Refused]: "Query Refused [RFC1035]",
  [DOHStatus.YXDomain]: "Name Exists when it should not [RFC2136][RFC6672]",
  [DOHStatus.YXRRSet]: "RR Set Exists when it should not [RFC2136]",
  [DOHStatus.NXRRSet]: "RR Set that should exist does not [RFC2136]",
  [DOHStatus.NotAuth]:
    "Server Not Authoritative for zone [RFC2136] or Not Authorized [RFC8945]",
  [DOHStatus.NotZone]: "Name not contained in zone [RFC2136]",
  [DOHStatus.DSOTYPENI]: "DSO-TYPE Not Implemented [RFC8490]",
  [DOHStatus.BADSIG]:
    "TSIG Signature Failure [RFC8945] or Bad OPT Version [RFC6891]",
  [DOHStatus.BADKEY]: "Key not recognized [RFC8945]",
  [DOHStatus.BADTIME]: "Signature out of time window [RFC8945]",
  [DOHStatus.BADMODE]: "Bad TKEY Mode [RFC2930]",
  [DOHStatus.BADNAME]: "Duplicate key name [RFC2930]",
  [DOHStatus.BADALG]: "Algorithm not supported [RFC2930]",
  [DOHStatus.BADTRUNC]: "Bad Truncation [RFC8945]",
  [DOHStatus.BADCOOKIE]: "Bad/missing Server Cookie [RFC7873]",
};

// https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4
export enum DNSRecordType {
  Reserved = 0, //  [RFC6895]  2021-03-08
  A = 1, // a host address [RFC1035]
  NS = 2, // an authoritative name server [RFC1035]
  MD = 3, // a mail destination (OBSOLETE - use MX) [RFC1035]
  MF = 4, // a mail forwarder (OBSOLETE - use MX) [RFC1035]
  CNAME = 5, // the canonical name for an alias [RFC1035]
  SOA = 6, // marks the start of a zone of authority [RFC1035]
  MB = 7, // a mailbox domain name (EXPERIMENTAL) [RFC1035]
  MG = 8, // a mail group member (EXPERIMENTAL) [RFC1035]
  MR = 9, // a mail rename domain name (EXPERIMENTAL) [RFC1035]
  NULL = 10, // a null RR (EXPERIMENTAL) [RFC1035]
  WKS = 11, // a well known service description [RFC1035]
  PTR = 12, // a domain name pointer [RFC1035]
  HINFO = 13, // host information [RFC1035]
  MINFO = 14, // mailbox or mail list information [RFC1035]
  MX = 15, // mail exchange [RFC1035]
  TXT = 16, // text strings [RFC1035]
  RP = 17, // for Responsible Person [RFC1183]
  AFSDB = 18, // for AFS Data Base location [RFC1183][RFC5864]
  X25 = 19, // for X.25 PSDN address [RFC1183]
  ISDN = 20, // for ISDN address [RFC1183]
  RT = 21, // for Route Through [RFC1183]
  NSAP = 22, // for NSAP address, NSAP style A record (DEPRECATED) [RFC1706][status-change-int-tlds-to-historic]
  "NSAP-PTR" = 23, // for domain name pointer, NSAP style (DEPRECATED) [RFC1706][status-change-int-tlds-to-historic]
  SIG = 24, // for security signature [RFC2536][RFC2931][RFC3110][RFC4034]
  KEY = 25, // for security key [RFC2536][RFC2539][RFC3110][RFC4034]
  PX = 26, // X.400 mail mapping information [RFC2163]
  GPOS = 27, // Geographical Position [RFC1712]
  AAAA = 28, // IP6 Address [RFC3596]
  LOC = 29, // Location Information [RFC1876]
  NXT = 30, // Next Domain (OBSOLETE) [RFC2535][RFC3755]
  EID = 31, // Endpoint Identifier [Michael_Patton][http://ana-3.lcs.mit.edu/~jnc/nimrod/dns.txt]  1995-06
  NIMLOC = 32, // Nimrod Locator [1][Michael_Patton][http://ana-3.lcs.mit.edu/~jnc/nimrod/dns.txt]  1995-06
  SRV = 33, // Server Selection [1][RFC2782]
  ATMA = 34, // ATM Address [ ATM Forum Technical Committee, "ATM Name System, V2.0", Doc ID: AF-DANS-0152.000, July 2000. Available from and held in escrow by IANA.]
  NAPTR = 35, // Naming Authority Pointer [RFC3403]
  KX = 36, // Key Exchanger [RFC2230]
  CERT = 37, // CERT [RFC4398]
  A6 = 38, // A6 (OBSOLETE - use AAAA) [RFC2874][RFC3226][RFC6563]
  DNAME = 39, // DNAME [RFC6672]
  SINK = 40, // SINK [Donald_E_Eastlake][draft-eastlake-kitchen-sink]  1997-11
  OPT = 41, // OPT [RFC3225][RFC6891]
  APL = 42, // APL [RFC3123]
  DS = 43, // Delegation Signer [RFC4034]
  SSHFP = 44, // SSH Key Fingerprint [RFC4255]
  IPSECKEY = 45, // IPSECKEY [RFC4025]
  RRSIG = 46, // RRSIG [RFC4034]
  NSEC = 47, // NSEC [RFC4034][RFC9077]
  DNSKEY = 48, // DNSKEY [RFC4034]
  DHCID = 49, // DHCID [RFC4701]
  NSEC3 = 50, // NSEC3 [RFC5155][RFC9077]
  NSEC3PARAM = 51, // NSEC3PARAM [RFC5155]
  TLSA = 52, // TLSA [RFC6698]
  SMIMEA = 53, // S/MIME cert association [RFC8162] SMIMEA/smimea-completed-template 2015-12-01
  // 54 Unassigned
  HIP = 55, // Host Identity Protocol [RFC8005]
  NINFO = 56, // NINFO [Jim_Reid] NINFO/ninfo-completed-template 2008-01-21
  RKEY = 57, // RKEY [Jim_Reid] RKEY/rkey-completed-template 2008-01-21
  TALINK = 58, // Trust Anchor LINK [Wouter_Wijngaards] TALINK/talink-completed-template 2010-02-17
  CDS = 59, // Child DS [RFC7344] CDS/cds-completed-template 2011-06-06
  CDNSKEY = 60, // DNSKEY(s) the Child wants reflected in DS [RFC7344]  2014-06-16
  OPENPGPKEY = 61, // OpenPGP Key [RFC7929] OPENPGPKEY/openpgpkey-completed-template 2014-08-12
  CSYNC = 62, // Child-To-Parent Synchronization [RFC7477]  2015-01-27
  ZONEMD = 63, // Message Digest Over Zone Data [RFC8976] ZONEMD/zonemd-completed-template 2018-12-12
  SVCB = 64, // General-purpose service binding [RFC9460] SVCB/svcb-completed-template 2020-06-30
  HTTPS = 65, // SVCB-compatible type for use with HTTP [RFC9460] HTTPS/https-completed-template 2020-06-30
  // 66-98 Unassigned
  SPF = 99, //  [RFC7208]
  UINFO = 100, //  [IANA-Reserved]
  UID = 101, //  [IANA-Reserved]
  GID = 102, //  [IANA-Reserved]
  UNSPEC = 103, //  [IANA-Reserved]
  NID = 104, //  [RFC6742] ILNP/nid-completed-template
  L32 = 105, //  [RFC6742] ILNP/l32-completed-template
  L64 = 106, //  [RFC6742] ILNP/l64-completed-template
  LP = 107, //  [RFC6742] ILNP/lp-completed-template
  EUI48 = 108, // an EUI-48 address [RFC7043] EUI48/eui48-completed-template 2013-03-27
  EUI64 = 109, // an EUI-64 address [RFC7043] EUI64/eui64-completed-template 2013-03-27
  // 110-248 Unassigned
  TKEY = 249, // Transaction Key [RFC2930]
  TSIG = 250, // Transaction Signature [RFC8945]
  IXFR = 251, // incremental transfer [RFC1995]
  AXFR = 252, // transfer of an entire zone [RFC1035][RFC5936]
  MAILB = 253, // mailbox-related RRs (MB, MG or MR) [RFC1035]
  MAILA = 254, // mail agent RRs (OBSOLETE - see MX) [RFC1035]
  ANY = 255, // A request for some or all records the server has available [RFC1035][RFC6895][RFC8482]
  URI = 256, // URI [RFC7553] URI/uri-completed-template 2011-02-22
  CAA = 257, // Certification Authority Restriction [RFC8659] CAA/caa-completed-template 2011-04-07
  AVC = 258, // Application Visibility and Control [Wolfgang_Riedel] AVC/avc-completed-template 2016-02-26
  DOA = 259, // Digital Object Architecture [draft-durand-doa-over-dns] DOA/doa-completed-template 2017-08-30
  AMTRELAY = 260, // Automatic Multicast Tunneling Relay [RFC8777] AMTRELAY/amtrelay-completed-template 2019-02-06
  RESINFO = 261, // Resolver Information as Key/Value Pairs [draft-ietf-add-resolver-info-06] RESINFO/resinfo-completed-template 2023-11-02
  // 262-32767 Unassigned
  TA = 32768, // DNSSEC Trust Authorities [Sam_Weiler][http://cameo.library.cmu.edu/][ Deploying DNSSEC Without a Signed Root. Technical Report 1999-19, Information Networking Institute, Carnegie Mellon University, April 2004.]  2005-12-13
  DLV = 32769, // DNSSEC Lookaside Validation (OBSOLETE) [RFC8749][RFC4431]
  // 32770-65279 Unassigned
  // 65280-65534 Private use
  // 65535 Reserved
}

export type DOHResponse = {
  Status: DOHStatus;
  TC: boolean; // If true, it means the truncated bit was set. This happens when the DNS answer is larger than a single UDP or TCP packet. TC will almost always be false with Cloudflare DNS over HTTPS because Cloudflare supports the maximum response size.
  RD: boolean; // If true, it means the Recursive Desired bit was set. This is always set to true for Cloudflare DNS over HTTPS.
  RA: boolean; // If true, it means the Recursion Available bit was set. This is always set to true for Cloudflare DNS over HTTPS.
  AD: boolean; // If true, it means that every record in the answer was verified with DNSSEC.
  CD: boolean; // If true, the client asked to disable DNSSEC validation. In this case, Cloudflare will still fetch the DNSSEC-related records, but it will not attempt to validate the records.
  Question: {
    name: string; // The record name requested.
    type: DNSRecordType;
  }[];
  Answer?: {
    name: string; // The record owner
    type: DNSRecordType;
    TTL: number; // The number of seconds the answer can be stored in cache before it is considered stale.
    data: string; // The value of the DNS record for the given name and type. The data will be in text for standardized record types and in hex for unknown types.
  }[];
  Authority?: {
    name: string; // The record owner
    type: DNSRecordType;
    TTL: number; // The number of seconds the answer can be stored in cache before it is considered stale.
    data: string; // The value of the DNS record for the given name and type. The data will be in text for standardized record types and in hex for unknown types.
  }[];
  Additional?: {
    name: string; // The record owner
    type: DNSRecordType;
    TTL: number; // The number of seconds the answer can be stored in cache before it is considered stale.
    data: string; // The value of the DNS record for the given name and type. The data will be in text for standardized record types and in hex for unknown types.
  }[];
  // See: https://developers.cloudflare.com/1.1.1.1/infrastructure/extended-dns-error-codes/
  Comment?: string[]; // List of EDE messages.
};

export class DOHError {
  response: DOHResponse
  message: string
  constructor(response: DOHResponse) {
    this.response = response;
    this.message = DOHStatusMessage[response.Status];
  }
}

export const queryDNSRecords = async (
  hostname: string,
  recordType: DNSRecordType | keyof typeof DNSRecordType
) => {
  if (!_fetchImpl) {
    throw new Error(
      "Native fetch implementation not found, call setFetch with a fetch implementation before using cf-doh."
    );
  }
  const r = await _fetchImpl(
    `https://1.1.1.1/dns-query?name=${hostname}&type=${recordType}`,
    {
      headers: { Accept: "application/dns-json" },
    }
  );
  if (!r.ok) {
    let b = "[binary data]";
    try {
      b = await r.text();
    } catch (e) {
      b = `Failed parsing, ${e}`;
    }
    throw new Error(`DoH request failed: [${r.status}] (${b})`);
  }
  const response = await r.json();
  if (typeof response.Status !== "number") {
    throw new Error(
      `Cloudflare returned and unexpected DoH response: ${JSON.stringify(
        response
      )}`
    );
  }
  return response as DOHResponse;
};

export const queryDNS = async (
  hostname: string,
  recordType: DNSRecordType | keyof typeof DNSRecordType
): Promise<string[]> => {
  const r = await queryDNSRecords(hostname, recordType);
  if (r.Status !== DOHStatus.NoError) {
    throw new DOHError(r);
  }
  return r.Answer
    ? r.Answer.map((r) => {
        try {
          // Text records are returned wrapped in quotes, parse them to strip the quotes
          return JSON.parse(r.data);
        } catch (e) {
          return r.data;
        }
      })
    : [];
};

let _fetchImpl: typeof fetch;
export const setFetch = (fetchImpl: typeof fetch) => {
  _fetchImpl = fetchImpl;
};
if (typeof fetch !== "undefined") {
  setFetch(fetch);
} else if (typeof self !== "undefined" && self.fetch) {
  setFetch(fetch);
}
