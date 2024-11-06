import Image from "next/image";
import styles from "./page.module.css";
import Button, { SpecialButton } from "./components/Button/Button.js";
import Display from "./components/Display";
import {
  clearDisplay,
  redoDisplay,
  resolveContent,
} from "./events/displayContent";
//NÃO CONSEGUI CRIAR USANDO CRA, ENTÃO PASSEI LOGO PRO NEXT
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.pageTitle}>
        <h1>Calculator-Game</h1>
        <h2>
          <a
            href="https://www.youtube.com/watch?v=IayQ1m3acds"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reviewed
          </a>{" "}
          and aproved by Richard Watterson
        </h2>
      </div>
      <div className={styles.baseCalc}>
        <Display />
        <div className={styles.buttons}>
          <SpecialButton title="<-" specFunc={redoDisplay} />
          <SpecialButton title="CE" specFunc={clearDisplay} />
          <SpecialButton title="C" specFunc={clearDisplay} />
          <Button title="+|-" />
          <Button title="%" />
          <Button title="7" />
          <Button title="8" />
          <Button title="9" />
          <Button title="/" />
          <Button title="(" />
          <Button title="4" />
          <Button title="5" />
          <Button title="6" />
          <Button title="x" altValue="*" />
          <Button title=")" />
          <Button title="1" />
          <Button title="2" />
          <Button title="3" />
          <Button title="-" />
          <SpecialButton
            title="="
            specFunc={resolveContent}
            _height={"172px"}
          />
          <Button title="0" _width={"180px"} />
          <Button title="9" />
          <Button title="+" />
        </div>
      </div>
    </div>
  );
}
