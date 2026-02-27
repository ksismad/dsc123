export interface Feature {
  name: string;
  included: boolean;
}

export interface Product {
  title: string;
  subtitle: string;
  price: string;
  features: Feature[];
  isDGFT?: boolean;
}

export const dscProducts = {
  "Class 3 Individual Signing DSC": 990,
  "Class 3 Individual Combo DSC": 1890,
  "Class 3 Organization Combo DSC": 1890,
  "Class 3 Organization Signing DSC": 990,
  "DGFT Organization Signing DSC": 1890,
  "Foreign National Digital Signature Certificate": 4190
};
console.log("dscProducts:", dscProducts);

export const products: Product[] = [
  {
    title: "Class 3",
    subtitle: "Individual Signing DSC",
    price: `₹${dscProducts["Class 3 Individual Signing DSC"]}/-`,
    features: [
      { name: "GST, Income Tax, EPF, Trademark Registration", included: true },
      { name: "MCA21, ROC, Director KYC, Invoice Signing", included: true },
      { name: "IEC Code Registration, Traces", included: true },
      { name: "ICEGATE", included: true },
      { name: "CERSAI, Bhulekh and Scholarship", included: true },
      { name: "Limited Gram Panchayat Websites", included: true },
      { name: "Limited eTender, eProcure Websites", included: true }
    ]
  },
  {
    title: "Class 3",
    subtitle: "Individual Combo DSC",
    price: `₹${dscProducts["Class 3 Individual Combo DSC"]}/-`,
    features: [
      { name: "GST, Income Tax, EPF, Trademark Registration", included: true },
      { name: "MCA21, ROC, Director KYC, Invoice Signing", included: true },
      { name: "IEC Code Registration, Traces", included: true },
      { name: "ICEGATE", included: true },
      { name: "MEIS, SEIS Website", included: true },
      { name: "CERSAI, Bhulekh and Scholarship", included: true },
      { name: "AICTE, CBSE Institutes", included: true },
      { name: "Limited Gram Panchayat Websites", included: true },
      { name: "Limited eTender, eProcure Websites", included: true }
    ]
  },
  {
    title: "Class 3",
    subtitle: "Organization Signing DSC",
    price: `₹${dscProducts["Class 3 Organization Signing DSC"]}/-`,
    features: [
      { name: "Startup Registration", included: true },
      { name: "Railway Tender", included: true },
      { name: "NSWS Portal", included: true },
      { name: "GST, Income Tax, EPF", included: true },
      { name: "MCA21, ROC, Director KYC", included: true },
      { name: "Digital Document Signing", included: true },
      { name: "Organization Authentication", included: true }
    ]
  },
  {
    title: "Class 3",
    subtitle: "Organization Combo DSC",
    price: `₹${dscProducts["Class 3 Organization Combo DSC"]}/-`,
    features: [
      { name: "GST, Income Tax, EPF, Trademark Registration", included: true },
      { name: "MCA21, ROC, Director KYC, Invoice Signing", included: true },
      { name: "IEC Code Registration, Traces", included: true },
      { name: "ICEGATE", included: true },
      { name: "MEIS, SEIS Website", included: true },
      { name: "CERSAI, Bhulekh and Scholarship", included: true },
      { name: "IRCTC and IREPS", included: true },
      { name: "AICTE, CBSE Institutes", included: true },
      { name: "All Gram Panchayat Websites", included: true },
      { name: "Start Up India, NSWS", included: true },
      { name: "All India eTender, eProcure Websites", included: true }
    ]
  },
  {
    title: "DGFT",
    subtitle: "Organization Signing DSC",
    price: `₹${dscProducts["DGFT Organization Signing DSC"]}/-`,
    features: [
      { name: "ICEGATE", included: true },
      { name: "DGFT - Foreign Trade Country of Origin-Code", included: true }
    ],
    isDGFT: true
  },
  {
    title: "Foreign National",
    subtitle: "Digital Signature Certificate",
    price: `₹${dscProducts["Foreign National Digital Signature Certificate"]}/-`,
    features: [
      { name: "Valid for Foreign Nationals Only", included: true },
      { name: "MCA21, ROC, Director KYC", included: true },
      { name: "Company Registration in India", included: true },
      { name: "Digital Document Signing", included: true },
      { name: "IEC Code Registration", included: true },
      { name: "DGFT Services", included: true },
      { name: "Import/Export Documentation", included: true },
      { name: "Valid Government ID Required", included: true },
      { name: "Passport Verification", included: true },
      { name: "Address Proof Required", included: true },
      { name: "International Business Compliance", included: true },
      { name: "Express Processing Available", included: true }
    ]
  }
];