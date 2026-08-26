const executives = [
  {
    name: "직화장인",
    position: "신당본점, 마곡점, 용산점 외",
    imageUrl: "jickhwajangin.webp",
  },
  {
    name: "쿠우쿠우",
    position: "구로점, 안산점, 부평점 외",
    imageUrl: "coowoocoowoo.webp",
  },
  {
    name: "금돼지식당",
    position: "대만",
    imageUrl: "goldpig.webp",
  },
  {
    name: "양인환대",
    position: "신용산, 극진, 북창, 마곡 외",
    imageUrl: "yanginhwandae.webp",
  },
  {
    name: "화설",
    position: "선릉직영점",
    imageUrl: "hwaseol.webp",
  },
  {
    name: "초원",
    position: "도산대로점",
    imageUrl: "chowon.webp",
  },
  {
    name: "신사약방",
    position: "선릉본점",
    imageUrl: "shinsayakbang.webp",
  },
  {
    name: "화로작",
    position: "마곡",
    imageUrl: "hwarojak.webp",
  },
  {
    name: "굽돌집",
    position: "잠실방이점, 시청점 외",
    imageUrl: "gupdolzip.webp",
  },
  {
    name: "수암골쪽갈비마을",
    position: "금천점, 계양점, 동탄점 외",
    imageUrl: "suamgol.webp",
  },
  {
    name: "화석구이",
    position: "용산",
    imageUrl: "hwaseokgui.webp",
  },
  {
    name: "고단",
    position: "당산본점",
    imageUrl: "godan.webp",
  },
  {
    name: "갈비명가궁",
    position: "세류본점",
    imageUrl: "gung.webp",
  },
  {
    name: "육화미",
    position: "평택점, 두정점 외",
    imageUrl: "yookhwame.webp",
  },
  {
    name: "불로부터",
    position: "목동본점",
    imageUrl: "bulrobuteo.webp",
  },
  {
    name: "1981한강집",
    position: "용산",
    imageUrl: "hangangzip.webp",
  },
  {
    name: "반포로스",
    position: "반포",
    imageUrl: "banporos.webp",
  },
  {
    name: "오몬자",
    position: "강남",
    imageUrl: "omonja.webp",
  },
  {
    name: "다람",
    position: "강동본점",
    imageUrl: "daram.webp",
  },
  {
    name: "대한팔도",
    position: "나주",
    imageUrl: "daehanpaldo.webp",
  },
  {
    name: "강금옥쭈꾸미",
    position: "동암역점",
    imageUrl: "ganggeumok.webp",
  },
  {
    name: "누룩목블랙",
    position: "서초",
    imageUrl: "nurukmok.webp",
  },
  {
    name: "숯뚜껑",
    position: "본점, 수원삼성점",
    imageUrl: "sutttukkeong.webp",
  },
  {
    name: "대들보숯불가든",
    position: "의왕",
    imageUrl: "daedeulbo.webp",
  },
  {
    name: "남악상회",
    position: "용산",
    imageUrl: "namaksangheoi.webp",
  },
  {
    name: "니쿠나인",
    position: "을지로",
    imageUrl: "niqunine.webp",
  },
  {
    name: "고깃리88",
    position: "다산직영점",
    imageUrl: "gogisri88.webp",
  },
  {
    name: "동천외식센터",
    position: "양산",
    imageUrl: "dongcheon.webp",
  },
  {
    name: "돝돝",
    position: "용산",
    imageUrl: "dotdot.webp",
  },
  {
    name: "고기록",
    position: "거창",
    imageUrl: "gogirok.webp",
  },
  {
    name: "기운",
    position: "강남역 본점",
    imageUrl: "giun.webp",
  },
  {
    name: "마장동김씨",
    position: "목동점, 봉명점, 산본점 외",
    imageUrl: "majangdongkims.webp",
  },
  {
    name: "쌩굴쌩굴",
    position: "본점",
    imageUrl: "ssanggul.webp",
  },

  {
    name: "갯벌의조개",
    position: "여의도점, 성수점, 정자점 외",
    imageUrl: "tidalFlatClams.webp",
  },
  {
    name: "묵힘",
    position: "방이동",
    imageUrl: "mukhim.webp",
  },
  {
    name: "녹지",
    position: "마곡본점, 마포점, 종로점 외",
    imageUrl: "nokji.webp",
  },
  {
    name: "우월소곱창",
    position: "마포점, 남영점",
    imageUrl: "wooweol.webp",
  },

  {
    name: "100년장어촌",
    position: "마곡본가",
    imageUrl: "100yearsjanguh.webp",
  },
  {
    name: "안국약방",
    position: "종로",
    imageUrl: "angukyakbang.webp",
  },
  {
    name: "양화돌판삼겹",
    position: "오목교",
    imageUrl: "yanghwadolpan.webp",
  },
  {
    name: "궤네깃도중문흑돼지",
    position: "제주본점",
    imageUrl: "gwenegitto.webp",
  },
  {
    name: "삼팔집",
    position: "대전",
    imageUrl: "sampaljip.webp",
  },
  {
    name: "갱도연탄구이",
    position: "영통본점",
    imageUrl: "gaengdo.webp",
  },
  {
    name: "창심관",
    position: "동탄",
    imageUrl: "changshimgwan.webp",
  },
  {
    name: "시절",
    position: "광화문",
    imageUrl: "sijeol.webp",
  },
  {
    name: "강세장어",
    position: "여의도",
    imageUrl: "gangsejangeo.webp",
  },
  {
    name: "리정원",
    position: "목동점, 공덕점 외",
    imageUrl: "leejeongwon.webp",
  },
  {
    name: "도산정육",
    position: "청담본점, 블랙",
    imageUrl: "dosanjeongwook.webp",
  },
  {
    name: "숯골",
    position: "성수",
    imageUrl: "suchgol.webp",
  },
  {
    name: "신중산간",
    position: "제주",
    imageUrl: "sinjungsangan.webp",
  },
  {
    name: "임금돼지",
    position: "소반 명일",
    imageUrl: "kingpig.webp",
  },
  {
    name: "야끼니꾸 규화",
    position: "경기 하남시",
    imageUrl: "guhwa.webp",
  },
  {
    name: "태백숯불닭갈비",
    position: "태백",
    imageUrl: "taebackmulgalbi.webp",
  },
  {
    name: "화연산장",
    position: "압구정로데오",
    imageUrl: "hwayeonsanjang.webp",
  },
  {
    name: "신안가옥",
    position: "본점",
    imageUrl: "shinhangaok.webp",
  },
  {
    name: "바이킹스워프",
    position: "롯데월드몰점",
    imageUrl: "bikings.webp",
  },
  {
    name: "그릴레",
    position: "잠실점",
    imageUrl: "grillle.webp",
  },
  {
    name: "압구정고깃집",
    position: "본점, 더 프라이빗",
    imageUrl: "apgujeonggogitzip.webp",
  },
  {
    name: "반지하",
    position: "선릉점, 나성점 외",
    imageUrl: "banjiha.webp",
  },
  {
    name: "백산화로",
    position: "본점, 충주점",
    imageUrl: "backsanhwaro.webp",
  },
  {
    name: "홍교집",
    position: "잠실점",
    imageUrl: "honggyozip.webp",
  },
  {
    name: "치커리생구이",
    position: "답십리",
    imageUrl: "chicurry.webp",
  },
  {
    name: "서울현방",
    position: "과천점",
    imageUrl: "seoulhyeonbang.webp",
  },
  {
    name: "육지",
    position: "홍대",
    imageUrl: "yookji.webp",
  },
  {
    name: "산솔",
    position: "신논현점",
    imageUrl: "sansol.webp",
  },
  {
    name: "고산장",
    position: "창원봉곡점",
    imageUrl: "gosanjang.webp",
  },
  {
    name: "고샅집",
    position: "인천 송도",
    imageUrl: "gosatzip.webp",
  },
  {
    name: "연탄도야지",
    position: "문래",
    imageUrl: "yeontandoyaji.webp",
  },
  {
    name: "뚝심장어",
    position: "송도본점",
    imageUrl: "ttukshimjanguh.webp",
  },
  {
    name: "달동네 비비큐",
    position: "캐나다 토론토",
    imageUrl: "daldongnae.webp",
  },
  {
    name: "우초원정육식당",
    position: "신도림점",
    imageUrl: "woochowon.webp",
  },
  {
    name: "중앙부속구이",
    position: "동대문",
    imageUrl: "jungangbusokgui.webp",
  },
  {
    name: "미옥 숯불구이",
    position: "성수",
    imageUrl: "miok.webp",
  },
  {
    name: "야끼니꾸 우",
    position: "공덕직영점",
    imageUrl: "yakkinikkuwoo.webp",
  },
  {
    name: "1960숯멍",
    position: "송도2호점",
    imageUrl: "sutmug.webp",
  },
  {
    name: "마장동정육식당",
    position: "삼척",
    imageUrl: "samcheokmajangdong.webp",
  },
  {
    name: "에리스램",
    position: "익산",
    imageUrl: "erisram.webp",
  },
  {
    name: "화우원",
    position: "일본 오사카",
    imageUrl: "hawwoowon.webp",
  },
  {
    name: "선운산송도두툼장어",
    position: "본점",
    imageUrl: "dutumjanguh.webp",
  },
  {
    name: "함돈",
    position: "배곧직영점, 정왕본점",
    imageUrl: "hamdon.webp",
  },
  {
    name: "은비갈비",
    position: "인천서창점",
    imageUrl: "eunbigalbi.webp",
  },
  {
    name: "만인양화",
    position: "역삼본점",
    imageUrl: "maninyanghwa.webp",
  },
  {
    name: "도야집",
    position: "을지로점",
    imageUrl: "doyazip.webp",
  },
  {
    name: "청와대소금구이",
    position: "선릉",
    imageUrl: "cheongwadae.webp",
  },
  {
    name: "풍천가",
    position: "마곡직영점",
    imageUrl: "pungcheonga.webp",
  },
  {
    name: "육삼식당",
    position: "풍동본점, 시흥사거리점",
    imageUrl: "yooksamsickdang.webp",
  },
  {
    name: "전국일김치삼겹",
    position: "마포구 망원동",
    imageUrl: "jungookil.webp",
  },
  {
    name: "모닭",
    position: "가평설악본점",
    imageUrl: "modack.webp",
  },
  {
    name: "야키니쿠제주",
    position: "제주",
    imageUrl: "yakinikujeku.webp",
  },
  {
    name: "육일점 다이닝",
    position: "신사점",
    imageUrl: "yookiljeom.webp",
  },
  {
    name: "광희문",
    position: "인덕원본점",
    imageUrl: "gwanghuimun.webp",
  },
  {
    name: "고기부엌",
    position: "협재본점",
    imageUrl: "gokibueok.webp",
  },
  {
    name: "풍천장어",
    position: "대만",
    imageUrl: "pungcheonjanguhdaeman.webp",
  },
  {
    name: "만포갈비",
    position: "의정부본점",
    imageUrl: "manpogalbi.webp",
  },
  {
    name: "육갤러리",
    position: "인천루원시티점",
    imageUrl: "yookgallary.webp",
  },
  {
    name: "섬고짚",
    position: "송도점",
    imageUrl: "seomgojip.webp",
  },
  {
    name: "태백우장수",
    position: "당산본점",
    imageUrl: "taebaekwoojangsu.webp",
  },
  {
    name: "청담 비비큐",
    position: "캐나다 토론토",
    imageUrl: "cheongdambbq.webp",
  },
  {
    name: "장삼목",
    position: "서산 본점",
    imageUrl: "jangsammock.webp",
  },
  {
    name: "태백상회",
    position: "인계본점",
    imageUrl: "taebaeksanghoe.webp",
  },
  {
    name: "가경식당",
    position: "본점",
    imageUrl: "gagyeong.webp",
  },
  {
    name: "수뿌레닭갈비",
    position: "죽전점",
    imageUrl: "subbure.webp",
  },

  {
    name: "미사쭈꾸미대장",
    position: "하남미사본점",
    imageUrl: "misajjukkumi.webp",
  },
  {
    name: "마루",
    position: "당진수청점",
    imageUrl: "maru.webp",
  },
  {
    name: "텃밭",
    position: "가곡점",
    imageUrl: "teotbat.webp",
  },
  {
    name: "88연탄구이",
    position: "의정부점, 동두천점",
    imageUrl: "88yeontangui.webp",
  },
  {
    name: "고반가든",
    position: "물왕본점",
    imageUrl: "gobangarden.webp",
  },
  {
    name: "전주향",
    position: "마포점",
    imageUrl: "jeonjuhyang.webp",
  },
  {
    name: "청담장어마켓",
    position: "동탄점",
    imageUrl: "cheondamjanguhmarket.webp",
  },
  {
    name: "삼심육 고기집",
    position: "왕십리본점",
    imageUrl: "samsimyook.webp",
  },
  {
    name: "직화명가",
    position: "본점",
    imageUrl: "jickhwamyeongga.webp",
  },
  {
    name: "돌담흑돼지",
    position: "중문점",
    imageUrl: "doldam.webp",
  },
  {
    name: "돈아이가",
    position: "",
    imageUrl: "doniga.webp",
  },
  {
    name: "진정갈비",
    position: "",
    imageUrl: "jinjeonggalbi.webp",
  },
  {
    name: "신조개천국",
    position: "",
    imageUrl: "newshell.webp",
  },
  {
    name: "우미향가",
    position: "",
    imageUrl: "woomihyangka.webp",
  },
  {
    name: "백미우",
    position: "",
    imageUrl: "baekmiwoo.webp",
  },

  {
    name: "옐로우카고",
    position: "",
    imageUrl: "yellowcargo.webp",
  },
  {
    name: "숯불성화",
    position: "",
    imageUrl: "sutbulseonghwa.webp",
  },
  {
    name: "일념돼지",
    position: "",
    imageUrl: "illnyeompig.webp",
  },
  {
    name: "고깃집열",
    position: "",
    imageUrl: "gogitzipyeol.webp",
  },
  {
    name: "저림숙성그릴",
    position: "",
    imageUrl: "jeorimsukseong.webp",
  },
  {
    name: "창익집",
    position: "",
    imageUrl: "changikzip.webp",
  },
  {
    name: "돈우담",
    position: "",
    imageUrl: "kmeat.webp",
  },
  {
    name: "금정훠궈양꼬치",
    position: "",
    imageUrl: "geumjeong.webp",
  },
  {
    name: "화다인",
    position: "",
    imageUrl: "hawdain.webp",
  },
  {
    name: "고래아저씨",
    position: "",
    imageUrl: "goraeajeosee.webp",
  },
  {
    name: "제주영일 성산흑돼지",
    position: "",
    imageUrl: "jejuyeongil.webp",
  },
  {
    name: "놉실 울산송정",
    position: "",
    imageUrl: "nopsil.webp",
  },
  {
    name: "김발숙",
    position: "",
    imageUrl: "kimbalsuk.webp",
  },
];
export default executives;
