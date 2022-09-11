--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);

--
-- Name: cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cards (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    number text NOT NULL,
    name text NOT NULL,
    "securityCode" text NOT NULL,
    "expirationDate" character varying(6) NOT NULL,
    "isVirtual" boolean,
    password text NOT NULL,
    type text NOT NULL,
    title text NOT NULL
);


--
-- Name: cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cards_id_seq OWNED BY public.cards.id;


--
-- Name: credentials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.credentials (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    title text NOT NULL
);

--
-- Name: credentials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.credentials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: credentials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.credentials_id_seq OWNED BY public.credentials.id;


--
-- Name: safenotes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.safenotes (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    description character varying(1000) NOT NULL,
    "userId" integer NOT NULL
);

--
-- Name: safenotes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.safenotes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: safenotes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.safenotes_id_seq OWNED BY public.safenotes.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text
);

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: wifis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wifis (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    title text NOT NULL
);

--
-- Name: wifis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wifis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: wifis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.wifis_id_seq OWNED BY public.wifis.id;


--
-- Name: cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards ALTER COLUMN id SET DEFAULT nextval('public.cards_id_seq'::regclass);


--
-- Name: credentials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials ALTER COLUMN id SET DEFAULT nextval('public.credentials_id_seq'::regclass);


--
-- Name: safenotes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.safenotes ALTER COLUMN id SET DEFAULT nextval('public.safenotes_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: wifis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifis ALTER COLUMN id SET DEFAULT nextval('public.wifis_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
013516f6-eff6-4f33-84b5-cd125eca402e	e13f5319e310911dedf0e44d703d67e080064c29f795809152e2e3328b4f44ff	2022-09-08 18:53:58.59093-03	20220908215358_create_all_tables	\N	\N	2022-09-08 18:53:58.563746-03	1
16568d75-37bf-4f6c-a2ef-76975a7d8dae	63057cbea6e6dd361bf485e29eaacc56e1c1b4698c800f86364ac6fac0ad123f	2022-09-11 18:04:09.909461-03	20220911210409_change_numbers_of_string_on_expiration_date	\N	\N	2022-09-11 18:04:09.906401-03	1
\.


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cards (id, "userId", number, name, "securityCode", "expirationDate", "isVirtual", password, type, title) FROM stdin;
2	1	0123456789123456	ruda r silva	191f8ceb5bc30521dc436a34657784bfc977f4f024610e5364ffd3f7de84114def59095c30aede704afa4d38d949fbf049011d5a0ec6d5a8022f2d0f32f62605cd5af4c914bb28ac79e1818a0c742b080dbed686ec7d1dc0520605a6faf4d8f4b559cf	082025	f	8b8c202f058c76ab086f3fd26e6745d0275ee04b759c5bdc247696620428b24ca3ae7e8939e5bc69e0e7e4b3c3e9955d0b1e3d20d064f9fd9dbbd48c20311d0f60a682f4d7438f9d6a0ea3d723d1568fb9c407be6945f12d04e6fc599b415cb1cf028f12	credit	nubank
\.


--
-- Data for Name: credentials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.credentials (id, "userId", url, username, password, title) FROM stdin;
2	1	https://www.youtube.com/	rudarabello	ef7476c0cf506b6589f401202f7214ac580520ed6a60487a03405064e8b48fd99c849d0d88612674f366962d332f83460cbfc75ab2f5755bc071763e2b5797516f5e9bc79ac5d9a97833db8047fb316ff9917205da95f828743c7b01544a17cf2ac2d2f2817f	Login-YouTube
\.


--
-- Data for Name: safenotes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.safenotes (id, title, description, "userId") FROM stdin;
2	uma nota	The reason for the apps name being com.yourname.yourappname is it creates a unique namespace for your application. There might be so many apps out there called calculator, so there needs to be a way to make it unique. Its kind of like packets in Java, which are also just there to create separate namespaces to avoid name collisions. Reversing the domain name has become a widely accepted standard as it ensures uniqueness.	1
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, "userId", token) FROM stdin;
1	1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjgyMTU4MiwiZXhwIjoxNjYyOTA3OTgyfQ.X0UjsZmtaTQnCcgEhWpZwyDf3W2P2WF-QH--nSR3fCU
2	1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjkyNDczMCwiZXhwIjoxNjYzMDExMTMwfQ.rVeakE5stiEF7bGLrRky3-s7EAlVB-SStkyoTbpvq38
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
1	ruda@gmail.com	$2b$10$.W3Z4K7A5W78C0uFqAeNFuwl1yE/OlN.ytIM4bePa6sdi8m5WZ2OC
\.


--
-- Data for Name: wifis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wifis (id, "userId", name, password, title) FROM stdin;
2	1	5g	6d755a6bc3b7b73c62b6e28e7187f730c56e0f7a78b2ef226f6483c1e6c363f8e230fe420ff1af4dc196c762fd3c93eba4ca2a06d15381aa26942c5cffc0772408d2949bc06b63fce0617a91e75bf94b2b37f86d38a1b0854b74945bd6e96bbebdc3ee805d93	casa
\.


--
-- Name: cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cards_id_seq', 2, true);


--
-- Name: credentials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.credentials_id_seq', 2, true);


--
-- Name: safenotes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.safenotes_id_seq', 2, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: wifis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.wifis_id_seq', 2, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: cards cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);


--
-- Name: credentials credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials
    ADD CONSTRAINT credentials_pkey PRIMARY KEY (id);


--
-- Name: safenotes safenotes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.safenotes
    ADD CONSTRAINT safenotes_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: wifis wifis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifis
    ADD CONSTRAINT wifis_pkey PRIMARY KEY (id);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: cards cards_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT "cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: credentials credentials_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials
    ADD CONSTRAINT "credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: safenotes safenotes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.safenotes
    ADD CONSTRAINT "safenotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: wifis wifis_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifis
    ADD CONSTRAINT "wifis_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--
