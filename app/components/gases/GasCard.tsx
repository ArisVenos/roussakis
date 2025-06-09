interface GasCardProps {
  name: string;
}

export function GasCard({ name }: GasCardProps) {
  return (
    <div className="cursor-pointer border rounded-lg overflow-hidden w-70 hover:shadow-xl transition-transform hover:scale-105 bg-white">
      <img
        src="/cylinder.jpg"
        alt={name}
        className="w-full h-30 object-cover"
      />
      <div className="bg-red-600 text-white text-center py-2 h-15 font-bold">
        {name}
      </div>
    </div>
  );
}
