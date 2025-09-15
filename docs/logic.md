# Dinosaur Personality Test — 로직 명세

본 문서는 `script.js`의 실제 동작을 기준으로 정리한 **질문 → 점수 → 공룡 유형 매핑** 문서입니다.  
(소스 기준 함수: `calculateResult()`)

---

## 1) 테스트 개요
- 총 10문항, 각 문항은 A/B 2지선다.
- 각 질문의 선택(A/B)에 따라 **두 개 타입**에 가중치가 부여됨(주가중치 8, 보조가중치 2).
- 최종 점수의 **최댓값**을 가지는 타입이 결과이며, 동점이면 **키 선언 순서(type1→type8) 상 앞선 키**가 선택될 수 있음.

---

## 2) 타입 정의 (코드 키 → 공룡)
| 타입 키 | 공룡 | 성향 키워드(요약) |
|---|---|---|
| type1 | 브라키오사우루스 | 신중/배려/평화 |
| type2 | 벨로시랩터 | 전략/민첩/빠른판단 |
| type3 | 티라노사우루스 | 리더십/결단/도전 |
| type4 | 트리케라톱스 | 지지/안정/책임 |
| type5 | 안킬로사우루스 | 꼼꼼/끈기/방어 |
| type6 | 파라사우롤로푸스 | 창의/예술/상상 |
| type7 | 스피노사우루스 | 본능/직관/모험 |
| type8 | 마이아사우라 | 공감/협력/돌봄 |

> 결과 표기는 `testData.dinosaur.results[typeX]`를 사용하며, 이미지/히든능력/설명은 해당 객체를 참조합니다.

---

## 3) 질문 목록
모든 테스트 공통 템플릿(현재 `dinosaur`에 사용):
1. 친구들과 함께 있을 때 당신은?
2. 새로운 환경에 적응할 때는?
3. 문제가 생겼을 때 당신은?
4. 여가 시간에는 주로?
5. 리더십에 대해 어떻게 생각하나요?
6. 스트레스 해소 방법은?
7. 의사결정을 할 때는?
8. 새로운 도전에 대해?
9. 감정 표현은?
10. 목표 달성 방식은?

각 문항의 보기:
- A / B (질문별 텍스트는 `testData.dinosaur.questions` 참조)

---

## 4) 점수 가중치 매핑(정식 표)

> 표의 값은 “해당 선택 시 **가중치**를 더하는 타입”을 의미합니다.  
> 주: +8, 보조: +2

| Q# | A 선택 시 가중치 | B 선택 시 가중치 |
|---|---|---|
| 1 (친구들과 함께) | type3 +8, type2 +2 | type1 +8, type8 +2 |
| 2 (새 환경 적응) | type2 +8, type7 +2 | type5 +8, type4 +2 |
| 3 (문제 해결) | type7 +8, type3 +2 | type4 +8, type1 +2 |
| 4 (여가 시간) | type6 +8, type7 +2 | type8 +8, type6 +2 |
| 5 (리더십) | type3 +8, type2 +2 | type4 +8, type8 +2 |
| 6 (스트레스 해소) | type7 +8, type6 +2 | type6 +8, type1 +2 |
| 7 (의사결정) | type2 +8, type7 +2 | type5 +8, type1 +2 |
| 8 (새로운 도전) | type7 +8, type3 +2 | type5 +8, type4 +2 |
| 9 (감정 표현) | type7 +8, type6 +2 | type8 +8, type6 +2 |
| 10 (목표 달성) | type2 +8, type3 +2 | type5 +8, type1 +2 |

---

## 5) 판정 규칙
```js
// 최종 타입 선택
const resultType = Object.keys(scores)
  .reduce((a, b) => (scores[a] > scores[b] ? a : b));
동점 처리: reduce 동작 특성상 객체 키 선언 순서(type1→type8) 에 따라 앞선 키가 유지될 수 있습니다.

필요 시 명시 우선순위/추가 보정 규칙을 별도로 둘 수 있습니다.
```

---

## 6) 결과 표시

result.name: “당신은 {공룡}가 되었습니다!”

result.image: image/{file}.png (예: tirano.png, velo.png, briki.png …)

result.hiddenAbility: 히든 능력 문구

result.description: 성격 설명

document.getElementById('result-title').textContent =
  `당신은 ${result.name}가 되었습니다!`;
document.getElementById('result-dinosaur-img').src = result.image;
document.getElementById('result-description-text').innerHTML =
  `<strong>🌟 히든 능력: ${result.hiddenAbility}</strong><br><br>${result.description}`;

---

## 7) 확장 가이드

문항 추가: 각 문항 A/B를 특정 타입 2개에 (8/2)로 매핑해 분포 균형 유지

타입 추가: 모든 문항 분배표 재설계 필요

동점 개선: “사용자 선호 키워드” 등에 보정값(+1) 적용

결과 다양화: 상위 2개 타입 조합(하이브리드 결과) 제공