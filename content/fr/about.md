---
layout: layouts/page.njk
eleventyNavigation:
  key: "About"
  order: 4
---

# A propos
Ce site propose une base de donnée de techniques de parkour ainsi que des formes de jeux, exercices et progressions pour apprendre le parkour.

Le parkour, ce n'est pas juste une liste de techniques stéréotypées. Vous trouverez donc ici des ressources pour développer d'autres compétences centrales dans cette discipline comme la créativité, le flow ou encore le respect de soi, des autres et de l'environnement.

Je suggère de [commencer par les bases !](/{{ lang }}/tags/base/). Vous trouverez ensuite diverses variantes et les prérequis pour ces mouvements.

## Organisation du site
Ce site est adapté du modèle développé pour Jeunesse+Sport (J+S) et propose des:

- Formes d'entrainement: les jeux, exercices ou progressions qui permettent de développer ses compétences en parkour.
- Formes de mouvement: les mouvements ou techniques utilisées en parkour.

Le tout est catégorisé selon les 11 formes caractéristiques qui représentent selon nous exhaustivement le parkour.

<ul>
    {% for fc, item in i18n.formesCaracteristiques %}
      <li>
        {{i18n[fc].emoji}}
        <a href="{{ ("/tags/" + (fc | slugify) + "/") | locale_url }}">
          {{ i18n[fc][page.lang] | capitalize }}
        </a>: {{i18n[fc]["long"][page.lang]}}
      </li>
    {% endfor %}
</ul>

Le système de niveaux est adapté du modèle [FTEM](https://www.swissolympic.ch/{{ lang }}/federations/ftem-developpement-du-sport-et-des-athletes):
- {{ i18n["niveaux"]["f1"].emoji }} F1: pour *foundations*, représente l'exploration de formes fondamentales de mouvement non spécifiques au parkour (ramper, sauter...)
- {{ i18n["niveaux"]["f2"].emoji }} F2-F3: apprentissage des techniques et compétences propres au parkour (saut de chat, saut de précision...)
- {{ i18n["niveaux"]["t"].emoji }} T: pour *talent* (ou traceur 😉), représente les pratiquants autonomes qui peuvent gérer leur prise de risque et combiner les formes caractéristiques entre elles de manière complexe (double saut de chat, saut de précision 360...)

## Sponsors
Parkourpedia a été créé en partenariat avec 

{% for sponsor, item in metadata.sponsors %}
  <a href="https://{{ metadata.sponsors[sponsor].link }}" class="sponsor">
  <img src="/img/{{ metadata.sponsors[sponsor].logo }}" title="{{ metadata.sponsors[sponsor].name }}" alt="{{ metadata.sponsors[sponsor].name }}" class="sponsor-logo" sizes="300px">
  </a>
{% endfor %}

{% include "_includes/support.njk" %}

## Politique de confidentialité
Notre politique de confidentialité est disponible [ici](/data-policy/).