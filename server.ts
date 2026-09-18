import homeEn from "./index.html";
import experienceEn from "./experiencia.html";
import homeEs from "./es/index.html";
import experienceEs from "./es/experiencia.html";

const redirect = (target: string) => (request: Request) =>
  new Response(null, {
    status: 308,
    headers: { Location: new URL(target, request.url).toString() },
  });

Bun.serve({
  development: true,
  routes: {
    "/": homeEn,
    "/index.html": redirect("/"),
    "/experiencia": experienceEn,
    "/experiencia.html": redirect("/experiencia"),
    "/es": redirect("/es/"),
    "/es/": homeEs,
    "/es/index.html": redirect("/es/"),
    "/es/experiencia": experienceEs,
    "/es/experiencia.html": redirect("/es/experiencia"),
    "/styles.css": Bun.file("./styles.css"),
    "/favicon.svg": Bun.file("./favicon.svg"),
    "/perfil.jpg": Bun.file("./perfil.jpg"),
    "/es/perfil.jpg": Bun.file("./es/perfil.jpg"),
    "/my_resume_marani_matias.pdf": Bun.file("./my_resume_marani_matias.pdf"),
  },
  fetch() {
    return new Response("Not Found", { status: 404 });
  },
});

console.log("Portfolio running at http://localhost:3000");
