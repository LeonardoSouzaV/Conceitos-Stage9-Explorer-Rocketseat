import { Container, Profile, Logout } from "./styles"
import { RiShutDownLine } from "react-icons/ri"
export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/LeonardoSouzaV.png"
          alt="Imagem do usuario "
        />
        <div>
          <span>Bem Vindo!</span>
          <strong>Leonardo Souza</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
