// SkillBar Component
const SkillBar = ({ skill, level }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <span className="text-white text-[24px]">{skill}</span>
      <div className="flex gap-2">
        {[...Array(7)].map((_, index) => (
          <span
            key={index}
            className={`w-5 h-5 rounded-full transition-all duration-300 ${
              index < level ? 'bg-[#00FF5E]' : 'bg-green-800'
            }`}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default SkillBar
