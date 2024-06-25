function Card({ image, title, description, location}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-64 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base py-3">{description}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
}

export default Card;