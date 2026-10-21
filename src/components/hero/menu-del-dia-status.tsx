"use client";

import { useEffect, useState } from "react";
import { MENU_DEL_DIA } from "@/lib/site-data";
import { useI18n } from "@/i18n/client";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// Día y hora en Alicante, sea cual sea la zona horaria del visitante.
function isServingNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const now = Number(get("hour")) * 60 + Number(get("minute"));
  return (
    (MENU_DEL_DIA.days as readonly number[]).includes(day) &&
    now >= toMinutes(MENU_DEL_DIA.from) &&
    now < toMinutes(MENU_DEL_DIA.to)
  );
}

// Píldora de la tarjeta de reserva: "AHORA" con punto en directo mientras se
// sirve; el resto del tiempo, los días en que hay menú.
export function MenuDelDiaStatus() {
  const { t } = useI18n();
  const [live, setLive] = useState(false);

  useEffect(() => {
    const tick = () => setLive(isServingNow());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-mr-black px-2 py-0.5 font-tag text-[9px] tracking-widest text-mr-yellow">
      {live && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full rounded-full bg-mr-red opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex size-1.5 rounded-full bg-mr-red" />
        </span>
      )}
      {live ? t.menuDelDia.live : t.menuDelDia.label}
    </span>
  );
}
