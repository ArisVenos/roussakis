import { gases } from "./gasesData";
import { GasCard } from "./GasCard";

export function Gases() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-30 px-20 pr-30">
      {gases.map((gas, index) => (
        <div
          key={gas.name}
          style={{ animationDelay: `${index * 150}ms` }}
          className="animate-fade-in"
        >
          <GasCard name={gas.name} />
        </div>
      ))}
    </div>
  );
}
