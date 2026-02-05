---
layout: layouts/page.njk
eleventyNavigation:
  key: "About"
  order: 4
---
# About
Ce site propose une base de donnée de techniques de parkour ainsi que des formes de jeux, exercices et progressions pour apprendre le parkour.

Adapté du modèle développé pour J+S.
Eviter l'écueil du technicisme.
-> pas seulement une liste de techniques
-> apprendre = reproduire des mvmts stéréotypés

Citer le manuel J+S

https://www.youtube.com/watch?v=ZbSRADDzkL8

<img src="https://img.youtube.com/vi/ZbSRADDzkL8/maxresdefault.jpg" alt="no image">

## Les formes d'entrainement

## Les formes caractéristiques
    {%- for fc in formesCaracteristiques %}
    <b>{{ fc.name | capitalize }}:</b> {{fc.description}}
    {% endfor -%}


    