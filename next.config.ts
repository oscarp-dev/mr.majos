import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let devices on the LAN (e.g. a phone hitting the "Network" URL) load dev
  // resources and HMR; Next blocks other hostnames than localhost by default.
  allowedDevOrigins: ["192.168.1.135"],
};

export default nextConfig;
