PGDMP     &    +    
            y            bd    13.2    13.2 )    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    bd    DATABASE     _   CREATE DATABASE bd WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE bd;
                postgres    false            ?            1259    16446    basket    SEQUENCE     o   CREATE SEQUENCE public.basket
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.basket;
       public          postgres    false            ?            1259    16424 
   categories    TABLE     e   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(30) NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            ?            1259    16427    categories_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    204            ?           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    205            ?            1259    16461 	   favorites    TABLE     ?   CREATE TABLE public.favorites (
    count integer NOT NULL,
    user_id integer NOT NULL,
    product_id character varying NOT NULL,
    price numeric NOT NULL,
    id integer NOT NULL
);
    DROP TABLE public.favorites;
       public         heap    postgres    false            ?            1259    16511    favorites_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.favorites_id_seq;
       public          postgres    false    208            ?           0    0    favorites_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;
          public          postgres    false    210            ?            1259    16405    products    TABLE     ?   CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    price numeric NOT NULL,
    rank numeric NOT NULL,
    description character varying NOT NULL,
    count integer NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            ?            1259    16403    product_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          postgres    false    203            ?           0    0    product_id_seq    SEQUENCE OWNED BY     B   ALTER SEQUENCE public.product_id_seq OWNED BY public.products.id;
          public          postgres    false    202            ?            1259    16448    shoplist    TABLE     ?   CREATE TABLE public.shoplist (
    user_id integer NOT NULL,
    product_id integer NOT NULL,
    count integer NOT NULL,
    price numeric NOT NULL,
    id integer NOT NULL
);
    DROP TABLE public.shoplist;
       public         heap    postgres    false            ?            1259    16491    shoplist_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.shoplist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.shoplist_id_seq;
       public          postgres    false    207            ?           0    0    shoplist_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.shoplist_id_seq OWNED BY public.shoplist.id;
          public          postgres    false    209            ?            1259    16397    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    login character varying(30) NOT NULL,
    password character varying(30) NOT NULL,
    name character varying(30) NOT NULL,
    surname character varying(30) NOT NULL,
    age integer,
    address character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16395    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    201            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    200            B           2604    16429    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204            D           2604    16513    favorites id    DEFAULT     l   ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);
 ;   ALTER TABLE public.favorites ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    208            A           2604    16408    products id    DEFAULT     i   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            C           2604    16493    shoplist id    DEFAULT     j   ALTER TABLE ONLY public.shoplist ALTER COLUMN id SET DEFAULT nextval('public.shoplist_id_seq'::regclass);
 :   ALTER TABLE public.shoplist ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    207            @           2604    16400    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200    201            ?          0    16424 
   categories 
   TABLE DATA           .   COPY public.categories (id, name) FROM stdin;
    public          postgres    false    204   ?*       ?          0    16461 	   favorites 
   TABLE DATA           J   COPY public.favorites (count, user_id, product_id, price, id) FROM stdin;
    public          postgres    false    208   k+       ?          0    16405    products 
   TABLE DATA           M   COPY public.products (id, name, price, rank, description, count) FROM stdin;
    public          postgres    false    203   ?+       ?          0    16448    shoplist 
   TABLE DATA           I   COPY public.shoplist (user_id, product_id, count, price, id) FROM stdin;
    public          postgres    false    207   m-       ?          0    16397    users 
   TABLE DATA           Q   COPY public.users (id, login, password, name, surname, age, address) FROM stdin;
    public          postgres    false    201   ?-       ?           0    0    basket    SEQUENCE SET     5   SELECT pg_catalog.setval('public.basket', 1, false);
          public          postgres    false    206            ?           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 10, true);
          public          postgres    false    205            ?           0    0    favorites_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.favorites_id_seq', 7, true);
          public          postgres    false    210            ?           0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 13, true);
          public          postgres    false    202            ?           0    0    shoplist_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.shoplist_id_seq', 5, true);
          public          postgres    false    209            ?           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 28, true);
          public          postgres    false    200            J           2606    16434    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    204            N           2606    16521    favorites favorites_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_pkey;
       public            postgres    false    208            H           2606    16413    products product_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.products
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY public.products DROP CONSTRAINT product_pkey;
       public            postgres    false    203            L           2606    16501    shoplist shoplist_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.shoplist
    ADD CONSTRAINT shoplist_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.shoplist DROP CONSTRAINT shoplist_pkey;
       public            postgres    false    207            F           2606    16402    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    201            ?   ?   x?5???@C?w???}?B19
"?/?8ZXA???-x:»?????\Q???V#?5????-??@?O*???k???Μ?E?NS=?̉4?9P?AMenpft??dI- gea?Э???hi??Ǝ\??/E?,??bM\!?
Y?~???@?B??^y?ʺ??T??xdp???`??K7ҭAŮ???|?ˮ+      ?   :   x?Uɱ  ?:? ð??,
???9?O?Z??i|?D?I!ŧ?rK??i` ?r      ?   ?  x??R=OA?g??t?????@BI+]#??"F#%T??DDXAI!>ʴ?1?a?/???2??ӤI????y3??Zṳ̏???R?@?ڗ
.?cX?O???3+?p?q?kY?^?@ڇu1????-???v??RG????5=??^蹎ػ?A?=?	??0晬tlfRȝ??CT?J˲D?͗??Շ??.?AneTh?#??jK?4?KN4B?Mfh????<*v???&'[???Q???/k6?Py63?F?,????3Y??a?f?i@???D????=??n`??>jq?m???f??rn=?@?????ۉ?ξ?r	?!???ԧ??D{#d?l?f?׎v??:H?????&,??A|?nw??Ȍe?7?6?s0[?鲰??.16?_?b???tmz
BJv?%lnl??r?\??ߥ?W?7Ƙ߇6J8      ?   4   x?3?4?4??4250?4?2?4?A#.SN?ȱ?qL??S?=... `?	?      ?   x  x??RKN?0]?O?*T'?YrĦ$?]?T*,*U??s?PZ?_??7?٩P?CY$???͛y/?t???#}???.ϻ?	???u???%mI?d?Y????X?֞f??,J9??$/R??_?LV$?R?p??2?1i??????Ul?,9N?ek)s֙<O? ]?3??v?7'??Qd??xǁ??????P?D?+??E$???nǁo??'$???L??`?
פ????x??c?Ͱrh?k?p?qf????~???aa?w?B??PA?#?Ff??s??ff?r?G!ơt??ʨ*֩У?e?B?e???FAkX?ؘp?? Y???hǤ??:?5z?*?<?Ŗ?*1[f????	7ڦ??)?5?+?~???     