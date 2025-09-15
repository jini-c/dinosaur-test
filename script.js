// 전역 변수
let currentPage = 'landing';
let currentTest = null;
let currentQuestionIndex = 0;
let answers = [];

// 테스트 데이터
const testData = {
    dinosaur: {
        title: "나는 무슨 공룡일까?",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'type1': {
            name: "브라키오사우루스",
            image: "image/briki.png",
            hiddenAbility: "온화한 거인의 의지 (Gentle Giant Resolve)",
            description: "당신은 지혜롭고 온화한 브라키오사우루스입니다. 다른 사람의 감정을 잘 읽고 배려하는 평화주의자로, 갈등을 피하고 조화를 이루려 노력합니다. 신중하고 사려 깊은 성격으로 중요한 결정을 내리기 전에 충분히 생각하는 습관이 있으며, 팀워크를 중시하는 따뜻한 마음을 가지고 있습니다."
            },
            'type2': {
            name: "벨로시랩터",
            image: "image/velo.png",
            hiddenAbility: "예리한 기습 감각 (Sharp-Witted Ambush)",
            description: "당신은 빠르고 똑똑한 전략가 벨로시랩터입니다. 상황을 빠르게 판단하고 움직이는 능력이 뛰어나며, 계획적이고 분석적인 성격을 가지고 있습니다. 혼자보다는 팀을 이끌 전략을 짜는 것을 좋아하며, 민첩하고 기민한 사고로 어려운 문제도 척척 해결해내는 능력자입니다."
            },
            'type3': {
            name: "티라노사우루스",
            image: "image/tirano.png",
            hiddenAbility: "압도적 리더십 (Overwhelming Leadership)",
            description: "당신은 강력한 리더십과 자신감을 가진 티라노사우루스입니다. 누구보다 당당하고 주도적인 성격으로, 어려운 결정도 두려워하지 않으며 주변 사람들을 자연스럽게 이끄는 리더십이 탁월합니다. 목표 달성을 위해 끊임없이 노력하는 의지력의 소유자이며, 어려운 상황에서도 당당하게 맞서는 용기를 가지고 있습니다."
            },
            'type4': {
            name: "트리케라톱스", 
            image: "image/tri.png",
            hiddenAbility: "충성스러운 수호 본능 (Loyal Guard)",
            description: "당신은 든든한 조력자 트리케라톱스입니다. 언제나 묵묵히 곁을 지키는 신뢰받는 존재로, 위험한 상황에서도 팀을 지키려는 충성심과 책임감이 뛰어납니다. 우직하고 헌신적인 성격으로 한 번 믿는 사람은 끝까지 지키며, 안정감을 주는 든든한 팀의 기둥 역할을 합니다."
            },
            'type5': {
            name: "안킬로사우루스",
            image: "image/ankilo.png", 
            hiddenAbility: "철벽 방어 본능 (Iron Defense Instinct)",
            description: "당신은 한 번 결정한 것은 끝까지 지키는 안킬로사우루스입니다. 느리지만 확실한 타입으로 쉽게 흔들리지 않으며, 주변을 잘 관찰하고 방어에 능합니다. 침착하고 인내력이 강한 성격으로 위기 상황에서도 차분하게 대처하며, 강한 의지력으로 목표를 달성해나갑니다."
            },
            'type6': {
            name: "파라사우롤로푸스",
            image: "image/para.png",
            hiddenAbility: "사운드스케이프 비전 (Soundscape Visionary)", 
            description: "당신은 상상력의 끝을 걷는 파라사우롤로푸스입니다. 늘 새로운 것을 상상하고 예술적인 감각이 풍부한 몽상가 타입으로, 현실보다 꿈을 좇는 성격입니다. 창의적이고 독창적인 세계관을 지녔으며, 자유롭고 유연한 사고로 다른 사람들에게 영감을 주는 존재입니다."
            },
            'type7': {
            name: "스피노사우루스",
            image: "image/spino.png",
            hiddenAbility: "거칠게 살아남기 본능 (Untamed Survival Instinct)",
            description: "당신은 생존력 하나는 끝판왕인 스피노사우루스입니다. 규칙에 얽매이기보다는 자기 방식대로 살아가는 성격으로, 직감과 감정에 따라 움직입니다. 독립적이고 본능적인 성격으로 생존 본능이 강해 극한 상황에서도 살아남는 강인한 정신력을 가지고 있습니다."
            },
            'type8': {
            name: "마이아사우라",
            image: "image/miasau.png",
            hiddenAbility: "깊은 공감력의 핵심 (Deep Compassion Core)",
            description: "당신은 돌보는 것이 본능인 마이아사우라입니다. 타인의 감정을 잘 공감하고 위로해주는 능력이 뛰어나며, 주변 사람들의 행복이 곧 나의 행복인 따뜻한 성격입니다. 헌신적이고 배려심 깊은 태도로 사람들에게 안정감과 위로를 주는 천성적인 돌봄이입니다."
            }
        }
    },
    personality: {
        title: "성격 유형 테스트",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    },
    animal: {
        title: "나는 어떤 동물일까?",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    },
    color: {
        title: "나의 색깔은?",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    },
    job: {
        title: "적성 직업 테스트",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    },
    food: {
        title: "나의 음식 유형",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    },
    season: {
        title: "나의 계절은?",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    },
    movie: {
        title: "나의 영화 장르",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    },
    music: {
        title: "나의 음악 취향",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    },
    travel: {
        title: "나의 여행 스타일",
        questions: [
            {
                question: "친구들과 함께 있을 때 당신은?",
                answers: {
                    A: "항상 대화의 중심에 서는 편이다",
                    B: "조용히 듣고 있는 편이다"
                }
            },
            {
                question: "새로운 환경에 적응할 때는?",
                answers: {
                    A: "빠르게 적응하고 새로운 친구를 만든다",
                    B: "천천히 주변을 살펴보며 적응한다"
                }
            },
            {
                question: "문제가 생겼을 때 당신은?",
                answers: {
                    A: "즉시 해결책을 찾아 행동한다",
                    B: "신중하게 생각한 후 결정한다"
                }
            },
            {
                question: "여가 시간에는 주로?",
                answers: {
                    A: "활동적인 취미를 즐긴다",
                    B: "조용한 취미를 즐긴다"
                }
            },
            {
                question: "리더십에 대해 어떻게 생각하나요?",
                answers: {
                    A: "자연스럽게 이끄는 편이다",
                    B: "팀원으로서 협력하는 편이다"
                }
            },
            {
                question: "스트레스 해소 방법은?",
                answers: {
                    A: "운동이나 활동적인 방법을 선호한다",
                    B: "독서나 음악 등 조용한 방법을 선호한다"
                }
            },
            {
                question: "의사결정을 할 때는?",
                answers: {
                    A: "직감적으로 빠르게 결정한다",
                    B: "충분히 분석한 후 결정한다"
                }
            },
            {
                question: "새로운 도전에 대해?",
                answers: {
                    A: "즉시 도전하고 싶어한다",
                    B: "신중하게 검토한 후 도전한다"
                }
            },
            {
                question: "감정 표현은?",
                answers: {
                    A: "솔직하고 직접적으로 표현한다",
                    B: "차분하고 절제된 표현을 한다"
                }
            },
            {
                question: "목표 달성 방식은?",
                answers: {
                    A: "대담하고 과감하게 접근한다",
                    B: "계획적이고 체계적으로 접근한다"
                }
            }
        ],
        results: {
            'A': {
                name: "준비 중",
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            },
            'B': {
                name: "준비 중", 
                image: "https://via.placeholder.com/300x300/2196F3/FFFFFF?text=준비중",
                description: "이 테스트는 곧 출시 예정입니다."
            }
        }
    }
};

// 테스트 카드 정보
const testCardInfo = {
    dinosaur: {
        title: "나는 무슨 공룡일까?",
        description: "당신의 성격을 분석해서 어떤 공룡과 닮았는지 알아보세요!",
        image: "https://via.placeholder.com/200x150/4CAF50/FFFFFF?text=공룡"
    },
    personality: {
        title: "성격 유형 테스트",
        description: "MBTI 기반 성격 유형을 알아보세요!",
        image: "https://via.placeholder.com/200x150/2196F3/FFFFFF?text=성격"
    },
    animal: {
        title: "나는 어떤 동물일까?",
        description: "당신의 성격을 동물로 표현해보세요!",
        image: "https://via.placeholder.com/200x150/FF9800/FFFFFF?text=동물"
    },
    color: {
        title: "나의 색깔은?",
        description: "당신을 대표하는 색깔을 찾아보세요!",
        image: "https://via.placeholder.com/200x150/9C27B0/FFFFFF?text=색깔"
    },
    job: {
        title: "적성 직업 테스트",
        description: "당신에게 맞는 직업을 찾아보세요!",
        image: "https://via.placeholder.com/200x150/607D8B/FFFFFF?text=직업"
    },
    food: {
        title: "나의 음식 유형",
        description: "당신의 성격을 음식으로 표현해보세요!",
        image: "https://via.placeholder.com/200x150/795548/FFFFFF?text=음식"
    },
    season: {
        title: "나의 계절은?",
        description: "당신을 대표하는 계절을 찾아보세요!",
        image: "https://via.placeholder.com/200x150/00BCD4/FFFFFF?text=계절"
    },
    movie: {
        title: "나의 영화 장르",
        description: "당신의 성격에 맞는 영화 장르를 찾아보세요!",
        image: "https://via.placeholder.com/200x150/E91E63/FFFFFF?text=영화"
    },
    music: {
        title: "나의 음악 취향",
        description: "당신의 성격에 맞는 음악 장르를 찾아보세요!",
        image: "https://via.placeholder.com/200x150/3F51B5/FFFFFF?text=음악"
    },
    travel: {
        title: "나의 여행 스타일",
        description: "당신에게 맞는 여행 방식을 찾아보세요!",
        image: "https://via.placeholder.com/200x150/8BC34A/FFFFFF?text=여행"
    }
};

// DOM 요소들
const elements = {
    loading: document.getElementById('loading'),
    landingPage: document.getElementById('landing-page'),
    mainPage: document.getElementById('main-page'),
    testStartPage: document.getElementById('test-start-page'),
    testPage: document.getElementById('test-page'),
    resultPage: document.getElementById('result-page')
};

// 페이지 전환 함수
function showPage(pageId) {
    console.log('showPage called with:', pageId);
    
    // 모든 페이지 숨기기
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.add('hidden');
    });
    
    // 해당 페이지 보이기
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.remove('hidden');
        currentPage = pageId;
        console.log('Page changed to:', pageId);
    } else {
        console.error('Page element not found:', pageId + '-page');
    }
}

// 로딩 화면 숨기기
function hideLoading() {
    elements.loading.classList.add('hidden');
}

// 로그아웃
function logout() {
    showPage('landing');
    currentTest = null;
    currentQuestionIndex = 0;
    answers = [];
}

// 통합 테스트 시작 함수
function startTest(testType) {
    currentTest = testType;
    document.getElementById('test-title').textContent = testData[testType].title;
    
    // 공통 템플릿으로 설명 생성
    const randomCount = Math.floor(Math.random() * 50000) + 30000; // 30,000~80,000
    document.getElementById('test-description-text').innerHTML = 
        `${randomCount.toLocaleString()}명의 사람들이 테스트했어요!<br>당신은 어떤 결과가 나올까요?`;
    
    showPage('test-start');
}

// 테스트 카드 클릭 이벤트
function setupTestCardClick() {
    const testCards = document.querySelectorAll('.test-card');
    
    testCards.forEach(card => {
        card.addEventListener('click', () => {
            const testType = card.dataset.test;
            startTest(testType);
        });
    });
}



// 테스트 진행 시작
function startTestProgress() {
    currentQuestionIndex = 0;
    answers = [];
    showPage('test');
    loadQuestion();
}

// 질문 로드
function loadQuestion() {
    const questions = testData[currentTest].questions;
    const question = questions[currentQuestionIndex];
    
    document.getElementById('question-text').textContent = question.question;
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        const answerKey = index === 0 ? 'A' : 'B';
        btn.textContent = question.answers[answerKey];
        btn.dataset.answer = answerKey;
        
        // 이전 답변 선택 상태 복원
        if (answers[currentQuestionIndex] === answerKey) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
    
    // 진행률 업데이트
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('question-counter').textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    
    // 버튼 상태 업데이트
    updateNavigationButtons();
}

// 답변 선택
function selectAnswer(answer) {
    console.log(`selectAnswer called with: ${answer} for question ${currentQuestionIndex}`);
    answers[currentQuestionIndex] = answer;
    console.log('Updated answers array:', answers);
    
    // 선택 상태 표시
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.answer === answer) {
            btn.classList.add('selected');
        }
    });
    
    // 잠시 후 다음 문항으로 자동 이동
    setTimeout(() => {
        const questions = testData[currentTest].questions;
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            // 마지막 문항이면 결과보기 버튼 표시
            document.getElementById('show-result').classList.remove('hidden');
        }
    }, 500); // 0.5초 후 이동
}

// 네비게이션 버튼 업데이트
function updateNavigationButtons() {
    const questions = testData[currentTest].questions;
    const prevBtn = document.getElementById('prev-question');
    const resultBtn = document.getElementById('show-result');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 마지막 문항이면 결과보기 버튼 표시
    if (currentQuestionIndex === questions.length - 1) {
        resultBtn.classList.remove('hidden');
    } else {
        resultBtn.classList.add('hidden');
    }
}

// 이전 질문
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// 결과 계산
function calculateResult() {
    console.log('calculateResult called');
    console.log('Current answers array:', answers);
    console.log('Current test:', currentTest);
    
    let scores = {
        type1: 0, // 브라키오사우루스
        type2: 0, // 벨로시랩터  
        type3: 0, // 티라노사우루스
        type4: 0, // 트리케라톱스
        type5: 0, // 안킬로사우루스
        type6: 0, // 파라사우롤로푸스
        type7: 0, // 스피노사우루스
        type8: 0  // 마이아사우라
    };
    
    // 각 질문별로 균형잡힌 점수 배분 (각 타입이 고르게 나오도록)
    answers.forEach((answer, index) => {
        console.log(`Question ${index}: ${answer}`);
        if (!answer) {
            console.warn(`No answer for question ${index}`);
            return;
        }
        
        // 각 질문마다 2개 타입에만 집중 배점
        switch(index) {
            case 0: // 친구들과 함께 있을 때
                if(answer === 'A') {
                    scores.type3 += 8; // 티라노 (외향적)
                    scores.type2 += 2; // 벨로시 (사회적)
                } else {
                    scores.type1 += 8; // 브라키오 (내향적)
                    scores.type8 += 2; // 마이아 (배려적)
                }
                break;
            case 1: // 새로운 환경 적응
                if(answer === 'A') {
                    scores.type2 += 8; // 벨로시 (적응력)
                    scores.type7 += 2; // 스피노 (독립적)
                } else {
                    scores.type5 += 8; // 안킬로 (신중함)
                    scores.type4 += 2; // 트리케라 (안정감)
                }
                break;
            case 2: // 문제 해결
                if(answer === 'A') {
                    scores.type7 += 8; // 스피노 (직감적)
                    scores.type3 += 2; // 티라노 (결단력)
                } else {
                    scores.type4 += 8; // 트리케라 (안정적)
                    scores.type1 += 2; // 브라키오 (신중함)
                }
                break;
            case 3: // 여가 시간
                if(answer === 'A') {
                    scores.type6 += 8; // 파라사우 (창의적)
                    scores.type7 += 2; // 스피노 (활동적)
                } else {
                    scores.type8 += 8; // 마이아 (평화적)
                    scores.type6 += 2; // 파라사우 (창의적)
                }
                break;
            case 4: // 리더십
                if(answer === 'A') {
                    scores.type3 += 8; // 티라노 (강력한 리더)
                    scores.type2 += 2; // 벨로시 (전략적 리더)
                } else {
                    scores.type4 += 8; // 트리케라 (지지자)
                    scores.type8 += 2; // 마이아 (협력자)
                }
                break;
            case 5: // 스트레스 해소
                if(answer === 'A') {
                    scores.type7 += 8; // 스피노 (활동적 해소)
                    scores.type6 += 2; // 파라사우 (창의적 해소)
                } else {
                    scores.type6 += 8; // 파라사우 (창의적 해소)
                    scores.type1 += 2; // 브라키오 (조용한 해소)
                }
                break;
            case 6: // 의사결정
                if(answer === 'A') {
                    scores.type2 += 8; // 벨로시 (빠른 판단)
                    scores.type7 += 2; // 스피노 (직감적)
                } else {
                    scores.type5 += 8; // 안킬로 (꼼꼼함)
                    scores.type1 += 2; // 브라키오 (신중함)
                }
                break;
            case 7: // 새로운 도전
                if(answer === 'A') {
                    scores.type7 += 8; // 스피노 (모험적)
                    scores.type3 += 2; // 티라노 (도전적)
                } else {
                    scores.type5 += 8; // 안킬로 (신중함)
                    scores.type4 += 2; // 트리케라 (안정적)
                }
                break;
            case 8: // 감정 표현
                if(answer === 'A') {
                    scores.type7 += 8; // 스피노 (직설적)
                    scores.type6 += 2; // 파라사우 (예술적)
                } else {
                    scores.type8 += 8; // 마이아 (배려적)
                    scores.type6 += 2; // 파라사우 (예술적)
                }
                break;
            case 9: // 목표 달성
                if(answer === 'A') {
                    scores.type2 += 8; // 벨로시 (전략적)
                    scores.type3 += 2; // 티라노 (과감함)
                } else {
                    scores.type5 += 8; // 안킬로 (꾸준함)
                    scores.type1 += 2; // 브라키오 (계획적)
                }
                break;
        }
    });
    
    // 디버그용 점수 출력
    console.log('Final scores:', scores);
    
    // 가장 높은 점수의 유형 반환
    const resultType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    console.log('Selected result type:', resultType, 'with score:', scores[resultType]);
    
    return resultType;
}
function showResult() {
    console.log('showResult called'); // 디버그용
    console.log('Current test type:', currentTest);
    console.log('Answers array length:', answers.length);
    console.log('Expected questions length:', testData[currentTest].questions.length);
    
    const resultType = calculateResult();
    const result = testData[currentTest].results[resultType];
    
    console.log('Calculated result type:', resultType); // 디버그용
    console.log('Result data:', result); // 디버그용
    
    // 강제로 페이지 이동
    showPage('result');
    
    // 내용 설정
    document.getElementById('result-title').textContent = `당신은 ${result.name}가 되었습니다!`;
    document.getElementById('result-dinosaur-img').src = result.image;
    document.getElementById('result-description-text').innerHTML = 
        `<strong>🌟 히든 능력: ${result.hiddenAbility}</strong><br><br>${result.description}`;
}
// 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, setting up event listeners');
    
    // 로딩 화면 2초 후 숨기기
    setTimeout(hideLoading, 2000);
    
    // 시작하기 버튼
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log('Start button clicked');
            showPage('main');
        });
    } else {
        console.error('Start button not found');
    }
    
    // 로그아웃 버튼
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // 테스트 시작 버튼
    const startTestBtn = document.getElementById('start-test-btn');
    if (startTestBtn) {
        startTestBtn.addEventListener('click', startTestProgress);
    }
    
    // 돌아가기 버튼들
    const backToMainBtn = document.getElementById('back-to-main');
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', () => {
            showPage('main');
        });
    }
    
    const backToTestsBtn = document.getElementById('back-to-tests');
    if (backToTestsBtn) {
        backToTestsBtn.addEventListener('click', () => {
            showPage('main');
        });
    }
    
    // 테스트 진행 중 테스트 목록으로 돌아가기 버튼
    const backToMainFromTestBtn = document.getElementById('back-to-main-from-test');
    if (backToMainFromTestBtn) {
        backToMainFromTestBtn.addEventListener('click', () => {
            // 테스트 진행 상태 초기화
            currentQuestionIndex = 0;
            answers = [];
            showPage('main');
        });
    }
    
    // 답변 버튼들
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectAnswer(btn.dataset.answer);
        });
    });
    
    // 네비게이션 버튼들
    const prevBtn = document.getElementById('prev-question');
    if (prevBtn) {
        prevBtn.addEventListener('click', previousQuestion);
    }
    
    const resultBtn = document.getElementById('show-result');
    if (resultBtn) {
        resultBtn.addEventListener('click', showResult);
    }
    
    // 결과 페이지 버튼들
    const retakeBtn = document.getElementById('retake-test');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            startTestProgress();
        });
    }
    
    const shareBtn = document.getElementById('share-result');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            alert('결과 공유 기능은 추후 구현 예정입니다.');
        });
    }
    
    // 테스트 카드 클릭 이벤트 설정
    setupTestCardClick();
    
    console.log('All event listeners set up');
});