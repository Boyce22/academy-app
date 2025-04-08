
# 📦 Academy App — Clean Architecture com NestJS

**Academy App** é uma API RESTful desenvolvida com **NestJS** seguindo os princípios da **Clean Architecture** e orientada por **Domain-Driven Design (DDD)**. Seu objetivo é fornecer uma base sólida, escalável e de fácil manutenção para sistemas complexos, como uma plataforma de gestão de academias.

---

## 🧠 Princípios Arquiteturais

Este projeto segue os seguintes pilares:

- **Isolamento do domínio**: Nenhuma dependência externa no núcleo de negócio.
- **Separação de responsabilidades**: Cada camada tem um papel único e bem definido.
- **Inversão de dependência**: A infraestrutura depende do domínio, nunca o contrário.
- **Facilidade de testes**: Domínio testável sem depender de frameworks ou banco de dados.
- **Substituição de infraestrutura**: Trocar ORM, banco ou provedores sem afetar regras de negócio.

---

## 🧩 Camadas da Aplicação

- **Domain**: Contém entidades, contratos, regras de negócio e validações. Nenhuma dependência externa.
- **Application**: Implementa os casos de uso orquestrando entidades e serviços do domínio.
- **Interfaces (HTTP)**: Controllers e DTOs responsáveis pela entrada e saída de dados.
- **Infra (Infrastructure)**: Comunicação com o mundo externo (ORM, criptografia, autenticação, etc).

---

## 📁 Estrutura de Pastas

```bash
src/
├── application/             # Casos de uso e regras aplicativas
│   ├── dtos/                # Data Transfer Objects
│   └── use-cases/           # Regras coordenadas de negócio
├── domain/                  # Núcleo de regras de negócio
│   ├── entities/            # Entidades do sistema
│   ├── repositories/        # Contratos abstratos
│   ├── enums/               # Enumerações do domínio
│   └── exceptions/          # Exceções específicas do negócio
├── infra/                   # Implementações técnicas
│   ├── database/            # Prisma Client e repositórios reais
│   └── cryptography/        # Hashing, JWT, etc.
└── interfaces/
    └── http/                # Camada de transporte HTTP
        ├── controllers/     # Endpoints da API
        └── dtos/            # Schemas de entrada/saída
```

---

## ⚙️ Tecnologias Utilizadas

| Categoria       | Tecnologia            | Descrição                                     |
|----------------|------------------------|-----------------------------------------------|
| Linguagem       | TypeScript             | Tipagem estática e escalabilidade             |
| Framework       | NestJS                 | Arquitetura modular para backend Node.js      |
| ORM             | Prisma ORM             | Acesso a banco de dados relacional            |
| Banco de Dados  | PostgreSQL (default)   | Relacional, robusto e open-source             |
| Autenticação    | JWT + Bcrypt           | Autenticação stateless e criptografia         |
| Testes          | Jest + Supertest       | Testes unitários e de integração              |

---

## 🚀 Instruções de Uso

### 1. Clone o repositório

```bash
git clone https://github.com/Boyce22/academy-app.git
cd academy-app
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure variáveis de ambiente

Crie um arquivo `.env` na raiz com as seguintes variáveis:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/academy-db
JWT_SECRET=algum_segredo_forte
```

### 4. Execute as migrations e gere o client do Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Inicie o servidor em modo desenvolvimento

```bash
pnpm start:dev
```

---

## 🛠 Testes

| Tipo de Teste    | Ferramenta       | Alvo                          |
|------------------|------------------|-------------------------------|
| Unitário         | Jest             | Entidades e casos de uso      |
| Integração       | Supertest        | Controllers e fluxos HTTP     |
| E2E (em breve)   | Testcontainers   | Fluxos completos com DB real  |

Para executar os testes:

```bash
pnpm test
```

---

## 🔄 Roadmap de Módulos

Esses módulos estão planejados e/ou em desenvolvimento:

- [ ] Módulo de Autenticação com Refresh Token
- [ ] Gestão de Alunos (CRUD, vinculação a treinos)
- [ ] Gestão de Treinadores
- [ ] Avaliações físicas
- [ ] Criação e prescrição de treinos
- [ ] Relatórios e métricas (em fase de planejamento)

---

## 📦 Padrões e Convenções

- Todos os casos de uso devem seguir a regra de injeção por contrato (`interface`).
- Nenhuma lógica de negócio deve existir fora do domínio.
- Infraestrutura não deve ter acesso ao domínio diretamente, exceto via interfaces.
- Controladores nunca acessam banco diretamente.
- Adote DTOs explícitos — nada de usar entidades diretamente como resposta.

---

## 🤝 Contribuição

1. Crie uma issue para discussão
2. Fork o repositório e crie uma branch com nome descritivo
3. Siga o padrão da arquitetura (Clean, DDD)
4. Envie o PR para o branch `develop`

---

## 📄 Licença

Este projeto é licenciado sob a licença MIT.  
Copyright © [Boyce22](https://github.com/Boyce22)

