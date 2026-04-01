const data = {
  name: "Tonela: Plataforma Web de Cafetería",
  link: "https://tonela.vercel.app/",
  logo: "tonela",
  description:
    "Página web prototipo ambientada en una cafetería. Construido un acceso al cliente con apartados como Home, Menú... Y un panel de administración que controle la información de la cafetería. Actualmente en desarrollo.",
  skills: ["Next.js", "Better Auth", "Prisma", "Tailwind CSS"],
};

function Tonela() {
  return (
    <div
      className={`border border-primary hover:border-accent card p-4 hover:shadow-xl shadow-primary/20 dark:shadow-primary/5 rounded `}
    ></div>
  );
}

export default Tonela;
