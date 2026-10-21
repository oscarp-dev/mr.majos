import { LegalDocument, legalMetadata } from "@/components/legal/legal-document";

export const generateMetadata = () => legalMetadata("aviso-legal");

export default function Page() {
  return <LegalDocument id="aviso-legal" />;
}
