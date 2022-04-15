import React from "react";

import PatikaLogo from "../constants/PatikaLogo";
import Rectangles from "../constants/Rectangles";

function LeftPanel() {
  return (
    <div id="leftPanel">
      <div id="leftInnerPanel" className="flex column full-h">
        <PatikaLogo />
        <div id="leftInnerTitle" className="font">
          YAZILIM PATİKALARI
        </div>
        <div id="leftInnerBody" className="font">
          Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
          eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere
          sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye
          hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8
          haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde
          başarılı olan öğrenciler sponsor şirkette ya da sektörde başka
          şirketlere işe yerleşirler.
        </div>
        <Rectangles />
      </div>
    </div>
  );
}

export default LeftPanel;
