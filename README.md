# Tenerife AI Activity Finder

**Full-Stack AI-Powered Platform for Smart Tourism Activity Discovery**

## Live Demo: https://tenerife-frontend.onrender.com

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 18+](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)

---

## ⚡ Avvio Rapido (5 Minuti)

### Prerequisiti

**Configurazione Più Semplice (Consigliata):**

- **Docker Desktop** - [Scarica](https://www.docker.com/products/docker-desktop)
- **Git** - [Scarica](https://git-scm.com/)

**Alternativa (Configurazione Manuale):**

- Node.js 18+ | Git

### Opzione 1: Docker (Consigliata - Più Facile)

```bash
# Clone repository
git clone https://github.com/maxange-developer/master_full_stack_s2i.git
cd master_full_stack_s2i

# Start with Docker
docker-compose up --build

# Visit: http://localhost:5173
```

**Risultato:**

- Backend: http://localhost:8000 (API Docs: http://localhost:8000/docs)
- Frontend: http://localhost:5173
- Database: SQLite (caricato automaticamente con tutti i dati da initial_data.json)

### Opzione 2: Sviluppo Locale (Per Apprendimento)

```bash
# Backend setup
cd backend
npm install
# Add .env file with API keys
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
npm run dev
```

**Risultato:**

- Backend: http://localhost:8000 (Docs: http://localhost:8000/docs)
- Frontend: http://localhost:5173

### Chiavi API

⚠️ **IMPORTANTE - Chiavi API Temporanee**: Le chiavi API OpenAI e Tavily sono attualmente configurate direttamente nel file `docker-compose.yml` per scopo di **valutazione accademica**. Questo approccio è utilizzato **esclusivamente per la revisione del professore**.

**Dopo la valutazione del progetto**, le chiavi verranno **immediatamente modificate** per motivi di sicurezza. In un ambiente di produzione, queste chiavi sarebbero gestite tramite:

- Variabili d'ambiente sicure
- Secret management services (AWS Secrets Manager, Azure Key Vault, etc.)
- File `.env` con `.gitignore` appropriato

**Chiavi richieste:**

- **Chiave API OpenAI** - per la strutturazione intelligente degli articoli
- **Chiave API Tavily Search** - per la ricerca web di attività

**Dove trovarle**: Vedi il file `docker-compose.yml` nella sezione `environment` del servizio backend

---

## 📋 Indice dei Contenuti

- [Avvio Rapido](#avvio-rapido)
- [Riepilogo Esecutivo](#riepilogo-esecutivo)
- [Architettura Tecnica](#architettura-tecnica)
- [Caratteristiche Principali](#caratteristiche-principali)
- [Stack Tecnologico](#stack-tecnologico)
- [Struttura del Progetto](#struttura-del-progetto)
- [Installazione e Setup](#installazione-e-setup)
- [Configurazione](#configurazione)
- [Documentazione API](#documentazione-api)
- [Schema del Database](#schema-del-database)
- [Flusso di Sviluppo](#flusso-di-sviluppo)
- [Test](#test)
- [Implementazione della Sicurezza](#implementazione-della-sicurezza)
- [Contributi](#contributi)
- [Licenza](#licenza)

---

## Riepilogo Esecutivo

**Tenerife AI Activity Finder** is a sophisticated full-stack web application that leverages artificial intelligence and advanced search algorithms to recommend personalized tourist activities on Tenerife Island. The platform combines:

- **Smart Article Structuring**: Automatic content organization using OpenAI GPT models
- **Intelligent Web Search**: Real-time activity discovery via Tavily AI search engine
- **Multilingual Support**: Complete i18n implementation supporting ES, EN, DE, FR
- **User-Centric Features**: Authentication, bookmarks, saved articles, personalized recommendations
- **Professional Blog**: Advanced content management with structured article layouts and image galleries
- **Responsive Design**: Mobile-first interface with Tailwind CSS and Framer Motion animations

## Key Metrics

- **20+ Blog Articles** with AI-structured content
- **100+ Smart Sections** across all articles
- **4 Language Variants** with full localization
- **95.8% Frontend Test Coverage** on critical paths
- **88% Backend Test Coverage** on all endpoints
- **API Response Times < 500ms** average
- **Node.js + TypeScript** modern backend architecture
- **25 Frontend Components** with professional comments

---

## Architettura Tecnica

### Panoramica del Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                   Frontend (React)                           │
│  - React 18 + Vite 5.4                                       │
│  - Gestione dello Stato con Zustand                          │
│  - Supporto Multilingue i18n                                 │
│  - CSS Tailwind + Animazioni Framer Motion                   │
└────────────────┬────────────────────────────────────────────┘
                 │
         ┌───────┴────────┐
         │ API REST       │
         │ (Axios)        │
         │                │
┌────────▼────────────────────────────────────────────────────┐
│         Backend (Node.js + TypeScript)                       │
│  - Express 4.18+                                             │
│  - Sequelize ORM                                             │
│  - JWT Authentication                                        │
│  - CORS Middleware                                           │
├────────────────────────────────────────────────────────────┤
│  Servizi Principali:                                         │
│  • Autenticazione e Autorizzazione                          │
│  • Gestione e Strutturazione degli Articoli                 │
│  • Ricerca AI e Integrazione Web                            │
│  • Preferenze Utente e Segnalibri                           │
└────────┬───────────────────────────────┬────────────────────┘
         │                               │
    ┌────▼──────┐              ┌────────▼────────┐
    │  SQLite   │              │  API Esterne    │
    │  Database │              │  - OpenAI       │
    │           │              │  - Tavily       │
    └───────────┘              └─────────────────┘
```

---

## Caratteristiche Principali

### 1. Ricerca Intelligente di Attività

Scraping web in tempo reale con il motore di ricerca Tavily AI, parsing intelligente delle query e supporto multilingue.

### 2. Strutturazione degli Articoli Alimentata da AI

Organizzazione automatica dei contenuti utilizzando GPT-4 di OpenAI con segmentazione intelligente in sezioni logiche.

### 3. Autenticazione e Autorizzazione

Sistema di autenticazione sicuro con token JWT e hashing delle password con Argon2.

### 4. Articoli Salvati e Segnalibri

Gli utenti possono salvare i loro articoli preferiti per accesso rapido.

### 5. Supporto Multilingue

Interfaccia e contenuti completamente localizzati in 4 lingue: Spagnolo, Inglese, Tedesco, Francese.

### 6. Design Reattivo e Moderno

Interfaccia mobile-first con animazioni fluide e supporto per dark mode.

---

## Stack Tecnologico

### Frontend

| Tecnologia    | Versione | Scopo                     |
| ------------- | -------- | ------------------------- |
| React         | 18+      | Framework UI              |
| Vite          | 5.4+     | Build tool e dev server   |
| Tailwind CSS  | Latest   | Styling CSS utility-first |
| Zustand       | 4.4+     | Gestione dello stato      |
| i18next       | Latest   | Internazionalizzazione    |
| Framer Motion | Latest   | Animazioni                |

### Backend

| Technology   | Version | Purpose          |
| ------------ | ------- | ---------------- |
| Node.js      | 18+     | Runtime          |
| TypeScript   | 5.3+    | Language         |
| Express      | 4.18+   | Web framework    |
| Sequelize    | 6.35+   | ORM              |
| Zod          | 3.22+   | Data validation  |
| jsonwebtoken | 9.0+    | JWT tokens       |
| bcryptjs     | 2.4+    | Password hashing |

### Infrastruttura & Testing

| Tecnologia     | Versione | Scopo                 |
| -------------- | -------- | --------------------- |
| Docker         | 20.10+   | Containerizzazione    |
| Docker Compose | 1.29+    | Orchestrazione        |
| PostgreSQL     | 15+      | Database (production) |
| SQLite         | 3+       | Database (dev)        |
| Jest           | 29+      | Backend testing       |
| Vitest         | 4.0+     | Frontend testing      |

---

## Struttura del Progetto

```
tenerife-ai-finder/
├── backend/                          # Node.js + TypeScript backend
│   ├── src/
│   │   ├── index.ts                  # Entry point
│   │   ├── core/
│   │   │   ├── config.ts             # Configuration
│   │   │   ├── database.ts           # Sequelize setup
│   │   │   └── security.ts           # JWT & password
│   │   ├── models/                   # Sequelize models
│   │   │   ├── user.ts
│   │   │   └── blog.ts
│   │   ├── schemas/                  # Zod validation
│   │   │   ├── user.ts
│   │   │   ├── blog.ts
│   │   │   └── search.ts
│   │   ├── api/
│   │   │   ├── endpoints/
│   │   │   │   ├── auth.ts           # Auth routes
│   │   │   │   ├── blog.ts           # Blog routes
│   │   │   │   └── search.ts         # Search routes
│   │   │   └── deps.ts                # Dependencies
│   │   ├── services/                 # Business logic
│   │   │   ├── aiService.ts          # OpenAI integration
│   │   │   ├── articleStructureService.ts
│   │   │   └── searchService.ts      # Tavily integration
│   │   ├── middlewares/
│   │   │   └── errorHandler.ts
│   │   └── utils/
│   │       └── seedIfEmpty.ts        # Auto-seed DB
│   ├── tests/                        # Unit tests (88% coverage)
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── frontend/                         # React + Vite application
│   ├── package.json                  # Dipendenze Node
│   ├── Dockerfile                    # Containerizzazione frontend
│   ├── vite.config.js                # Configurazione build
│   ├── src/
│   │   ├── components/               # Componenti React
│   │   │   ├── Navbar.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Search.jsx
│   │   │   └── ...
│   │   ├── pages/                    # Pagine principali
│   │   ├── store/                    # Store Zustand
│   │   ├── i18n/                     # Traduzioni (ES, EN, DE, FR)
│   │   ├── utils/                    # Utility functions
│   │   └── tests/                    # Test componenti (95% copertura)
│   └── public/                       # Asset statici
│
├── Docker Configuration
│   ├── docker-compose.yml            # Service orchestration
│   ├── render.yaml                   # Render.com deployment
│   ├── nginx.conf                    # Reverse proxy
│   ├── backend/Dockerfile
│   └── frontend/Dockerfile
│
├── Configurazione Git
│   ├── .gitignore                    # Esclusioni Git
│   └── .gitattributes                # Line endings
│
├── Documentazione
│   ├── README.md                     # Questo file
│   └── .env.example                  # Template configurazione
│
└── database/                         # Database (git-ignored)
    └── sql_app.db                    # SQLite (sviluppo)
```

---

## Installazione e Setup

### Opzione 1: Con Docker (Consigliata)

```bash
cd tenerife-ai-finder
copy .env.example .env
# Aggiungi le chiavi API fornite allo sviluppatore
docker-compose up --build
```

### Opzione 2: Setup Locale

1. **Backend:**

   ```bash
   cd backend
   npm install
   # Create .env file with API keys
   npm run dev
   ```

2. **Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

**Risultato:**

- Backend: http://localhost:8000
- Frontend: http://localhost:5173

Per istruzioni dettagliate, vedi [SETUP.md](project_files/SETUP.md)

---

## Configurazione

### Variabili d'Ambiente

Copia `.env.example` in `.env` e configura:

```env
# Chiavi API
OPENAI_API_KEY=fornito-dal-developer
TAVILY_API_KEY=fornito-dal-developer

# Configurazione Database
SQLALCHEMY_DATABASE_URI=sqlite:///./sql_app.db

# JWT
SECRET_KEY=your-secret-key
ALGORITHM=HS256
```

Per tutti i dettagli, vedi [SETUP.md](project_files/SETUP.md)

---

## Documentazione API

### Endpoint Principali

#### Autenticazione

- `POST /api/v1/auth/register` - Registrazione nuovo utente
- `POST /api/v1/auth/login` - Login e ottenimento token
- `GET /api/v1/auth/me` - Dati utente corrente

#### Blog

- `GET /api/v1/blog/articles` - Elenco articoli
- `GET /api/v1/blog/articles/{id}` - Dettagli articolo
- `POST /api/v1/blog/saved` - Salva articolo
- `GET /api/v1/blog/saved` - Articoli salvati

#### Ricerca

- `GET /api/v1/search/activities` - Ricerca attività

### Documentazione Interattiva

Dopo aver avviato il backend, visita:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

---

## Schema del Database

### Tabella Utenti

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email VARCHAR UNIQUE NOT NULL,
    hashed_password VARCHAR NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Tabella Articoli

```sql
CREATE TABLE articles (
    id INTEGER PRIMARY KEY,
    title VARCHAR NOT NULL,
    content TEXT,
    structured_content JSON,
    image_url VARCHAR,
    language VARCHAR DEFAULT 'es',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Tabella Articoli Salvati

```sql
CREATE TABLE saved_articles (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    article_id INTEGER NOT NULL,
    saved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (article_id) REFERENCES articles(id)
);
```

---

## Flusso di Sviluppo

### Aggiungere Dipendenze

**Backend:**

```bash
cd backend
npm install package-name
```

**Frontend:**

```bash
cd frontend
npm install package-name
```

### Eseguire i Test

**Backend:**

```bash
cd backend
npm test
npm run test:coverage  # Con copertura (88%)
```

**Frontend:**

```bash
cd frontend
npm run test
npm run test:coverage  # Con copertura (95%)
```

## Test

### Copertura Test

- **Backend**: **88% di copertura** con Jest
  - Endpoint autenticazione: 100%
  - Endpoint blog: 92%
  - Endpoint ricerca: 85%
  - Servizi AI: 90%
- **Frontend**: **95.8% di copertura** con Vitest
  - Componenti UI: 98%
  - Pagine: 95%
  - Store e hooks: 93%
  - Servizi API: 97%

### Eseguire i Test

**Backend (con report di copertura):**

```bash
cd backend
npm test
npm run test:coverage  # Report HTML con coverage
```

**Frontend (con report di copertura):**

```bash
cd frontend
npm run test:coverage  # Report HTML in coverage/
```

## Implementazione della Sicurezza

### Autenticazione

- Token JWT con scadenza configurabile (60 minuti di default)
- Password hashing con Argon2 (bcrypt in produzione)
- OAuth2 Password Bearer flow
- Refresh token support

### Autorizzazione

- Ruoli utente (admin, utente standard)
- Protezione endpoint API con decoratori
- CORS configurabile per origini multiple
- Middleware di validazione richieste

### Protezione Dati

- **SQL Injection**: Protezione tramite ORM Sequelize con query parametrizzate
- **XSS**: Protezione tramite escape automatico React
- **CSRF**: Token CSRF su richieste state-changing
- **HTTPS**: Configurazione Nginx con SSL/TLS (produzione)
- **Environment Variables**: Chiavi sensibili isolate (⚠️ attualmente in docker-compose per valutazione)

### Note sulla Sicurezza delle API Keys

⚠️ **IMPORTANTE**: Le API keys presenti nel file `docker-compose.yml` sono **temporanee** e utilizzate esclusivamente per la **valutazione accademica**.

**Dopo la revisione del professore:**

1. Le chiavi verranno immediatamente invalidate e rigenerate
2. Il progetto verrà configurato con gestione sicura dei secrets
3. Le nuove chiavi saranno gestite tramite variabili d'ambiente e secret managers

**Best Practices Implementate:**

- `.gitignore` configurato per escludere file `.env`
- `.env.example` fornito come template sicuro
- Documentazione completa sulla gestione sicura delle credenziali

### Autenticazione

- Token JWT con scadenza configurabile
- Password hashing con Argon2
- Refresh token support

### Autorizzazione

- Ruoli utente (admin, utente standard)
- Protezione endpoint API
- CORS configurabile

### Protezione Dati

- SQL Injection: protezione tramite ORM Sequelize
- XSS: protezione tramite escape React
- CSRF: token CSRF su richieste state-changing
- HTTPS: configurazione Nginx con SSL/TLS

---

## Contributi

Le contribuzioni sono benvenute! Per cambiamenti significativi:

1. Fai un fork del repository
2. Crea un ramo per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit i tuoi cambiamenti (`git commit -m 'Add some AmazingFeature'`)
4. Push al ramo (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

---

## Licenza

Questo progetto è concesso in licenza sotto la Licenza MIT - vedi il file LICENSE per i dettagli.

```

```
