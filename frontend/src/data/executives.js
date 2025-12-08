const executives = [
  {
    name: "직화장인",
    position: "신당본점, 마곡점, 용산점 외",
    imageUrl: "jickhwajangin.jpg",
  },
  {
    name: "쿠우쿠우",
    position: "구로점, 안산점, 부평점 외",
    imageUrl: "coowoocoowoo.jpg",
  },
  {
    name: "금돼지식당",
    position: "대만",
    imageUrl: "goldpig.jpg",
  },
  {
    name: "양인환대",
    position: "신용산, 극진, 북창, 마곡 외",
    imageUrl: "yanginhwandae.jpg",
  },
  {
    name: "화설",
    position: "선릉직영점",
    imageUrl: "hwaseol.jpg",
  },
  {
    name: "초원",
    position: "도산대로점",
    imageUrl: "chowon.jpg",
  },
  {
    name: "신사약방",
    position: "선릉본점",
    imageUrl: "shinsayakbang.jpg",
  },
  {
    name: "마장동김씨",
    position: "목동점, 봉명점, 산본점 외",
    imageUrl: "majangdongkims.jpg",
  },
  {
    name: "굽돌집",
    position: "잠실방이점, 시청점 외",
    imageUrl: "gupdolzip.jpg",
  },
  {
    name: "수암골쪽갈비마을",
    position: "금천점, 계양점, 동탄점 외",
    imageUrl: "suamgol.jpg",
  },
  {
    name: "육화미",
    position: "평택점, 두정점 외",
    imageUrl: "yookhwame.jpg",
  },
  {
    name: "고단",
    position: "당산본점",
    imageUrl: "godan.jpg",
  },
  {
    name: "쌩굴쌩굴",
    position: "본점",
    imageUrl: "ssanggul.jpg",
  },
  {
    name: "불로부터",
    position: "목동본점",
    imageUrl: "bulrobuteo.jpg",
  },
  {
    name: "갯벌의조개",
    position: "여의도점, 성수점, 정자점 외",
    imageUrl: "tidalFlatClams.jpg",
  },
  {
    name: "녹지",
    position: "마곡본점, 마포점, 종로점 외",
    imageUrl: "nokji.jpg",
  },
  {
    name: "우월소곱창",
    position: "마포점, 남영점",
    imageUrl: "wooweol.jpg",
  },
  {
    name: "숯뚜껑",
    position: "본점, 수원삼성점",
    imageUrl: "sutttukkeong.jpg",
  },
  {
    name: "100년장어촌",
    position: "마곡본가",
    imageUrl: "100yearsjanguh.jpg",
  },
  {
    name: "리정원",
    position: "목동점, 공덕점 외",
    imageUrl: "leejeongwon.jpg",
  },
  {
    name: "도산정육",
    position: "청담본점, 블랙",
    imageUrl: "dosanjeongwook.jpg",
  },
    {
    name: "숯골",
    position: "성수",
    imageUrl: "suchgol.jpg",
  },
  {
    name: "신중산간",
    position: "제주",
    imageUrl: "sinjungsangan.jpg",
  },
  {
    name: "임금돼지",
    position: "소반 명일",
    imageUrl: "kingpig.jpg",
  },
  {
    name: "야끼니꾸 규화",
    position: "경기 하남시",
    imageUrl: "guhwa.jpg",
  },
  {
    name: "화연산장",
    position: "압구정로데오",
    imageUrl: "hwayeonsanjang.jpg",
  },
  {
    name: "신안가옥",
    position: "본점",
    imageUrl: "shinhangaok.jpg",
  },
  {
    name: "바이킹스워프",
    position: "롯데월드몰점",
    imageUrl: "bikings.jpg",
  },
    {
    name: "그릴레",
    position: "잠실점",
    imageUrl: "grillle.jpg",
  },
  {
    name: "압구정고깃집",
    position: "본점, 더 프라이빗",
    imageUrl: "apgujeonggogitzip.jpg",
  },
  {
    name: "반지하",
    position: "선릉점, 나성점 외",
    imageUrl: "banjiha.jpg",
  },
  {
    name: "백산화로",
    position: "본점, 충주점",
    imageUrl: "backsanhwaro.jpg",
  },
  {
    name: "홍교집",
    position: "잠실점",
    imageUrl: "honggyozip.jpg",
  },
  {
    name: "치커리생구이",
    position: "답십리",
    imageUrl: "chicurry.jpg",
  },
    {
    name: "서울현방",
    position: "과천점",
    imageUrl: "seoulhyeonbang.jpg",
  },
  {
    name: "육지",
    position: "홍대",
    imageUrl: "yookji.jpg",
  },
  {
    name: "산솔",
    position: "신논현점",
    imageUrl: "sansol.jpg",
  },
  {
    name: "고산장",
    position: "창원봉곡점",
    imageUrl: "gosanjang.jpg",
  },
  {
    name: "고샅집",
    position: "인천 송도",
    imageUrl: "gosatzip.jpg",
  },
  {
    name: "연탄도야지",
    position: "문래",
    imageUrl: "yeontandoyaji.jpg",
  },
  {
    name: "뚝심장어",
    position: "송도본점",
    imageUrl: "ttukshimjanguh.jpg",
  },
  {
    name: "달동네 비비큐",
    position: "캐나다 토론토",
    imageUrl: "daldongnae.jpg",
  },
  {
    name: "우초원정육식당",
    position: "신도림점",
    imageUrl: "woochowon.jpg",
  },
  {
    name: "중앙부속구이",
    position: "동대문",
    imageUrl: "jungangbusokgui.jpg",
  },
  {
    name: "미옥 숯불구이",
    position: "성수",
    imageUrl: "miok.jpg",
  },
  {
    name: "야끼니꾸 우",
    position: "공덕직영점",
    imageUrl: "yakkinikkuwoo.jpg",
  },
  {
    name: "1960숯멍",
    position: "송도2호점",
    imageUrl: "sutmug.jpg",
  },
  {
    name: "마장동정육식당",
    position: "삼척",
    imageUrl: "samcheokmajangdong.jpg",
  },
  {
    name: "에리스램",
    position: "익산",
    imageUrl: "erisram.jpg",
  },
  {
    name: "화우원",
    position: "일본 오사카",
    imageUrl: "hawwoowon.jpg",
  },
  {
    name: "선운산송도두툼장어",
    position: "본점",
    imageUrl: "dutumjanguh.jpg",
  },
  {
    name: "함돈",
    position: "배곧직영점, 정왕본점",
    imageUrl: "hamdon.jpg",
  },
    {
    name: "은비갈비",
    position: "인천서창점",
    imageUrl: "eunbigalbi.jpg",
  },
  {
    name: "만인양화",
    position: "역삼본점",
    imageUrl: "maninyanghwa.jpg",
  },
  {
    name: "도야집",
    position: "을지로점",
    imageUrl: "doyazip.jpg",
  },
  {
    name: "청와대소금구이",
    position: "선릉",
    imageUrl: "cheongwadae.jpg",
  },
  {
    name: "풍천가",
    position: "마곡직영점",
    imageUrl: "pungcheonga.jpg",
  },
  {
    name: "육삼식당",
    position: "풍동본점, 시흥사거리점",
    imageUrl: "yooksamsickdang.jpg",
  },
  {
    name: "전국일김치삼겹",
    position: "마포구 망원동",
    imageUrl: "jungookil.jpg",
  },
  {
    name: "모닭",
    position: "가평설악본점",
    imageUrl: "modack.jpg",
  },
  {
    name: "야키니쿠제주",
    position: "제주",
    imageUrl: "yakinikujeku.jpg",
  },
  {
    name: "육일점 다이닝",
    position: "신사점",
    imageUrl: "yookiljeom.jpg",
  },
  {
    name: "광희문",
    position: "인덕원본점",
    imageUrl: "gwanghuimun.jpg",
  },
  {
    name: "고기부엌",
    position: "협재본점",
    imageUrl: "gokibueok.jpg",
  },
  {
    name: "풍천장어",
    position: "대만",
    imageUrl: "pungcheonjanguhdaeman.jpg",
  },
  {
    name: "만포갈비",
    position: "의정부본점",
    imageUrl: "manpogalbi.jpg",
  },
  {
    name: "육갤러리",
    position: "인천루원시티점",
    imageUrl: "yookgallary.jpg",
  },
  {
    name: "섬고짚",
    position: "송도점",
    imageUrl: "seomgojip.jpg",
  },
  {
    name: "태백우장수",
    position: "당산본점",
    imageUrl: "taebaekwoojangsu.jpg",
  },
  {
    name: "청담 비비큐",
  position: "캐나다 토론토",
    imageUrl: "cheongdambbq.jpg",
  },
  {
    name: "장삼목",
    position: "서산 본점",
    imageUrl: "jangsammock.jpg",
  },
  {
    name: "태백상회",
    position: "인계본점",
    imageUrl: "taebaeksanghoe.jpg",
  },
  {
    name: "가경식당",
    position: "본점",
    imageUrl: "gagyeong.jpg",
  },
  {
    name: "수뿌레닭갈비",
    position: "죽전점",
    imageUrl: "subbure.jpg",
  },

  {
    name: "미사쭈꾸미대장",
    position: "하남미사본점",
    imageUrl: "misajjukkumi.jpg",
  },
  {
    name: "마루",
    position: "당진수청점",
    imageUrl: "maru.jpg",
  },
  {
    name: "텃밭",
    position: "가곡점",
    imageUrl: "teotbat.jpg",
  },
  {
    name: "88연탄구이",
    position: "의정부점, 동두천점",
    imageUrl: "88yeontangui.jpg",
  },
  {
    name: "고반가든",
    position: "물왕본점",
    imageUrl: "gobangarden.jpg",
  },
  {
    name: "전주향",
    position: "마포점",
    imageUrl: "jeonjuhyang.jpg",
  },
  {
    name: "청담장어마켓",
    position: "동탄점",
    imageUrl: "cheondamjanguhmarket.jpg",
  },
  {
    name: "삼심육 고기집",
    position: "왕십리본점",
    imageUrl: "samsimyook.jpg",
  },
  {
    name: "직화명가",
    position: "본점",
    imageUrl: "jickhwamyeongga.jpg",
  },
    {
    name: "돌담흑돼지",
    position: "중문점",
    imageUrl: "doldam.jpg",
  },
  {
    name: "돈아이가",
    position: "",
    imageUrl: "doniga.jpg",
  },
  {
    name: "진정갈비",
    position: "",
    imageUrl: "jinjeonggalbi.jpg",
  },
  {
    name: "신조개천국",
    position: "",
    imageUrl: "newshell.jpg",
  },
  {
    name: "우미향가",
    position: "",
    imageUrl: "woomihyangka.jpg",
  },
  {
    name: "백미우",
    position: "",
    imageUrl: "baekmiwoo.jpg",
  },

  {
    name: "옐로우카고",
    position: "",
    imageUrl: "yellowcargo.jpg",
  },
  {
    name: "숯불성화",
    position: "",
    imageUrl: "sutbulseonghwa.jpg",
  },
  {
    name: "일념돼지",
    position: "",
    imageUrl: "illnyeompig.jpg",
  },
  {
    name: "고깃집열",
    position: "",
    imageUrl: "gogitzipyeol.jpg",
  },
  {
    name: "저림숙성그릴",
    position: "",
    imageUrl: "jeorimsukseong.jpg",
  },
  {
    name: "창익집",
    position: "",
    imageUrl: "changikzip.jpg",
  },
  {
    name: "돈우담",
    position: "",
    imageUrl: "kmeat.jpg",
  },
  {
    name: "금정훠궈양꼬치",
    position: "",
    imageUrl: "geumjeong.jpg",
  },
  {
    name: "화다인",
    position: "",
    imageUrl: "hawdain.jpg",
  },
  {
    name: "고래아저씨",
    position: "",
    imageUrl: "goraeajeosee.jpg",
  },
  {
    name: "제주영일 성산흑돼지",
    position: "",
    imageUrl: "jejuyeongil.jpg",
  },
  {
    name: "놉실 울산송정",
    position: "",
    imageUrl: "nopsil.jpg",
  },
  {
    name: "김발숙",
    position: "",
    imageUrl: "kimbalsuk.jpg",
  },
];
export default executives;
