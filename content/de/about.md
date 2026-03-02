---
layout: layouts/page.njk
eleventyNavigation:
  key: "About"
  order: 4
---

{# Test #}
{% include "layouts/test.njk" %}

# A propos
version anglaise test

## Organisation du site
Ce site est adapté du modèle développé pour Jeunesse+Sport (J+S)^[Dutoit, J. et al., *Manuel Parkour* (2022).] et propose des:

- Formes d'entrainement: les jeux, exercices ou progressions qui permettent de développer ses compétences en parkour.
- Formes de mouvement: les mouvements ou techniques utilisées en parkour.

Le tout est catégorisé selon les 11 formes caractéristiques qui représentent selon nous exhaustivement le parkour.

    {% set fcs = formesCaracteristiques[page.lang]["sauts"] %}
    {{ fcs }}

<ul>

    {%- for fc, item in formesCaracteristiques %}
    {{formesCaracteristiques[fc].emoji}} <a href="/tags/{{fc | slugify}}/">{{ formesCaracteristiques[fc].short | capitalize }}</a>: {{formesCaracteristiques[fc].long}}
    {% endfor -%}
</ul>

## Remerciements
Le site ainsi que son contenu ont été réalisés en partenariat avec [Parkour Lausanne](https://parkourlausanne.ch) ainsi que l'[Association suisse de parkour (SPKA)](https://www.spka.ch/).