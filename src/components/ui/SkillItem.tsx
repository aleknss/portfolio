export default function SkillItem({name, icon}: {name: string, icon: string}) {
    
  return (
    <div
      className="flex items-center gap-4 hover:bg-lime-200 dark:hover:bg-neutral-700 transition rounded p-2 cursor-pointer"
    >
      <img src={icon} alt={name} className="w-12" />
      <p>{name}</p>
    </div>
  );
};