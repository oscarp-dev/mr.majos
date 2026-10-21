import { GameBoyPhotoScreen, type GameBoyPhoto } from "./game-boy-photo-screen";
import { cn } from "cn";
import { getI18n } from "@/i18n/server";

type GameBoyDeviceProps = {
  className?: string;
  photos?: GameBoyPhoto[];
};

export async function GameBoyDevice({ className, photos }: GameBoyDeviceProps) {
  const { t } = await getI18n();

  return (
    <div className={cn("relative aspect-square", className)}>
      <GameBoyPhotoScreen photos={photos} />
      <img
        src="/images/1.svg"
        alt={t.hero.gameBoyAlt}
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />
    </div>
  );
}
