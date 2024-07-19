import React from 'react';

const Table = () => (
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="py-2 px-4 border-b">Niveau d'importance</th>
        <th className="py-2 px-4 border-b">Critère</th>
        <th className="py-2 px-4 border-b">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-red-100">
        <td className="py-2 px-4 border-b" rowSpan="2">Critiques</td>
        <td className="py-2 px-4 border-b">1. Capacités de détection et d'analyse</td>
        <td className="py-2 px-4 border-b">Efficacité dans la détection des menaces, analyse comportementale, corrélation d'événements</td>
      </tr>
      <tr className="bg-red-100">
        <td className="py-2 px-4 border-b">2. Coût total de possession</td>
        <td className="py-2 px-4 border-b">Coûts d'acquisition, de maintenance et d'exploitation sur le long terme</td>
      </tr>
      <tr className="bg-orange-100">
        <td className="py-2 px-4 border-b" rowSpan="3">Très importants</td>
        <td className="py-2 px-4 border-b">3. Performance et évolutivité</td>
        <td className="py-2 px-4 border-b">Capacité à gérer de grands volumes de données et à s'adapter à la croissance</td>
      </tr>
      <tr className="bg-orange-100">
        <td className="py-2 px-4 border-b">4. Conformité et rapports</td>
        <td className="py-2 px-4 border-b">Capacités de génération de rapports pour la conformité réglementaire</td>
      </tr>
      <tr className="bg-orange-100">
        <td className="py-2 px-4 border-b">5. Flexibilité et personnalisation</td>
        <td className="py-2 px-4 border-b">Possibilité d'adapter le SIEM aux besoins spécifiques de l'entreprise</td>
      </tr>
      <tr className="bg-yellow-100">
        <td className="py-2 px-4 border-b" rowSpan="3">Importants</td>
        <td className="py-2 px-4 border-b">6. Facilité d'utilisation et interface</td>
        <td className="py-2 px-4 border-b">Ergonomie de l'interface utilisateur, simplicité d'utilisation pour les analystes</td>
      </tr>
      <tr className="bg-yellow-100">
        <td className="py-2 px-4 border-b">7. Sécurité intrinsèque</td>
        <td className="py-2 px-4 border-b">Sécurité du SIEM lui-même contre les attaques</td>
      </tr>
      <tr className="bg-yellow-100">
        <td className="py-2 px-4 border-b">8. Déploiement et maintenance</td>
        <td className="py-2 px-4 border-b">Facilité de déploiement initial et de maintenance continue</td>
      </tr>
      <tr className="bg-green-100">
        <td className="py-2 px-4 border-b" rowSpan="2">Secondaires</td>
        <td className="py-2 px-4 border-b">9. Intégration et compatibilité</td>
        <td className="py-2 px-4 border-b">Capacité à s'intégrer avec l'infrastructure existante et les outils tiers</td>
      </tr>
      <tr className="bg-green-100">
        <td className="py-2 px-4 border-b">10. Support et communauté</td>
        <td className="py-2 px-4 border-b">Qualité du support technique, ressources disponibles, communauté active</td>
      </tr>
    </tbody>
  </table>
);

export default Table;
