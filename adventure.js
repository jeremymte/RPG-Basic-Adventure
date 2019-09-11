//base for drop down
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
//     wallpaper: [
//         ["https://geekandsundry.com/wp-content/uploads/2017/04/Paladin-Feature.png", "https://i.pinimg.com/originals/69/af/15/69af1515af1a5898a9dbac9961e1a191.jpg", "https://wallpapercave.com/wp/wp2092237.jpg"], 
//         ["http://getwallpapers.com/wallpaper/full/d/1/3/1032669-wow-warlock-wallpaper-1920x1080-windows.jpg", "https://cdn.wallpapersafari.com/2/13/7jsfq6.jpg", "https://wallpaperplay.com/walls/full/a/8/b/212142.jpg"],
//         ["https://i.pinimg.com/originals/28/b3/a7/28b3a7b52d4e441ff66a1d5fc7a7680a.jpg", "https://wallpaperplay.com/walls/full/d/6/f/265909.jpg", "https://www.wallpaperup.com/uploads/wallpapers/2014/10/25/493864/119eb0388fb655a53c53a731d4182528.jpg"],
//         ["https://wallpapercave.com/wp/wp2709631.jpg", "http://getwallpapers.com/wallpaper/full/5/d/2/559192.jpg", "https://images.alphacoders.com/107/thumb-1920-107203.jpg"],
//         ["http://cdn.desktopwallpapers4.me/wallpapers/games/1366x768/2/18845-archer-the-elder-scrolls-online-1366x768-game-wallpaper.jpg", "http://s1.1zoom.me/big0/17/347198-sepik.jpg", "https://c4.wallpaperflare.com/wallpaper/166/31/694/arch-crossfire-game-girl-wallpaper-3af099cba188382e1b67b824e196cd2a.jpg"]
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