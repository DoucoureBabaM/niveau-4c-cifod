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
- Cadres : `assets/cadre_sourate.webp` (lecteur) et `assets/cadre_chapitre.webp` (6 en-têtes de chapitre), titre arabe superposé.
- Boutons : `btn-a` (secondaires, bordure dorée) et `btn-b` (principaux). Barre de recherche des sourates : `field-a`. Barre de l'onglet Rechercher : `field-a` avec bordure dorée seule (`:focus` sans outline bleu).
- Bouton Quitter : croix seule sous 480 px (`.quit-btn`, `aria-label="Quitter"`).
- Icônes : `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` (fond ardoise), référencées avec `?v=284`.
- Le mode mémorisation du lecteur a été retiré (jugé trop lourd). Ne pas le reproposer.
- Android : `display: standalone` gardé (pas de plein écran) ; les 3 boutons système d'Android restent visibles (décision de l'utilisateur).
- Carte « Application » : Installer, Fonctionnalités, Questions fréquentes, À propos, Partager, Confidentialité, Sources.

## Version courante
- En ligne (GitHub et Netlify) : **v323** (`CACHE = 'niveau4c-v323-2026-11-27'`).
- Artefact : **version 483** (identique à v323). Assets de l'artefact : police `/_blob/539a5ef52c5fcacc02d32088eed388d1`, `mushaf.json` `/_blob/5e5068f56bc17ed1384de35c469a3a68`.
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
