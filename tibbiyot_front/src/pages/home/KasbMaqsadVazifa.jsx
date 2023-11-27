import React from "react";

function KasbMaqsadVazifa() {
  return (
    <div className="kasbMaqsadVazifa container">
      <h1 className="title">
        Kasbga yo’naltirilgan kurslarning maqsad va vazifalari.
      </h1>
      <p className="desc">
        Kasbga yo’naltirilgan курснинг асосий мақсади. Олий ўқув юртига киришни
        ҳоҳлаган ёшларни йилдан-йилга такомиллашиб бораѐтган тест тизими
        саволларига тўлиқ жавоб беришга тайѐрлаш ва уларда ўрта таълим тизимида
        тўлиқ шаклланишга улгурмаган билим усулларини такомиллаштириш, уларда
        яшириниб ѐтган ижодий қирраларни ривожлантириш ва сифатли билим бериш
        йўли билан тингловчиларни жисмоний, маънавий ва эстетик ривожланишига
        ҳисса қўшиш
      </p>
      {/* acardion */}

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              хуқуқ ва мажбуриятлар
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Kasbga yo’naltirilgan курснинг асосий мақсади. Олий ўқув юртига
              киришни ҳоҳлаган ёшларни йилдан-йилга такомиллашиб бораѐтган тест
              тизими саволларига тўлиқ жавоб беришга тайѐрлаш ва уларда ўрта
              таълим тизимида тўлиқ шаклланишга улгурмаган билим усулларини
              такомиллаштириш, уларда яшириниб ѐтган ижодий қирраларни
              ривожлантириш ва сифатли билим бериш йўли билан тингловчиларни
              жисмоний, маънавий ва эстетик ривожланишига ҳисса қўшиш
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Ўқув-тарбиявий жараённи ташкил этиш
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Kasbga yo’naltirilgan курснинг асосий мақсади. Олий ўқув юртига
              киришни ҳоҳлаган ёшларни йилдан-йилга такомиллашиб бораѐтган тест
              тизими саволларига тўлиқ жавоб беришга тайѐрлаш ва уларда ўрта
              таълим тизимида тўлиқ шаклланишга улгурмаган билим усулларини
              такомиллаштириш, уларда яшириниб ѐтган ижодий қирраларни
              ривожлантириш ва сифатли билим бериш йўли билан тингловчиларни
              жисмоний, маънавий ва эстетик ривожланишига ҳисса қўшиш
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Тайёрлов курсининг педагог ходимлари ва хизматчилари
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Kasbga yo’naltirilgan курснинг асосий мақсади. Олий ўқув юртига
              киришни ҳоҳлаган ёшларни йилдан-йилга такомиллашиб бораѐтган тест
              тизими саволларига тўлиқ жавоб беришга тайѐрлаш ва уларда ўрта
              таълим тизимида тўлиқ шаклланишга улгурмаган билим усулларини
              такомиллаштириш, уларда яшириниб ѐтган ижодий қирраларни
              ривожлантириш ва сифатли билим бериш йўли билан тингловчиларни
              жисмоний, маънавий ва эстетик ривожланишига ҳисса қўшиш
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Халқаро ҳамкорлик
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Kasbga yo’naltirilgan курснинг асосий мақсади. Олий ўқув юртига
              киришни ҳоҳлаган ёшларни йилдан-йилга такомиллашиб бораѐтган тест
              тизими саволларига тўлиқ жавоб беришга тайѐрлаш ва уларда ўрта
              таълим тизимида тўлиқ шаклланишга улгурмаган билим усулларини
              такомиллаштириш, уларда яшириниб ѐтган ижодий қирраларни
              ривожлантириш ва сифатли билим бериш йўли билан тингловчиларни
              жисмоний, маънавий ва эстетик ривожланишига ҳисса қўшиш
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Тайёрлов курсининг мулки ва воситалари
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Kasbga yo’naltirilgan курснинг асосий мақсади. Олий ўқув юртига
              киришни ҳоҳлаган ёшларни йилдан-йилга такомиллашиб бораѐтган тест
              тизими саволларига тўлиқ жавоб беришга тайѐрлаш ва уларда ўрта
              таълим тизимида тўлиқ шаклланишга улгурмаган билим усулларини
              такомиллаштириш, уларда яшириниб ѐтган ижодий қирраларни
              ривожлантириш ва сифатли билим бериш йўли билан тингловчиларни
              жисмоний, маънавий ва эстетик ривожланишига ҳисса қўшиш
            </div>
          </div>
        </div>
      </div>

      {/* ==================== */}
    </div>
  );
}

export default KasbMaqsadVazifa;
