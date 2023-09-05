# RELEASE DESIGN SYSTEM FRAMEWORK

## PRÉREQUIS

- S'assurer que les maquettes sont stables avant d'envisager une release.
- Mettre à jour le numéro de version du Design-System-Framework dans les fichiers suivants :
  - design-system-framework/package.json (`devDependencies`)
  - design-system-react/package.json
  - design-system-framework/package.json
- Créer une MR pour cette modification.
- Vérifier dans les MR existantes que tout ce qui doit être embarqué dans la release est correctement mergé.

## PROCESS SUR GITLAB

### PREMIÈRE ÉTAPE

1. Créer une nouvelle MR : `develop` vers `master`
2. Choisir le template [RELEASE]
3. Nom de la MR : **[RELEASE] Version x.y.z**
4. S'assurer que la liste des commits embarqués n'inclut pas de _BREAKING CHANGE_
5. Valider la MR (bouton _Merge_ ou _Merge when pipeline succeeds_)
6. Attendre que le _build_ s'exécute sur Gitlab

Une fois la MR validée, une synchronisation est effectuée automatiquement avec CodeCommit et initie également un
pipeline AWS (CodePipeline). Les deux plateformes lanceront un _build_ à leur tour.

### DEUXIÈME ÉTAPE

1. **Une fois le _build_ effectué**, créer un nouveau tag : Repository → Tags → New Tag
2. Renseigner le nom (`x.y.z`) et sélectionner la branche (`master`)
