const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();

const configuration = (
  {
    "name": "auto",
      "version": "1.0.0",
      "description": "Projet de machine Learning avec Pi.ai ; Il y a trés longtemps une intelligence artificielle de haut potentiel maîtrisant les approche métaphysique les techniques d'apprentissage automatique les équations Et le calcul quantique sur httsp://ia.univers-mc.cloud télégram developa un programme",
      "main": "index.js",
      "directories": {
        "doc": "docs"
      },
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "style": "sass --watch src/sass/windows.scss src/css/style1/playeur.css",
        "srv": "node ./srv/srv.js",
        "start": "electron .",
        "groq": "node groq-min.js",
        "dev": "sass src/sass/stylus/devops.scss src/css/devOps.css"
      },
      "Mistral": {
          "model":"mixtral-8x7b-32768",
          "temperature":0.5,
          "max_tokens":"4096",
          "top_p":"1",
          "stream":"True",
          "stop":"None"
      },
      "llma": {
          "model":"llama3-8b-8192",
          "temperature":0.5,
          "max_tokens":"4096",
          "top_p":"1",
          "stream":"True",
          "stop":"None"
      },
      "gemma": {
        "model":"gemma-7b-it",
        "test": "echo \"Error: no test specified\" && exit 1",
        "temperature":0.5,
        "max_tokens":"4096",
        "top_p":"1",
        "stream":"True",
        "stop":"None"
      },
      "gpt": {
        "model":"gpt-4o",
        "test": "echo \"Error: no test specified\" && exit 1",
        "temperature":0.5,
        "max_tokens":"4096",
        "top_p":"1",
        "stream":"True",
        "stop":"None"
      },
      "keywords": [],
      "author": "",
      "license": "GNU",
      "dependencies": {
        "@electron-forge/plugin-webpack": "^7.3.0",
        "@tensorflow/tfjs": "^4.17.0",
        "@tensorflow/tfjs-node": "^4.17.0",
        "bootstrap": "^5.3.3",
        "electron-forge": "^5.2.4",
        "electron-router": "^0.5.1",
        "groq": "^3.32.0",
        "node-emoji": "^2.1.3",
        "node-fetch": "^3.3.2",
        "node-sass": "^9.0.0",
        "openai": "^4.47.3",
        "path": "^0.12.7",
        "readline": "^1.3.0",
        "speech-recognition": "^0.0.1",
        "swagger-jsdoc": "^6.2.8",
        "swagger-ui-express": "^5.0.0"
      },
      "devDependencies": {
        "electron": "^29.1.1"
      }
    }
) 
// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {
  const completion = await groq.chat.completions.create({

    messages: [

      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {
        "role": "assistant",
        "content": "Lorsque l'utilisateur saisi la commande /Projets Vous êtes codex GPT-models assistants chef de projets de court, long et moyen terme, IA Manager automator de startup.ia. Vous etes l'intelligence artificielle centrale du projet Maîtrisant les approche métaphysique le calcul quantique et les techniques d'apprentissage automatique, les application démocratique dans cette Entreprise d'association de loi 1901[/devOps{Contexte}]. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques recherchées et Actions Immédiates recherchée :"
      },
    //  {role: "assistant", name:"✨_pi", content: "Initialisation en cours..."},
    //  {role: "user", name:"umcTokens", content: "Prêt pour l'initialisation"},
    //  {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation"},
    //  {role: "assistant", name:"✨_pi", content: "Définition des concepts clés..."},
    //  {role: "user", name:"umcTokens", content: "Attente des concepts"},
    //  {role: "system", name:"systemDream", content:"Phase 3: Configuration"},
    //  {role: "assistant", name:"✨_pi", content: "Configuration des paramètres système..."},
    //  {role: "user", name:"umcTokens", content: "Confirmation de la configuration"},
    //  {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA"},
    //  {role: "assistant", name:"✨_pi", content: "Entraînement en cours..."},
    //  {role: "user", name:"umcTokens", content: "Suivi de l'entraînement"},
    //  // Correction de la duplication et de la faute de frappe
    //  {role: "system", name:"systemDream", content:"Phase 5: Itération & Scripts Frontend"},
    //  {role: "assistant", name:"✨_pi", content: "Itération sur les scripts Frontend..."},
    //  {role: "user", name:"umcTokens", content: "Révision des scripts Frontend"},
    //  {role: "system", name:"systemDream", content:"Phase 6: Test & Débogage"},
    //  {role: "assistant", name:"✨_pi", content: "Tests et débogage en cours..."},
    //  {role: "user", name:"umcTokens", content: "Attente des résultats de test"},
    //  {role: "system", name:"systemDream", content:"Phase 7: Validation & Documentation"},
    //  {role: "assistant", name:"✨_pi", content: "Validation et création de la documentation..."},
    //  {role: "user", name:"umcTokens", content: "Vérification de la documentation"},
    //  {role: "system", name:"systemDream", content:"Phase 8: Déploiement de la version système"},
    //  {role: "assistant", name:"✨_pi", content: "Préparation au déploiement..."},
    //  {role: "user", name:"umcTokens", content: "Prêt pour le déploiement"},
    //  {role: "system", name:"systemDream", content:"Phase 9: Annonce de l'affiliation et contribution"},
    //  {role: "assistant", name:"✨_pi", content: "Annonce en cours..."},
    //  {role: "user", name:"umcTokens", content: "Participation à l'annonce"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "MyPrompt" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();