import { ChevronLeft, ChevronRight } from "lucide-react";

type HorizontalControlsProps = {
  label: string;
  atStart: boolean;
  atEnd: boolean;
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
};

export function HorizontalControls({
  label,
  atStart,
  atEnd,
  onPrevious,
  onNext,
  className = "",
}: HorizontalControlsProps) {
  return (
    <div className={`carousel-controls ${className}`.trim()}>
      <button type="button" aria-label={`${label} anteriores`} disabled={atStart} onClick={onPrevious}>
        <ChevronLeft />
      </button>
      <span>Deslize ou use as setas</span>
      <button type="button" aria-label={`Próximos ${label}`} disabled={atEnd} onClick={onNext}>
        <ChevronRight />
      </button>
    </div>
  );
}
