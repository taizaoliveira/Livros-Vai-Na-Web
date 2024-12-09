import logoFacebook from '../../assets/logoFacebook.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'
import s from './footer.module.scss'

export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href="https://web.facebook.com/?locale=pt_BR&_rdc=1&_rdr"><img src={logoFacebook} alt="flogoFacebook" /></a>
                    <a href="https://x.com/?lang=pt-br"><img src={logoTwitter} alt="logoTwitter" /></a>
                    <a href="https://www.youtube.com/"><img src={logoYoutube} alt="logoYoutube" /></a>
                    <a href="https://www.linkedin.com/in/taizapaula/"><img src={logoLinkedin} alt="logoLinkedin" /></a>
                    <a href="https://www.instagram.com/taiza.zip/"><img src={logoInstagram} alt="logoInstagram" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}
