---
layout: layouts/page.njk
eleventyNavigation:
  key: "About"
  order: 4
---

{# Test #}
{% include "layouts/test.njk" %}

# A propos
Ce site propose une base de donnée de techniques de parkour ainsi que des formes de jeux, exercices et progressions pour apprendre le parkour.

Le parkour, ce n'est pas juste une liste de techniques stéréotypées. Vous trouverez donc ici des ressources pour développer d'autres compétences centrales dans cette discipline comme la créativité, le flow ou encore le respect de soi, des autres et de l'environnement.

Je suggère de [commencer par les bases !](/tags/base/). Vous trouverez ensuite diverses variantes et les prérequis pour ces mouvements.

## Organisation du site
Ce site est adapté du modèle développé pour Jeunesse+Sport (J+S)^[Dutoit, J. et al., *Manuel Parkour* (2022).] et propose des:

- Formes d'entrainement: les jeux, exercices ou progressions qui permettent de développer ses compétences en parkour.
- Formes de mouvement: les mouvements ou techniques utilisées en parkour.

Le tout est catégorisé selon les 11 formes caractéristiques qui représentent selon nous exhaustivement le parkour.

<ul>
  {% set fcs = i18n.formesCaracteristiques %}
    {%- for fc, item in fcs %}
    {{fcs[fc].emoji}} <a href="{{ ("/tags/" + (fc | slugify) + "/") | locale_url }}">{{ fcs[fc][page.lang].short | capitalize }}</a>: {{fcs[fc][page.lang].long}}
    {% endfor -%}
</ul>

## Remerciements
Le site ainsi que son contenu ont été réalisés en partenariat avec [Parkour Lausanne](https://parkourlausanne.ch) ainsi que l'[Association suisse de parkour (SPKA)](https://www.spka.ch/).