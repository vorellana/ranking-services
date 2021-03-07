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


insert into public.ranked(value) values (80);
insert into public.ranked(value) values (20);
insert into public.ranked(value) values (60);
insert into public.ranked(value) values (70);
insert into public.ranked(value) values (100);
insert into public.ranked(value) values (20);

-- ranking view
SELECT p.id_player, p.name, r.total_score, r.number_games, r.average_score 
FROM(
	SELECT g.id_player, SUM(g.score) as total_score, COUNT(g.score) as number_games, 
		ROUND(AVG(g.score),2) as average_score
	FROM public.game g
	GROUP BY g.id_player
	) r INNER JOIN public.player p ON p.id_player = r.id_player;