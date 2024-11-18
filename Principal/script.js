document.addEventListener("DOMContentLoaded", () => {
    const langs = document.querySelector(".langs");
    const links = document.querySelectorAll(".langs a");
    const desc = document.querySelector("#descripcion-text"); 

    const data = {
        espanol: {
            descripcion: "ENHYPEN es la primera boyband creada por BELIFT LAB, formada por siete miembros multinacionales JUNGWON, HEESEUNG, JAY, JAKE, SUNGHOON, SUNOO y NI-KI. Son los finalistas del programa de competencia musical global ‘I-LAND’, que terminó de transmitirse en septiembre de 2020. Los miembros ya han mostrado infinitas posibilidades y crecimiento no solo como individuos, sino también como equipo. Similar al 'guión (-)' que conecta una palabra con otra, ENHYPEN significa que siete niños diferentes se conectan para descubrirse unos a otros y crecer juntos. También indica su ambicioso plan para conectar a las personas y al mundo a través de su música."
        },
        ingles: {
            descripcion: "ENHYPEN is the first boyband created by BELIFT LAB, consisting of seven multinational members JUNGWON, HEESEUNG, JAY, JAKE, SUNGHOON, SUNOO and NI-KI. They are the finalists of global music competition show ‘I-LAND,’ which finished airing in September 2020. The members have already shown infinite possibilities and growth not only as individuals, but also as a team. Similar to the ‘hyphen(-)’ that connects one word to another, ENHYPEN means that seven different boys connect to discover one another and grow together. It also indicates their ambitious plan to connect people and the world through their music."
        },
        coreano: {
            descripcion: "ENHYPEN은 빌리프랩 소속으로 정원, 희승, 제이, 제이크, 성훈, 선우, 니키 등 다국적 멤버 7인으로 구성된 보이 그룹이다. 이들은 2020년 6월부터 약 3개월간 방영된 Mnet 글로벌 아이돌 프로젝트 ‘I-LAND’의 최종 생존 멤버들로, 무한한 가능성을 바탕으로 수많은 미션을 거치며 개인과 팀 모두 성장하는 모습을 보여 주었다. 팀명 ‘ENHYPEN’은 붙임 기호 ‘하이픈’이 뜻하는 것처럼, 서로 다른 환경에서 다른 삶을 살아 온 7명의 소년들이 ‘연결’되어 서로를 ‘발견’하고 함께 ‘성장’한다는 의미다. 또한, 음악을 통해 사람과 사람, 세계와 세계를 잇겠다는 포부도 담고 있다."
        },
        japones: {
            descripcion: "ENHYPENは、BELIFT LABに所属する JUNGWON・HEESEUNG・JAY・JAKE・SUNGHOON・SUNOO・NI-KIの多国籍メンバー7人で構成されたボーイズグループだ。彼らは、2020年6月から約3か月間放映された、Mnetのグローバル・アイドル・プロジェクト『I-LAND』の最終生存メンバーであり、無限な可能性をもとに、数多くのミッションを経て、個人、チームともに成長する姿を見せてくれた。チーム名の「ENHYPEN」は、記号の「ハイフン」が意味するように、お互いに異なる環境でちがう人生を生きてきた7人の少年が「つながり」、お互いを「発見」し、ともに「成長」するという意味を持つ。また、音楽を通じて人と人、世界と世界をつなぐという抱負も込められている。"
        },
    };

    // Event listener para los enlaces de idiomas
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            
            langs.querySelector(".active").classList.remove("active");
            

            link.classList.add("active");


            const idioma = link.getAttribute("idioma");


            if (data[idioma]) {
                desc.textContent = data[idioma].descripcion; 
            } else {
                desc.textContent = "Idioma no soportado.";
            }
        });
    });
});
