# Find A Friend API

![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma Badge](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vitest Badge](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)
![Biome Badge](https://img.shields.io/badge/-Biome-252529?style=for-the-badge&logo=biome&logoColor=FFD700)

![Find A Friend API](assets/image.png)

## Sobre o Projeto
O Find A Friend API é uma aplicação desenvolvida para facilitar a adoção de pets. Através dessa API, organizações (ORGs) podem cadastrar animais disponíveis para adoção, e usuários podem buscar por pets de acordo com suas preferências e localização. A aplicação permite filtrar os pets por características específicas e visualizar detalhes completos de cada animal. Além disso, a plataforma possibilita que as ORGs gerenciem seus cadastros e interajam com os adotantes via WhatsApp, tornando o processo de adoção mais eficiente e acessível.

## Regras da Aplicação
- [ ] Deve ser possível cadastrar um pet.
- [ ] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade.
- [ ] Deve ser possível filtrar pets por suas características.
- [ ] Deve ser possível visualizar detalhes de um pet para adoção.
- [x] Deve ser possível se cadastrar como uma ORG.
- [ ] Deve ser possível realizar login como uma ORG.

## Regras de Negócio
- [ ] Para listar os pets, obrigatoriamente precisamos informar a cidade.
- [ ] Uma ORG precisa ter um endereço e um número de WhatsApp.
- [ ] Um pet deve estar ligado a uma ORG.
- [ ] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp.
- [ ] Todos os filtros, além da cidade, são opcionais.
- [ ] Para uma ORG acessar a aplicação como admin, ela precisa estar logada.