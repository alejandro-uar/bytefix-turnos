import styles from "./Home.module.css";
import svg from "../../assets/soporte.svg";

const Home = () => {
    return (
        <main className={styles.containerHome}>
            <div className={styles.containerSvg}>
                <img src={svg} alt="soporte" className={styles.image} />
            </div>
            <div className={styles.containerInfo}>
                <h1>ByteFix</h1>
                <p>
                    " Somos expertos en reparación y ensamblaje de PC, brindando soluciones eficientes y personalizadas para optimizar el rendimiento de tus equipos. <br />
                    Con años de experiencia, te ofrecemos un servicio confiable y de alta calidad, ya sea para resolver problemas técnicos, mejorar el hardware o construir la PC de tus sueños. " <br />
                </p>
            </div>
        </main>
    );
};

export default Home;
