import Contato from "./componentes/Contato/Contato";
import Projetos from "./componentes/Projetos/Projetos";
import SobreMim from "./componentes/Sobre Mim/SobreMim";


export default function Home() {
  return (
    <>
      <SobreMim />

      <Projetos />

      <Contato />
    </>
  );
}
