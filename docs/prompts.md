# Dinosaur Personality Test — 이미지 프롬프트 가이드

동일한 아트디렉션을 유지하기 위한 **고정 스타일**과, 공룡/성향별 **가변 파라미터**를 분리해 정리했습니다.  
(생성 도구: GPT 이미지/호환 모델 가정, 최종 산출물은 카드 형태)

---

## 1) 고정 스타일(통일 요소)
- **카드 포맷**: 4:5 세로, 카드 프레임(화이트 보더), 은은한 그림자, 중앙 정렬
- **라이팅/팔레트**: 플랫 라이팅, 파스텔/소프트 톤
- **캐릭터**: full-body dinosaur character, 친화적 표정, 일러스트 무드
- **해상도**: 1024×1280(권장), 최종 PNG/WebP
- **텍스트 영역**: 하단 소형 캡션(한글), 여백·폰트 규칙 통일

---

## 2) 가변 파라미터(종/성향/포즈)
- **species**: Tyrannosaurus / Velociraptor / Brachiosaurus / Triceratops / Ankylosaurus / Parasaurolophus / Spinosaurus / Maiasaura
- **trait keywords**: leadership, strategic, stability, careful, creativity, instinct, empathy …
- **pose**: confident / agile / calm / caring 등 결과 성향에 맞는 제스처

---

## 3) 프롬프트 템플릿
studio-quality full-body dinosaur character, centered on clean portrait card,
4:5 ratio with white border and soft drop shadow, flat lighting, pastel palette,
species: {{SPECIES}},
pose: {{POSE}},
mood: {{TRAIT_KEYWORDS}},
small caption area at bottom (Korean),
high-detail yet simple, consistent illustration style

- 예: `{{SPECIES}}=Tyrannosaurus, {{POSE}}=confident 3/4 view, {{TRAIT_KEYWORDS}}=leadership, decisive`

---

## 4) 공룡별 샘플 프롬프트

### (1) 티라노사우루스 — 리더형(type3)
... species: Tyrannosaurus,
pose: confident 3/4 view,
mood: leadership, decisive, bold

---

### (2) 벨로시랩터 — 전략가형(type2)
... species: Velociraptor,
pose: agile stance, low center of gravity,
mood: strategic, quick-thinking, precise

---

### (3) 브라키오사우루스 — 신중/평화형(type1)
... species: Brachiosaurus,
pose: calm and steady, gentle posture,
mood: thoughtful, peaceful, considerate

---

### (4) 트리케라톱스 — 지지/안정형(type4)
... species: Triceratops,
pose: sturdy protective stance,
mood: loyal, reliable, supportive

---

### (5) 안킬로사우루스 — 끈기/방어형(type5)
... species: Ankylosaurus,
pose: grounded and firm,
mood: resilient, careful, unshakable

---

### (6) 파라사우롤로푸스 — 창의/예술형(type6)
... species: Parasaurolophus,
pose: graceful, slightly playful,
mood: creative, imaginative, artistic

---

### (7) 스피노사우루스 — 본능/모험형(type7)
... species: Spinosaurus,
pose: dynamic, forward-leaning,
mood: instinctive, adventurous, bold

---

### (8) 마이아사우라 — 공감/돌봄형(type8)
... species: Maiasaura,
pose: caring and friendly posture,
mood: empathetic, warm, cooperative


---

## 5) 일관성 유지 팁
- **시드/해상도 고정**: 동일 모델·시드·해상도 유지
- **배경 단순화**: 단색/그라데이션 위주(캐릭터 집중)
- **후처리 규칙**: 1024×1280 리사이즈, 보더·캡션 여백 동일
- **파일명 규칙**: `docs/image/{키}.png` (예: `tirano.png`, `velo.png`, `briki.png`, `tri.png`, `spino.png`, `ankilo.png`, `para.png`, `miasau.png`)