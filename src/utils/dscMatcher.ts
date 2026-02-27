import { products } from '../data/products';

interface DSCMatch {
  product: typeof products[0];
  score: number;
  reasons: string[];
}

const portalKeywords = {
  government: ['isro', 'drdo', 'hal', 'bel', 'ntpc', 'bhel', 'bpcl', 'nhai', 'nhpc', 'seci', 'iocl', 'ongc', 'railtel', 'ireda', 'pgcil', 'sail', 'npcil', 'wapcos', 'coalindia', 'bsnl', 'itbp', 'hudco', 'nbcc'],
  procurement: ['gem', 'nic', 'cppp', 'mstc', 'eprocisro', 'eproccoal', 'railtender', 'unprocure', 'wto', 'iata', 'fieo', 'apec'],
  trade: ['dgft', 'icegate', 'exim', 'iec', 'customs', 'meis', 'seis', 'fieo'],
  business: ['gst', 'incometax', 'epf', 'trademark', 'mca21', 'roc', 'kyc', 'invoice', 'startup']
};

const dscTypeKeywords = {
  "Class 3 Individual Signing": [
    "individual", "dsc", "digitalsign", "signature", "it", "gst", "epf", "msme", "trademark", "kyc",
    "roc", "itr", "tax", "filing", "invoice", "iec", "nsdl", "icegate", "verify", "esign", "secure",
    "paperless", "authentication", "income", "token", "usb", "aadhaar", "cert", "compliance", "pan",
    "bank", "ca", "epfo", "identity", "online", "tds", "private", "legal", "professionals", "digitalid",
    "egov", "tender", "bid", "ebid", "nic", "cppp", "gem", "mstc", "bhel", "iocl", "bpcl", "ongc",
    "hpcl", "psu", "epc", "contract", "vendor", "bidder", "auction", "procurement", "eproc", "bidsubmission",
    "rfp", "rfq", "biddoc", "quotation", "proposal", "eoi", "gemtender", "nicportal", "egp",
    "etender", "tenderwizard", "ntpc", "beml", "railways", "iocltender", "msmebid", "tendersgov",
    "gemeproc", "l1", "l2", "onlinebidding", "cpportal", "seci", "irel", "powergrid",
    "tangedco", "personal", "signing", "digital signature", "class 3", "class3"
  ],
  "Class 3 Individual Combo": [
    "combo", "individual", "icegate", "tender", "bidding", "comprehensive", "all-in-one",
    "class 3", "class3", "meis", "seis", "aicte", "cbse"
  ],
  "Class 3 Organization Signing": [
    "organization", "signing", "startup", "railway", "tender", "nsws", "company", "business",
    "corporate", "class 3", "class3", "startup registration", "railway tender", "nsws portal"
  ],
  "Class 3 Organization Combo": [
    "organization", "company", "business", "corporate", "gem", "tender", "procurement",
    "class 3", "class3", "irctc", "ireps"
  ],
  "DGFT Organization": [
    "dgft", "import", "export", "trade", "international", "iec", "organization"
  ],
  "Foreign National": [
    "foreign", "international", "nri", "overseas", "non-resident", "passport"
  ]
};

function tokenizeQuery(query: string): string[] {
  return query.toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 1);
}

function calculateKeywordMatch(queryTokens: string[], keywords: string[]): number {
  let score = 0;
  const matchedKeywords: string[] = [];

  queryTokens.forEach(token => {
    keywords.forEach(keyword => {
      if (keyword.includes(token) || token.includes(keyword)) {
        score += 2;
        if (!matchedKeywords.includes(keyword)) {
          matchedKeywords.push(keyword);
        }
      }
    });
  });

  return score;
}

export function matchDSCType(query: string): DSCMatch[] {
  const queryTokens = tokenizeQuery(query);
  const matches: DSCMatch[] = [];

  products.forEach(product => {
    let score = 0;
    const reasons: string[] = [];

    // Get the appropriate keyword set based on product type
    const productKey = `${product.title} ${product.subtitle.split(' ')[0]}`;
    const keywords = dscTypeKeywords[productKey as keyof typeof dscTypeKeywords] || [];

    // Calculate keyword matches
    const keywordScore = calculateKeywordMatch(queryTokens, keywords);
    if (keywordScore > 0) {
      score += keywordScore;
      reasons.push(`Matches product type keywords`);
    }

    // Check for portal matches
    Object.entries(portalKeywords).forEach(([category, portalKeys]) => {
      const portalScore = calculateKeywordMatch(queryTokens, portalKeys);
      if (portalScore > 0) {
        score += portalScore;
        reasons.push(`Matches ${category} portals`);
      }
    });

    // Check features
    product.features.forEach(feature => {
      if (feature.included) {
        const featureTokens = tokenizeQuery(feature.name);
        const featureScore = calculateKeywordMatch(queryTokens, featureTokens);
        if (featureScore > 0) {
          score += featureScore;
          reasons.push(`Supports: ${feature.name}`);
        }
      }
    });

    if (score > 0) {
      matches.push({ product, score, reasons });
    }
  });

  return matches.sort((a, b) => b.score - a.score);
}

export function calculateCustomPrice(basePrice: string, years: number = 2, includeToken: boolean = false): number {
  const price = parseInt(basePrice.replace(/[^\d]/g, ''));
  const yearMultiplier = years === 3 ? 1.45 : 1;
  const tokenPrice = includeToken ? 410 : 0;
  
  return Math.round((price * yearMultiplier) + tokenPrice);
}