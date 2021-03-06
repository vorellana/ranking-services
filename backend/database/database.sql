CREATE TABLE public.player (
    id_player serial NOT NULL,
    name character varying(100) NOT NULL,
    nickname character varying(50)
);

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_pkey PRIMARY KEY (id_player);



-- CREATE TABLE public.game (
--     index integer NOT NULL,
--     name character varying(100) NOT NULL,
--     nickname character varying(50)
-- );