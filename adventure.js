document.addEventListener('DOMContentLoaded', function () {
    const teamList = document.querySelector("#teamList ul")

    teamList.addEventListener('click', function (e) {
        if (e.target.className == 'remove') {
            const li = e.target.parentElement;
            teamList.removeChild(li);
        }
    });
})


//base object for drop down
// var rpg = {
//     roles: ['Fighter', 'Magician', 'Rogue', 'Cleric', 'Ranger'],
//     classes: [
//         ['Paladin', 'Dark Knight', 'Dragoon'],
//         ['Warlock', 'White Mage', 'Necromancer'],
//         ['Thief', 'Ninja', 'Pirate'],
//         ['Priest', 'Shaman', 'Alchemist'],
//         ['Archer', 'Beast Master', 'Gunman']
//     ],
//     descriptions: [
//         ['A fighter blessed with Light. They balance magic and skill, able to strike enemies and support their team.', 'Once a noble warrior, but lost his morals after losing his village. An anti-hero by definition, who believes that the end justifies the means.', 'A warrior, dauntless and strong. Only those who exert no fear before the mighty Dragons are granted this title. The dragon they face will enchant them with their own affinity.'],
//         ['One with great talents in magik. Their potential with magik is only limited by their hunger for the art. The greatest of Warlocks have become leaders of the world.', 'Those with a kind, but strong heart. Their focus is supporting the team, enchanting them with buff and healing magik. Not to be mistaken as weak, as their offensive magik can rival Warlocks.', 'Those who have attempted the taboo of ressurection are cursed with this power. Able to summon armies of the undead, they are a force to reckon with. However, their life drains with every spell cast, until they are on the edge of death and forced to live in that state forever.'],
//         ['Agile, stealthy, and quick. Thieves have no morals and will do anything to obtain their target. Equipped with an array of knives and smokescreens, they are elusive and deadly.', 'Hidden in the shadows, only appearing moments before death. Ninja are trained assassins, utilizing their speed, and sense to execute their mark.', 'An adventurer, one who does not turn their back and ventures against the harshest of storms. They march forward with brutal tactics and would rather die than kneel before another.'],
//         ['Touched by the Light. Priests have great healing magik, and known to purify those of Dark affinity. Wanted on all parties for their mighty defensive and healing skills', 'Summoners of spirits and demons. Docile by nature, but relentless if provoked. The greatest Shamans have been known to summon gods and embody their strength.', 'Those seeking immortaility. Alchemist are restricted by the \'equivalent exchange\'rule. But the wisest of Alchemists are able to use the most of their surroundings to perform god-like feats.'],
//         ['Their aim is second to none. Archers practice a simple shot, hundreds of times a day, ensuring that they are swift and accurate. They are deadly close range as they are afar, adapting to close combat to eliminate any weaknesses.', 'A brute, with a persistent will. They hunt creatures that are much larger than them, to prove that they are apex predators. Once they have defeated the creatures, they tame them as their own to use for the next hunt.', 'Skilled in gunpowder and short swords. Gunmen are new to the world, adapting to the revolution of technology. Few in numbers, they are considered an elite class and proven to be powerful foes, unmatched in one-on-one duels.']
//     ],
//     // stats format: strength, defense, health, magic, speed; scale 1-10
//     statsFormat: ['STR', 'DEF', 'HP ', 'MAG', 'SPD'],
//     stats: [
//         [
//             [7, 8, 6, 3, 5],
//             [9, 6, 7, 7, 3],
//             [7, 6, 8, 8, 5],
//         ],
//         [
//             [4, 5, 9, 9, 5],
//             [2, 6, 8, 8, 5],
//             [4, 5, 6, 10, 4],
//         ],
//         [
//             [6, 3, 8, 2, 8],
//             [6, 4, 7, 5, 9],
//             [7, 5, 5, 2, 7],
//         ],
//         [
//             [2, 5, 7, 7, 4],
//             [3, 6, 6, 8, 4],
//             [1, 8, 9, 6, 5],
//         ],
//         [
//             [5, 6, 7, 4, 7],
//             [7, 7, 6, 6, 7],
//             [6, 4, 6, 5, 5],
//         ]
//     ],