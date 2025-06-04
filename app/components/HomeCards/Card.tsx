interface CardProps {
  image: string;
  title: string;
  text: string;
}

export function Card({ image, title, text }: CardProps) {
  return (
    <div className="relative flex flex-col items-center dropshadow-lg">
      <div className="absolute">
        <img
          src={image}
          className="size-15 border p-1 rounded-lg bg-white shadow"
        />
      </div>

      <div className="mt-6 bg-red-500 text-center w-72 p-4 rounded-lg shadow-md">
        <h1 className="font-bold mt-10 mb-2">{title}</h1>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
