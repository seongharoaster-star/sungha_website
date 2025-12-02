import React from "react";
import product_table from "../../assets/product/product_table.png";
import product_cart from "../../assets/product/product_cart.png";
import product_grill from "../../assets/product/product_grill.png";
import product_mesh from "../../assets/product/product_mesh.png";
import product_move from "../../assets/product/product_move.png";
import product_roaster from "../../assets/product/product_roaster.png";
import product_steamer from "../../assets/product/product_steamer.png";
import product_storage from "../../assets/product/product_storage.png";
import product_yeontan from "../../assets/product/product_yeontan.png";
import product_liftcover from "../../assets/product/product_liftcover.png";



const STEPS = [
  { step: 1, title: "상담 접수", desc: "방문, 전화 또는 카카오톡을 통해 상담을 진행합니다." },
  { step: 2, title: "견적서 전송", desc: "수집된 정보를 바탕으로 카카오톡 또는 이메일로 견적서를 전달드립니다." },
  { step: 3, title: "계약금 입금", desc: "계약금(총 금액의 50%)을 입금해 주시면 제작이 시작됩니다." },
  { step: 4, title: "시안 전송", desc: "제작 전, 실제 도면 또는 시안 이미지를 고객님께 공유드립니다." },
  { step: 5, title: "제작 진행", desc: "확정된 시안에 따라 전문 제작팀이 불판을 제작합니다." },
  { step: 6, title: "잔금 결제", desc: "잔금을 입금하시면 출고 준비에 들어갑니다." },
  { step: 7, title: "설치 또는 출고", desc: "고객 요청에 따라 현장 설치 또는 택배/화물/퀵 배송으로 출고됩니다." },
  { step: 8, title: "A/S", desc: "제품 수령일로부터 6개월간 무상 A/S를 제공합니다." },
];

// 예시 이미지 데이터 (이미지는 실제 URL로 교체하세요)
const PRODUCTS = [
  { id: 1, name: "로스타", image: product_roaster},
  { id: 2, name: "불판", image: product_grill},
  { id: 3, name: "석쇠", image: product_mesh },
  { id: 4, name: "테이블", image: product_table },
  { id: 5, name: "찜통", image: product_steamer },
  { id: 6, name: "불판보관카트", image: product_cart },
  { id: 7, name: "숯통운반구", image: product_move },
  { id: 8, name: "연탄착화기", image: product_yeontan },
  { id: 9, name: "연탄보관함", image: product_storage }, 
  { id: 10, name: "덮개 등 각종부품", image: product_liftcover }, 

];

export default function Products() {
  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-4 mt-10">

        {/* 제작 프로세스 */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">제작 프로세스</h2>
        <p className="mt-3 text-gray-500 text-center">
          상담부터 설치·A/S까지, 아래 단계에 따라 체계적으로 진행됩니다.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 취급 제품 */}
      <div className="mt-24">
  <h2 className="text-3xl font-semibold text-gray-900">취급 제품</h2>
  <p className="mt-3 text-gray-500">
    다양한 매장 설비 및 용품을 직접 제작·공급합니다.
  </p>

  <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
    {PRODUCTS.map((product) => (
      <div key={product.id} className="flex flex-col items-center">
        
        {/* 이미지 박스 (테두리 + 그림자) */}
        <div className="rounded-xl overflow-hidden shadow-sm border w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-50 object-cover"
          />
        </div>

        {/* 이름은 이미지 박스 밖으로 분리 */}
        <div className="mt-3 text-center font-bold text-gray-800">
          {product.name}
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
}
