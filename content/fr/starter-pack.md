---
layout: layouts/page.njk
eleventyComputed:
  eleventyNavigation:
    key: "{{'Starter Pack'| t | capitalize}}"
    order: 2
---
# Parkour Starter Pack
Le Starter Pack est un ensemble structuré de supports pédagogiques pour l'enseignement du parkour à l'école.

## Coming soon
- Introduction au parkour
- Mouvements et formes de jeux fondamentaux
- Utilisation des obstacles et des installations
- Planification de leçons

{# 		{% set postslist = collections.progression %}
		{% include "postslist.njk" -%} #}

En attendant, apprenez les fondamentaux du parkour:
    {% set postslist = collections[ "base" ] | pageLang %}
    {% include "postslist.njk" %}