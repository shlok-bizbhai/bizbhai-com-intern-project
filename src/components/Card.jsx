function Card({ icon, title, description }) {
  return (
    <div className="flex-1 rounded-lg border border-gray-600 bg-slate-800 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)]  hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition cursor-pointer hover:scale-[1.02]">

      {icon}

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-300">
        {description}
      </p>

    </div>
  )
}

export default Card