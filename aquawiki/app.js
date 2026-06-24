
const fishData = [
  {
    "name": "Betta splendens",
    "common": "Betta / peixe-de-briga",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Territorial",
    "size": "6–7 cm",
    "tank": "20 L+ solo",
    "temp": "24–28 °C",
    "ph": "6.0–7.8",
    "zone": "Superfície/meio",
    "school": "Não; machos sozinhos",
    "diet": "Onívoro com foco proteico",
    "summary": "Labiríntido resistente, com respiração aérea suplementar. Ideal para aquários calmos, tampados e bem plantados.",
    "care": "Evite correnteza forte e nunca junte dois machos. Pode conviver com espécies muito pacíficas em volume adequado, mas nadadeiras longas atraem mordiscadores.",
    "tags": ["labiríntido", "baixo fluxo", "tampado"]
  },
  {
    "name": "Poecilia reticulata",
    "common": "Guppy / lebiste",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "3–5 cm",
    "tank": "40 L+",
    "temp": "22–28 °C",
    "ph": "7.0–8.2",
    "zone": "Meio/superfície",
    "school": "Grupo; mais fêmeas que machos",
    "diet": "Onívoro",
    "summary": "Vivíparo colorido, ativo e fácil de reproduzir. Prefere água levemente alcalina e estável.",
    "care": "Controle superpopulação: reproduz muito. Evite misturar com mordiscadores de nadadeiras e peixes predadores.",
    "tags": ["vivíparo", "cardume solto", "reproduz fácil"]
  },
  {
    "name": "Xiphophorus maculatus",
    "common": "Platy",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "5–7 cm",
    "tank": "50 L+",
    "temp": "22–26 °C",
    "ph": "7.0–8.2",
    "zone": "Meio",
    "school": "Grupo",
    "diet": "Onívoro",
    "summary": "Vivíparo robusto, ótimo para comunitários de água mais alcalina.",
    "care": "Mantenha proporção com mais fêmeas. Alimentação vegetal ajuda saúde intestinal.",
    "tags": ["vivíparo", "comunitário", "ativo"]
  },
  {
    "name": "Xiphophorus hellerii",
    "common": "Espada / swordtail",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico ativo",
    "size": "10–12 cm",
    "tank": "80 L+",
    "temp": "22–28 °C",
    "ph": "7.0–8.2",
    "zone": "Meio/superfície",
    "school": "Grupo",
    "diet": "Onívoro",
    "summary": "Parente do platy, maior e mais nadador. Machos têm cauda em formato de espada.",
    "care": "Use aquário tampado e com espaço de nado. Machos podem disputar fêmeas.",
    "tags": ["vivíparo", "saltador", "ativo"]
  },
  {
    "name": "Poecilia sphenops/latipinna",
    "common": "Molly",
    "water": "Doce tropical / salobra leve",
    "difficulty": "Intermediário",
    "temper": "Pacífico ativo",
    "size": "8–12 cm",
    "tank": "80 L+",
    "temp": "24–28 °C",
    "ph": "7.5–8.5",
    "zone": "Meio/superfície",
    "school": "Grupo",
    "diet": "Onívoro herbívoro",
    "summary": "Vivíparo que gosta de água dura e alcalina. Algumas linhagens toleram salobra leve.",
    "care": "Não coloque em água ácida/muito mole. Precisa de boa oxigenação e dieta com vegetais.",
    "tags": ["vivíparo", "água dura", "vegetal"]
  },
  {
    "name": "Paracheirodon innesi",
    "common": "Neon tetra",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "3–4 cm",
    "tank": "50 L+",
    "temp": "21–26 °C",
    "ph": "5.5–7.5",
    "zone": "Meio",
    "school": "8+ indivíduos",
    "diet": "Micro-onívoro",
    "summary": "Cardume clássico de aquário plantado, pequeno e muito pacífico.",
    "care": "Evite peixes grandes. Fica melhor com água estável, luz suave e cardume numeroso.",
    "tags": ["tetra", "cardume", "plantado"]
  },
  {
    "name": "Paracheirodon axelrodi",
    "common": "Cardinal tetra",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico",
    "size": "4–5 cm",
    "tank": "60 L+",
    "temp": "24–28 °C",
    "ph": "4.5–7.0",
    "zone": "Meio",
    "school": "10+ indivíduos",
    "diet": "Micro-onívoro",
    "summary": "Semelhante ao neon, mas com faixa vermelha mais longa e preferência por água quente e ácida.",
    "care": "Excelente com discus e aquários amazônicos maduros; sensível a instabilidade.",
    "tags": ["tetra", "água ácida", "cardume"]
  },
  {
    "name": "Hyphessobrycon amandae",
    "common": "Tetra ember / tetra foguinho",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "2 cm",
    "tank": "35 L+",
    "temp": "23–28 °C",
    "ph": "5.5–7.2",
    "zone": "Meio",
    "school": "10+ indivíduos",
    "diet": "Micro-onívoro",
    "summary": "Tetra nano de cor laranja, excelente para plantados pequenos e camarões adultos.",
    "care": "Use microalimentos. Peixes grandes podem vê-lo como alimento.",
    "tags": ["nano", "cardume", "plantado"]
  },
  {
    "name": "Gymnocorymbus ternetzi",
    "common": "Tetra preto / black skirt",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico a mordiscador",
    "size": "5–6 cm",
    "tank": "70 L+",
    "temp": "22–27 °C",
    "ph": "6.0–7.8",
    "zone": "Meio",
    "school": "6+ indivíduos",
    "diet": "Onívoro",
    "summary": "Tetra resistente e ativo; em grupos pequenos pode mordiscar nadadeiras.",
    "care": "Não combine com bettas de nadadeira longa ou guppies fancy em pouco espaço.",
    "tags": ["tetra", "ativo", "mordiscador"]
  },
  {
    "name": "Hemigrammus bleheri",
    "common": "Rodóstomo / rummy-nose tetra",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico",
    "size": "4–5 cm",
    "tank": "80 L+",
    "temp": "24–28 °C",
    "ph": "5.5–7.2",
    "zone": "Meio",
    "school": "10+ indivíduos",
    "diet": "Micro-onívoro",
    "summary": "Cardume sincronizado, muito bonito, mas exige água madura e estável.",
    "care": "A cor da cabeça denuncia estresse; faça aclimatação lenta e mantenha nitrato baixo.",
    "tags": ["tetra", "cardume forte", "sensível"]
  },
  {
    "name": "Trigonostigma heteromorpha",
    "common": "Rasbora arlequim",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "4–5 cm",
    "tank": "50 L+",
    "temp": "23–28 °C",
    "ph": "6.0–7.5",
    "zone": "Meio/superfície",
    "school": "8+ indivíduos",
    "diet": "Micro-onívoro",
    "summary": "Cyprinídeo asiático calmo, ótimo para comunitários e plantados.",
    "care": "Fica melhor com plantas, áreas abertas e baixa agressividade no aquário.",
    "tags": ["rasbora", "cardume", "asiático"]
  },
  {
    "name": "Boraras brigittae",
    "common": "Rasbora chili",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico tímido",
    "size": "1.8–2 cm",
    "tank": "30 L+",
    "temp": "23–28 °C",
    "ph": "5.0–7.0",
    "zone": "Meio/superfície",
    "school": "10+ indivíduos",
    "diet": "Micro-onívoro",
    "summary": "Peixe nano intenso, ideal para aquários plantados maduros e tranquilos.",
    "care": "Precisa de microalimentos e companheiros muito pequenos. Não combina com peixes grandes ou agitados.",
    "tags": ["nano", "blackwater", "cardume"]
  },
  {
    "name": "Danio rerio",
    "common": "Paulistinha / zebra danio",
    "water": "Doce tropical/subtropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico ativo",
    "size": "4–5 cm",
    "tank": "60 L+",
    "temp": "18–26 °C",
    "ph": "6.5–7.8",
    "zone": "Superfície/meio",
    "school": "6+ indivíduos",
    "diet": "Onívoro",
    "summary": "Muito resistente, veloz e saltador. Melhor em aquários longos.",
    "care": "Não é ideal para peixes lentos. Use tampa e mantenha grupo para reduzir perseguições.",
    "tags": ["danio", "ativo", "saltador"]
  },
  {
    "name": "Tanichthys albonubes",
    "common": "Tanictis / white cloud",
    "water": "Doce fria/subtropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "3–4 cm",
    "tank": "45 L+",
    "temp": "16–24 °C",
    "ph": "6.0–8.0",
    "zone": "Meio/superfície",
    "school": "8+ indivíduos",
    "diet": "Micro-onívoro",
    "summary": "Pequeno peixe de água mais fresca, bom para aquários sem aquecedor em climas adequados.",
    "care": "Evite temperaturas tropicais altas por longos períodos.",
    "tags": ["água fria", "cardume", "resistente"]
  },
  {
    "name": "Oryzias latipes",
    "common": "Medaka",
    "water": "Doce fria/subtropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "3–4 cm",
    "tank": "40 L+",
    "temp": "16–28 °C",
    "ph": "7.0–8.2",
    "zone": "Superfície",
    "school": "Grupo",
    "diet": "Micro-onívoro",
    "summary": "Peixe de superfície resistente, comum em mini lagos e aquários frios.",
    "care": "Aprecia plantas flutuantes e tampa. Reproduz em mopas/raízes finas.",
    "tags": ["superfície", "água fria", "mini lago"]
  },
  {
    "name": "Puntius titteya",
    "common": "Barbo cereja",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "4–5 cm",
    "tank": "60 L+",
    "temp": "23–27 °C",
    "ph": "6.0–7.8",
    "zone": "Meio",
    "school": "6+ indivíduos",
    "diet": "Onívoro",
    "summary": "Barbo pequeno e menos mordiscador, ótimo para comunitários plantados.",
    "care": "Use cardume misto e vegetação; machos exibem melhor cor quando seguros.",
    "tags": ["barbo", "cardume", "plantado"]
  },
  {
    "name": "Puntigrus tetrazona",
    "common": "Barbo sumatra / tiger barb",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Mordiscador ativo",
    "size": "6–7 cm",
    "tank": "90 L+",
    "temp": "22–27 °C",
    "ph": "6.0–7.8",
    "zone": "Meio",
    "school": "8+ indivíduos",
    "diet": "Onívoro",
    "summary": "Muito ativo e bonito, mas mordisca nadadeiras se mal planejado.",
    "care": "Mantenha cardume grande e evite peixes lentos ou de nadadeiras longas.",
    "tags": ["barbo", "mordiscador", "cardume"]
  },
  {
    "name": "Melanotaenia spp.",
    "common": "Peixes arco-íris",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico ativo",
    "size": "6–15 cm",
    "tank": "100 L+",
    "temp": "23–28 °C",
    "ph": "6.8–8.0",
    "zone": "Meio/superfície",
    "school": "6+ indivíduos",
    "diet": "Onívoro",
    "summary": "Nadadores coloridos que precisam de espaço e água bem oxigenada.",
    "care": "A maioria fica melhor em aquários compridos; pesquise tamanho da espécie escolhida.",
    "tags": ["ativo", "cardume", "australásia"]
  },
  {
    "name": "Trichogaster lalius",
    "common": "Gourami anão",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico territorial",
    "size": "6–8 cm",
    "tank": "60 L+",
    "temp": "24–28 °C",
    "ph": "6.0–7.5",
    "zone": "Superfície/meio",
    "school": "Casal ou trio planejado",
    "diet": "Onívoro",
    "summary": "Labiríntido colorido, mais sensível que parece. Gosta de águas calmas e vegetação.",
    "care": "Evite correnteza e companheiros agressivos. Atenção à qualidade de linhagens comerciais.",
    "tags": ["labiríntido", "calmo", "plantado"]
  },
  {
    "name": "Trichopodus leerii",
    "common": "Gourami pérola",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "10–12 cm",
    "tank": "100 L+",
    "temp": "24–28 °C",
    "ph": "6.0–7.5",
    "zone": "Superfície/meio",
    "school": "Casal/trio",
    "diet": "Onívoro",
    "summary": "Um dos gouramis mais elegantes e tranquilos para comunitários grandes.",
    "care": "Use plantas flutuantes e áreas calmas. Machos podem disputar território na reprodução.",
    "tags": ["labiríntido", "pacífico", "médio"]
  },
  {
    "name": "Trichogaster chuna",
    "common": "Gourami mel",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico tímido",
    "size": "4–5 cm",
    "tank": "45 L+",
    "temp": "24–28 °C",
    "ph": "6.0–7.5",
    "zone": "Superfície/meio",
    "school": "Casal/trio",
    "diet": "Onívoro",
    "summary": "Labiríntido pequeno e calmo, boa alternativa ao betta em comunitários tranquilos.",
    "care": "Evite peixes agitados. Plantas e esconderijos aumentam a confiança.",
    "tags": ["labiríntido", "nano médio", "calmo"]
  },
  {
    "name": "Pterophyllum scalare",
    "common": "Acará-bandeira / angelfish",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Semiagressivo",
    "size": "15 cm corpo; alto",
    "tank": "150 L+ alto",
    "temp": "25–29 °C",
    "ph": "6.0–7.5",
    "zone": "Meio",
    "school": "Grupo jovem; casal adulto",
    "diet": "Onívoro",
    "summary": "Ciclídeo amazônico alto e territorial quando adulto, compatível com peixes não muito pequenos.",
    "care": "Neons pequenos podem virar alimento. Precisa de aquário alto e companheiros calmos.",
    "tags": ["ciclídeo", "amazônico", "tanque alto"]
  },
  {
    "name": "Symphysodon spp.",
    "common": "Discus",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Pacífico sensível",
    "size": "15–20 cm",
    "tank": "250 L+",
    "temp": "28–30 °C",
    "ph": "5.5–7.0",
    "zone": "Meio",
    "school": "5+ jovens/adultos",
    "diet": "Onívoro proteico",
    "summary": "Ciclídeo de água quente, exigente em estabilidade, higiene e alimentação.",
    "care": "Não é peixe de primeiro aquário. Exige rotina consistente e companheiros que tolerem alta temperatura.",
    "tags": ["ciclídeo", "alta temperatura", "sensível"]
  },
  {
    "name": "Apistogramma spp.",
    "common": "Apistogramma / ciclídeo anão",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Territorial pequeno",
    "size": "5–8 cm",
    "tank": "60 L+",
    "temp": "24–28 °C",
    "ph": "5.0–7.2",
    "zone": "Fundo/meio",
    "school": "Casal/trio conforme espécie",
    "diet": "Microcarnívoro",
    "summary": "Ciclídeos anões com comportamento interessante e reprodução territorial.",
    "care": "Ofereça cavernas, folhas e território visualmente quebrado. Não misture muitos machos em pouco espaço.",
    "tags": ["ciclídeo anão", "blackwater", "territorial"]
  },
  {
    "name": "Mikrogeophagus ramirezi",
    "common": "Ramirezi",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico territorial",
    "size": "5–7 cm",
    "tank": "60 L+",
    "temp": "27–30 °C",
    "ph": "5.5–7.0",
    "zone": "Fundo/meio",
    "school": "Casal",
    "diet": "Microcarnívoro",
    "summary": "Ciclídeo anão colorido, de água quente e muito estável.",
    "care": "Evite aquários recém montados e espécies de água fria. Sensível a nitrato alto.",
    "tags": ["ciclídeo anão", "quente", "casal"]
  },
  {
    "name": "Pelvicachromis pulcher",
    "common": "Kribensis",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Territorial na reprodução",
    "size": "8–10 cm",
    "tank": "80 L+",
    "temp": "24–27 °C",
    "ph": "6.0–7.8",
    "zone": "Fundo/meio",
    "school": "Casal",
    "diet": "Onívoro",
    "summary": "Ciclídeo africano de rio, resistente e com cuidado parental marcante.",
    "care": "Casal reproduzido pode defender território com força. Use tocas e companheiros rápidos.",
    "tags": ["ciclídeo", "toca", "parental"]
  },
  {
    "name": "Amatitlania nigrofasciata",
    "common": "Ciclídeo convicto",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Agressivo reprodutivo",
    "size": "10–15 cm",
    "tank": "120 L+",
    "temp": "22–28 °C",
    "ph": "6.5–8.0",
    "zone": "Fundo/meio",
    "school": "Casal ou espécie única",
    "diet": "Onívoro",
    "summary": "Extremamente resistente e reprodutor, mas agressivo ao cuidar de filhotes.",
    "care": "Não é bom para comunitário pacífico. Planeje separações e controle de reprodução.",
    "tags": ["ciclídeo", "agressivo", "reproduz fácil"]
  },
  {
    "name": "Astronotus ocellatus",
    "common": "Oscar / apaiari",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Predador territorial",
    "size": "30–35 cm",
    "tank": "300 L+ para 1",
    "temp": "24–28 °C",
    "ph": "6.0–7.8",
    "zone": "Meio/fundo",
    "school": "Solo/casal planejado",
    "diet": "Carnívoro/onívoro",
    "summary": "Ciclídeo grande, inteligente e muito sujão. Precisa de espaço e filtragem forte.",
    "care": "Não cabe em aquário pequeno. Pode comer qualquer peixe que caiba na boca.",
    "tags": ["ciclídeo grande", "predador", "alta carga"]
  },
  {
    "name": "Mbuna / Haplochromis / Peacock",
    "common": "Ciclídeos africanos do Malawi",
    "water": "Doce alcalina",
    "difficulty": "Intermediário",
    "temper": "Agressivo territorial",
    "size": "8–20 cm",
    "tank": "200 L+",
    "temp": "24–27 °C",
    "ph": "7.8–8.6",
    "zone": "Meio/fundo",
    "school": "Harém/grupo específico",
    "diet": "Varia; muitos herbívoros",
    "summary": "Cores fortes e comportamento intenso em água dura e alcalina.",
    "care": "Não misture aleatoriamente com amazônicos. Layout rochoso e pesquisa por grupo são obrigatórios.",
    "tags": ["ciclídeo africano", "água alcalina", "rochoso"]
  },
  {
    "name": "Neolamprologus spp.",
    "common": "Conchícolas do Tanganyika",
    "water": "Doce alcalina",
    "difficulty": "Intermediário",
    "temper": "Territorial pequeno",
    "size": "3–8 cm",
    "tank": "60 L+",
    "temp": "24–27 °C",
    "ph": "7.8–9.0",
    "zone": "Fundo",
    "school": "Colônia conforme espécie",
    "diet": "Microcarnívoro",
    "summary": "Ciclídeos pequenos que usam conchas como abrigo e território.",
    "care": "Exigem água alcalina e substrato arenoso. Muito comportamento em pouco espaço bem planejado.",
    "tags": ["tanganyika", "conchas", "territorial"]
  },
  {
    "name": "Corydoras spp.",
    "common": "Corydoras",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "4–8 cm",
    "tank": "60 L+",
    "temp": "22–27 °C",
    "ph": "6.0–7.8",
    "zone": "Fundo",
    "school": "6+ indivíduos",
    "diet": "Onívoro de fundo",
    "summary": "Bagres de fundo pacíficos e sociais. Vasculham o substrato, mas não comem sujeira como solução mágica.",
    "care": "Use areia fina ou substrato liso. Precisam de ração de fundo própria.",
    "tags": ["fundo", "cardume", "areia"]
  },
  {
    "name": "Corydoras pygmaeus/habrosus",
    "common": "Corydora pigmeu/anã",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "2.5–3.5 cm",
    "tank": "40 L+",
    "temp": "22–26 °C",
    "ph": "6.2–7.6",
    "zone": "Fundo/meio",
    "school": "8+ indivíduos",
    "diet": "Micro-onívoro",
    "summary": "Versão nano das corydoras, excelente para plantados pequenos.",
    "care": "Não combine com peixes grandes. Alimente com microtabletes que afundam.",
    "tags": ["nano", "fundo", "cardume"]
  },
  {
    "name": "Ancistrus spp.",
    "common": "Cascudo ancistrus / bristlenose pleco",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico territorial",
    "size": "10–15 cm",
    "tank": "80 L+",
    "temp": "23–28 °C",
    "ph": "6.0–7.8",
    "zone": "Fundo/vidros",
    "school": "Solo/casal",
    "diet": "Onívoro herbívoro",
    "summary": "Cascudo menor que plecos comuns, útil em comunitários médios.",
    "care": "Precisa de tronco, esconderijo e alimentação vegetal. Não vive só de algas.",
    "tags": ["cascudo", "tronco", "vegetal"]
  },
  {
    "name": "Otocinclus spp.",
    "common": "Otocinclus / limpa-vidro pequeno",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico",
    "size": "3–5 cm",
    "tank": "50 L+ maduro",
    "temp": "22–27 °C",
    "ph": "6.0–7.6",
    "zone": "Vidros/plantas",
    "school": "6+ indivíduos",
    "diet": "Biofilme/vegetal",
    "summary": "Pequeno comedor de biofilme, ótimo para aquários plantados maduros.",
    "care": "Não coloque em aquário novo sem algas/biofilme. Complemente com vegetais e rações específicas.",
    "tags": ["algas", "plantado", "sensível"]
  },
  {
    "name": "Sewellia / Gastromyzon spp.",
    "common": "Hillstream loach / borboleta",
    "water": "Doce fria/subtropical",
    "difficulty": "Avançado",
    "temper": "Pacífico",
    "size": "5–8 cm",
    "tank": "80 L+",
    "temp": "18–24 °C",
    "ph": "6.5–7.8",
    "zone": "Fundo/rochas",
    "school": "Grupo",
    "diet": "Biofilme/aufwuchs",
    "summary": "Peixe de riacho com necessidade de muita oxigenação e correnteza.",
    "care": "Não é peixe tropical quente. Precisa de rochas, fluxo e água muito limpa.",
    "tags": ["correnteza", "água fria", "oxigênio"]
  },
  {
    "name": "Pangio kuhlii",
    "common": "Cobrinha kuhli",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico tímido",
    "size": "8–12 cm",
    "tank": "70 L+",
    "temp": "24–28 °C",
    "ph": "5.5–7.5",
    "zone": "Fundo",
    "school": "6+ indivíduos",
    "diet": "Onívoro de fundo",
    "summary": "Loach noturno e pacífico, gosta de esconderijos e substrato macio.",
    "care": "Use tampa e entradas de filtro protegidas. Não deve viver isolado.",
    "tags": ["fundo", "noturno", "esconderijos"]
  },
  {
    "name": "Chromobotia macracanthus",
    "common": "Bótia palhaço",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Pacífico grande",
    "size": "25–35 cm",
    "tank": "450 L+",
    "temp": "25–30 °C",
    "ph": "6.0–7.5",
    "zone": "Fundo",
    "school": "5+ indivíduos",
    "diet": "Onívoro",
    "summary": "Popular, mas cresce muito e vive em grupo. Não é solução para caramujos em aquário pequeno.",
    "care": "Somente para tanques grandes e maduros. Sensível a medicamentos e água ruim.",
    "tags": ["grande", "grupo", "avançado"]
  },
  {
    "name": "Crossocheilus oblongus/langei",
    "common": "Comedor de algas siamês",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico ativo",
    "size": "12–15 cm",
    "tank": "120 L+",
    "temp": "22–27 °C",
    "ph": "6.0–7.8",
    "zone": "Fundo/meio",
    "school": "Grupo ou solo",
    "diet": "Onívoro/algas",
    "summary": "Bom auxiliar contra algumas algas, mas precisa de espaço e alimentação completa.",
    "care": "Cuidado com falsas espécies vendidas como SAE. Adultos ficam ativos e robustos.",
    "tags": ["algas", "ativo", "asiático"]
  },
  {
    "name": "Carassius auratus",
    "common": "Kinguio / goldfish",
    "water": "Doce fria",
    "difficulty": "Intermediário",
    "temper": "Pacífico sujão",
    "size": "20–30+ cm",
    "tank": "120 L+ primeiro",
    "temp": "16–24 °C",
    "ph": "7.0–8.2",
    "zone": "Todos",
    "school": "Grupo se houver espaço",
    "diet": "Onívoro herbívoro",
    "summary": "Peixe de água fria que produz muita carga orgânica e precisa de volume grande.",
    "care": "Não é peixe de beteira. Não misture com tropicais quentes. Filtragem superdimensionada é fundamental.",
    "tags": ["água fria", "alta carga", "grande"]
  },
  {
    "name": "Cyprinus rubrofuscus",
    "common": "Carpa koi",
    "water": "Lago",
    "difficulty": "Avançado",
    "temper": "Pacífico grande",
    "size": "60–90 cm",
    "tank": "Lago 3.000 L+",
    "temp": "10–26 °C",
    "ph": "7.0–8.5",
    "zone": "Todos",
    "school": "Grupo",
    "diet": "Onívoro",
    "summary": "Peixe de lago, muito longevo e grande, inadequado para aquário comum.",
    "care": "Precisa de lago profundo, filtragem biológica grande e manejo sazonal.",
    "tags": ["lago", "muito grande", "longevo"]
  },
  {
    "name": "Nothobranchius / Aphyosemion spp.",
    "common": "Killifish",
    "water": "Doce tropical/subtropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico específico",
    "size": "4–7 cm",
    "tank": "30 L+ espécie única",
    "temp": "20–26 °C",
    "ph": "5.5–7.5",
    "zone": "Meio/superfície",
    "school": "Casal/trio",
    "diet": "Microcarnívoro",
    "summary": "Peixes pequenos, coloridos, muitos com ciclos de vida e reprodução específicos.",
    "care": "Use tampa: saltam muito. Pesquise espécie, pois parâmetros variam bastante.",
    "tags": ["saltador", "espécie específica", "colorido"]
  },
  {
    "name": "Osteoglossum bicirrhosum",
    "common": "Aruanã prateada",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Predador grande",
    "size": "70–90 cm",
    "tank": "1000 L+",
    "temp": "24–30 °C",
    "ph": "6.0–7.5",
    "zone": "Superfície",
    "school": "Solo",
    "diet": "Carnívoro",
    "summary": "Peixe majestoso, mas enorme e saltador. Requer aquário gigante.",
    "care": "Não compre por impulso. Tampa reforçada e espaço real são obrigatórios.",
    "tags": ["predador", "gigante", "saltador"]
  },
  {
    "name": "Carinotetraodon travancoricus",
    "common": "Baiacu anão / pea puffer",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Territorial mordiscador",
    "size": "2.5–3 cm",
    "tank": "40 L+ espécie única",
    "temp": "24–28 °C",
    "ph": "6.8–7.8",
    "zone": "Meio/fundo",
    "school": "Grupo planejado",
    "diet": "Carnívoro",
    "summary": "Mini baiacu de água doce com personalidade forte e dieta carnívora.",
    "care": "Não é comunitário seguro. Precisa de caramujos/alimentos congelados e muitas barreiras visuais.",
    "tags": ["baiacu", "mordiscador", "carnívoro"]
  },
  {
    "name": "Kryptopterus vitreolus",
    "common": "Peixe-gato vidro",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico tímido",
    "size": "6–8 cm",
    "tank": "80 L+",
    "temp": "23–27 °C",
    "ph": "6.0–7.5",
    "zone": "Meio",
    "school": "6+ indivíduos",
    "diet": "Microcarnívoro",
    "summary": "Bagre transparente e delicado, prefere cardume e pouca agressividade.",
    "care": "Sensível a instabilidade; evite correnteza excessiva e companheiros agitados.",
    "tags": ["cardume", "tímido", "transparente"]
  },
  {
    "name": "Carnegiella strigata",
    "common": "Peixe-machadinha",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico",
    "size": "3–5 cm",
    "tank": "70 L+",
    "temp": "24–28 °C",
    "ph": "5.5–7.2",
    "zone": "Superfície",
    "school": "8+ indivíduos",
    "diet": "Insetívoro/micro-onívoro",
    "summary": "Peixe de superfície com formato único e comportamento de cardume.",
    "care": "Tampa obrigatória: é excelente saltador. Alimentos flutuantes pequenos são ideais.",
    "tags": ["superfície", "saltador", "cardume"]
  },
  {
    "name": "Metynnis spp.",
    "common": "Dólar de prata",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico grande",
    "size": "15–20 cm",
    "tank": "300 L+",
    "temp": "24–28 °C",
    "ph": "6.0–7.5",
    "zone": "Meio",
    "school": "5+ indivíduos",
    "diet": "Herbívoro/onívoro",
    "summary": "Parente de piranhas, mas pacífico e herbívoro. Precisa de aquário grande.",
    "care": "Pode comer plantas. Não mantenha sozinho ou em aquário pequeno.",
    "tags": ["grande", "cardume", "herbívoro"]
  },
  {
    "name": "Balantiocheilos melanopterus",
    "common": "Bala shark",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Pacífico grande",
    "size": "30–35 cm",
    "tank": "500 L+",
    "temp": "22–28 °C",
    "ph": "6.5–7.8",
    "zone": "Meio",
    "school": "5+ indivíduos",
    "diet": "Onívoro",
    "summary": "Não é tubarão; é um ciprinídeo grande, rápido e de cardume.",
    "care": "Inadequado para aquários comuns. Precisa de comprimento e grupo.",
    "tags": ["grande", "ativo", "cardume"]
  },
  {
    "name": "Epalzeorhynchos bicolor",
    "common": "Labeo bicolor / red tail shark",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Territorial",
    "size": "12–15 cm",
    "tank": "150 L+",
    "temp": "23–27 °C",
    "ph": "6.5–7.8",
    "zone": "Fundo/meio",
    "school": "Solo",
    "diet": "Onívoro/algas",
    "summary": "Peixe territorial de fundo/meio, bonito e ativo.",
    "care": "Evite manter múltiplos em aquário pequeno. Pode perseguir peixes de formato semelhante.",
    "tags": ["territorial", "solo", "ativo"]
  },
  {
    "name": "Toxotes spp.",
    "common": "Peixe-arqueiro",
    "water": "Salobra",
    "difficulty": "Avançado",
    "temper": "Predador ativo",
    "size": "15–25 cm",
    "tank": "300 L+",
    "temp": "24–28 °C",
    "ph": "7.5–8.5",
    "zone": "Superfície",
    "school": "Grupo",
    "diet": "Insetívoro/carnívoro",
    "summary": "Famoso por cuspir jatos d'água em insetos. Precisa de tanque salobro alto e espaço.",
    "care": "Não é peixe comunitário comum. Exige salinidade, tampa e alimentação apropriada.",
    "tags": ["salobra", "predador", "superfície"]
  },
  {
    "name": "Scatophagus argus",
    "common": "Scat",
    "water": "Salobra / marinho juvenil-adulto",
    "difficulty": "Avançado",
    "temper": "Pacífico grande",
    "size": "25–35 cm",
    "tank": "400 L+",
    "temp": "24–28 °C",
    "ph": "7.8–8.5",
    "zone": "Meio",
    "school": "Grupo",
    "diet": "Onívoro herbívoro",
    "summary": "Peixe salobro grande e resistente, mas com alta carga orgânica.",
    "care": "Planeje transição de salinidade conforme crescimento e filtragem robusta.",
    "tags": ["salobra", "grande", "alta carga"]
  },
  {
    "name": "Monodactylus spp.",
    "common": "Mono / peixe-mono",
    "water": "Salobra / marinho",
    "difficulty": "Avançado",
    "temper": "Pacífico ativo",
    "size": "20–25 cm",
    "tank": "350 L+",
    "temp": "24–28 °C",
    "ph": "7.8–8.5",
    "zone": "Meio",
    "school": "5+ indivíduos",
    "diet": "Onívoro",
    "summary": "Peixe prateado de cardume para ambientes salobros grandes.",
    "care": "Precisa de grupo, espaço vertical e salinidade adequada.",
    "tags": ["salobra", "cardume", "ativo"]
  },
  {
    "name": "Brachygobius spp.",
    "common": "Góbio abelha",
    "water": "Salobra leve",
    "difficulty": "Intermediário",
    "temper": "Territorial pequeno",
    "size": "2–4 cm",
    "tank": "35 L+ espécie",
    "temp": "24–28 °C",
    "ph": "7.2–8.2",
    "zone": "Fundo",
    "school": "Grupo",
    "diet": "Microcarnívoro",
    "summary": "Góbio minúsculo e territorial, muitas vezes mantido em salobra leve.",
    "care": "Geralmente não aceita ração seca no início. Forneça microalimentos congelados/vivos.",
    "tags": ["salobra", "nano", "territorial"]
  },
  {
    "name": "Dichotomyctere ocellatus",
    "common": "Baiacu figure eight",
    "water": "Salobra leve",
    "difficulty": "Intermediário",
    "temper": "Mordiscador",
    "size": "7–8 cm",
    "tank": "80 L+",
    "temp": "24–28 °C",
    "ph": "7.5–8.3",
    "zone": "Meio/fundo",
    "school": "Solo/grupo planejado",
    "diet": "Carnívoro duro",
    "summary": "Baiacu salobro com dentes que precisam de desgaste por alimentos duros.",
    "care": "Não é comunitário seguro. Ofereça caramujos/conchas e salinidade estável.",
    "tags": ["salobra", "baiacu", "dentes"]
  },
  {
    "name": "Amphiprion ocellaris/percula",
    "common": "Peixe-palhaço",
    "water": "Marinho",
    "difficulty": "Iniciante marinho",
    "temper": "Semiagressivo territorial",
    "size": "8–10 cm",
    "tank": "80 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Par",
    "diet": "Onívoro",
    "summary": "Ícone do aquarismo marinho. Não precisa obrigatoriamente de anêmona.",
    "care": "Introduza em aquário marinho ciclado. Casais defendem território.",
    "tags": ["marinho", "recife", "par"]
  },
  {
    "name": "Chrysiptera / Dascyllus spp.",
    "common": "Donzelas / damselfish",
    "water": "Marinho",
    "difficulty": "Iniciante marinho",
    "temper": "Agressivo territorial",
    "size": "5–12 cm",
    "tank": "100 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Solo/grupo grande",
    "diet": "Onívoro",
    "summary": "Resistentes e coloridas, mas muitas se tornam agressivas.",
    "care": "Não escolha só por resistência; podem dominar aquários pequenos.",
    "tags": ["marinho", "territorial", "resistente"]
  },
  {
    "name": "Gramma loreto",
    "common": "Royal gramma",
    "water": "Marinho",
    "difficulty": "Iniciante marinho",
    "temper": "Pacífico territorial",
    "size": "7–8 cm",
    "tank": "100 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Rochas/meio",
    "school": "Solo",
    "diet": "Carnívoro/onívoro",
    "summary": "Peixe de recife colorido e relativamente tranquilo, gosta de cavernas.",
    "care": "Pode ser territorial com espécies parecidas. Excelente para reef comunitário.",
    "tags": ["marinho", "recife", "caverna"]
  },
  {
    "name": "Nemateleotris magnifica",
    "common": "Firefish goby",
    "water": "Marinho",
    "difficulty": "Iniciante marinho",
    "temper": "Pacífico tímido",
    "size": "7–9 cm",
    "tank": "80 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio/fundo",
    "school": "Solo/par",
    "diet": "Planktívoro",
    "summary": "Góbio elegante, pacífico e saltador, excelente para recifes tranquilos.",
    "care": "Tampa obrigatória. Evite companheiros agressivos que o mantenham escondido.",
    "tags": ["marinho", "saltador", "pacífico"]
  },
  {
    "name": "Pterapogon kauderni",
    "common": "Banggai cardinal",
    "water": "Marinho",
    "difficulty": "Iniciante marinho",
    "temper": "Pacífico",
    "size": "7–8 cm",
    "tank": "100 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Par/grupo planejado",
    "diet": "Carnívoro",
    "summary": "Cardinal marinho de nado calmo e reprodução por incubação bucal.",
    "care": "Prefira exemplares de cativeiro. Grupos podem brigar em pouco espaço.",
    "tags": ["marinho", "cativeiro", "calmo"]
  },
  {
    "name": "Zebrasoma flavescens / tangs",
    "common": "Tang amarelo e cirurgiões",
    "water": "Marinho",
    "difficulty": "Intermediário marinho",
    "temper": "Ativo territorial",
    "size": "15–30 cm",
    "tank": "300 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Solo/grupo grande",
    "diet": "Herbívoro",
    "summary": "Peixes nadadores e herbívoros, ajudam no controle de algas mas exigem espaço.",
    "care": "Pesquise espécie: muitos tangs crescem muito. Dieta vegetal diária é essencial.",
    "tags": ["marinho", "herbívoro", "grande"]
  },
  {
    "name": "Paracanthurus hepatus",
    "common": "Tang azul / blue tang",
    "water": "Marinho",
    "difficulty": "Avançado marinho",
    "temper": "Ativo",
    "size": "25–30 cm",
    "tank": "450 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Solo",
    "diet": "Onívoro herbívoro",
    "summary": "Famoso e lindo, mas grande, ativo e sensível a estresse.",
    "care": "Não é peixe para nano reef. Precisa de nado aberto e quarentena cuidadosa.",
    "tags": ["marinho", "grande", "ativo"]
  },
  {
    "name": "Synchiropus splendidus",
    "common": "Mandarim",
    "water": "Marinho",
    "difficulty": "Avançado marinho",
    "temper": "Pacífico",
    "size": "6–8 cm",
    "tank": "200 L+ maduro",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Rochas/fundo",
    "school": "Solo/par",
    "diet": "Copépodes/microfauna",
    "summary": "Um dos peixes marinhos mais bonitos, mas depende de microfauna abundante.",
    "care": "Aquário novo raramente sustenta mandarim. Prefira animais treinados para ração/congelado.",
    "tags": ["marinho", "microfauna", "maduro"]
  },
  {
    "name": "Cryptocentrus cinctus",
    "common": "Góbio vigia amarelo",
    "water": "Marinho",
    "difficulty": "Iniciante marinho",
    "temper": "Pacífico territorial",
    "size": "8–10 cm",
    "tank": "100 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Fundo",
    "school": "Solo/par",
    "diet": "Carnívoro/onívoro",
    "summary": "Góbio de fundo que pode formar simbiose com camarão pistola.",
    "care": "Substrato e tocas ajudam. Pode saltar se assustado.",
    "tags": ["marinho", "fundo", "simbiose"]
  },
  {
    "name": "Ecsenius / Salarias spp.",
    "common": "Blênios",
    "water": "Marinho",
    "difficulty": "Iniciante marinho",
    "temper": "Pacífico territorial",
    "size": "6–14 cm",
    "tank": "100 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Rochas/fundo",
    "school": "Solo",
    "diet": "Algas/onívoro",
    "summary": "Peixes carismáticos que pousam nas rochas. Muitos beliscam algas.",
    "care": "Nem todo blênio come a mesma alga. Alguns podem beliscar corais ou disputar tocas.",
    "tags": ["marinho", "algas", "rochoso"]
  },
  {
    "name": "Halichoeres / Cirrhilabrus spp.",
    "common": "Wrasses / bodiões",
    "water": "Marinho",
    "difficulty": "Intermediário marinho",
    "temper": "Varia",
    "size": "8–20 cm",
    "tank": "150 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio/rochas",
    "school": "Solo/grupo específico",
    "diet": "Carnívoro",
    "summary": "Grupo grande e diverso, de controladores de pragas a nadadores de coluna d'água.",
    "care": "Tampa é quase sempre obrigatória. Pesquise compatibilidade com invertebrados e areia para espécies que enterram.",
    "tags": ["marinho", "saltador", "diverso"]
  },
  {
    "name": "Chromis viridis",
    "common": "Chromis verde",
    "water": "Marinho",
    "difficulty": "Iniciante marinho",
    "temper": "Pacífico ativo",
    "size": "8–10 cm",
    "tank": "150 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Grupo",
    "diet": "Planktívoro",
    "summary": "Donzela mais pacífica, com comportamento de cardume solto no recife.",
    "care": "Grupos podem reduzir com disputas internas. Alimentação frequente ajuda planktívoros.",
    "tags": ["marinho", "cardume", "ativo"]
  },
  {
    "name": "Centropyge spp.",
    "common": "Anjos anões marinhos",
    "water": "Marinho",
    "difficulty": "Intermediário marinho",
    "temper": "Semiagressivo",
    "size": "8–12 cm",
    "tank": "200 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Rochas/meio",
    "school": "Solo",
    "diet": "Onívoro/algas",
    "summary": "Anjos pequenos e muito coloridos, mas alguns beliscam corais.",
    "care": "Reef-safe com cautela. Introduza depois de peixes pacíficos menores.",
    "tags": ["marinho", "semiagressivo", "reef cautela"]
  },
  {
    "name": "Chaetodon spp.",
    "common": "Borboletas marinhas",
    "water": "Marinho",
    "difficulty": "Avançado marinho",
    "temper": "Pacífico a territorial",
    "size": "12–22 cm",
    "tank": "300 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Solo/par",
    "diet": "Especialista/onívoro",
    "summary": "Belíssimas, mas muitas têm dieta especializada e não são seguras com corais.",
    "care": "Pesquise espécie antes de comprar. Algumas recusam alimento preparado.",
    "tags": ["marinho", "dieta difícil", "corais cautela"]
  },
  {
    "name": "Balistidae spp.",
    "common": "Peixes-porco / triggerfish",
    "water": "Marinho",
    "difficulty": "Avançado marinho",
    "temper": "Agressivo predador",
    "size": "20–50 cm",
    "tank": "400 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Solo",
    "diet": "Carnívoro duro",
    "summary": "Inteligentes, fortes e muitas vezes agressivos. Podem predar invertebrados.",
    "care": "Somente com companheiros robustos e aquário grande. Mordidas podem machucar.",
    "tags": ["marinho", "predador", "grande"]
  },
  {
    "name": "Pterois spp.",
    "common": "Peixe-leão",
    "water": "Marinho",
    "difficulty": "Avançado marinho",
    "temper": "Predador",
    "size": "15–35 cm",
    "tank": "250 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Meio",
    "school": "Solo",
    "diet": "Carnívoro",
    "summary": "Predador venenoso e ornamental, incompatível com peixes pequenos.",
    "care": "Espinhos venenosos exigem cuidado. Treine para alimentos mortos e evite presas vivas como rotina.",
    "tags": ["marinho", "venenoso", "predador"]
  },
  {
    "name": "Hippocampus spp.",
    "common": "Cavalos-marinhos",
    "water": "Marinho",
    "difficulty": "Avançado marinho",
    "temper": "Pacífico lento",
    "size": "10–20 cm",
    "tank": "100 L+ espécie",
    "temp": "20–25 °C",
    "ph": "8.0–8.4",
    "zone": "Agarrado/vertical",
    "school": "Par/grupo",
    "diet": "Carnívoro pequeno",
    "summary": "Peixes marinhos lentos e delicados, melhor em aquário dedicado.",
    "care": "Fluxo moderado, poleiros e alimentação frequente. Não combine com competidores rápidos.",
    "tags": ["marinho", "espécie dedicada", "delicado"]
  },
  {
    "name": "Pygocentrus nattereri",
    "common": "Piranha vermelha",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Agressivo predador",
    "size": "25–35 cm",
    "tank": "400 L+",
    "temp": "24–28 °C",
    "ph": "5.5–7.5",
    "zone": "Meio",
    "school": "Grupo",
    "diet": "Carnívoro",
    "summary": "Piranha clássica, gregária e territorial. Não é segura para aquários comunitários.",
    "care": "Nunca misture com peixes menores. Filtragem forte e alimentação frequente. Pode morder dedos.",
    "tags": ["predador", "cardume", "carnívoro"]
  },
  {
    "name": "Cichla spp.",
    "common": "Tucunaré",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Predador ativo",
    "size": "40–70 cm",
    "tank": "800 L+",
    "temp": "24–30 °C",
    "ph": "6.0–7.5",
    "zone": "Meio/superfície",
    "school": "Solo/casal",
    "diet": "Carnívoro",
    "summary": "Predador amazônico grande e ativo. Exige espaço proporcional ao tamanho adulto.",
    "care": "Não é para iniciantes. Precisa de aquário enorme e companheiros do mesmo porte.",
    "tags": ["predador", "grande", "amazônico"]
  },
  {
    "name": "Geophagus spp.",
    "common": "Geophagus / terra engolidor",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico territorial",
    "size": "15–25 cm",
    "tank": "200 L+",
    "temp": "24–28 °C",
    "ph": "6.0–7.5",
    "zone": "Fundo",
    "school": "Grupo",
    "diet": "Onívoro",
    "summary": "Ciclídeo que engole substrato para filtrar alimento. Comportamento fascinante.",
    "care": "Use areia fina para evitar problemas digestivos. Precisa de território visualmente quebrado.",
    "tags": ["ciclídeo", "fundo", "areia"]
  },
  {
    "name": "Hemichromis guttatus",
    "common": "Peixe joia",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Territorial reprodutivo",
    "size": "8–12 cm",
    "tank": "80 L+",
    "temp": "24–28 °C",
    "ph": "6.0–7.0",
    "zone": "Meio",
    "school": "Casal",
    "diet": "Carnívoro/onívoro",
    "summary": "Ciclídeo africano colorido que forma casais territoriais na reprodução.",
    "care": "Reproduz fácil mas agressivo durante desova. Use tocas e plantas densas.",
    "tags": ["ciclídeo", "africano", "colorido"]
  },
  {
    "name": "Fundulopanchax gardneri",
    "common": "Killifish africano",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico específico",
    "size": "5–7 cm",
    "tank": "30 L+ espécie",
    "temp": "22–26 °C",
    "ph": "6.0–7.5",
    "zone": "Meio/superfície",
    "school": "Casal",
    "diet": "Insetívoro",
    "summary": "Killifish africano resistente e colorido, mais fácil que manyos americanos.",
    "care": "Use tampa: saltam. Reproduz em substrato úmido. Aquário plantado é ideal.",
    "tags": ["killifish", "colorido", "africano"]
  },
  {
    "name": "Trichopodus trichopterus",
    "common": "Gourami azul / three-spot",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Territorial",
    "size": "12–15 cm",
    "tank": "100 L+",
    "temp": "24–28 °C",
    "ph": "6.0–7.5",
    "zone": "Superfície/meio",
    "school": "Solo/casal",
    "diet": "Onívoro",
    "summary": "Labiríntido maior que os anões, territorial em aquários apertados.",
    "care": "Precisa de espaço. Evite companheiros de nadadeira longa. Variante 'gold' é comum.",
    "tags": ["labiríntido", "territorial", "grande"]
  },
  {
    "name": "Prochilodus lineatus",
    "common": "Curimba",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico cardume",
    "size": "30–40 cm",
    "tank": "500 L+",
    "temp": "22–28 °C",
    "ph": "6.5–7.5",
    "zone": "Fundo",
    "school": "6+ indivíduos",
    "diet": "Detritívoro/herbívoro",
    "summary": "Cardume de fundo que vasculha substrato. Cresce muito e precisa de volume.",
    "care": "Não é para aquários comuns. Precisa de grupo e espaço para nadar.",
    "tags": ["fundo", "grande", "cardume"]
  },
  {
    "name": "Scolopsis bilineata",
    "common": "Monocle bream",
    "water": "Marinho",
    "difficulty": "Intermediário marinho",
    "temper": "Territorial pequeno",
    "size": "15–20 cm",
    "tank": "200 L+",
    "temp": "24–27 °C",
    "ph": "8.0–8.4",
    "zone": "Fundo/meio",
    "school": "Solo",
    "diet": "Carnívoro",
    "summary": "Peixe marinho de fundo com comportamento de caça ativo sobre a areia.",
    "care": "Territorial com peixes de formato semelhante. Precisa de areia para forragear.",
    "tags": ["marinho", "fundo", "territorial"]
  },
  {
    "name": "Synodontis nigriventris",
    "common": "Cascudo invertido",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "8–10 cm",
    "tank": "80 L+",
    "temp": "22–27 °C",
    "ph": "6.0–7.8",
    "zone": "Meio (nada de cabeça para baixo)",
    "school": "Grupo",
    "diet": "Onívoro",
    "summary": "Bagre africano que nada de cabeça para baixo, capturando alimentos na superfície.",
    "care": "Noturno e tímido. Mantenha grupo e ofereça esconderijos. Alimente ao entardecer.",
    "tags": ["bagre", "africano", "noturno"]
  },
  {
    "name": "Puntius pentazona",
    "common": "Barbo pentazônico",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacífico",
    "size": "4–5 cm",
    "tank": "40 L+",
    "temp": "22–26 °C",
    "ph": "5.5–7.0",
    "zone": "Meio",
    "school": "6+ indivíduos",
    "diet": "Onívoro",
    "summary": "Barbo pequeno e pacífico com faixas verticais marcantes.",
    "care": "Fica melhor em águas levemente ácidas. Evite mordiscadores de nadadeiras.",
    "tags": ["barbo", "pacífico", "plantado"]
  },
  {
    "name": "Pangasius sanitwongsei",
    "common": "Peixe-gato gigante / pará",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Pacífico gigante",
    "size": "100+ cm",
    "tank": "Lago 5.000 L+",
    "temp": "24–28 °C",
    "ph": "6.5–7.5",
    "zone": "Todos",
    "school": "Solo",
    "diet": "Onívoro",
    "summary": "Bagre gigante do Sudeste Asiático. Vende como filhote minúsculo mas cresce enormemente.",
    "care": "NUNCA compre filhote para aquário comum. Precisa de lago ou tanque externo gigante.",
    "tags": ["gigante", "erroneamente-vendido", "lago"]
  },
  {
    "name": "Leporinus fasciatus",
    "common": "Leporinus / acari-acu",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico ativo",
    "size": "25–30 cm",
    "tank": "250 L+",
    "temp": "22–27 °C",
    "ph": "6.0–7.5",
    "zone": "Meio",
    "school": "Grupo",
    "diet": "Onívoro",
    "summary": "Ciprinídeo listrado, ativo e resistente, com dentes que marcam.",
    "care": "Pode morder plantas e nadadeiras de companheiros lentos. Precisa de espaço.",
    "tags": ["ativo", "listrado", "grande"]
  },
  {
    "name": "Microsynodontis lamberti",
    "common": "Bagre diamante",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacífico tímido",
    "size": "5–7 cm",
    "tank": "60 L+",
    "temp": "23–27 °C",
    "ph": "6.0–7.2",
    "zone": "Fundo",
    "school": "6+ indivíduos",
    "diet": "Insetívoro",
    "summary": "Bagre africano pequeno e translúcido, ideal para plantados maduros.",
    "care": "Noturno e esquivo. Precisa de esconderijos e substrato macio. Grupo reduz estresse.",
    "tags": ["bagre", "nano", "africano"]
  },
  {
    "name": "Selenotoca multifasciata",
    "common": "Scat listrado",
    "water": "Salobra",
    "difficulty": "Intermediário",
    "temper": "Pacífico ativo",
    "size": "20–25 cm",
    "tank": "200 L+",
    "temp": "24–28 °C",
    "ph": "7.5–8.5",
    "zone": "Meio",
    "school": "5+ indivíduos",
    "diet": "Onívoro",
    "summary": "Parente do scat comum mas com listras verticais mais marcadas.",
    "care": "Precisa de salinidade gradual e espaço. Cresce bastante para um salobro.",
    "tags": ["salobra", "ativo", "listrado"]
  }
];

/* ── Invertebrados ── */
const invertData = [
  {
    "name": "Neocaridina davidi",
    "common": "Camarão cherry",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "20–28 °C",
    "ph": "6.0–8.0",
    "diet": "Detritívoro / algas",
    "summary": "Camarão colorido e resistente. Excelente para controle de algas e limpeza. Se reproduz facilmente em cativeiro.",
    "care": "Sensível a pesticidas e cobre. Não usar medicamentos com cobre no aquário. Evitar peixes predadores.",
    "tags": ["limpeza", "algas", "reprodutor", "nano"]
  },
  {
    "name": "Neocaridina davidi (Blue)",
    "common": "Camarão azul",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "20–28 °C",
    "ph": "6.0–8.0",
    "diet": "Detritívoro / algas",
    "summary": "Variante azul do camarão cherry. Mesmos cuidados e comportamento. Manter separado de outras cores para preservar a coloração.",
    "care": "Não misturar com outras cores de Neocaridina. Sensível a cobre e pesticidas.",
    "tags": ["limpeza", "algas", "colorido", "nano"]
  },
  {
    "name": "Caridina cantonensis",
    "common": "Camarão crystal red",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "22–26 °C",
    "ph": "5.5–6.8",
    "diet": "Detritívoro / algas",
    "summary": "Camarão ornamentai de águas macias e ácidas. Coloração branca e vermelha marcante. Mais exigente que o cherry.",
    "care": "Água macia e levemente ácida (GH 4-6, KH 0-2). Usar substrato active. Sensível a flutuações de parâmetros.",
    "tags": ["ornamental", "soft water", "exigente"]
  },
  {
    "name": "Macrobrachium rosenbergii",
    "common": "Camarão-gigante de rios",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Territorial",
    "size": "15–20 cm",
    "tank": "100 L+",
    "temp": "24–30 °C",
    "ph": "6.5–8.0",
    "diet": "Onívoro",
    "summary": "Camarão de grande porte que pode se tornar territorial. Precisa de espaço e esconderijos. Não indicado para comunitários.",
    "care": "Pode ser agressivo com camarões menores. Precisa de água limpa e oxigenada. Cresce rápido.",
    "tags": ["grande", "territorial", "rio"]
  },
  {
    "name": "Atyopsis moluccensis",
    "common": "Camarão sieve / filter",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Pacifico",
    "size": "8–10 cm",
    "tank": "40 L+",
    "temp": "22–28 °C",
    "ph": "6.0–7.5",
    "diet": "Filtrador",
    "summary": "Camarão filtrador que se alimenta de micropartículas suspensas na água. Comportamento pacífico e interessante.",
    "care": "Precisa de correnteza para se alimentar. Alimentação complementar com pó filtrante. Não competir por comida com peixes rápidos.",
    "tags": ["filtrador", "pacífico", "interessante"]
  },
  {
    "name": "Caridina logemanni",
    "common": "Camarão amano",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "4–6 cm",
    "tank": "20 L+",
    "temp": "20–26 °C",
    "ph": "6.0–7.5",
    "diet": "Detritívoro / algas",
    "summary": "Camarão Amano — o melhor limpador de algas filamentosas. Não se reproduz em água doce (larvas precisam de sal).",
    "care": "Excelente para controlar algas. Não se reproduz em cativeiro. Pode ser comido por peixes grandes.",
    "tags": ["limpeza", "algas", "filamentosas"]
  },
  {
    "name": "Neocaridina davidi (Snow)",
    "common": "Camarão snow white",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "20–28 °C",
    "ph": "6.0–8.0",
    "diet": "Detritívoro / algas",
    "summary": "Variante branca e translúcida do camarão cherry. Fácil de manter e reproduzir. Visual elegante.",
    "care": "Mesmos cuidados do cherry. Evitar misturar com outras cores de Neocaridina.",
    "tags": ["limpeza", "branco", "nano"]
  },
  {
    "name": "Neocaridina davidi (Orange)",
    "common": "Camarão orange",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "20–28 °C",
    "ph": "6.0–8.0",
    "diet": "Detritívoro / algas",
    "summary": "Variante laranja vibrante do camarão cherry. Mantém boa coloração em águas levemente alcalinas.",
    "care": "Mesmos cuidados do cherry. A coloração laranja se intensifica com fundo escuro.",
    "tags": ["limpeza", "colorido", "nano"]
  },
  {
    "name": "Caridina cf. cantonensis (Taiwan Bee)",
    "common": "Camarão Taiwan Bee",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "20–24 °C",
    "ph": "5.0–6.2",
    "diet": "Detritívoro / algas",
    "summary": "Linagem selecta de Crystal Red/Black. Cores intensas (Pinto, Shadow, King Kong). Exigente em parâmetros.",
    "care": "Água muito macia (GH 4-6, KH 0-2, TDS 100-140). Substrato active obrigatório. Temperatura estável é crítica.",
    "tags": ["ornamental", "exigente", "selecta"]
  },
  {
    "name": "Caridina dennerli",
    "common": "Camarão sulawesi",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Avançado",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "20 L+",
    "temp": "26–30 °C",
    "ph": "7.5–8.5",
    "diet": "Detritívoro / algas",
    "summary": "Camarão endêmico do Lago Matano, Sulawesi. Coloração azul-escura com manchas vermelhas. Águas alcalinas e quentes.",
    "care": "Água quente e alcalina (diferente da maioria dos camarões). Manter em espécie. Precisa de algas no aquário.",
    "tags": ["sulawesi", "alcalino", "endêmico"]
  },
  {
    "name": "Amano caridina",
    "common": "Camarão limpa-filtro",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "5–7 cm",
    "tank": "20 L+",
    "temp": "20–26 °C",
    "ph": "6.0–7.5",
    "diet": "Detritívoro / algas",
    "summary": "Camarão Amano de maior porte. Excelente limpador de algas e detritos. Não se reproduz em água doce.",
    "care": "Não confundir com camarão amano comum (maior). Precisa de水量 abundante. Evitar peixes grandes.",
    "tags": ["limpeza", "algas", "grande"]
  },
  {
    "name": "Caridina multidentata",
    "common": "Caramujo neritina",
    "category": "Caracol",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "22–28 °C",
    "ph": "7.0–8.5",
    "diet": "Algas / raspador",
    "summary": "Caracol ninja — excelente raspador de algas em vidro e decoração. Não se reproduz em água doce (larvas precisam de sal).",
    "care": "Pode deixar ovos brancos incrustados no vidro (inofensivos). Não consegue virar de costas se cair de cabeça para baixo.",
    "tags": ["limpeza", "algas", "vidro"]
  },
  {
    "name": "Pomacea bridgesii",
    "common": "Caracol apple / mystery",
    "category": "Caracol",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "4–6 cm",
    "tank": "20 L+",
    "temp": "20–28 °C",
    "ph": "7.0–8.0",
    "diet": "Onívoro / algas",
    "summary": "Caracol grande e colorido. Excelente para limpeza. Diferente do mystery snail, não come plantas vivas saudáveis.",
    "care": "Precisa de cálcio para a concha. Pode se reproduzir rapidamente. As fêmeas colocam ovos acima da linha d'água.",
    "tags": ["limpeza", "grande", "colorido"]
  },
  {
    "name": "Planorbarius corneus",
    "common": "Caracol planorbidae",
    "category": "Caracol",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "15–28 °C",
    "ph": "6.5–8.0",
    "diet": "Algas / detritos",
    "summary": "Caracol em espiral. Comestível para peixes grandes. Alimenta-se de algas e detritos. Se reproduz rapidamente.",
    "care": "Pode se tornar pragă se não controlado. Peixes como bettas e molinésias comem os filhotes. Remover ovos se necessário.",
    "tags": ["limpeza", "reprodutor", "alimento"]
  },
  {
    "name": "Assassina (Clea helena)",
    "common": "Caracol assassino",
    "category": "Caracol",
    "water": "Doce tropical",
    "difficulty": "Intermediário",
    "temper": "Predador",
    "size": "2–3 cm",
    "tank": "20 L+",
    "temp": "22–28 °C",
    "ph": "6.5–8.0",
    "diet": "Carnívoro",
    "summary": "Caracol predador que controla populações de planorbidas e outros caracóis pragă. Não se reproduz em água doce.",
    "care": "Come outros caracóis. Usar para controle de pragă. Não mantê-lo sem suplementação (pode morrer de fome).",
    "tags": ["predador", "controle", "pragă"]
  },
  {
    "name": "Neocaridina davidi (Green)",
    "common": "Camarão green jade",
    "category": "Camarão",
    "water": "Doce tropical",
    "difficulty": "Iniciante",
    "temper": "Pacifico",
    "size": "2–3 cm",
    "tank": "10 L+",
    "temp": "20–28 °C",
    "ph": "6.0–8.0",
    "diet": "Detritívoro / algas",
    "summary": "Variante verde escura do camarão cherry. Menos comum que as outras cores. Manter separado para preservar coloração.",
    "care": "Mesmos cuidados do cherry. A coloração verde se destaca em fundo escuro.",
    "tags": ["limpeza", "verde", "nano"]
  }
];

/* ── Plantas Aquáticas ── */
const plantData = [
  {
    "name": "Eleocharis sp.",
    "common": "Hairgrass / Erva-d'água",
    "category": "Foreground",
    "difficulty": "Intermediário",
    "light": "Alta",
    "co2": "Recomendado",
    "substrate": "Areia fina ou substrato nutritivo",
    "growth": "Rápido",
    "zone": "Fundo",
    "height": "5–10 cm",
    "summary": "Gramínea fina que forma tapete verde. Ideal para foreground de planted tank.",
    "care": "Necessita boa iluminação para se espalhar. Pode flutuar se não enraizado. Pode ser usado comSchedulers.",
    "tags": ["foreground", "tapete", "planted"]
  },
  {
    "name": "Micranthemum 'Monte Carlo'",
    "common": "Monte Carlo",
    "category": "Foreground",
    "difficulty": "Intermediário",
    "light": "Alta",
    "co2": "Recomendado",
    "substrate": "Substrato nutritivo",
    "growth": "Rápido",
    "zone": "Fundo",
    "height": "3–5 cm",
    "summary": "Planta tapete de crescimento rápido. Forma almofadas verdes densas. Popular em Iwagumi.",
    "care": "Precisa de muita luz e CO2 para manter crescimento rasteiro. Sem esses, fica leggier.",
    "tags": ["foreground", "iwagumi", "tapete"]
  },
  {
    "name": "Marsilea hirsuta",
    "common": "Marsilea / Trevo aquático",
    "category": "Foreground",
    "difficulty": "Iniciante",
    "light": "Baixa a Média",
    "co2": "Opcional",
    "substrate": "Qualquer substrato",
    "growth": "Médio",
    "zone": "Fundo",
    "height": "5–10 cm",
    "summary": "Planta em formato de trevo. Tolerante a baixa luz. Forma tapete denso com tempo.",
    "care": "Fácil de manter. Cresce melhor com luz moderada. Pode flutuar inicialmente até enraizar.",
    "tags": ["foreground", "fácil", "tolerante"]
  },
  {
    "name": "Cryptocoryne parva",
    "common": "Crypt parva",
    "category": "Foreground",
    "difficulty": "Iniciante",
    "light": "Baixa a Média",
    "co2": "Opcional",
    "substrate": "Qualquer substrato",
    "growth": "Lento",
    "zone": "Fundo",
    "height": "3–6 cm",
    "summary": "Menor espécie de Cryptocoryne. Crescimento muito lento mas extremamente resistente.",
    "care": "Excelente para baixa luz. Pode levar semanas para se estabelecer. Não mexer após plantar.",
    "tags": ["foreground", "lento", "resistente"]
  },
  {
    "name": "Anubias barteri var. nana",
    "common": "Anubias nana",
    "category": "Midground",
    "difficulty": "Iniciante",
    "light": "Baixa",
    "co2": "Não necessário",
    "substrate": "Driftrock / pedra (não enterrar rizoma)",
    "growth": "Lento",
    "zone": "Meio",
    "height": "5–15 cm",
    "summary": "Planta resistente e versátil. Pode ser amarrada em madeira ou pedra. Indestrutível.",
    "care": "NUNCA enterrar o rizoma — causa apodrecimento. Cresce melhor em locais com pouca luz para evitar algas nas folhas.",
    "tags": ["resistente", "low tech", "driftwood"]
  },
  {
    "name": "Anubias barteri",
    "common": "Anubias barteri",
    "category": "Midground",
    "difficulty": "Iniciante",
    "light": "Baixa",
    "co2": "Não necessário",
    "substrate": "Driftrock / pedra",
    "growth": "Lento",
    "zone": "Meio",
    "height": "15–30 cm",
    "summary": "Versão maior do Anubias. Folhas grandes e resistentes. Perfeita para.Background em tanques grandes.",
    "care": "Mesmos cuidados do nana. Folhas grandes podem acumular algas se a iluminação for muito forte.",
    "tags": ["resistente", "low tech", "folhas grandes"]
  },
  {
    "name": "Microsorum pteropus",
    "common": "Java Fern",
    "category": "Midground",
    "difficulty": "Iniciante",
    "light": "Baixa a Média",
    "co2": "Não necessário",
    "substrate": "Driftrock / pedra",
    "growth": "Médio",
    "zone": "Meio",
    "height": "15–30 cm",
    "summary": "Clássica planta aquática. Folhas resistentes em formato de fita. Amarrada em madeira ou pedra.",
    "care": "NUNCA enterrar rizoma. Propagação por folhas — cortar folha madura e colocar no substrato.",
    "tags": ["resistente", "low tech", "propagação fácil"]
  },
  {
    "name": "Cryptocoryne wendtii",
    "common": "Crypt wendtii",
    "category": "Midground",
    "difficulty": "Iniciante",
    "light": "Baixa a Média",
    "co2": "Opcional",
    "substrate": "Substrato nutritivo",
    "growth": "Médio",
    "zone": "Meio",
    "height": "10–20 cm",
    "summary": "Planta muito popular em variedades verde e marrom. Tolerante e bonita.",
    "care": "Pode sofrer 'crypt melt' ao ser replantada — perde folhas mas revida. Não desistir.",
    "tags": ["resistente", "variável", "popular"]
  },
  {
    "name": "Bucephalandra sp.",
    "common": "Bucephalandra",
    "category": "Midground",
    "difficulty": "Intermediário",
    "light": "Baixa a Média",
    "co2": "Opcional",
    "substrate": "Driftrock / pedra",
    "growth": "Lento",
    "zone": "Meio",
    "height": "5–15 cm",
    "summary": "Planta epífita de Bornéu. Folhas com textura única. Muitas variedades com cores diferentes.",
    "care": "Similar ao Anubias — amarrar em madeira/pedra. Crescimento lento. Evitar algas nas folhas.",
    "tags": ["epífita", "ornamental", "bornéu"]
  },
  {
    "name": "Vallisneria spiralis",
    "common": "Vallisneria",
    "category": "Background",
    "difficulty": "Iniciante",
    "light": "Média",
    "co2": "Opcional",
    "substrate": "Substrato nutritivo",
    "growth": "Rápido",
    "zone": "Fundo",
    "height": "30–60 cm",
    "summary": "Planta em fita que forma cortina verde no fundo. Se propaga por stolons.",
    "care": "Cresce rápido e pode bloquear luz. Cortar folhas mais antigas. Excelente para iniciantes.",
    "tags": ["background", "rápido", "cortina"]
  },
  {
    "name": "Echinodorus bleheri",
    "common": "Espada-amazônica",
    "category": "Background",
    "difficulty": "Iniciante",
    "light": "Média",
    "co2": "Opcional",
    "substrate": "Substrato nutritivo",
    "growth": "Médio",
    "zone": "Fundo",
    "height": "30–50 cm",
    "summary": "Planta icônica de aquário. Folhas grandes em formato de espada. Tolerante e imponente.",
    "care": "Precisa de substrato nutritivo rico. Folhas podem ficar transparentes se faltar nutriente.",
    "tags": ["background", "clássica", "grande"]
  },
  {
    "name": "Rotala rotundifolia",
    "common": "Rotala",
    "category": "Background",
    "difficulty": "Intermediário",
    "light": "Alta",
    "co2": "Recomendado",
    "substrate": "Substrato nutritivo",
    "growth": "Rápido",
    "zone": "Fundo",
    "height": "20–40 cm",
    "summary": "Planta de haste que desenvolve cores avermelhadas com boa iluminação. Popular em layouts.",
    "care": "Precisa de muita luz e CO2 para coloração vermelha. Pode ficar verde em baixa luz.",
    "tags": ["background", "vermelho", "alta luz"]
  },
  {
    "name": "Ludwigia repens",
    "common": "Ludwigia",
    "category": "Background",
    "difficulty": "Iniciante",
    "light": "Média a Alta",
    "co2": "Opcional",
    "substrate": "Substrato nutritivo",
    "growth": "Médio",
    "zone": "Meio/Fundo",
    "height": "15–30 cm",
    "summary": "Planta com folhas que variam de verde a laranja/vermelho. Crescimento horizontal e vertical.",
    "care": "Fácil de propagar — cortar haste e replantar. Cores melhores com mais luz.",
    "tags": ["background", "colorido", "fácil"]
  },
  {
    "name": "Hygrophila polysperma",
    "common": "Hygrophila",
    "category": "Background",
    "difficulty": "Iniciante",
    "light": "Baixa a Alta",
    "co2": "Não necessário",
    "substrate": "Qualquer",
    "growth": "Muito rápido",
    "zone": "Fundo",
    "height": "30–60 cm",
    "summary": "Planta praticamente indestrutível. Cresce em qualquer condição. Pode ser considerada invasora.",
    "care": "Cresce tão rápido que precisa de podas semanais. Controlar senão domina o aquário.",
    "tags": ["background", "invasora", "fácil"]
  },
  {
    "name": "Salvinia auriculata",
    "common": "Salvinia",
    "category": "Flutuante",
    "difficulty": "Iniciante",
    "light": "Média",
    "co2": "Não necessário",
    "substrate": "Nenhuma (flutuante)",
    "growth": "Rápido",
    "zone": "Superfície",
    "height": "Flutuante",
    "summary": "Planta flutuante com folhas peludas que formam tapete na superfície. Ótima para filtragem natural.",
    "care": "Cobrir mais de 50% da superfície pode reduzir luz demais. Podar regularmente.",
    "tags": ["flutuante", "filtragem natural", "sombra"]
  },
  {
    "name": "Lemna minor",
    "common": "Duckweed / Lentilha-d'água",
    "category": "Flutuante",
    "difficulty": "Iniciante",
    "light": "Média",
    "co2": "Não necessário",
    "substrate": "Nenhuma (flutuante)",
    "growth": "Muito rápido",
    "zone": "Superfície",
    "height": "Flutuante",
    "summary": "Pequena planta flutuante que se multiplica rapidamente. Excelente absorvedora de nitratos.",
    "care": "QUASE impossível de remover uma vez estabelecida. Considerada praga por muitos aquaristas. Usar com cautela.",
    "tags": ["flutuante", "nitratos", "praga"]
  },
  {
    "name": "Riccia fluitans",
    "common": "Riccia",
    "category": "Musgo",
    "difficulty": "Intermediário",
    "light": "Média a Alta",
    "co2": "Recomendado",
    "substrate": "Amarrada em pedra/madeira",
    "growth": "Rápido",
    "zone": "Meio",
    "height": "2–5 cm",
    "summary": "Musgo aquatico que forma almofadas verde-claro. Flutua se não amarrado.",
    "care": "Precisa ser amarrado periodicamente. Pode flutuar e espalhar pela superfície. Bom para iwagumi.",
    "tags": ["musgo", "iwagumi", "amarrar"]
  },
  {
    "name": "Taxiphyllum barbieri",
    "common": "Java Moss",
    "category": "Musgo",
    "difficulty": "Iniciante",
    "light": "Baixa",
    "co2": "Não necessário",
    "substrate": "Driftrock / pedra / rede",
    "growth": "Médio",
    "zone": "Meio",
    "height": "5–15 cm",
    "summary": "Musgo mais popular em aquarismo. extremamente tolerante. Cresce em praticamente qualquer condição.",
    "care": "Amarrar ou colar em superfícies. Excelente para ninhos de reprodução e esconderijos para alevinos.",
    "tags": ["musgo", "fácil", "reprodução"]
  }
];

/* ── Comunidades Pré-montadas ── */
const communityTemplates = [
  {
    name: 'Comunitário Tropical Clássico',
    minLiters: 60,
    style: 'Comunitário',
    description: 'Um tanque equilibrado com peixes de cardume, fundo e meio. Clássico e funcionais.',
    species: [
      { name: 'Paracheirodon innesi', common: 'Neon tetra', count: 8 },
      { name: 'Corydoras paleatus', common: 'Corydoras', count: 4 },
      { name: 'Trichogaster leeri', common: 'Gourami prata', count: 2 },
      { name: 'Rasbora heteromorpha', common: 'Rasbora borboleta', count: 6 }
    ],
    tips: ['Substrato areia fina para corydoras', 'Plantas densas no fundo', 'Temperatura 24–26 °C', 'Filtro com biomídia generosa']
  },
  {
    name: 'Nano Planted',
    minLiters: 20,
    style: 'Nano / Planted',
    description: 'Tanque pequeno com planta e peixe focal. Perfeito para iniciantes em planted tank.',
    species: [
      { name: 'Betta splendens', common: 'Betta', count: 1 },
      { name: 'Neocaridina davidi', common: 'Camarão cherry', count: 6 },
      { name: 'Otocinclus vestitus', common: 'Otocinclus', count: 2 }
    ],
    tips: ['Evitar peixes que comem camarões', 'Plantas fáceis: Anubias, Java Fern', 'Filtro suave (esponja)', 'Temperatura 24–26 °C']
  },
  {
    name: 'Cardume Grande',
    minLiters: 100,
    style: 'Cardume',
    description: 'Tanque espaçoso com cardumes grandes e peixes ativos. Efeito visual impressionante.',
    species: [
      { name: 'Hyphessobrycon amandae', common: 'Tetra ember', count: 15 },
      { name: 'Trigonostigma heteromorpha', common: 'Rasbora borboleta', count: 10 },
      { name: 'Corydoras aeneus', common: 'Corydoras verde', count: 6 },
      { name: 'Poropampus opercularis', common: 'Rasbora galaxy', count: 8 }
    ],
    tips: ['Mínimo 6–8 indivíduos por espécie', 'Espaço nadar entre cardumes', 'Plantas altas nos cantos', 'Alimentação variada e moderada']
  },
  {
    name: 'Ciclídeos Anões',
    minLiters: 80,
    style: 'Ciclídeos',
    description: 'Comunidade de ciclídeos anões americanos. Territoriais mas gerenciáveis.',
    species: [
      { name: 'Apistogramma cacatuoides', common: 'Apistograma', count: 2 },
      { name: 'Mikrogeophagus ramirezi', common: 'Ramirezi', count: 2 },
      { name: 'Krebs (Kribensis)', common: 'Kribensis', count: 2 },
      { name: 'Corydoras julii', common: 'Corydoras julii', count: 4 }
    ],
    tips: ['Esconderijos com pedras e raízes', 'Territórios bem definidos', 'pH levemente ácido (6.0–6.8)', 'Evitar peixes muito rápidos']
  },
  {
    name: 'Kinguios',
    minLiters: 150,
    style: 'Kinguios',
    description: 'Tanque grande para kinguios. Produzem muita sujeira — filtragem superdimensionada.',
    species: [
      { name: 'Carassius auratus', common: 'Kinguio', count: 3 },
      { name: 'Hypostomus plecostomus', common: 'Pleco', count: 1 },
      { name: 'Caridina multidentata', common: 'Neritina', count: 3 }
    ],
    tips: ['Filtragem 10–12x o volume/hora', 'TPAs semanais de 30–40%', 'Substrato fino (sem areia grossa)', 'Temperatura 18–22 °C (frio)']
  },
  {
    name: 'Marinho Básico',
    minLiters: 100,
    style: 'Marinho',
    description: 'Introdução ao marinho com espécies resistentes e populares.',
    species: [
      { name: 'Amphiprion ocellaris', common: 'Palhaço', count: 2 },
      { name: 'Chrysiptera parasema', common: 'Damsel azul', count: 3 },
      { name: 'Gobiodon okinawae', common: 'Góbio coral', count: 2 }
    ],
    tips: ['Ciclagem marinha completa (4–6 semanas)', 'Salinidade 1.023–1.025', 'Protein skimmer obrigatório', 'Live rock como base biológica']
  },
  {
    name: 'Aqua Indígena',
    minLiters: 80,
    style: 'Indígena',
    description: 'Peixes brasileiros em layout que remete a rios naturais. Baixa manutenção.',
    species: [
      { name: 'Mimagoniates rheoplepis', common: 'Piaba de rio', count: 8 },
      { name: 'Crenicichla compressiceps', common: 'Pike', count: 1 },
      { name: 'Corydoras ehrhardti', common: 'Corydoras', count: 4 },
      { name: 'Ancistrus sp.', common: 'Acari', count: 2 }
    ],
    tips: ['Água moderadamente macia', 'Substrato de areia de rio', 'Raízes e pedras naturais', 'Iluminação moderada']
  },
  {
    name: 'Frio / Lago',
    minLiters: 40,
    style: 'Frio',
    description: 'Tanque sem aquecedor para peixes de águas frias. Ideal para iniciantes.',
    species: [
      { name: 'Carassius auratus', common: 'Kinguio', count: 2 },
      { name: 'Tanichthys albonubes', common: 'Neon de广州', count: 8 },
      { name: 'Planorbarius corneus', common: 'Planorbidae', count: 3 }
    ],
    tips: ['Sem aquecedor (15–22 °C)', 'Evitar aquecimento solar direto', 'Filtragem suave', 'Boa oxigenação']
  }
];

const fishPhotoLookup = {
  "Betta splendens": {
    "title": "Betta splendens",
    "exact": true
  },
  "Poecilia reticulata": {
    "title": "Poecilia reticulata",
    "exact": true
  },
  "Xiphophorus maculatus": {
    "title": "Xiphophorus maculatus",
    "exact": true
  },
  "Xiphophorus hellerii": {
    "title": "Xiphophorus hellerii",
    "exact": true
  },
  "Poecilia sphenops/latipinna": {
    "title": "Poecilia sphenops",
    "exact": false,
    "note": "representante do grupo molly"
  },
  "Paracheirodon innesi": {
    "title": "Paracheirodon innesi",
    "exact": true
  },
  "Paracheirodon axelrodi": {
    "title": "Paracheirodon axelrodi",
    "exact": true
  },
  "Hyphessobrycon amandae": {
    "title": "Hyphessobrycon amandae",
    "exact": true
  },
  "Gymnocorymbus ternetzi": {
    "title": "Gymnocorymbus ternetzi",
    "exact": true
  },
  "Hemigrammus bleheri": {
    "title": "Hemigrammus bleheri",
    "exact": true
  },
  "Trigonostigma heteromorpha": {
    "title": "Trigonostigma heteromorpha",
    "exact": true
  },
  "Boraras brigittae": {
    "title": "Boraras brigittae",
    "exact": true
  },
  "Danio rerio": {
    "title": "Danio rerio",
    "exact": true
  },
  "Tanichthys albonubes": {
    "title": "Tanichthys albonubes",
    "exact": true
  },
  "Oryzias latipes": {
    "title": "Oryzias latipes",
    "exact": true
  },
  "Puntius titteya": {
    "title": "Puntius titteya",
    "exact": true
  },
  "Puntigrus tetrazona": {
    "title": "Puntigrus tetrazona",
    "exact": true
  },
  "Melanotaenia spp.": {
    "title": "Melanotaenia boesemani",
    "exact": false,
    "note": "representante dos arco-íris"
  },
  "Trichogaster lalius": {
    "title": "Trichogaster lalius",
    "exact": true
  },
  "Trichopodus leerii": {
    "title": "Trichopodus leerii",
    "exact": true
  },
  "Trichogaster chuna": {
    "title": "Trichogaster chuna",
    "exact": true
  },
  "Pterophyllum scalare": {
    "title": "Pterophyllum scalare",
    "exact": true
  },
  "Symphysodon spp.": {
    "title": "Symphysodon",
    "exact": false,
    "note": "representante do grupo discus"
  },
  "Apistogramma spp.": {
    "title": "Apistogramma cacatuoides",
    "exact": false,
    "note": "representante do gênero Apistogramma"
  },
  "Mikrogeophagus ramirezi": {
    "title": "Mikrogeophagus ramirezi",
    "exact": true
  },
  "Pelvicachromis pulcher": {
    "title": "Pelvicachromis pulcher",
    "exact": true
  },
  "Amatitlania nigrofasciata": {
    "title": "Amatitlania nigrofasciata",
    "exact": true
  },
  "Astronotus ocellatus": {
    "title": "Astronotus ocellatus",
    "exact": true
  },
  "Mbuna / Haplochromis / Peacock": {
    "title": "Maylandia zebra",
    "exact": false,
    "note": "representante de ciclídeos do Malawi"
  },
  "Neolamprologus spp.": {
    "title": "Neolamprologus multifasciatus",
    "exact": false,
    "note": "representante conchícola do Tanganyika"
  },
  "Corydoras spp.": {
    "title": "Corydoras paleatus",
    "exact": false,
    "note": "representante do gênero Corydoras"
  },
  "Corydoras pygmaeus/habrosus": {
    "title": "Corydoras pygmaeus",
    "exact": false,
    "note": "representante das corydoras anãs"
  },
  "Ancistrus spp.": {
    "title": "Ancistrus cirrhosus",
    "exact": false,
    "note": "representante do gênero Ancistrus"
  },
  "Otocinclus spp.": {
    "title": "Otocinclus affinis",
    "exact": false,
    "note": "representante do gênero Otocinclus"
  },
  "Sewellia / Gastromyzon spp.": {
    "title": "Sewellia lineolata",
    "exact": false,
    "note": "representante dos hillstream loaches"
  },
  "Pangio kuhlii": {
    "title": "Pangio kuhlii",
    "exact": true
  },
  "Chromobotia macracanthus": {
    "title": "Chromobotia macracanthus",
    "exact": true
  },
  "Crossocheilus oblongus/langei": {
    "title": "Crossocheilus oblongus",
    "exact": false,
    "note": "representante dos comedores de algas siameses"
  },
  "Carassius auratus": {
    "title": "Goldfish",
    "exact": true
  },
  "Cyprinus rubrofuscus": {
    "title": "Koi",
    "exact": true
  },
  "Nothobranchius / Aphyosemion spp.": {
    "title": "Nothobranchius furzeri",
    "exact": false,
    "note": "representante de killifish"
  },
  "Osteoglossum bicirrhosum": {
    "title": "Osteoglossum bicirrhosum",
    "exact": true
  },
  "Carinotetraodon travancoricus": {
    "title": "Carinotetraodon travancoricus",
    "exact": true
  },
  "Kryptopterus vitreolus": {
    "title": "Kryptopterus vitreolus",
    "exact": true
  },
  "Carnegiella strigata": {
    "title": "Carnegiella strigata",
    "exact": true
  },
  "Metynnis spp.": {
    "title": "Metynnis argenteus",
    "exact": false,
    "note": "representante dos dólares de prata"
  },
  "Balantiocheilos melanopterus": {
    "title": "Balantiocheilos melanopterus",
    "exact": true
  },
  "Epalzeorhynchos bicolor": {
    "title": "Epalzeorhynchos bicolor",
    "exact": true
  },
  "Toxotes spp.": {
    "title": "Toxotes jaculatrix",
    "exact": false,
    "note": "representante dos peixes-arqueiro"
  },
  "Scatophagus argus": {
    "title": "Scatophagus argus",
    "exact": true
  },
  "Monodactylus spp.": {
    "title": "Monodactylus argenteus",
    "exact": false,
    "note": "representante dos monos"
  },
  "Brachygobius spp.": {
    "title": "Brachygobius xanthozona",
    "exact": false,
    "note": "representante dos góbios abelha"
  },
  "Dichotomyctere ocellatus": {
    "title": "Dichotomyctere ocellatus",
    "exact": true
  },
  "Amphiprion ocellaris/percula": {
    "title": "Amphiprion ocellaris",
    "exact": false,
    "note": "representante do grupo ocellaris/percula"
  },
  "Chrysiptera / Dascyllus spp.": {
    "title": "Chrysiptera cyanea",
    "exact": false,
    "note": "representante das donzelas"
  },
  "Gramma loreto": {
    "title": "Gramma loreto",
    "exact": true
  },
  "Nemateleotris magnifica": {
    "title": "Nemateleotris magnifica",
    "exact": true
  },
  "Pterapogon kauderni": {
    "title": "Pterapogon kauderni",
    "exact": true
  },
  "Zebrasoma flavescens / tangs": {
    "title": "Zebrasoma flavescens",
    "exact": false,
    "note": "representante dos tangs/cirurgiões"
  },
  "Paracanthurus hepatus": {
    "title": "Paracanthurus hepatus",
    "exact": true
  },
  "Synchiropus splendidus": {
    "title": "Synchiropus splendidus",
    "exact": true
  },
  "Cryptocentrus cinctus": {
    "title": "Cryptocentrus cinctus",
    "exact": true
  },
  "Ecsenius / Salarias spp.": {
    "title": "Salarias fasciatus",
    "exact": false,
    "note": "representante de blênios algueiros"
  },
  "Halichoeres / Cirrhilabrus spp.": {
    "title": "Halichoeres chrysus",
    "exact": false,
    "note": "representante dos wrasses"
  },
  "Chromis viridis": {
    "title": "Chromis viridis",
    "exact": true
  },
  "Centropyge spp.": {
    "title": "Centropyge bicolor",
    "exact": false,
    "note": "representante dos anjos anões"
  },
  "Chaetodon spp.": {
    "title": "Chaetodon auriga",
    "exact": false,
    "note": "representante dos peixes-borboleta"
  },
  "Balistidae spp.": {
    "title": "Rhinecanthus aculeatus",
    "exact": false,
    "note": "representante dos triggerfish"
  },
  "Pterois spp.": {
    "title": "Pterois volitans",
    "exact": false,
    "note": "representante dos peixes-leão"
  },
  "Hippocampus spp.": {
    "title": "Hippocampus erectus",
    "exact": false,
    "note": "representante dos cavalos-marinhos"
  },
  "Pygocentrus nattereri": {
    "title": "Pygocentrus nattereri",
    "exact": true
  },
  "Cichla spp.": {
    "title": "Cichla ocellaris",
    "exact": false,
    "note": "representante dos tucunarés"
  },
  "Geophagus spp.": {
    "title": "Geophagus surinamensis",
    "exact": false,
    "note": "representante dos geophagus"
  },
  "Hemichromis guttatus": {
    "title": "Hemichromis guttatus",
    "exact": true
  },
  "Fundulopanchax gardneri": {
    "title": "Fundulopanchax gardneri",
    "exact": true
  },
  "Trichopodus trichopterus": {
    "title": "Trichopodus trichopterus",
    "exact": true
  },
  "Prochilodus lineatus": {
    "title": "Prochilodus lineatus",
    "exact": true
  },
  "Scolopsis bilineata": {
    "title": "Scolopsis bilineata",
    "exact": true
  },
  "Synodontis nigriventris": {
    "title": "Synodontis nigriventris",
    "exact": true
  },
  "Puntius pentazona": {
    "title": "Puntius pentazona",
    "exact": true
  },
  "Pangasius sanitwongsei": {
    "title": "Pangasius sanitwongsei",
    "exact": true
  },
  "Leporinus fasciatus": {
    "title": "Leporinus fasciatus",
    "exact": true
  },
  "Microsynodontis lamberti": {
    "title": "Microsynodontis lamberti",
    "exact": true
  },
  "Selenotoca multifasciata": {
    "title": "Selenotoca multifasciata",
    "exact": true
  }
};

const filterData = [
  {
    "name": "Filtragem mecânica",
    "type": "Etapa",
    "best": "Pré-filtragem, água cristalina, remoção de partículas",
    "desc": "Retém sujeira física como fezes, restos de ração e partículas suspensas. Usa perlon, espuma, manta, socks ou roller.",
    "tips": [
      "Limpe ou troque antes de virar fonte de nitrato.",
      "Use do grosso para o fino para evitar entupimento.",
      "Não substitui filtragem biológica."
    ]
  },
  {
    "name": "Filtragem biológica",
    "type": "Etapa essencial",
    "best": "Todos os aquários com fauna",
    "desc": "Abriga bactérias nitrificantes que convertem amônia em nitrito e depois em nitrato, parte central do ciclo do nitrogênio.",
    "tips": [
      "Mídias porosas, esponjas e cerâmicas aumentam área útil.",
      "Não lave mídia biológica em água clorada.",
      "Quanto maior a carga orgânica, maior deve ser a biomídia."
    ]
  },
  {
    "name": "Filtragem química",
    "type": "Etapa opcional",
    "best": "Remover compostos dissolvidos, odores, medicamentos ou fosfato",
    "desc": "Usa carvão ativado, resinas, zeólita, removedores de fosfato ou mídias específicas para objetivos pontuais.",
    "tips": [
      "Não precisa ficar sempre ativa em todo aquário.",
      "Troque conforme saturação indicada pelo fabricante.",
      "Remova carvão ao medicar, salvo orientação contrária."
    ]
  },
  {
    "name": "Filtro de esponja",
    "type": "Equipamento",
    "best": "Bettas, camarões, alevinos, quarentena e aquários pequenos",
    "desc": "Movido por compressor de ar. Une filtragem mecânica leve e excelente colonização biológica.",
    "tips": [
      "Fluxo suave e seguro para filhotes.",
      "Barato e fácil de manter.",
      "Em tanques grandes, use como apoio ou em múltiplas unidades."
    ]
  },
  {
    "name": "Hang-on / filtro externo traseiro",
    "type": "Equipamento",
    "best": "Aquários pequenos e médios comunitários",
    "desc": "Fica pendurado no vidro e passa a água por refis ou mídias customizadas.",
    "tips": [
      "Evite depender só de refil descartável.",
      "Proteja a entrada para camarões/alevinos.",
      "Ajuste queda d'água para não gerar CO₂ perdido em plantados high-tech."
    ]
  },
  {
    "name": "Canister",
    "type": "Equipamento",
    "best": "Aquários médios e grandes, plantados e comunitários",
    "desc": "Filtro pressurizado externo com bom volume de mídia e manutenção espaçada.",
    "tips": [
      "Use pré-filtro para facilitar limpeza.",
      "Não deixe mangueiras reduzir vazão demais.",
      "Ótimo para biomídia e layout limpo."
    ]
  },
  {
    "name": "Sump",
    "type": "Equipamento",
    "best": "Marinhos, grandes aquários, ciclídeos e alta carga",
    "desc": "Caixa técnica separada que aumenta volume total, organiza equipamentos e comporta muita mídia.",
    "tips": [
      "Planeje ladrão, retorno e espaço para queda de energia.",
      "Permite skimmer, refugium e mídias diversas.",
      "Exige projeto hidráulico seguro."
    ]
  },
  {
    "name": "Wet/dry / trickle",
    "type": "Equipamento",
    "best": "Alta oxigenação e filtragem biológica intensa",
    "desc": "A água goteja sobre mídia exposta ao ar, favorecendo bactérias aeróbias.",
    "tips": [
      "Muito eficiente para nitrificação.",
      "Pode aumentar evaporação e ruído.",
      "Comum em sistemas grandes."
    ]
  },
  {
    "name": "Filtro interno",
    "type": "Equipamento",
    "best": "Aquários simples, apoio de circulação e quarentena",
    "desc": "Bomba submersa com espuma/refil dentro do aquário.",
    "tips": [
      "Ocupa espaço visual.",
      "Fácil de instalar.",
      "Confira se o fluxo não estressa peixes lentos."
    ]
  },
  {
    "name": "Filtro de fundo / undergravel",
    "type": "Equipamento",
    "best": "Montagens específicas de baixa carga",
    "desc": "Puxa água pelo substrato usando placas sob o cascalho, transformando o fundo em área biológica.",
    "tips": [
      "Não combina com substratos finos/plantados modernos.",
      "Exige sifonagem do cascalho.",
      "Pode acumular detritos se mal mantido."
    ]
  },
  {
    "name": "Fluidized bed",
    "type": "Equipamento",
    "best": "Biologia compacta e eficiente",
    "desc": "Mantém areia ou mídia em suspensão, criando grande superfície bacteriana em pouco volume.",
    "tips": [
      "Excelente nitrificação.",
      "Precisa de vazão ajustada.",
      "Pouco comum em setups básicos."
    ]
  },
  {
    "name": "Mattenfilter / Hamburg",
    "type": "Equipamento",
    "best": "Criatórios, camarões, peixes pequenos e aquários de baixa manutenção",
    "desc": "Grande parede de espuma por onde a água passa lentamente, com muita área biológica.",
    "tips": [
      "Fluxo suave e estável.",
      "Visualmente ocupa uma lateral/fundo.",
      "Limpeza pouco frequente."
    ]
  },
  {
    "name": "Protein skimmer",
    "type": "Marinho",
    "best": "Aquários marinhos e recifes",
    "desc": "Remove compostos orgânicos por espuma antes que se decomponham em amônia/nitrato/fosfato.",
    "tips": [
      "Não é usado em água doce comum.",
      "Dimensione pelo volume e carga de peixes.",
      "Ajuste fino evita espuma molhada demais."
    ]
  },
  {
    "name": "Refugium / algas macro",
    "type": "Marinho/plantado",
    "best": "Exportação de nutrientes e microfauna",
    "desc": "Área separada com macroalgas, plantas ou substratos para consumir nitrato/fosfato e abrigar microvida.",
    "tips": [
      "Muito usado em marinhos com chaeto.",
      "Precisa de iluminação e poda.",
      "Não substitui skimmer ou TPAs quando a carga é alta."
    ]
  },
  {
    "name": "UV esterilizador",
    "type": "Auxiliar",
    "best": "Controle de água verde e redução de patógenos em suspensão",
    "desc": "A água passa por luz UV-C, que danifica organismos microscópicos na coluna d'água.",
    "tips": [
      "Não corrige causa de algas ou doença sozinho.",
      "Vazão e potência determinam eficácia.",
      "Troque lâmpada conforme vida útil."
    ]
  },
  {
    "name": "Ozonizador",
    "type": "Avançado",
    "best": "Sistemas marinhos grandes com controle de ORP",
    "desc": "Oxida compostos orgânicos e melhora claridade, mas requer equipamentos e segurança.",
    "tips": [
      "Uso avançado; excesso é perigoso.",
      "Deve passar por carvão antes do retorno.",
      "Não é necessário para aquários comuns."
    ]
  }
];

const guides = {
  "iniciante": {
    "title": "Roteiro do primeiro aquário",
    "items": [
      ["Escolha o maior volume possível", "Mais água dilui erros e dá estabilidade. Para iniciantes, 60–100 L costuma ser muito mais fácil que nanos."],
      ["Monte antes da fauna", "Substrato, hardscape, filtro, aquecedor e testes vêm antes dos peixes."],
      ["Cicle sem pressa", "Aguarde a colônia biológica estabilizar. Monitore amônia, nitrito e nitrato."],
      ["Compre por compatibilidade", "Não compre só pela beleza. Compare tamanho adulto, pH, temperatura, agressividade e zona de nado."],
      ["Alimente pouco", "O peixe deve consumir em poucos minutos. Excesso de ração vira amônia."],
      ["Quarentena é economia", "Observar peixes novos em tanque separado evita surtos no aquário principal."]
    ]
  },
  "plantado": {
    "title": "Aquário plantado sem complicação",
    "items": [
      ["Luz é acelerador", "Luz forte sem nutrientes e CO₂ equilibrados gera algas. Comece moderado."],
      ["Plantas fáceis", "Anubias, musgos, microsorum, valisneria, elódeas e cryptocorynes toleram setups simples."],
      ["Substrato e fertilização", "Plantas de raiz usam substrato nutritivo ou tabs; epífitas preferem rizoma fora do substrato."],
      ["CO₂ não é obrigatório", "Low-tech funciona, mas cresce devagar. High-tech exige disciplina e estabilidade."],
      ["Equipe de limpeza não faz milagre", "Otocinclus, camarões e caramujos ajudam, mas causa de algas é desequilíbrio."],
      ["Poda e circulação", "Remova folhas velhas e evite áreas mortas onde detrito acumula."]
    ]
  },
  "marinho": {
    "title": "Base para marinho e reef",
    "items": [
      ["Estabilidade acima de tudo", "Salinidade, temperatura, alcalinidade e nutrientes devem oscilar pouco."],
      ["Rocha e biologia", "Rochas/mídias porosas sustentam parte da filtragem biológica."],
      ["Skimmer e circulação", "Skimmer exporta orgânicos; bombas de circulação evitam detrito parado e ajudam corais."],
      ["Reposição de água doce", "Evapora água, não sal. Reponha com água doce de qualidade, idealmente RO/DI."],
      ["Quarentena marinha", "Parasitas marinhos podem devastar o sistema. Quarentena e observação são altamente recomendáveis."],
      ["Não compre peixe incompatível com reef", "Alguns anjos, borboletas, triggers e baiacus podem beliscar corais/invertebrados."]
    ]
  },
  "doencas": {
    "title": "Prevenção e resposta a doenças",
    "items": [
      ["Diagnóstico antes de remédio", "Pontinhos, respiração ofegante, nadadeiras fechadas e perda de apetite têm causas diferentes."],
      ["Teste água primeiro", "Amônia, nitrito, pH e temperatura ruins parecem doença e matam rápido."],
      ["Hospital separado", "Medicar o display pode afetar bactérias, plantas, corais e invertebrados."],
      ["Oxigenação ajuda", "Muitos tratamentos e temperaturas altas reduzem oxigênio dissolvido."],
      ["Não misture medicamentos às cegas", "Interações podem ser tóxicas. Siga bula e remova mídias químicas quando indicado."],
      ["Observe comportamento", "Agressão, perseguição e estresse abrem porta para infecções."]
    ]
  },
  "manutencao": {
    "title": "Rotina de manutenção saudável",
    "items": [
      ["TPA regular", "Trocas parciais removem nitrato, fosfato e compostos acumulados. Frequência depende da carga."],
      ["Limpe filtro por etapas", "Nunca destrua toda biologia de uma vez. Preserve mídias biológicas em água do aquário."],
      ["Sifone com critério", "Remova detritos sem desmontar todo o substrato a cada semana."],
      ["Reponha evaporação", "Evaporação concentra sais/minerais. Repor água mantém estabilidade."],
      ["Registre parâmetros", "Anotar testes ajuda a perceber tendência antes de crise."],
      ["Revise equipamentos", "Aquecedor, ventoinhas, bombas e mangueiras falham; inspeção evita acidente."]
    ]
  }
};

const glossary = [
  ["Amônia (NH₃/NH₄⁺)", "Resíduo nitrogenado tóxico gerado por fezes, ração e decomposição."],
  ["Nitrito (NO₂⁻)", "Intermediário tóxico do ciclo do nitrogênio; deve ficar zerado."],
  ["Nitrato (NO₃⁻)", "Produto menos tóxico da nitrificação, controlado por TPAs, plantas e exportação."],
  ["Ciclagem", "Processo de formação da colônia bacteriana antes da fauna."],
  ["TPA", "Troca parcial de água; manutenção básica para diluir acumulados."],
  ["pH", "Mede acidez/alcalinidade. Estabilidade costuma ser mais importante que perseguir número perfeito."],
  ["GH", "Dureza geral; minerais como cálcio e magnésio."],
  ["KH", "Reserva alcalina; ajuda a estabilizar pH."],
  ["Bioload", "Carga orgânica produzida por peixes, ração e decomposição."],
  ["Hardscape", "Rochas, troncos e estrutura física do layout."],
  ["Blackwater", "Aquário de água escura/ácida com taninos, inspirado em igarapés."],
  ["Reef safe", "Termo marinho para animais com menor risco a corais/invertebrados, nunca garantia absoluta."]
];

const checklistItems = [
  "Aquário montado e funcionando há tempo suficiente para ciclagem",
  "Amônia zerada no teste",
  "Nitrito zerado no teste",
  "Temperatura estável e adequada às espécies",
  "Filtro com mídia biológica madura",
  "Peixes escolhidos têm parâmetros compatíveis",
  "Tamanho adulto cabe no aquário",
  "Existe plano de TPA e manutenção",
  "Ração adequada para cada zona/dieta",
  "Quarentena ou observação de novos animais planejada"
];

/* ── Utilitários ── */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function normalize(value) {
  return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"'`]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '`': '&#96;'
  }[char]));
}

function uniq(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

function debounce(fn, delay = 140) {
  let timer;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), delay);
  };
}

function parseTemp(tempText) {
  const nums = tempText.match(/\d+/g)?.map(Number) || [];
  return nums.length >= 2 ? [nums[0], nums[1]] : null;
}

function parseMaxCm(sizeText) {
  const nums = sizeText.match(/[\d.]+/g)?.map(Number) || [];
  return nums.length ? Math.max(...nums) : 0;
}

function sizeCategory(sizeText) {
  const max = parseMaxCm(sizeText);
  if (max <= 5) return 'nano';
  if (max <= 10) return 'small';
  if (max <= 20) return 'medium';
  return 'large';
}

function difficultyBadge(level) {
  if (level.includes('Iniciante')) return 'ok';
  if (level.includes('Intermediário')) return 'warn';
  return 'danger';
}

const safeStorage = {
  get(key) {
    try { return window.localStorage?.getItem(key) || null; }
    catch (_) { return null; }
  },
  set(key, value) {
    try { window.localStorage?.setItem(key, value); }
    catch (_) {}
  }
};

/* ── Referências DOM ── */
const fishGrid = $('#fishGrid');
const searchInput = $('#searchInput');
const waterFilter = $('#waterFilter');
const difficultyFilter = $('#difficultyFilter');
const temperFilter = $('#temperFilter');
const sizeFilter = $('#sizeFilter');
const favFilter = $('#favFilter');
const resultCount = $('#resultCount');
const resetFilters = $('#resetFilters');
const fishModal = $('#fishModal');
const modalContent = $('#modalContent');

/* ── Selects ── */
function fillSelect(select, values) {
  if (!select) return;
  values.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

/* ── Cache de fotos Wikipedia ── */
const PHOTO_CACHE_KEY = 'aquawiki-wikimedia-photo-cache-v3';
const PHOTO_CACHE_LIMIT = 90;
const PHOTO_REQUEST_TIMEOUT_MS = 8000;
let photoCache = {};
try { photoCache = JSON.parse(safeStorage.get(PHOTO_CACHE_KEY) || '{}'); }
catch (_) { photoCache = {}; }

function savePhotoCache() {
  const entries = Object.entries(photoCache).slice(-PHOTO_CACHE_LIMIT);
  photoCache = Object.fromEntries(entries);
  safeStorage.set(PHOTO_CACHE_KEY, JSON.stringify(photoCache));
}

function wikipediaSummaryUrl(title) {
  return `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(String(title).replace(/ /g, '_'))}`;
}

function wikipediaSearchUrl(query) {
  return `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(`${query} fish`)}&format=json&origin=*&srlimit=1`;
}

async function fetchJson(url) {
  const controller = 'AbortController' in window ? new AbortController() : null;
  const timeout = controller ? window.setTimeout(() => controller.abort(), PHOTO_REQUEST_TIMEOUT_MS) : null;
  try {
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      signal: controller?.signal
    });
    if (!response.ok) throw new Error(`Requisição falhou: ${response.status}`);
    return response.json();
  } finally {
    if (timeout) window.clearTimeout(timeout);
  }
}

async function resolveFishPhoto(fish) {
  const cacheKey = `${fish.name}|${fish.photoTitle}|${fish.photoExact ? 'exact' : 'rep'}|${fish.photoNote}`;
  if (photoCache[cacheKey]) return photoCache[cacheKey];

  let data;
  try {
    data = await fetchJson(wikipediaSummaryUrl(fish.photoTitle));
  } catch (_) {
    const fallbackTitle = await searchWikipediaTitle(fish.photoTitle || fish.name);
    if (!fallbackTitle) throw new Error(`Sem página encontrada para ${fish.common}`);
    data = await fetchJson(wikipediaSummaryUrl(fallbackTitle));
  }

  const source = data?.thumbnail?.source || data?.originalimage?.source;
  if (!source) throw new Error(`Sem imagem principal para ${fish.common}`);

  const item = {
    src: source,
    page: data?.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(fish.photoTitle)}`,
    title: data?.title || fish.photoTitle,
    exact: fish.photoExact,
    note: fish.photoNote
  };
  photoCache[cacheKey] = item;
  savePhotoCache();
  return item;
}

async function searchWikipediaTitle(query) {
  const data = await fetchJson(wikipediaSearchUrl(query));
  return data?.query?.search?.[0]?.title || null;
}

function setPhotoFallback(shell, message = 'Foto indisponível') {
  shell.classList.add('photo-error');
  const status = shell.querySelector('.fish-photo-status');
  if (status) status.textContent = message;
}

async function hydratePhotoElement(img) {
  const shell = img.closest('.fish-photo');
  const index = Number(img.dataset.index);
  const fish = fishData[index];
  if (!shell || !fish || img.dataset.loaded === 'true') return;
  img.dataset.loaded = 'true';

  try {
    const photo = await resolveFishPhoto(fish);
    const link = shell.querySelector('.photo-source-link');
    const badge = shell.querySelector('.photo-kind');
    const note = shell.querySelector('.photo-note');

    img.addEventListener('load', () => shell.classList.add('photo-loaded'), { once: true });
    img.addEventListener('error', () => setPhotoFallback(shell), { once: true });
    img.alt = `Foto de ${fish.common} (${photo.title || fish.photoTitle})`;
    img.src = photo.src;

    if (link) {
      link.href = photo.page;
      link.textContent = 'Wikimedia/Wikipedia';
    }
    if (badge) badge.textContent = photo.exact ? 'Foto da espécie' : 'Imagem representativa';
    if (note) note.textContent = photo.note || (photo.exact ? fish.name : `Representa ${photo.title || fish.photoTitle}`);
  } catch (_) {
    setPhotoFallback(shell);
  }
}

let photoObserver;
const photoQueue = [];
let photoActive = 0;
const PHOTO_MAX_CONCURRENT = 3;

function processPhotoQueue() {
  while (photoActive < PHOTO_MAX_CONCURRENT && photoQueue.length) {
    const img = photoQueue.shift();
    photoActive++;
    hydratePhotoElement(img).finally(() => {
      photoActive--;
      processPhotoQueue();
    });
  }
}

function hydrateVisiblePhotos() {
  const images = $$('.fish-photo-img:not([data-observed="true"])');
  if (!('IntersectionObserver' in window)) {
    images.forEach(hydratePhotoElement);
    return;
  }
  if (!photoObserver) {
    photoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          photoObserver.unobserve(entry.target);
          photoQueue.push(entry.target);
          processPhotoQueue();
        }
      });
    }, { rootMargin: '260px 0px' });
  }
  images.forEach(img => {
    img.dataset.observed = 'true';
    photoObserver.observe(img);
  });
}

function fishPhotoMarkup(fish, index, variant = 'card') {
  const type = fish.photoExact ? 'Foto da espécie' : 'Imagem representativa';
  const note = fish.photoNote || (fish.photoExact ? fish.name : `Representa ${fish.photoTitle}`);
  return `
    <figure class="fish-photo fish-photo-${variant}">
      <img class="fish-photo-img" data-index="${index}" alt="Carregando foto de ${escapeHtml(fish.common)}" width="400" height="300" loading="lazy" decoding="async">
      <figcaption>
        <span class="photo-kind">${type}</span>
        <span class="photo-note">${escapeHtml(note)}</span>
        <a class="photo-source-link" href="https://en.wikipedia.org/wiki/${encodeURIComponent(fish.photoTitle)}" target="_blank" rel="noreferrer">Wikimedia/Wikipedia</a>
      </figcaption>
      <span class="fish-photo-status">Carregando foto validada</span>
    </figure>
  `;
}

/* ── Processamento de dados ── */
fishData.forEach((fish, index) => {
  const photo = fishPhotoLookup[fish.name] || { title: fish.name, exact: true };
  fish.index = index;
  fish.photoTitle = photo.title;
  fish.photoExact = Boolean(photo.exact);
  fish.photoNote = photo.note || '';
  fish.searchText = normalize([
    fish.name, fish.common, fish.water, fish.difficulty,
    fish.temper, fish.zone, fish.tags.join(' '), fish.summary
  ].join(' '));
});

/* ── Renderização de peixes ── */
/* ── Favoritos ── */
const FAV_KEY = 'aquawiki-favorites';

function getFavorites() {
  try {
    const raw = safeStorage.get(FAV_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (_) { return new Set(); }
}

function saveFavorites(favs) {
  safeStorage.set(FAV_KEY, JSON.stringify([...favs]));
}

function toggleFavorite(index, btn) {
  const favs = getFavorites();
  if (favs.has(index)) {
    favs.delete(index);
    showToast('Removido dos favoritos', 'warn');
  } else {
    favs.add(index);
    showToast('Adicionado aos favoritos', 'success');
  }
  saveFavorites(favs);
  if (btn) {
    btn.classList.toggle('is-fav', favs.has(index));
    const icon = btn.querySelector('i');
    if (icon) icon.className = favs.has(index) ? 'bx bxs-heart' : 'bx-heart';
    btn.setAttribute('aria-label', favs.has(index) ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
  }
}

function fishMatches(fish) {
  const q = normalize((searchInput?.value || '').trim());
  const byText = !q || fish.searchText.includes(q);
  const byWater = !waterFilter || waterFilter.value === 'all' || fish.water.includes(waterFilter.value);
  const byDiff = !difficultyFilter || difficultyFilter.value === 'all' || fish.difficulty.includes(difficultyFilter.value);
  const byTemper = !temperFilter || temperFilter.value === 'all' || fish.temper.includes(temperFilter.value);
  const bySize = !sizeFilter || sizeFilter.value === 'all' || sizeCategory(fish.size) === sizeFilter.value;
  const byFav = !favFilter?.checked || getFavorites().has(fish.index);
  return byText && byWater && byDiff && byTemper && bySize && byFav;
}

function renderFish() {
  if (!fishGrid) return;
  const matches = fishData.filter(fishMatches);
  if (resultCount) resultCount.textContent = matches.length;
  const favs = getFavorites();
  fishGrid.innerHTML = matches.map((fish, i) => `
    <article class="fish-card" style="animation-delay:${Math.min(i * 30, 300)}ms" tabindex="0" role="button" data-index="${fish.index}" aria-label="Abrir ficha de ${escapeHtml(fish.common)}">
      ${fishPhotoMarkup(fish, fish.index)}
      <button class="fav-btn ${favs.has(fish.index) ? 'is-fav' : ''}" data-fav="${fish.index}" type="button" aria-label="${favs.has(fish.index) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"><i class="bx ${favs.has(fish.index) ? 'bxs-heart' : 'bx-heart'}"></i></button>
      <div class="card-content">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(fish.common)}</h3>
            <p><em>${escapeHtml(fish.name)}</em></p>
          </div>
          <span class="badge ${difficultyBadge(fish.difficulty)}">${escapeHtml(fish.difficulty)}</span>
        </div>
        <div class="badge-list">
          <span class="badge">${escapeHtml(fish.water)}</span>
          <span class="badge">${escapeHtml(fish.temper)}</span>
          ${fish.tags.slice(0, 2).map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <p>${escapeHtml(fish.summary)}</p>
        <div class="meta-list">
          <div><b>Tamanho</b><span>${escapeHtml(fish.size)}</span></div>
          <div><b>Aquário</b><span>${escapeHtml(fish.tank)}</span></div>
          <div><b>Temp.</b><span>${escapeHtml(fish.temp)}</span></div>
          <div><b>pH</b><span>${escapeHtml(fish.ph)}</span></div>
        </div>
      </div>
    </article>
  `).join('');
  if (!matches.length) {
    fishGrid.innerHTML = `<div class="calc-result empty-state"><strong>Nenhum resultado.</strong><br>Remova algum filtro ou pesquise por outro nome, ambiente ou comportamento.</div>`;
  }
  hydrateVisiblePhotos();
}

/* ── Modal ── */
function openFish(index) {
  const fish = fishData[index];
  if (!fish) return;
  modalContent.innerHTML = `
    <div class="modal-inner">
      <div class="modal-layout">
        ${fishPhotoMarkup(fish, index, 'modal')}
        <div>
          <p class="eyebrow">Ficha rápida</p>
          <h2 id="fishModalTitle">${escapeHtml(fish.common)}</h2>
          <p id="fishModalDesc"><em>${escapeHtml(fish.name)}</em></p>
          <div class="badge-list">
            <span class="badge ${difficultyBadge(fish.difficulty)}">${escapeHtml(fish.difficulty)}</span>
            <span class="badge">${escapeHtml(fish.water)}</span>
            <span class="badge">${escapeHtml(fish.temper)}</span>
            ${fish.tags.map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}
          </div>
          <p>${escapeHtml(fish.summary)}</p>
        </div>
      </div>
      <div class="modal-grid">
        <div><b>Tamanho adulto</b>${escapeHtml(fish.size)}</div>
        <div><b>Aquário mínimo</b>${escapeHtml(fish.tank)}</div>
        <div><b>Temperatura</b>${escapeHtml(fish.temp)}</div>
        <div><b>pH</b>${escapeHtml(fish.ph)}</div>
        <div><b>Zona de nado</b>${escapeHtml(fish.zone)}</div>
        <div><b>Grupo</b>${escapeHtml(fish.school)}</div>
        <div><b>Dieta</b>${escapeHtml(fish.diet)}</div>
        <div><b>Temperamento</b>${escapeHtml(fish.temper)}</div>
        <div><b>Ambiente</b>${escapeHtml(fish.water)}</div>
      </div>
      <div class="warn-box"><strong>Atenção:</strong> ${escapeHtml(fish.care)}</div>
    </div>
  `;
  fishModal.setAttribute('aria-labelledby', 'fishModalTitle');
  fishModal.setAttribute('aria-describedby', 'fishModalDesc');
  const scrollY = window.scrollY;
  document.body.style.overflow = 'hidden';
  if (typeof fishModal.showModal === 'function') {
    fishModal.showModal();
  } else {
    fishModal.setAttribute('open', '');
  }
  window.scrollTo(0, scrollY);
  hydrateVisiblePhotos();
}

/* ── Filtros de renderização ── */
function renderFilters() {
  const el = $('#filtersGrid');
  if (!el) return;
  el.innerHTML = filterData.map(filter => `
    <article class="filter-card">
      <strong>${escapeHtml(filter.type)}</strong>
      <h3>${escapeHtml(filter.name)}</h3>
      <p>${escapeHtml(filter.desc)}</p>
      <p><b>Melhor uso:</b> ${escapeHtml(filter.best)}</p>
      <ul>${filter.tips.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
    </article>
  `).join('');
}

/* ── Compatibilidade (corrigido) ── */
function scorePair(a, b) {
  let score = 100;
  const reasons = [];

  const aBroad = a.water.split(' ')[0];
  const bBroad = b.water.split(' ')[0];
  if (aBroad !== bBroad && !a.water.includes(bBroad) && !b.water.includes(aBroad)) {
    score -= 45;
    reasons.push('Ambientes de água incompatíveis');
  }

  const aTemp = parseTemp(a.temp);
  const bTemp = parseTemp(b.temp);
  if (aTemp && bTemp) {
    const overlap = Math.min(aTemp[1], bTemp[1]) - Math.max(aTemp[0], bTemp[0]);
    if (overlap < 2) {
      score -= 25;
      reasons.push('Faixa de temperatura com pouca ou nenhuma sobreposição');
    }
  } else {
    score -= 10;
    reasons.push('Não foi possível comparar faixas de temperatura');
  }

  const risky = ['Predador', 'Agressivo', 'Mordiscador', 'Territorial'];
  const aT = a.temper.toLowerCase(), bT = b.temper.toLowerCase();
  if (risky.some(w => aT.includes(w.toLowerCase()) || bT.includes(w.toLowerCase()))) {
    score -= 20;
    reasons.push('Risco de agressão ou predação');
  }

  const maxA = parseMaxCm(a.size), maxB = parseMaxCm(b.size);
  if ((maxA >= 30 && maxB <= 5) || (maxB >= 30 && maxA <= 5)) {
    score -= 20;
    reasons.push('Diferença grande de tamanho — presa potencial');
  }

  const pHa = a.ph.split(/[–—-]/).map(Number), pHb = b.ph.split(/[–—-]/).map(Number);
  if (pHa.length === 2 && pHb.length === 2) {
    const phOverlap = Math.min(pHa[1], pHb[1]) - Math.max(pHa[0], pHb[0]);
    if (phOverlap < 0.5) {
      score -= 15;
      reasons.push('Faixas de pH incompatíveis');
    }
  }

  return { score: Math.max(0, Math.min(100, score)), reasons };
}

function compareFish() {
  const elA = $('#compareA'), elB = $('#compareB'), resultEl = $('#compareResult');
  if (!elA || !elB || !resultEl) return;
  const a = fishData[Number(elA.value)];
  const b = fishData[Number(elB.value)];
  if (!a || !b) return;

  const { score, reasons } = scorePair(a, b);

  let verdict;
  if (score >= 75) verdict = 'Boa chance, com pesquisa por espécie.';
  else if (score >= 45) verdict = 'Cautela: só com planejamento.';
  else verdict = 'Não recomendado.';

  resultEl.innerHTML = `
    <strong>${verdict}</strong><br>
    Pontuação heurística: ${score}/100.
    <ul>${reasons.map(r => `<li>${r}</li>`).join('')}</ul>
    <small>Regra simples: confirme a espécie exata, tamanho adulto, histórico individual e layout.</small>
  `;
}

function renderCompareSelectors() {
  const elA = $('#compareA'), elB = $('#compareB');
  if (!elA || !elB) return;
  const options = fishData.map((fish, index) =>
    `<option value="${index}">${escapeHtml(fish.common)}</option>`
  ).join('');
  elA.innerHTML = options;
  elB.innerHTML = options;
  elB.value = '5';
  compareFish();
}

/* ── Calculadora ── */
function calculateVolume() {
  const lenEl = $('#len'), widEl = $('#wid'), heiEl = $('#hei'), profileEl = $('#flowProfile'), resultEl = $('#calcResult');
  if (!lenEl || !resultEl) return;
  const len = parseFloat(lenEl.value);
  const wid = parseFloat(widEl.value);
  const hei = parseFloat(heiEl.value);
  const profile = Number(profileEl.value);

  if (!len || !wid || !hei || len <= 0 || wid <= 0 || hei <= 0) {
    resultEl.innerHTML = `<strong>Valores inválidos.</strong> Preencha comprimento, largura e altura com números maiores que 0.`;
    return;
  }

  const liters = (len * wid * hei) / 1000;
  const minFlow = liters * profile;
  const maxFlow = liters * (profile + 2);

  let advice = '';
  if (liters < 30) {
    advice = 'Aquário nano. Escolha peixes pequenos (guppies, neons, camarões). Filtragem suave é essencial — evite correnteza forte. Aquecedor com termostato ajuda a manter estabilidade.';
  } else if (liters < 60) {
    advice = 'Volume intermediário inicial. Comunitário de peixes pequenos funciona bem. Considere corydoras de fundo e tetras de cardume. Mantenha filtro com boa biomídia.';
  } else if (liters < 100) {
    advice = 'Boa base para comunitário diversificado. Permite mais opções de peixes medianos. Para kinguios ou ciclídeos, considere mais volume. Filtragem biológica robusta é fundamental.';
  } else if (liters < 200) {
    advice = 'Volume sólido para comunitário com peixes de tamanho médio. Acará-bandeira, gouramis e muitos ciclídeos anões ficam confortáveis. Dimensione canister com biomídia generosa.';
  } else if (liters < 400) {
    advice = 'Aquário grande com boas opções. Permite ciclídeos de médio porte, cardumes grandes e layouts elaborados. Para kinguios, dimensione filtragem e circulação acima do cálculo inicial.';
  } else {
    advice = 'Grande volume. Permite peixes grandes como oscars, bala sharks e ciclídeos africanos. Filtragem superdimensionada e circulação forte são obrigatórias. Revisar suporte do piso.';
  }

  $('#calcResult').innerHTML = `
    <strong>Volume útil aproximado:</strong> ${liters.toFixed(1)} L<br>
    <strong>Vazão de filtro inicial:</strong> ${Math.round(minFlow)}–${Math.round(maxFlow)} L/h<br>
    <span>${advice}</span>
  `;
}

/* ── Checklist ── */
function renderChecklist() {
  const el = $('#checklist');
  if (!el) return;
  el.innerHTML = checklistItems.map((item, index) => `
    <label class="check-item"><input type="checkbox" data-check="${index}"><span>${escapeHtml(item)}</span></label>
  `).join('');
  updateProgress();
}

function updateProgress() {
  const checks = $$('input[data-check]');
  const done = checks.filter(c => c.checked).length;
  const pct = checks.length ? Math.round(done / checks.length * 100) : 0;
  const progressBar = $('#progressBar');
  const progressLabel = $('#progressLabel');
  if (progressBar) {
    if (progressLabel) progressLabel.textContent = `${pct}%`;
    progressBar.style.width = `${pct}%`;
    progressBar.parentElement?.setAttribute('aria-valuenow', String(pct));
  }
}

/* ── Guias ── */
function renderGuide(key = 'iniciante') {
  const guide = guides[key] || guides.iniciante;
  const el = $('#guidePanel');
  if (!el) return;
  el.innerHTML = `
    <h3>${escapeHtml(guide.title)}</h3>
    <div class="guide-grid">
      ${guide.items.map(([title, text]) =>
        `<article class="guide-item"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`
      ).join('')}
    </div>
  `;
  $$('.tab').forEach(tab => {
    const selected = tab.dataset.guide === key;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', selected ? 'true' : 'false');
  });
}

/* ── Glossário ── */
function renderGlossary() {
  const el = $('#glossary');
  if (!el) return;
  el.innerHTML = glossary.map(([term, desc]) =>
    `<div class="term"><b>${escapeHtml(term)}</b><span>${escapeHtml(desc)}</span></div>`
  ).join('');
}

/* ── Invertebrados ── */
const invertSearchInput = $('#invertSearch');
const invertCategoryFilter = $('#invertCategory');
const invertDifficultyFilter = $('#invertDifficulty');
const invertResultCount = $('#invertResultCount');
const invertGrid = $('#invertGrid');

invertData.forEach((inv, i) => { inv.index = i; inv.searchText = normalize(`${inv.name} ${inv.common} ${inv.category} ${inv.water} ${inv.difficulty} ${inv.temper} ${inv.tags.join(' ')} ${inv.summary}`); });

function invertMatches(inv) {
  const q = normalize(invertSearchInput.value.trim());
  const byText = !q || inv.searchText.includes(q);
  const byCat = invertCategoryFilter.value === 'all' || inv.category === invertCategoryFilter.value;
  const byDiff = invertDifficultyFilter.value === 'all' || inv.difficulty.includes(invertDifficultyFilter.value);
  return byText && byCat && byDiff;
}

function renderInverts() {
  if (!invertGrid) return;
  const matches = invertData.filter(invertMatches);
  if (invertResultCount) invertResultCount.textContent = matches.length;
  invertGrid.innerHTML = matches.map((inv, i) => `
    <article class="fish-card invert-card" style="animation-delay:${Math.min(i * 30, 300)}ms" tabindex="0" role="button" data-invert-index="${inv.index}" aria-label="Abrir ficha de ${escapeHtml(inv.common)}">
      <div class="card-content">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(inv.common)}</h3>
            <p><em>${escapeHtml(inv.name)}</em></p>
          </div>
          <span class="badge invert-badge">${escapeHtml(inv.category)}</span>
        </div>
        <div class="badge-list">
          <span class="badge">${escapeHtml(inv.water)}</span>
          <span class="badge ${difficultyBadge(inv.difficulty)}">${escapeHtml(inv.difficulty)}</span>
          ${inv.tags.slice(0, 2).map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <p>${escapeHtml(inv.summary)}</p>
        <div class="meta-list">
          <div><b>Tamanho</b><span>${escapeHtml(inv.size)}</span></div>
          <div><b>Aquário</b><span>${escapeHtml(inv.tank)}</span></div>
          <div><b>Temp.</b><span>${escapeHtml(inv.temp)}</span></div>
          <div><b>pH</b><span>${escapeHtml(inv.ph)}</span></div>
        </div>
      </div>
    </article>
  `).join('');
  if (!matches.length) {
    invertGrid.innerHTML = `<div class="calc-result empty-state"><strong>Nenhum resultado.</strong><br>Remova algum filtro ou pesquise por outro nome.</div>`;
  }
}

function openInvert(index) {
  const inv = invertData[index];
  if (!inv) return;
  modalContent.innerHTML = `
    <div class="modal-inner">
      <div class="modal-layout">
        <div>
          <p class="eyebrow">Ficha rápida</p>
          <h2 id="fishModalTitle">${escapeHtml(inv.common)}</h2>
          <p><em>${escapeHtml(inv.name)}</em></p>
          <div class="badge-list">
            <span class="badge invert-badge">${escapeHtml(inv.category)}</span>
            <span class="badge">${escapeHtml(inv.water)}</span>
            <span class="badge ${difficultyBadge(inv.difficulty)}">${escapeHtml(inv.difficulty)}</span>
            <span class="badge">${escapeHtml(inv.temper)}</span>
            ${inv.tags.map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="modal-grid">
        <div><b>Tamanho adulto</b><span>${escapeHtml(inv.size)}</span></div>
        <div><b>Aquário mínimo</b><span>${escapeHtml(inv.tank)}</span></div>
        <div><b>Temperatura</b><span>${escapeHtml(inv.temp)}</span></div>
        <div><b>pH</b><span>${escapeHtml(inv.ph)}</span></div>
        <div><b>Alimentação</b><span>${escapeHtml(inv.diet)}</span></div>
      </div>
      <div class="modal-desc">
        <p>${escapeHtml(inv.summary)}</p>
        <div class="modal-warning"><i class="bx bx-error"></i> <b>Cuidados:</b> ${escapeHtml(inv.care)}</div>
      </div>
    </div>
  `;
  const scrollY = window.scrollY;
  document.body.style.overflow = 'hidden';
  if (typeof fishModal.showModal === 'function') fishModal.showModal();
  else fishModal.setAttribute('open', '');
  window.scrollTo(0, scrollY);
  $('#fishModalTitle')?.focus();
}

if (invertGrid) {
  invertGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.fish-card');
    if (card && !e.target.closest('.fav-btn')) openInvert(Number(card.dataset.invertIndex));
  });
  invertGrid.addEventListener('keydown', (e) => {
    const card = e.target.closest('.fish-card');
    if (card && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openInvert(Number(card.dataset.invertIndex));
    }
  });
}

const renderInvertDebounced = debounce(renderInverts, 120);
if (invertSearchInput) invertSearchInput.addEventListener('input', renderInvertDebounced);
[invertCategoryFilter, invertDifficultyFilter].forEach(sel => {
  if (sel) sel.addEventListener('change', renderInverts);
});
$('#resetInvertFilters')?.addEventListener('click', () => {
  if (invertSearchInput) invertSearchInput.value = '';
  if (invertCategoryFilter) invertCategoryFilter.value = 'all';
  if (invertDifficultyFilter) invertDifficultyFilter.value = 'all';
  renderInverts();
  showToast('Filtros de invertebrados limpos', 'info');
});

/* ── Plantas Aquáticas ── */
const plantSearchInput = $('#plantSearch');
const plantCategoryFilter = $('#plantCategory');
const plantDifficultyFilter = $('#plantDifficulty');
const plantLightFilter = $('#plantLight');
const plantResultCount = $('#plantResultCount');
const plantGrid = $('#plantGrid');

plantData.forEach((p, i) => { p.index = i; p.searchText = normalize(`${p.name} ${p.common} ${p.category} ${p.difficulty} ${p.light} ${p.co2} ${p.zone} ${p.tags.join(' ')} ${p.summary}`); });

function plantMatches(plant) {
  const q = normalize(plantSearchInput.value.trim());
  const byText = !q || plant.searchText.includes(q);
  const byCat = plantCategoryFilter.value === 'all' || plant.category === plantCategoryFilter.value;
  const byDiff = plantDifficultyFilter.value === 'all' || plant.difficulty.includes(plantDifficultyFilter.value);
  const byLight = plantLightFilter.value === 'all' || plant.light.includes(plantLightFilter.value);
  return byText && byCat && byDiff && byLight;
}

function renderPlants() {
  if (!plantGrid) return;
  const matches = plantData.filter(plantMatches);
  if (plantResultCount) plantResultCount.textContent = matches.length;
  plantGrid.innerHTML = matches.map((p, i) => `
    <article class="fish-card plant-card" style="animation-delay:${Math.min(i * 30, 300)}ms" tabindex="0" role="button" data-plant-index="${p.index}" aria-label="Abrir ficha de ${escapeHtml(p.common)}">
      <div class="card-content">
        <div class="card-top">
          <div>
            <h3>${escapeHtml(p.common)}</h3>
            <p><em>${escapeHtml(p.name)}</em></p>
          </div>
          <span class="badge plant-badge">${escapeHtml(p.category)}</span>
        </div>
        <div class="badge-list">
          <span class="badge">${escapeHtml(p.difficulty)}</span>
          <span class="badge">${escapeHtml(p.light)} luz</span>
          <span class="badge">${escapeHtml(p.co2)}</span>
          ${p.tags.slice(0, 2).map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <p>${escapeHtml(p.summary)}</p>
        <div class="meta-list">
          <div><b>Posição</b><span>${escapeHtml(p.zone)}</span></div>
          <div><b>Altura</b><span>${escapeHtml(p.height)}</span></div>
          <div><b>Crescimento</b><span>${escapeHtml(p.growth)}</span></div>
          <div><b>Substrato</b><span>${escapeHtml(p.substrate)}</span></div>
        </div>
      </div>
    </article>
  `).join('');
  if (!matches.length) {
    plantGrid.innerHTML = `<div class="calc-result empty-state"><strong>Nenhuma planta encontrada.</strong><br>Remova algum filtro ou pesquise por outro nome.</div>`;
  }
}

function openPlant(index) {
  const p = plantData[index];
  if (!p) return;
  modalContent.innerHTML = `
    <div class="modal-inner">
      <div class="modal-layout">
        <div>
          <p class="eyebrow">Ficha rápida</p>
          <h2 id="fishModalTitle">${escapeHtml(p.common)}</h2>
          <p><em>${escapeHtml(p.name)}</em></p>
          <div class="badge-list">
            <span class="badge plant-badge">${escapeHtml(p.category)}</span>
            <span class="badge">${escapeHtml(p.difficulty)}</span>
            <span class="badge">${escapeHtml(p.light)} luz</span>
            <span class="badge">CO2: ${escapeHtml(p.co2)}</span>
            ${p.tags.map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="modal-grid">
        <div><b>Posição</b><span>${escapeHtml(p.zone)}</span></div>
        <div><b>Altura</b><span>${escapeHtml(p.height)}</span></div>
        <div><b>Crescimento</b><span>${escapeHtml(p.growth)}</span></div>
        <div><b>Substrato</b><span>${escapeHtml(p.substrate)}</span></div>
        <div><b>Luminosidade</b><span>${escapeHtml(p.light)}</span></div>
      </div>
      <div class="modal-desc">
        <p>${escapeHtml(p.summary)}</p>
        <div class="modal-warning"><i class="bx bx-error"></i> <b>Cuidados:</b> ${escapeHtml(p.care)}</div>
      </div>
    </div>
  `;
  const scrollY = window.scrollY;
  document.body.style.overflow = 'hidden';
  if (typeof fishModal.showModal === 'function') fishModal.showModal();
  else fishModal.setAttribute('open', '');
  window.scrollTo(0, scrollY);
  $('#fishModalTitle')?.focus();
}

if (plantGrid) {
  plantGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.fish-card');
    if (card) openPlant(Number(card.dataset.plantIndex));
  });
  plantGrid.addEventListener('keydown', (e) => {
    const card = e.target.closest('.fish-card');
    if (card && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openPlant(Number(card.dataset.plantIndex));
    }
  });
}

const renderPlantDebounced = debounce(renderPlants, 120);
if (plantSearchInput) plantSearchInput.addEventListener('input', renderPlantDebounced);
[plantCategoryFilter, plantDifficultyFilter, plantLightFilter].forEach(sel => {
  if (sel) sel.addEventListener('change', renderPlants);
});
$('#resetPlantFilters')?.addEventListener('click', () => {
  if (plantSearchInput) plantSearchInput.value = '';
  if (plantCategoryFilter) plantCategoryFilter.value = 'all';
  if (plantDifficultyFilter) plantDifficultyFilter.value = 'all';
  if (plantLightFilter) plantLightFilter.value = 'all';
  renderPlants();
  showToast('Filtros de plantas limpos', 'info');
});

/* ── Comunidades Pré-montadas ── */
function renderCommunities() {
  const liters = parseFloat($('#communityVolume')?.value) || 0;
  const results = $('#communityResults');
  if (!results) return;

  if (liters < 10) {
    results.innerHTML = `<div class="calc-result empty-state"><strong>Informe um volume maior.</strong><br>O mínimo para uma comunidade é 10 litros.</div>`;
    return;
  }

  const eligible = communityTemplates.filter(t => t.minLiters <= liters);

  if (!eligible.length) {
    results.innerHTML = `<div class="calc-result empty-state"><strong>Nenhuma comunidade encontrada.</strong><br>Para ${liters}L, considere um aquário nano com betta e camarões cherry.</div>`;
    return;
  }

  results.innerHTML = eligible.map((t, i) => `
    <div class="community-card" style="animation-delay:${i * 80}ms">
      <div class="community-header">
        <h3>${escapeHtml(t.name)}</h3>
        <span class="badge community-style-badge">${escapeHtml(t.style)}</span>
      </div>
      <p class="community-desc">${escapeHtml(t.description)}</p>
      <div class="community-species">
        ${t.species.map(sp => `
          <div class="community-species-item">
            <span class="community-species-count">${sp.count}×</span>
            <span class="community-species-name">${escapeHtml(sp.common)}</span>
          </div>
        `).join('')}
      </div>
      <div class="community-tips">
        <strong><i class="bx bx-info-circle"></i> Dicas:</strong>
        <ul>${t.tips.map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}</ul>
      </div>
      <div class="community-footer">
        <span class="community-volume"><i class="bx bx-dock-left"></i> Mínimo: ${t.minLiters}L</span>
      </div>
    </div>
  `).join('');
}

$('#communityBtn')?.addEventListener('click', renderCommunities);
$('#communityVolume')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') renderCommunities();
});

/* ── Reveal (scroll) ── */
function setupReveal() {
  if (!('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  $$('.reveal').forEach(el => observer.observe(el));
}

/* ── Tema ── */
function updateThemeIcon(isLight) {
  const icon = $('#themeIcon');
  if (!icon) return;
  icon.className = isLight ? 'bx bx-sun' : 'bx bx-moon';
}

function setupTheme() {
  const saved = safeStorage.get('aqua-theme');
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const useLight = saved === 'light' || (!saved && !prefersDark);
  if (useLight) {
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
  }

  const toggle = $('#themeToggle');
  const isLight = document.documentElement.classList.contains('light');
  if (toggle) {
    toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    updateThemeIcon(isLight);

    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
      const nowLight = document.documentElement.classList.contains('light');
      toggle.setAttribute('aria-pressed', nowLight ? 'true' : 'false');
      updateThemeIcon(nowLight);
      safeStorage.set('aqua-theme', nowLight ? 'light' : 'dark');
    });
  }
}

/* ── Contadores animados ── */
function animateCounter(el, target, duration = 900) {
  if (!el) return;
  const start = performance.now();
  const initial = 0;
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(initial + (target - initial) * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── Scroll progress bar ── */
function setupScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
    bar.style.width = `${pct}%`;
  }, { passive: true });
}

/* ── Active nav link on scroll ── */
function setupActiveNav() {
  const sections = ['peixes', 'tanque', 'comunidades', 'filtragem', 'guias', 'invertebrados', 'plantas', 'calculadoras', 'fontes'].map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = $$('.nav a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', isActive);
          if (isActive) {
            link.setAttribute('aria-current', 'section');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}

/* ── Ripple nos botões ── */
function setupRipple() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}

/* ── Bolhas flutuantes ── */
function setupBubbles() {
  const bg = $('.site-bg');
  if (!bg) return;
  for (let i = 0; i < 8; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bg.appendChild(bubble);
  }
}

/* ── Toast ── */
function showToast(message, type = 'info', duration = 2500) {
  const container = $('#toastContainer');
  if (!container) return;
  const icons = { success: 'bx-check-circle', info: 'bx-info-circle', warn: 'bx-error' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.innerHTML = `<i class="bx ${icons[type] || icons.info}"></i><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}

/* ── Back to top ── */
function setupBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}



/* ── 3D Tilt nos cards ── */
function setupCardTilt() {
  const grid = $('#fishGrid');
  if (!grid) return;
  grid.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.fish-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
  grid.addEventListener('mouseout', (e) => {
    if (e.relatedTarget && e.relatedTarget.closest?.('.fish-card')) return;
    const card = e.target.closest('.fish-card');
    if (card) card.style.transform = '';
  });
}

/* ── Tank Simulator ── */
const tankState = { fishes: [] };

function saveTankState() {
  safeStorage.set('aquawiki-tank', JSON.stringify(tankState.fishes.map(f => f.index)));
}

function loadTankState() {
  const raw = safeStorage.get('aquawiki-tank');
  if (!raw) return;
  try {
    const indices = JSON.parse(raw);
    if (Array.isArray(indices)) {
      tankState.fishes = indices
        .map(i => fishData[i])
        .filter(Boolean);
    }
  } catch (_) {}
}

const FISH_EMOJI_MAP = {
  'Doce': '🐟', 'Marinho': '🐠', 'Salobra': '🐡', 'Lago': '🐟'
};

function getFishEmoji(water) {
  for (const [key, emoji] of Object.entries(FISH_EMOJI_MAP)) {
    if (water.includes(key)) return emoji;
  }
  return '🐟';
}

function calcTankScore() {
  const n = tankState.fishes.length;
  if (n < 2) return { score: n === 1 ? 100 : null, conflicts: [] };
  let totalScore = 0;
  let pairs = 0;
  const conflicts = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = tankState.fishes[i];
      const b = tankState.fishes[j];
      const { score: pairScore, reasons } = scorePair(a, b);
      totalScore += pairScore;
      pairs++;
      if (pairScore < 80) {
        conflicts.push({ a, b, score: pairScore, reasons });
      }
    }
  }
  return { score: pairs ? Math.round(totalScore / pairs) : 100, conflicts };
}

function getFishStatus(fish) {
  let worst = 100;
  for (const other of tankState.fishes) {
    if (other.index === fish.index) continue;
    const { score: s } = scorePair(fish, other);
    if (s < worst) worst = s;
  }
  if (worst >= 75) return 'good';
  if (worst >= 50) return 'warn';
  return 'bad';
}

function renderTankSpeciesList(filter = '') {
  const list = $('#tankSpeciesList');
  if (!list) return;
  const q = normalize(filter);
  const inTank = new Set(tankState.fishes.map(f => f.index));
  const filtered = fishData.filter(f => {
    if (q && !f.searchText.includes(q)) return false;
    return true;
  });
  list.innerHTML = filtered.map(f => `
    <div class="tank-species-item ${inTank.has(f.index) ? 'in-tank' : ''}" data-index="${f.index}">
      <div class="fish-icon">${getFishEmoji(f.water)}</div>
      <div class="fish-info">
        <strong>${escapeHtml(f.common)}</strong>
        <small>${escapeHtml(f.water)} · ${escapeHtml(f.size)}</small>
      </div>
      <i class="bx ${inTank.has(f.index) ? 'bx-check' : 'bx-plus'} add-icon"></i>
    </div>
  `).join('');
}

function renderTankVisual() {
  const container = $('#tankFishes');
  const empty = $('#tankEmpty');
  if (!container || !empty) return;
  empty.style.display = tankState.fishes.length ? 'none' : 'flex';
  container.innerHTML = tankState.fishes.map(f => {
    const status = tankState.fishes.length > 1 ? getFishStatus(f) : 'good';
    return `
      <div class="tank-fish score-${status}" data-index="${f.index}" title="${escapeHtml(f.common)}">
        <span class="fish-emoji">${getFishEmoji(f.water)}</span>
        <span class="fish-name">${escapeHtml(f.common.split('/')[0].trim())}</span>
        <button class="remove-fish" data-index="${f.index}" aria-label="Remover ${escapeHtml(f.common)}"><i class="bx bx-x"></i></button>
      </div>
    `;
  }).join('');
}

function renderTankScore() {
  const { score, conflicts } = calcTankScore();
  const scoreEl = $('#tankScoreValue');
  const fillEl = $('#tankScoreFill');
  const conflictsEl = $('#tankConflicts');
  const summaryEl = $('#tankSummary');

  if (scoreEl) scoreEl.textContent = score !== null ? `${score}/100` : '—';
  if (fillEl) fillEl.style.width = score !== null ? `${score}%` : '0%';

  if (tankState.fishes.length >= 2 && conflicts.length) {
    conflictsEl.classList.add('has-conflicts');
    conflictsEl.innerHTML = `<h4><i class="bx bx-error"></i> Conflitos encontrados (${conflicts.length})</h4>` +
      conflicts.map(c => `
        <div class="tank-conflict-item">
          <strong>${escapeHtml(c.a.common.split('/')[0].trim())}</strong> ×
          <strong>${escapeHtml(c.b.common.split('/')[0].trim())}</strong>
          — ${c.reasons.join('; ')}
        </div>
      `).join('');
  } else {
    conflictsEl.classList.remove('has-conflicts');
    conflictsEl.innerHTML = '';
  }

  if (summaryEl && tankState.fishes.length) {
    const temps = tankState.fishes.map(f => parseTemp(f.temp)).filter(Boolean);
    const minTemp = temps.length ? Math.max(...temps.map(t => t[0])) : null;
    const maxTemp = temps.length ? Math.min(...temps.map(t => t[1])) : null;
    const waters = uniq(tankState.fishes.map(f => f.water.split(' ')[0]));
    const maxFish = Math.max(...tankState.fishes.map(f => parseMaxCm(f.size)));
    summaryEl.innerHTML = `
      <div class="tank-summary-item"><i class="bx bx-fish"></i> ${tankState.fishes.length} peixe${tankState.fishes.length > 1 ? 's' : ''}</div>
      <div class="tank-summary-item"><i class="bx bx-globe"></i> ${waters.join(', ')}</div>
      ${minTemp !== null ? `<div class="tank-summary-item"><i class="bx bx-thermometer"></i> ${minTemp}–${maxTemp} °C</div>` : ''}
      <div class="tank-summary-item"><i class="bx bx-expand"></i> Até ${maxFish} cm</div>
    `;
  } else if (summaryEl) {
    summaryEl.innerHTML = '';
  }
}

function renderTank() {
  renderTankSpeciesList($('#tankSearch')?.value || '');
  renderTankVisual();
  renderTankScore();
}

function addFishToTank(index) {
  if (tankState.fishes.some(f => f.index === index)) return;
  const fish = fishData[index];
  if (!fish) return;
  tankState.fishes.push(fish);
  saveTankState();
  renderTank();
  showToast(`${fish.common.split('/')[0].trim()} adicionado ao tanque`, 'success');
}

function removeFishFromTank(index) {
  const fish = tankState.fishes.find(f => f.index === index);
  tankState.fishes = tankState.fishes.filter(f => f.index !== index);
  saveTankState();
  renderTank();
  if (fish) showToast(`${fish.common.split('/')[0].trim()} removido`, 'warn');
}

function setupTankSimulator() {
  const list = $('#tankSpeciesList');
  const search = $('#tankSearch');
  const clear = $('#tankClear');
  const visual = $('#tankVisual');

  if (search) {
    search.addEventListener('input', debounce(() => renderTankSpeciesList(search.value), 100));
  }

  if (list) {
    list.addEventListener('click', (e) => {
      const item = e.target.closest('.tank-species-item');
      if (!item) return;
      const idx = Number(item.dataset.index);
      if (tankState.fishes.some(f => f.index === idx)) {
        removeFishFromTank(idx);
      } else {
        addFishToTank(idx);
      }
    });
  }

  if (visual) {
    visual.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.remove-fish');
      if (removeBtn) {
        removeFishFromTank(Number(removeBtn.dataset.index));
        return;
      }
      const fishEl = e.target.closest('.tank-fish');
      if (fishEl) {
        const fish = tankState.fishes.find(f => f.index === Number(fishEl.dataset.index));
        if (fish) openFish(fish.index);
      }
    });
  }

  if (clear) {
    clear.addEventListener('click', () => {
      tankState.fishes = [];
      saveTankState();
      renderTank();
      showToast('Tanque limpo', 'info');
    });
  }

  loadTankState();
  renderTank();
}

/* ── Deep Linking ── */
function handleDeepLink() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  if (hash.startsWith('tanque=')) {
    const names = hash.replace('tanque=', '').split(',').map(s => decodeURIComponent(s.trim()));
    names.forEach(name => {
      const fish = fishData.find(f => normalize(f.common).includes(normalize(name)) || normalize(f.name).includes(normalize(name)));
      if (fish) addFishToTank(fish.index);
    });
    document.getElementById('tanque')?.scrollIntoView({ behavior: 'smooth' });
  } else if (hash.startsWith('peixes/')) {
    const slug = hash.replace('peixes/', '');
    const fish = fishData.find(f => normalize(f.common).includes(normalize(slug)) || normalize(f.name).includes(normalize(slug)));
    if (fish) {
      setTimeout(() => openFish(fish.index), 500);
      document.getElementById('peixes')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/* ── Eventos ── */
if (fishGrid) {
  fishGrid.addEventListener('click', (event) => {
    const favBtn = event.target.closest('.fav-btn');
    if (favBtn) {
      event.stopPropagation();
      toggleFavorite(Number(favBtn.dataset.fav), favBtn);
      return;
    }
    if (event.target.closest('a')) return;
    const card = event.target.closest('.fish-card');
    if (card) openFish(Number(card.dataset.index));
  });

  fishGrid.addEventListener('keydown', (event) => {
    const card = event.target.closest('.fish-card');
    if (card && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      openFish(Number(card.dataset.index));
    }
  });
}

$('#closeModal')?.addEventListener('click', () => {
  if (typeof fishModal.close === 'function') fishModal.close();
  else fishModal.removeAttribute('open');
  document.body.style.overflow = '';
});

fishModal?.addEventListener('click', (event) => {
  if (event.target !== fishModal) return;
  if (typeof fishModal.close === 'function') fishModal.close();
  else fishModal.removeAttribute('open');
  document.body.style.overflow = '';
});

document.addEventListener('change', (event) => {
  if (event.target.matches('input[data-check]')) updateProgress();
});

/* ── Inicialização ── */
fillSelect(waterFilter, uniq(fishData.map(f => f.water)));
fillSelect(difficultyFilter, uniq(fishData.map(f => f.difficulty)));
fillSelect(temperFilter, uniq(fishData.map(f => f.temper)));
if (invertDifficultyFilter) fillSelect(invertDifficultyFilter, uniq(invertData.map(i => i.difficulty)));
if (plantDifficultyFilter) fillSelect(plantDifficultyFilter, uniq(plantData.map(p => p.difficulty)));

if (searchInput) {
  const renderFishDebounced = debounce(renderFish, 120);
  searchInput.addEventListener('input', renderFishDebounced);
  searchInput.addEventListener('change', renderFish);
}
[waterFilter, difficultyFilter, temperFilter, sizeFilter].forEach(select => {
  if (select) select.addEventListener('change', renderFish);
});
if (favFilter) favFilter.addEventListener('change', renderFish);

if (resetFilters) {
  resetFilters.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (waterFilter) waterFilter.value = 'all';
    if (difficultyFilter) difficultyFilter.value = 'all';
    if (temperFilter) temperFilter.value = 'all';
    if (sizeFilter) sizeFilter.value = 'all';
    if (favFilter) favFilter.checked = false;
    renderFish();
    showToast('Filtros limpos', 'info');
  });
}

if ($('#compareBtn')) $('#compareBtn').addEventListener('click', compareFish);
if ($('#calcBtn')) $('#calcBtn').addEventListener('click', calculateVolume);
$$('.tab').forEach(tab => tab.addEventListener('click', () => renderGuide(tab.dataset.guide)));

try {
  animateCounter($('#fishCount'), fishData.length);
  animateCounter($('#filterCount'), filterData.length);

  if (fishGrid) renderFish();
  renderFilters();
  if ($('#compareA')) renderCompareSelectors();
  calculateVolume();
  renderChecklist();
  renderGuide();
  renderGlossary();
  renderInverts();
  renderPlants();
} catch (_) {}

setupReveal();
setupTheme();
setupScrollProgress();
setupActiveNav();
setupRipple();
setupBubbles();
setupBackToTop();
setupCardTilt();
if ($('#tankVisual')) setupTankSimulator();
handleDeepLink();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}
