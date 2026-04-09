---
layout: layouts/page.njk
eleventyComputed:
  eleventyNavigation:
    key: "{{'à propos'| t | capitalize}}"
    order: 4
---

# About
This site is a library of parkour techniques as well as forms of games, exercises and progressions to learn and teach parkour.

Parkour is not just a list of stereotypical techniques. You will find here ressources to develop other central skills, like creativity, flow or respect of self, others and the environment.

I suggest [starting with the foundations !](/{{ lang }}/tags/base/). You will then find various and prerequisites for these moves.

## Organisation of the website
This site is adapted from the model we developped for Youth+Sport (Y+S), and contains:

- Training forms: games, exercises or progressions that allow the development of parkour skills.
- Forms of movement: moves or techniques used in parkour.

Everything is categorized according to the 11 characteristic forms that represent exhaustively parkour according to us.

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

The system of levels is adapted from the [FTEM](https://www.swissolympic.ch/fr/federations/ftem-developpement-du-sport-et-des-athletes) model:
- {{ i18n["niveaux"]["f1"].emoji }} F1: for *foundations*, represents the exploration of various fundamental forms of movement not specific to parkour (crawling, jumping...)
- {{ i18n["niveaux"]["f2"].emoji }} F2-F3: learning the techniques and skills specific to parkour (kong, precision jump...)
- {{ i18n["niveaux"]["t"].emoji }} T: for *talent* (or traceur 😉), represents autonomous practitioners that can manage their own risk taking and can combine different characteristic forms in complex ways (double kong, 360 precision jump...)

## Sponsors
Parkourpedia was created in partnership with

{% for sponsor, item in metadata.sponsors %}
  <a href="https://{{ metadata.sponsors[sponsor].link }}" class="sponsor">
  <img src="/img/{{ metadata.sponsors[sponsor].logo }}" title="{{ metadata.sponsors[sponsor].name }}" alt="{{ metadata.sponsors[sponsor].name }}" class="sponsor-logo" sizes="300px">
  </a>
{% endfor %}

{% include "_includes/support.njk" %}

## Data protection policy
Our data protection policy is available [here](/data-policy/).