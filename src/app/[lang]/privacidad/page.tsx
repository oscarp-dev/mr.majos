import { LegalDocument, legalMetadata } from "@/components/legal/legal-document";

export const generateMetadata = () => legalMetadata("privacidad");

export default function Page() {
  return <LegalDocument id="privacidad" />;
}
