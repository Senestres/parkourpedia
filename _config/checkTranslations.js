import fs from "fs";
import path from "path";
import i18n from "../_data/i18n.json" with { type: "json" } ;

export function checkTranslations(results) {
  console.log("Running translation check... ⁉️");

  const baseDir = "./content";
  const languages = i18n.languages
  const referenceLang = languages[0]

  function getFiles(dir) {
    return fs.readdirSync(dir, { recursive: true })
      .filter(file => file.endsWith(".md") || file.endsWith(".njk"));
  }

  const referenceFiles = getFiles(path.join(baseDir, referenceLang));

  let missing = {};

  for (const lang of languages) {
    if (lang === referenceLang) continue;

    const langDir = path.join(baseDir, lang);

    if (!fs.existsSync(langDir)) continue;

    const langFiles = getFiles(langDir);

    for (const file of referenceFiles) {
      if (!langFiles.includes(file)) {
        if (!missing[lang]) missing[lang] = [];
        missing[lang].push(file);
      }
    }
  }

  let report = "\n🌍 Translation report\n"

  if (Object.keys(missing).length === 0) {
    report += "✅ All translations complete\n";
    console.log(report)
  } else {
    for (const lang of Object.keys(missing)) {
      report += `❌ Missing in ${lang}:\n`;
      console.log(report + 'see .missingTranslations.txt 🗃️')
      missing[lang].forEach(f => report += `   ${f}\n`);
    }
    
  }
  fs.writeFileSync("./.missingTranslations.txt", report);
  return report
};

// this will check for translations at every build, or with npm run translations; see package.json
checkTranslations();

// if running at each eleventy build, use this in eleventy.config.js, and remove function call above
/* 	eleventyConfig.on("eleventy.after", ({ results }) => {
    	checkTranslations(results);
  	}); */