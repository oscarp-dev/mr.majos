import { GameBoyPhotoScreen } from "./game-boy-photo-screen";
import { cn } from "cn";

type GameBoyDeviceProps = {
  className?: string;
  photos?: string[];
};

export function GameBoyDevice({ className, photos }: GameBoyDeviceProps) {
  return (
    <div className={cn("relative aspect-square", className)}>
      <GameBoyPhotoScreen photos={photos} />
      <img
        src="/images/1.svg"
        alt="Game Boy Color de Mr. Majo's mostrando fotos del local"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />
    </div>
  );
}
