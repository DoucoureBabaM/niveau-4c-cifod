# Niveau 4C — Arrêts et signes du Coran

Application de révision pour les élèves du CIFOD (Centre islamique de formation et de documentation).
Elle reprend le contenu du livre *Le viatique du lecteur — Règles de la Psalmodie du Qur’ân* (CIFOD), chapitres 11 et 15.

**Site en ligne :** https://niveau-4c-cifod.netlify.app

## Contenu

- **Les types d’arrêts** (chapitre 11) : l’arrêt complet, suffisant, correct et mauvais. On y trouve des fiches avec des exemples tirés du Coran, un tableau comparatif, puis des exercices en QCM, en vrai ou faux et en texte à trous.
- **Les signes conventionnels** (chapitre 15) : les 10 signes des arrêts, leur règle de liaison et leur signal visuel. On y trouve des fiches avec un mode mémorisation, puis des exercices en QCM, en vrai ou faux et en texte à trous.

Les meilleurs scores sont enregistrés sur chaque appareil.

## Installer l’application sur un téléphone

- **iPhone** : ouvrir le site dans Safari, puis toucher Partager → « Sur l’écran d’accueil ».
- **Android** : ouvrir le site dans Chrome, puis toucher ⋮ → « Installer l’application ».

L’application s’ouvre ensuite en plein écran depuis l’icône « Niveau 4C ». Elle fonctionne aussi hors connexion, une fois qu’elle a été ouverte une première fois.

## Mettre le site à jour

1. Les modifications se font dans la version de travail, avec Claude.
2. Claude prépare un nouveau paquet de fichiers (zip).
3. Sur GitHub, dans ce dépôt, choisir **Add file → Upload files**. Glisser le **contenu** du dossier décompressé (et non le dossier lui-même), puis cliquer sur **Commit changes**.
4. Netlify publie automatiquement la nouvelle version en une minute environ.

À chaque nouvelle version, le numéro `CACHE` du fichier `sw.js` est augmenté. Sur les téléphones où l’application est installée, un message « Nouvelle version disponible » apparaît alors en bas de l’écran : le bouton **Mettre à jour** l’applique tout de suite, **Plus tard** la garde pour la prochaine ouverture.

## Organisation des fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | L’application complète : écrans, textes, questions et logique |
| `assets/` | Dessins des signes (SVG), logos du CIFOD, icônes de l’application, bibliothèque petite-vue |
| `manifest.webmanifest` | Nom, icônes et affichage en plein écran de l’application installée |
| `sw.js` | Mise en cache, pour l’ouverture rapide et le mode hors ligne |
| `netlify.toml` | Configuration Netlify : site statique, sans étape de build |

## Crédits

- Contenu : *Le viatique du lecteur*, CIFOD.
- Logo et banderole : © CIFOD.
- Police coranique « KFGQPC HAFS Uthmanic Script » : © Complexe du Roi Fahd pour l’impression du Noble Coran (KFGQPC), utilisée et distribuée gratuitement, sans modification, conformément à sa licence (texte intégré au fichier de police).
- Le robot Android est reproduit à partir d’une création de Google, utilisée selon les conditions de la licence Creative Commons Attribution 3.0.
- Le logo Apple est une marque d’Apple Inc. ; le logo Facebook est une marque de Meta Platforms, Inc.
- Polices : Amiri, Amiri Quran, Scheherazade New, Noto Naskh Arabic, Harmattan, Lateef, Noto Sans Arabic, Jomhuria et Manrope, chargées depuis Google Fonts (licence SIL Open Font).
- Ponctuation arabe (virgule, point-virgule, point d’interrogation) : sous-ensemble de la police Amiri (licence SIL Open Font), car la police du Mushaf ne dessine pas ces signes.
- Logos WhatsApp, Gmail et Google Maps : marques de leurs propriétaires respectifs (Meta, Google), utilisées uniquement pour signaler les liens de contact et de localisation. Icône WhatsApp : Freepik.
- Bibliothèque : [petite-vue](https://github.com/vuejs/petite-vue) 0.4.1 (licence MIT), avec une petite correction pour l’affichage des listes imbriquées.
