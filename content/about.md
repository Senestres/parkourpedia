---
layout: layouts/page.njk
eleventyNavigation:
  key: "About"
  order: 4
---
# About

# Les formes d'entrainement

# Les formes caractéristiques
    {%- for fc in formesCaracteristiques %}
    <b>{{ fc.name | capitalize }}:</b> {{fc.description}}
    {% endfor -%}