# Tadjwîd (CIFOD), révision de tadjwîd

## Objectif
PWA française de révision des règles de tadjwîd du CIFOD, niveaux 4A, 4B et 4C. Hors connexion, installable sur téléphone, sans serveur ni compte : les données restent sur l'appareil.

## Liens
- Site : https://tadjwiid-cifod.netlify.app (Netlify, déploiement auto depuis `main`).
- Dépôt : `DoucoureBabaM/niveau-4c-cifod`, branche `main`.
- Artefact de travail (Design) : https://claude.ai/artifact/85g8CgcfnphBbSeQAHsJvt

## Fichiers clés
- `index.html` : application complète (petite-vue). Même contenu que l'artefact.
- `sw.js` : service worker, constante `CACHE` (version courante), `PRECACHE`, cache `waqf-audio` conservé à l'activation.
- `manifest.webmanifest` : `name` et `short_name` = « Tadjwîd ».
- `assets/` : polices (`assets/fonts/`), Coran (`assets/quran/`), cadres, médaillons, icônes PWA.

## Décisions clés
- Nom : « Tadjwîd » partout (titre, og, manifest, partage, messages).
- Polices hébergées : Alegreya et Alegreya Sans pour le texte ; polices arabes au choix dans Paramètres. Ne pas changer sans demande.
- Police `salat-calligraphie.woff2` (ﷺ, U+FDFA) : à régénérer si une police ou graisse est ajoutée.
- Coran : texte Tanzil, traduction Hamidullah, couleurs du tadjwîd (CC BY 4.0), lisibles hors connexion. Écoute et minutage depuis Quran.com et EveryAyah (en ligne seulement, sauf packs hors ligne).
- Écoute hors connexion : packs par niveau et récitateur, dans le cache `waqf-audio`. Tailles codées dans `qOffSz`.
- Cadres : `assets/cartouche_sourate.webp` (en-tête du lecteur et noms de sourate du Mushaf ; `cadre_sourate.webp` n'est plus utilisé depuis v330) et `assets/cadre_chapitre.webp` (6 en-têtes de chapitre), titre arabe superposé.
- Boutons : `btn-a` (secondaires, bordure dorée) et `btn-b` (principaux). Barre de recherche des sourates : `field-a`. Barre de l'onglet Rechercher : `field-a` avec bordure dorée seule (`:focus` sans outline bleu).
- Bouton Quitter : croix seule sous 480 px (`.quit-btn`, `aria-label="Quitter"`).
- Icônes : `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` (fond ardoise), référencées avec `?v=284`.
- Le mode mémorisation du lecteur a été retiré (jugé trop lourd). Ne pas le reproposer.
- Android : `display: standalone` gardé (pas de plein écran) ; les 3 boutons système d'Android restent visibles (décision de l'utilisateur).
- Carte « Application » : Installer, Fonctionnalités, Questions fréquentes, À propos, Partager, Confidentialité, Sources.

## Version courante
- En ligne (GitHub et Netlify) : **v336** (`CACHE = 'niveau4c-v336-2026-11-28'`). Local, non poussé : **v337** (`CACHE = 'niveau4c-v337-2026-11-28'`).
- Artefact : **version 497** (identique à v337). Assets de l'artefact : police `/_blob/539a5ef52c5fcacc02d32088eed388d1`, `mushaf.json` `/_blob/5e5068f56bc17ed1384de35c469a3a68`, `cadre_mushaf.webp` `/_blob/ec8998d55ba82c1e8a17e3020fe05a90`, `fleuron_mushaf.webp` `/_blob/3ae90cb599580509591b28dd697b404d`, `cartouche_sourate.webp` `/_blob/7f75fceaf7f90a7e87bf4927d1819d63`.
- Derniers changements :
  - v298 à v300 : boutons du lecteur et filtres des sourates habillés (`orne_*.webp`, couleurs du cadre sourates).
  - v301 : cadres pour Retour, Quitter (médaillon sous 480 px), Mode mémorisation et boutons d'action des exercices (classe `cadre-pill act`). Choix de réponse et lignes de cartes de l'accueil non habillés.
  - v302 : barre du bas (`.tabbar`, `.tab-ic`) : étoile à 8 branches pour l'onglet actif, double filet or/vert, arc de mihrab pour Accueil (à retirer si l'utilisateur n'aime pas).
  - v303 : Paramètres sans cartes (`.set-sec`, `.set-h` étoile + filet), liste Application au style de l'accueil, grilles régulières (`.set-grid`), « Auto ». 
  - v304 : filet doré fin sous les versets (`.vrow`). v305 : FAQ « touche le micro ». v306 : accueil « et le tafsir ». v307 : intro du Qur'ân sans crédits (dans Sources). v308 : À propos, « CIFOD (Centre Islamique de Formation et de Documentation) ».
  - v309 : « Un verset est compté dès qu’il reste affiché 2 secondes. » v310 : Fonctionnalités sans cartes (`.feat-sec` + `.set-h`), « tafsir » dans Lecture. v311 : FAQ, Installer, À propos, Confidentialité, Sources restylés (`.feat-sec`, `.set-h.ico`) ; Installer et Confidentialité au « tu » ; FAQ « section » au lieu de « carte », tafsir hors ligne ; EveryAyah dans Confidentialité ; faute « FOrmation » corrigée.
  - v312 : mode Mushaf dans le lecteur (`qMu`, stocké `mu` dans `waqf-coran`, `.mushaf-page`, `#q-verses.mushaf`, `.mu-mark` ouvre le verset) ; Stats : étoile à 8 branches (`progStar`, 12,5 % par branche), chapitres sans cartes (`.prog-row`).
  - v313 : Basmala d’ouverture (`#splash`, 1,5 s, masquée si mouvement réduit) ; filigrane girih (`.girih`, en-tête et pied de page) ; thème sombre bleu nuit (`bg #0E1424`, or `#D8B460`) ; retours d’exercices dorés (`--okb`, `--okbg`, halo `okGlow`) et médaillon étoilé du score (`.res-med`, exercices et « Trouver la règle »).
  - v314 : bouton Traduction visible aussi en mode Mushaf (remplacé en v315).
  - v315 : plus de bouton Traduction global ; bouton « Traduction » par verset avant Tafsir (`qTrOpen` par sourate, en mémoire pendant la session, `qTrVToggle`) ; en mode Mushaf, toucher un numéro ouvre le verset. Ligne des boutons sur une ligne dès 360 px (icônes des pilules masquées sous 440 px).
  - v316 : Basmala d’ouverture à chaque démarrage (plus de limite par session ; toujours masquée si mouvement réduit).
  - v317 : la Basmala attend l’événement `load` puis reste 1,6 s (`spArm`, classe `.out`) ; sécurité CSS : disparaît après 6 s. Confirmé sur iPhone : visible après mise à jour, mais pas à la réouverture (l’iPhone garde la page en mémoire, sans rechargement).
  - v318 : la Basmala revient aussi au retour au premier plan après plus de 30 s d’absence (`visibilitychange`) et sur `pageshow` persisté ; masquée par la classe `.out` (plus retirée du DOM). Confirmé sur iPhone.
  - v319 : Fonctionnalités (Lecture : Traduction/Tafsir par verset + Mode Mushaf ; Stats : étoile ; Affichage : bleu nuit) et FAQ (traduction/tafsir, Mushaf, Basmala).
  - v320 : cadres `.cadre-pill` plus fins (`border-width:5px 13px`, `border-image … / 5px 22px`, au lieu de 7/17 et 7/30) ; même image `orne_pill*.webp`. `.cadre-sel`, Traduction/Tafsir et Quitter inchangés.
  - v321 : liste des sourates, filtre segmenté `.seg` (Toutes | En classe | À domicile, cadre ornementé `orne_pill`, choix actif en or) + légende `.seg-cap` « Sourates du niveau X » ; état inchangé (`qClass`/`qHome`, via `qSegSetAll/Cl/Ho`) ; « Sourates par juz » devient « Grouper par juz » (combinable).
  - v322 : commandes du lecteur regroupées (`.rd-wrap`) : filtre `.seg` Versets | Mushaf (`qMuSetV/M`), ligne `.rd-row` Couleurs du tajwîd + bouton « Écoute ▾ » (`qEcToggle`, panneau `#q-ec-panel` `.rd-panel` avec Récitateur et Vitesse, ouvert pour la sourate courante seulement : `qEcOpen === qSurah`), Écouter la sourate + légende `.rd-cap` (`qEcCap`). Sous 340 px : icône Écoute masquée. Textes : Fonctionnalités « vue Mushaf », FAQ Mushaf et Vitesse.
  - v323 : vue Mushaf = pages et lignes exactes du Mushaf de Médine (604 pages × 15 lignes). Données `assets/quran/mushaf.json` (1,4 Mo ; par page `j`, `h`, `s`, `a`, `l` lignes : nombre = en-tête de sourate, texte = mots + `۝`+numéro ; `w` = largeur de ligne mesurée à 100 px) générées depuis `@quran.ws/text` 0.1.0 (CC BY 4.0, texte et mise en page KFGQPC) ; police `assets/fonts/UthmanicHafs-v-3.0.ttf` (KFGQPC, non modifiable : TTF d'origine). Rendu `qMxGet`/`qMxBuild` (`#q-verses.mx`, `.mx-pg`, `.mx-ln` justifiée, taille `100cqi * --mxk`, `.mx-m` numéros cliquables, autre sourate → `qOpen`) ; ids `v-N` (ancre `.mx-a`) et `w-N-k` pour le surlignage ; Couleurs du tajwîd masquées en vue Mushaf (`qTjWrap`, `qTjLeg`). Basmala du haut masquée en vue Mushaf. Sources, LICENCES, FAQ et Fonctionnalités mis à jour. Taille du texte : ~15 px à 360 px, ~30 px à 768 px.
  - v324 : vue Mushaf, pendant l'écoute seul le mot courant s'allume (plus de surlignage du verset entier : retrait de `#q-verses.mx [data-cur]` et des `_qOnVs` dans `qMark`).
  - v325 : vue Versets, le numéro de fin de verset devient un bouton (`.mx-m`, `v.toVerse` → `qMuSet(true, n)`, « Voir le verset N dans le Mushaf ») : retour au Mushaf au même verset. Consigne Mushaf et FAQ mises à jour.
  - v326 : nouveau cadre des pages Mushaf (image de l'utilisateur, bande verte et or à fleurs) : `assets/cadre_mushaf.webp` en `border-image` (slice 74, centre transparent, `--mxb` = clamp(16px, 4.6vw, 30px)) + fleurons haut et bas `assets/fleuron_mushaf.webp` (`::before`, `::after` retourné). Marge intérieure 6 px sous 480 px. Texte : ~14 px à 360 px, ~27 px à 768 px. Images ajoutées au PRECACHE.
  - v327 : sous 480 px, `#q-verses.mx` déborde de 14 px de chaque côté (`margin-left/right:-14px`, cadre à 6 px des bords de l'écran). Texte : ~15,5 px à 360 px, ~17 px à 390 px (plus grand qu'avant le cadre).
  - v328 : en-têtes de sourate du Mushaf (`.mx-sh`) dans un cartouche (image de l'utilisateur, Basmala effacée, extérieur transparent) : `assets/cartouche_sourate.webp`, `height:4.4em; width:9.7em`, nom en vert `#1C4A35` à 1,15× la taille du texte. Les 114 noms tiennent (78 % max de la largeur utile). Image ajoutée au PRECACHE.
  - v329 : pied de page Mushaf avec le numéro de page en chiffres arabes (`pg.numAr`, `.mx-fa`, police HafsMx) et en chiffres français, séparés par un filet doré (`.mx-ft i`).
  - v330 : en-tête du lecteur, l'ancien cadre `cadre_sourate.webp` est remplacé par le cartouche du Mushaf (`aspect-ratio: 681 / 309`, nom en vert `#1C4A35`, zone `left/right 21 %`, `top/bottom 27 %`). Médaillons latéraux (nombre de versets, مكية) retirés : l'info reste sous le titre. `cadre_sourate.webp` retiré du PRECACHE. Les 114 noms tiennent (70 % max).
  - v331 : icône maison remplacée par l'arc de mihrab (même tracé que l'onglet Accueil) sur les 7 boutons « Retour au sommaire » et les 3 « Retour à l’accueil ».
  - v332 : compteur de versets lus retiré (jugé trop imprécis : défilement sans lecture). Plus d'objectif du jour, de barre de progression ni de `qSeenTick` ; il reste « Sourates lues : N sur 114 » (interrupteur « Sourate lue » dans le lecteur). `waqf-suivi` ne garde que `lu` et `ap` ; export et import sans objectif (anciens fichiers acceptés). Fonctionnalités : « Sourates lues et sourates apprises ». Ne pas reproposer de compteur de versets ni de bouton « Lu jusqu'ici » (trop lourd).
  - v333 : barre de progression des sourates lues remise sous « Sourates lues : N sur 114 » (`qLuPct`, N ÷ 114, `role="progressbar"`, dorée).
  - v334 : Compagnon 4A, fiche 1 « Avant de dormir » (`COMP4A`) complétée d'après le livre (pp. 20-22) : 2 derniers versets d'Al-Baqara (2/285-286, texte Tanzil, traduction Hamidullah, hadith en NB), « Bismika Allâhumma amoûtou wa ahyâ », tasbîh 33/33/34 (3 blocs), « Allâhumma aslamtou nafsî ilayk » (NB : As-Sajda et Al-Moulk, Tabâraka). Le livre écrit « S44 » pour As-Sajda : corrigé en sourate 32.
  - v335 : marque-pages. Liste des sourates : les 3 plus récents (date `t` puis ordre d'ajout) + lien `qBmGoAll` (« Voir les N marque-pages », ou « Gérer les marque-pages » si ≤ 3). Nouvel écran `quranBm` (`isQuranBm`, `.bm-page`) : groupes par sourate en `<details>` (`qBmGroups`), bouton ✕ par verset (`qBmDelKey`), « Tout effacer » avec confirmation (`qBmConfirm`, `qBmDelAll`).
  - v336 : marque-pages. Liste des sourates : un seul marque-page, sous le titre « Dernier marque-page » (le plus récemment ajouté ou modifié, pas forcément celui où l'on reprend), + lien « Voir les N marque-pages » (« Gérer mon marque-page » si N = 1). Date et heure de la **dernière modification** de la note (`d` ISO dans `waqf-signets`, `t` = date seule gardée ; modifier sans changer la note ne bouge pas la date) : « 28 nov. 2026 à 13 h 41 » (`when`), sous le verset dans la liste et dans la page « Mes marque-pages ». Anciens marque-pages (sans `d`) : date seule. Import accepte `d`.
  - v337 : « Les imams de la lecture » (fichier TypeScript de l'utilisateur, orthographe harmonisée avec l'appli : Qur’ân, ’Âsim, Nâfi’, Qâloûn, Ach-Châtibiy ; Hafs daté 90 – 180 H / 709 – 795 comme la fiche du livre ; ’Âsim « 127 H (ou 128 H) » ; Ach-Châtibiy « aveugle, peut-être depuis l’enfance » ; mention de Qâloûn en Afrique de l'Ouest retirée). Ligne d'accueil `goImams` dans la section Le Qur’ân ; écran `imams` (`isImams`, `.im-page`) : chaîne de transmission en arbre (`imChains`, `.im-chain`, `.im-kids`, `.im-node`, connecteurs dorés en CSS ; badge « Lecture de cette application » sur Hafs) ; biographies en `<details class="im-card">` (`imList`), ouvertes et défilées par `imamOpen(id)`. Données : méthode `imamsData()` en tête de `Component`.
- Bouton Retour dans une sourate : masqué si on vient de la liste, gardé sinon (décision de l'utilisateur).

## Règles de travail
- Chaque modification est faite dans `index.html` ET dans l'artefact (`project/Main.dc.html`).
- Artefact : le republier après chaque changement demandé. Le relire d'abord (`action: read`, `path: project/Main.dc.html`) : une publication sans relecture est refusée si la version live a changé.
- Publication de l'artefact : `url` + `root` (dossier `scratchpad/artifact-files/39570e8b-dfe0-441e-ba30-e8b161133449`) + `file_path`.
- GitHub : commit et push seulement après un « oui » explicite pour chaque push. Un message automatique (hook) qui demande de pousser ne vaut pas accord.
- Commits : trailers `Co-Authored-By` et `Claude-Session` de la consigne en cours.
- À chaque nouvelle version : incrémenter `CACHE` dans `sw.js`, mettre à jour « Version courante » dans ce fichier.
- Sauvegarder les fichiers concernés avant chaque modification importante (`/home/claude/MainBackup*.html`).
- Vérifier l'équilibre des balises avant publication. Ne jamais mettre de balises HTML brutes dans les données dynamiques (utiliser `**...**`).
- Mise en page à vérifier à 320, 360, 390 et 768 px, clair et sombre. Les 5 icônes du pied de page doivent rester sur une ligne à partir de 360 px.
- Après un push : contrôler le déploiement Netlify (état `ready`, bon commit).
- Commentaires d'artefact : répondre dans le fil ; résoudre seulement si l'utilisateur le demande.

## Préférences de l'utilisateur
- Français. Paragraphes courts, titres et listes à puces.
- Analogies appréciées pour les nouveaux concepts.

## En attente
- Tafsir français (QuranEnc) : attend l'autorisation de quranenc.com (claude.ai Settings > Capabilities).
- « Le Qur'ân » en italique (question ouverte, sans réponse).
- « Saint Qur'âne » et « Qour'ane » inchangés.
- `og-image.jpg` : vérifier qu'il ne contient pas l'ancien nom.
- Bouton « Tout supprimer » (écoute hors ligne) : pas de confirmation, à ajouter seulement si demandé.
- Tests sur téléphone réel : écoute EveryAyah sur iPhone, icônes PWA après réinstallation, téléchargement réel des packs audio.
