# AquaWiki

Site estático de aquarismo feito com HTML, CSS e JavaScript puro.

## Como usar

1. Extraia o ZIP do projeto.
2. Abra `aquawiki/index.html` no navegador.
3. Use busca, filtros, fotos dos peixes, comparador, calculadora de volume/vazão e checklist.

## O que foi atualizado nesta versão

- Título principal trocado para uma chamada mais voltada ao aquarismo.
- Logo local adicionada em duas versões: `assets/logo-dark.png` e `assets/logo-light.png`.
- Imagem inicial trocada para uma foto real hospedada no Wikimedia Commons.
- Cards de peixes agora carregam fotos reais em tempo de execução usando a Wikimedia REST API.
- Cada perfil tem um título científico/taxonômico mapeado para buscar a imagem correta.
- Perfis que representam gênero ou grupo aparecem marcados como “Imagem representativa”.
- Modal dos peixes também exibe a imagem e o link de origem visual.
- Projeto revalidado para HTML, JS, CSS, âncoras, IDs, arquivos locais e cobertura de imagens.

## Estrutura

- `index.html` — marcação principal.
- `styles.css` — layout responsivo, tema claro/escuro, hero, logo e cards com fotos.
- `app.js` — catálogo de peixes, mapa de fotos, integração com Wikimedia, filtragens, guias, busca, modal, comparador e calculadoras.
- `assets/logo-dark.png` — logo para tema escuro.
- `assets/logo-light.png` — logo para tema claro.
- `PHOTO-SOURCES.md` — mapeamento dos peixes para os títulos usados na busca das imagens.
- `VALIDATION-report.txt` — relatório de validação técnica.
- `CHANGELOG-fotos-peixes.txt` — resumo das alterações desta etapa.

## Sobre as fotos dos peixes

O site usa a Wikimedia REST API para buscar a imagem principal das páginas dos táxons. Isso evita usar resultados aleatórios de buscadores e reduz o risco de fotos incorretas. Como o site é estático e sem backend, as imagens são carregadas pelo navegador quando o usuário abre a página.

O catálogo contém espécies exatas e também grupos/gêneros usados no aquarismo. Quando o perfil é um grupo, o AquaWiki usa uma espécie representativa e informa isso visualmente no card.

## Observação

O catálogo é amplo para aquarismo ornamental, mas não é uma base taxonômica completa. Para todas as espécies conhecidas de peixes, consulte bases científicas como FishBase.

## Otimização atual

Esta versão foi auditada e otimizada após a integração das fotos dos peixes. A busca usa texto normalizado pré-calculado, os cards usam imagens carregadas sob demanda, o cache de fotos é limitado e há fallbacks para falhas externas da Wikimedia/Wikipedia.

Relatórios incluídos:

- `VALIDATION-optimized-report.txt`
- `CHANGELOG-otimizacao.txt`
