import { LegalDocument, legalMetadata } from "@/components/legal/legal-document";

export const generateMetadata = () => legalMetadata("cookies");

export default function Page() {
  return <LegalDocument id="cookies" />;
}
